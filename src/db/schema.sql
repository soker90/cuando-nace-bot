-- Schema para cuandoNaceBot
-- Ejecutar con: wrangler d1 execute cuando-nace-db --file=src/db/schema.sql

-- Datos del embarazo (solo un registro)
CREATE TABLE IF NOT EXISTS embarazo (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  fecha_ultima_regla TEXT NOT NULL,
  fecha_parto_calculada TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- Fotos de ecografías (se guarda file_id de Telegram)
CREATE TABLE IF NOT EXISTS ecografias (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  file_id TEXT NOT NULL,
  fecha TEXT NOT NULL,
  descripcion TEXT,
  created_at TEXT NOT NULL
);

-- Citas médicas
CREATE TABLE IF NOT EXISTS citas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  fecha TEXT NOT NULL,
  hora TEXT,
  descripcion TEXT,
  created_at TEXT NOT NULL
);

-- Chats autorizados con su nivel de acceso
-- nivel: 'admin' | 'citas' | 'semana'
CREATE TABLE IF NOT EXISTS chats_autorizados (
  chat_id INTEGER PRIMARY KEY,
  nombre TEXT,
  nivel TEXT NOT NULL DEFAULT 'semana',
  created_at TEXT NOT NULL
);
