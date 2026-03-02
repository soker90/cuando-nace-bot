# cuandoNaceBot

Bot de Telegram para seguimiento de embarazo, desplegado en Cloudflare Workers con base de datos D1.

## Stack

- **Runtime:** Cloudflare Workers (TypeScript)
- **Base de datos:** Cloudflare D1 (SQLite serverless)
- **Bot framework:** [grammY](https://grammy.dev)
- **Modo:** Webhook

---

## Despliegue paso a paso

### 1. Requisitos previos

- Cuenta en [Cloudflare](https://cloudflare.com) con Workers habilitado
- Node.js 18+
- Token del bot de Telegram (obtenido de @BotFather)
- Tu Telegram User ID (ya configurado: `5560514`)

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear la base de datos D1

```bash
npx wrangler d1 create cuando-nace-db
```

Copia el `database_id` que aparece en la salida y ponlo en `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "cuando-nace-db"
database_id = "PEGA_AQUI_EL_ID"
```

### 4. Inicializar el schema de la base de datos

```bash
# En producción (D1 remoto)
npm run db:init

# En local (para desarrollo)
npm run db:init:local
```

### 5. Configurar el token de Telegram

```bash
npx wrangler secret put TELEGRAM_TOKEN
```

Pega el token cuando lo solicite.

### 6. Desplegar el Worker

```bash
npm run deploy
```

Anota la URL del Worker que aparece al final:
`https://cuando-nace-bot.<tu-subdominio>.workers.dev`

### 7. Registrar el webhook en Telegram

El webhook se registra apuntando al token como path (esto añade seguridad):

```bash
curl "https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://cuando-nace-bot.<tu-subdominio>.workers.dev/<TOKEN>"
```

Reemplaza `<TOKEN>` con tu token de Telegram y `<tu-subdominio>` con tu subdominio de Cloudflare.

### 8. Verificar que funciona

```bash
curl "https://api.telegram.org/bot<TOKEN>/getWebhookInfo"
```

Deberías ver `"url"` apuntando a tu Worker y `"pending_update_count": 0`.

---

## Comandos disponibles

### Para todos los chats autorizados (nivel `semana`)

| Comando | Descripción |
|---|---|
| `/semana` | Semana actual, novedades del desarrollo y tiempo restante para el parto |
| `/parto` | Fecha estimada de parto y cuenta atrás detallada |
| `/inicio` | Datos del embarazo (última regla, semana actual, fecha de parto) |

### Para chats con nivel `citas` o superior

| Comando | Descripción |
|---|---|
| `/citas` | Lista las próximas citas médicas |
| `/ecografias` | Muestra todas las ecografías guardadas como fotos |

### Solo administrador (User ID `5560514`)

| Comando | Descripción |
|---|---|
| `/setregla YYYY-MM-DD` | Establece la fecha de la última regla y recalcula la fecha de parto |
| `/addcita YYYY-MM-DD [HH:MM] Título [| Descripción]` | Añade una cita médica |
| `/delcita <id>` | Elimina una cita por ID |
| `/addchat <chat_id> <nivel> [nombre]` | Autoriza un chat (niveles: `semana`, `citas`, `admin`) |
| `/delchat <chat_id>` | Desautoriza un chat |
| `/listchats` | Lista todos los chats autorizados |
| `/listecografias` | Lista ecografías con sus IDs |
| `/deleco <id>` | Elimina una ecografía |
| Foto + caption `/addeco [YYYY-MM-DD] [descripción]` | Guarda una ecografía |

---

## Añadir ecografías

Para guardar una ecografía, el administrador debe:
1. Enviar la foto en el chat con el bot
2. Usar como caption: `/addeco 2025-03-15 Semana 12`

Si no se especifica fecha, se usa la fecha actual.

---

## Niveles de acceso

| Nivel | Comandos disponibles |
|---|---|
| `semana` | `/semana`, `/parto`, `/inicio` |
| `citas` | Todo lo anterior + `/citas`, `/ecografias` |
| `admin` | Todo (reservado para uso personal, no recomendado para grupos) |

El administrador (User ID configurado en `wrangler.toml`) siempre tiene acceso completo desde cualquier chat.

---

## Desarrollo local

```bash
# Levantar el Worker localmente
npm run dev

# En otra terminal, usar ngrok o similar para exponer el puerto local
# y registrar el webhook apuntando a la URL de ngrok
```

---

## Textos de las semanas

Los textos informativos de cada semana están en `src/data/semanas.ts`. Puedes editarlos libremente para personalizar los mensajes del comando `/semana`.

---

## Estructura del proyecto

```
src/
├── index.ts              # Entry point del Worker
├── bot.ts                # Configuración del bot y registro de comandos
├── types.ts              # Tipos TypeScript (Env)
├── commands/
│   ├── admin.ts          # Comandos de administración
│   ├── embarazo.ts       # /semana, /parto, /inicio
│   └── citas.ts          # /citas, /ecografias
├── db/
│   ├── schema.sql        # Schema de la base de datos D1
│   └── queries.ts        # Funciones de acceso a D1
├── data/
│   └── semanas.ts        # Textos informativos semanas 1-42
└── utils/
    ├── auth.ts           # Verificación de permisos
    └── dates.ts          # Cálculo de fechas (Regla de Nägele)
```
