/**
 * Configuración y registro de todos los comandos del bot
 */
import { Bot } from "grammy";
import type { Env } from "./types";
import { registerAdminCommands } from "./commands/admin";
import { registerEmbarazoCommands } from "./commands/embarazo";
import { registerCitasCommands } from "./commands/citas";
import { registerComparadoresCommands } from "./commands/comparadores";

export function createBot(env: Env): Bot {
  const bot = new Bot(env.TELEGRAM_TOKEN);

  // ─── /start y /ayuda ──────────────────────────────────────────────────────
  bot.command(["start", "ayuda", "help"], async (ctx) => {
    const esAdmin = String(ctx.from?.id) === env.ADMIN_USER_ID;

    let msg = `*cuandoNaceBot*\n\nSeguimiento del embarazo.\n\n`;

    msg += `*Comandos disponibles:*\n`;
    msg += `/semana — Semana actual, novedades y tiempo restante\n`;
    msg += `/parto — Fecha estimada de parto\n`;
    msg += `/inicio — Datos generales del embarazo\n`;
    msg += `/ecografias — Ver ecografías guardadas\n`;
    msg += `/fruta — Tu bebé comparado con una fruta\n`;
    msg += `/animal — Tu bebé comparado con un animal\n`;
    msg += `/comida — Tu bebé comparado con un alimento\n`;

    if (esAdmin) {
      msg += `\n*Comandos adicionales (admin):*\n`;
      msg += `/citas — Próximas citas médicas\n`;
      msg += `/setregla YYYY-MM-DD — Establecer fecha de última regla\n`;
      msg += `/addcita YYYY-MM-DD [HH:MM] Título [| Desc] — Añadir cita\n`;
      msg += `/delcita <id> — Eliminar cita\n`;
      msg += `/addchat <id> <nivel> [nombre] — Autorizar chat\n`;
      msg += `/delchat <id> — Desautorizar chat\n`;
      msg += `/listchats — Ver chats autorizados\n`;
      msg += `/listecografias — Ver ecografías con IDs\n`;
      msg += `/deleco <id> — Eliminar ecografía\n`;
      msg += `\nPara añadir una ecografía: envía la foto con el caption:\n`;
      msg += "`/addeco [YYYY-MM-DD] [descripción]`";
    }

    await ctx.reply(msg, { parse_mode: "Markdown" });
  });

  // ─── /chatid (comando temporal para obtener el ID del grupo) ────────────────
  bot.command("chatid", async (ctx) => {
    const chatId = ctx.chat?.id;
    if (!chatId) {
      await ctx.reply("No se pudo obtener el ID del chat.");
      return;
    }
    await ctx.reply(`*Chat ID:* \`${chatId}\``, { parse_mode: "Markdown" });
  });

  // Registrar grupos de comandos
  try {
    registerAdminCommands(bot, env);
  } catch (err) {
    console.error("[BOT] Error registrando admin commands:", err);
  }

  try {
    registerEmbarazoCommands(bot, env);
  } catch (err) {
    console.error("[BOT] Error registrando embarazo commands:", err);
  }

  try {
    registerCitasCommands(bot, env);
  } catch (err) {
    console.error("[BOT] Error registrando citas commands:", err);
  }

  try {
    registerComparadoresCommands(bot, env);
  } catch (err) {
    console.error("[BOT] Error registrando comparadores commands:", err);
  }

  // ─── Manejador de errores ─────────────────────────────────────────────────
  bot.catch((err) => {
    console.error("Error en el bot:", err.message, err.error);
  });

  return bot;
}
