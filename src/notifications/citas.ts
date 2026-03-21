/**
 * Notificaciones automáticas de citas próximas
 *
 * Se ejecuta mediante un cron trigger de Cloudflare Workers.
 * Envía un mensaje a todos los chats con nivel 'admin' sobre
 * las citas médicas que ocurren en las próximas 24 horas.
 */

import { Bot } from "grammy";
import type { Env } from "../types";
import { getCitasProximas24h, getChatsAdmin } from "../db/queries";
import { formatearFechaCorta } from "../utils/dates";

export async function notificarCitasProximas(env: Env): Promise<void> {
  const [citas, chatsAdmin] = await Promise.all([
    getCitasProximas24h(env),
    getChatsAdmin(env),
  ]);

  // Sin citas próximas o sin destinatarios: nada que hacer
  if (citas.length === 0 || chatsAdmin.length === 0) return;

  // Construir el mensaje
  const lineasCitas = citas.map((cita) => {
    const fecha = formatearFechaCorta(cita.fecha);
    const hora = cita.hora ? ` a las ${cita.hora}` : "";
    const desc = cita.descripcion ? `\n   _${cita.descripcion}_` : "";
    return `• *${cita.titulo}* — ${fecha}${hora}${desc}`;
  });

  const plural = citas.length === 1 ? "una cita" : `${citas.length} citas`;
  const mensaje =
    `🗓 *Recordatorio: ${plural} en las próximas 24 horas*\n\n` +
    lineasCitas.join("\n");

  const bot = new Bot(env.TELEGRAM_TOKEN);

  await Promise.allSettled(
    chatsAdmin.map((chat) =>
      bot.api.sendMessage(chat.chat_id, mensaje, { parse_mode: "Markdown" })
        .catch((err) => {
          console.error(`[NOTIF] Error enviando a chat ${chat.chat_id}:`, err);
        })
    )
  );
}
