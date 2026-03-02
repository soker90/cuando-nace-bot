/**
 * Comandos de citas y ecografías - disponibles para chats con nivel 'citas'
 *
 * Comandos:
 *   /citas      - Lista las próximas citas médicas
 *   /ecografias - Lista las ecografías guardadas (con opción de ver cada foto)
 */

import type { Bot } from "grammy";
import type { Env } from "../types";
import { isChatAuthorized } from "../utils/auth";
import { formatearFechaCorta } from "../utils/dates";
import { getCitasFuturas, getEcografias } from "../db/queries";

export function registerCitasCommands(bot: Bot, env: Env): void {
  // ─── /citas ───────────────────────────────────────────────────────────────
  bot.command("citas", async (ctx) => {
    if (!(await isChatAuthorized(ctx, env, "admin"))) {
      await ctx.reply("No tienes permiso para usar este comando en este chat.");
      return;
    }

    const citas = await getCitasFuturas(env);

    if (citas.length === 0) {
      await ctx.reply("No hay citas próximas registradas.");
      return;
    }

    const lineas = citas.map((c) => {
      const horaStr = c.hora ? ` a las ${c.hora}` : "";
      const descStr = c.descripcion ? `\n   _${c.descripcion}_` : "";
      return `• *${c.titulo}*\n   ${formatearFechaCorta(c.fecha)}${horaStr}${descStr}`;
    });

    await ctx.reply(`*Próximas citas:*\n\n${lineas.join("\n\n")}`, {
      parse_mode: "Markdown",
    });
  });

  // ─── /ecografias ──────────────────────────────────────────────────────────
  bot.command("ecografias", async (ctx) => {
    if (!(await isChatAuthorized(ctx, env, "usuario"))) {
      await ctx.reply("No tienes permiso para usar este comando en este chat.");
      return;
    }

    const ecos = await getEcografias(env);

    if (ecos.length === 0) {
      await ctx.reply("No hay ecografías guardadas todavía.");
      return;
    }

    // Enviar cada ecografía como foto con su descripción
    for (const eco of ecos) {
      const caption =
        `Ecografía del ${formatearFechaCorta(eco.fecha)}` +
        (eco.tamano ? `\n*Tamaño:* ${eco.tamano}` : "") +
        (eco.descripcion ? `\n${eco.descripcion}` : "");

      try {
        await ctx.replyWithPhoto(eco.file_id, { caption, parse_mode: "Markdown" });
      } catch {
        // Si la foto ya no está disponible en Telegram
        await ctx.reply(
          `Ecografía del ${formatearFechaCorta(eco.fecha)}` +
            (eco.tamano ? ` [${eco.tamano}]` : "") +
            (eco.descripcion ? ` — ${eco.descripcion}` : "") +
            "\n_(Imagen no disponible)_",
          { parse_mode: "Markdown" }
        );
      }
    }
  });
}
