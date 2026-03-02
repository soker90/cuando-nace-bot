/**
 * Comandos de administración - solo disponibles para el admin (user ID 5560514)
 *
 * Comandos:
 *   /setregla YYYY-MM-DD       - Establece la fecha de la última regla
 *   /addcita YYYY-MM-DD [HH:MM] Título [| Descripción]  - Añade una cita médica
 *   /delcita <id>              - Elimina una cita
 *   /addchat <chat_id> <nivel> [nombre]  - Autoriza un chat
 *   /delchat <chat_id>         - Desautoriza un chat
 *   /listchats                 - Lista chats autorizados
 *   /deleco <id>               - Elimina una ecografía
 *   /addeco [YYYY-MM-DD] [tamaño] [descripción] - Al enviar una foto con este caption, la guarda
 */

import type { Bot } from "grammy";
import type { Env } from "../types";
import { isAdmin } from "../utils/auth";
import {
  esFechaValida,
  esHoraValida,
  formatearFecha,
  formatearFechaCorta,
  calcularFechaParto,
} from "../utils/dates";
import {
  setFechaUltimaRegla,
  addCita,
  deleteCita,
  addChatAutorizado,
  removeChatAutorizado,
  getChatsAutorizados,
  addEcografia,
  deleteEcografia,
  getEcografias,
} from "../db/queries";

export function registerAdminCommands(bot: Bot, env: Env): void {
  // ─── /setregla ────────────────────────────────────────────────────────────
  bot.command("setregla", async (ctx) => {
    if (!isAdmin(ctx, env)) {
      await ctx.reply("No tienes permiso para usar este comando.");
      return;
    }

    const args = ctx.match.trim();
    
    if (!args || !esFechaValida(args)) {
      await ctx.reply(
        "Formato incorrecto. Uso:\n`/setregla YYYY-MM-DD`\n\nEjemplo: `/setregla 2024-11-15`",
        { parse_mode: "Markdown" }
      );
      return;
    }

    const fechaParto = calcularFechaParto(args);
    const fechaPartoISO = fechaParto.toISOString().split("T")[0];

    await setFechaUltimaRegla(env, args);

    await ctx.reply(
      `Fecha de última regla actualizada.\n\n` +
        `Ultima regla: ${formatearFecha(args)}\n` +
        `Fecha de parto estimada: *${formatearFecha(fechaPartoISO)}*`,
      { parse_mode: "Markdown" }
    );
  });

  // ─── /addcita ─────────────────────────────────────────────────────────────
  bot.command("addcita", async (ctx) => {
    if (!isAdmin(ctx, env)) {
      await ctx.reply("No tienes permiso para usar este comando.");
      return;
    }

    const args = ctx.match.trim();
    if (!args) {
      await ctx.reply(
        "Formato:\n`/addcita YYYY-MM-DD [HH:MM] Título [| Descripción]`\n\n" +
          "Ejemplos:\n" +
          "`/addcita 2025-03-15 10:30 Consulta ginecología`\n" +
          "`/addcita 2025-03-15 Analítica | En ayunas`",
        { parse_mode: "Markdown" }
      );
      return;
    }

    const partes = args.split(" ");
    const fecha = partes[0];

    if (!esFechaValida(fecha)) {
      await ctx.reply("La fecha no es válida. Usa el formato YYYY-MM-DD.");
      return;
    }

    let hora: string | undefined;
    let restoIndex = 1;

    if (partes[1] && esHoraValida(partes[1])) {
      hora = partes[1];
      restoIndex = 2;
    }

    const resto = partes.slice(restoIndex).join(" ");
    const [titulo, descripcion] = resto.split("|").map((s) => s.trim());

    if (!titulo) {
      await ctx.reply("Debes indicar un título para la cita.");
      return;
    }

    await addCita(env, titulo, fecha, hora, descripcion);

    const horaStr = hora ? ` a las ${hora}` : "";
    await ctx.reply(
      `Cita añadida:\n\n*${titulo}*\n${formatearFechaCorta(fecha)}${horaStr}` +
        (descripcion ? `\n${descripcion}` : ""),
      { parse_mode: "Markdown" }
    );
  });

  // ─── /delcita ─────────────────────────────────────────────────────────────
  bot.command("delcita", async (ctx) => {
    if (!isAdmin(ctx, env)) {
      await ctx.reply("No tienes permiso para usar este comando.");
      return;
    }

    const id = parseInt(ctx.match.trim(), 10);
    if (isNaN(id)) {
      await ctx.reply("Uso: `/delcita <id>`\n\nEjemplo: `/delcita 3`", {
        parse_mode: "Markdown",
      });
      return;
    }

    const eliminada = await deleteCita(env, id);
    if (eliminada) {
      await ctx.reply(`Cita #${id} eliminada.`);
    } else {
      await ctx.reply(`No se encontró la cita con ID ${id}.`);
    }
  });

  // ─── /addchat ─────────────────────────────────────────────────────────────
  bot.command("addchat", async (ctx) => {
    if (!isAdmin(ctx, env)) {
      await ctx.reply("No tienes permiso para usar este comando.");
      return;
    }

    const args = ctx.match.trim().split(" ");
    const chatId = parseInt(args[0], 10);
    const nivel = args[1];
    const nombre = args.slice(2).join(" ") || undefined;

    if (isNaN(chatId) || !["usuario", "admin"].includes(nivel)) {
      await ctx.reply(
        "Formato:\n`/addchat <chat_id> <nivel> [nombre]`\n\n" +
          "Niveles disponibles: `usuario`, `admin`\n\n" +
          "• `usuario` — Acceso a /semana, /parto, /inicio, /ecografias\n" +
          "• `admin` — Acceso a todos los comandos\n\n" +
          "Ejemplo: `/addchat -1001234567890 usuario Familia`",
        { parse_mode: "Markdown" }
      );
      return;
    }

    await addChatAutorizado(env, chatId, nivel, nombre);
    await ctx.reply(
      `Chat autorizado:\nID: \`${chatId}\`\nNivel: \`${nivel}\`` +
        (nombre ? `\nNombre: ${nombre}` : ""),
      { parse_mode: "Markdown" }
    );
  });

  // ─── /delchat ─────────────────────────────────────────────────────────────
  bot.command("delchat", async (ctx) => {
    if (!isAdmin(ctx, env)) {
      await ctx.reply("No tienes permiso para usar este comando.");
      return;
    }

    const chatId = parseInt(ctx.match.trim(), 10);
    if (isNaN(chatId)) {
      await ctx.reply("Uso: `/delchat <chat_id>`", { parse_mode: "Markdown" });
      return;
    }

    const eliminado = await removeChatAutorizado(env, chatId);
    if (eliminado) {
      await ctx.reply(`Chat \`${chatId}\` desautorizado.`, {
        parse_mode: "Markdown",
      });
    } else {
      await ctx.reply(`No se encontró ningún chat con ID ${chatId}.`);
    }
  });

  // ─── /listchats ───────────────────────────────────────────────────────────
  bot.command("listchats", async (ctx) => {
    if (!isAdmin(ctx, env)) {
      await ctx.reply("No tienes permiso para usar este comando.");
      return;
    }

    const chats = await getChatsAutorizados(env);
    if (chats.length === 0) {
      await ctx.reply("No hay chats autorizados todavía.");
      return;
    }

    const lineas = chats.map((c) => {
      const nombre = c.nombre ? ` — ${c.nombre}` : "";
      return `• \`${c.chat_id}\` [${c.nivel}]${nombre}`;
    });

    await ctx.reply(`*Chats autorizados:*\n\n${lineas.join("\n")}`, {
      parse_mode: "Markdown",
    });
  });

  // ─── /deleco ──────────────────────────────────────────────────────────────
  bot.command("deleco", async (ctx) => {
    if (!isAdmin(ctx, env)) {
      await ctx.reply("No tienes permiso para usar este comando.");
      return;
    }

    const id = parseInt(ctx.match.trim(), 10);
    if (isNaN(id)) {
      await ctx.reply("Uso: `/deleco <id>`\n\nEjemplo: `/deleco 2`", {
        parse_mode: "Markdown",
      });
      return;
    }

    const eliminada = await deleteEcografia(env, id);
    if (eliminada) {
      await ctx.reply(`Ecografía #${id} eliminada.`);
    } else {
      await ctx.reply(`No se encontró la ecografía con ID ${id}.`);
    }
  });

  // ─── Fotos con caption /addeco ────────────────────────────────────────────
  // Guarda la foto cuando el admin la envía con caption que empieza por /addeco
  // Formato: /addeco [YYYY-MM-DD] [tamaño] [descripción]
  bot.on("message:photo", async (ctx) => {
    if (!isAdmin(ctx, env)) return;

    const caption = ctx.message.caption ?? "";
    if (!caption.toLowerCase().startsWith("/addeco")) return;

    // Extraer fecha, tamaño y descripción del caption
    // Formato: /addeco [YYYY-MM-DD] [tamaño] [descripción...]
    const resto = caption.replace(/^\/addeco\s*/i, "").trim();
    const partes = resto.split(" ");

    let fecha: string;
    let tamano: string | undefined;
    let descripcion: string | undefined;
    let idx = 0;

    // Verificar si el primer parámetro es una fecha
    if (partes[idx] && esFechaValida(partes[idx])) {
      fecha = partes[idx];
      idx++;
    } else {
      // Sin fecha, usar hoy
      fecha = new Date().toISOString().split("T")[0];
    }

    // El siguiente parámetro podría ser tamaño (suele contener letras/números como "12cm", "3kg", etc)
    if (partes[idx] && /^[\d,\.]+\s*[a-zA-Z%]+$/.test(partes[idx])) {
      tamano = partes[idx];
      idx++;
    }

    // El resto es descripción
    if (idx < partes.length) {
      descripcion = partes.slice(idx).join(" ") || undefined;
    }

    // Obtener el file_id de la foto de mayor resolución
    const fotos = ctx.message.photo;
    const mejorFoto = fotos[fotos.length - 1];
    const fileId = mejorFoto.file_id;

    await addEcografia(env, fileId, fecha, descripcion, tamano);

    await ctx.reply(
      `Ecografía guardada.\nFecha: ${formatearFechaCorta(fecha)}` +
        (tamano ? `\nTamaño: ${tamano}` : "") +
        (descripcion ? `\nDescripción: ${descripcion}` : ""),
      { reply_parameters: { message_id: ctx.message.message_id } }
    );
  });

  // ─── /listecografias (admin) ──────────────────────────────────────────────
  bot.command("listecografias", async (ctx) => {
    if (!isAdmin(ctx, env)) {
      await ctx.reply("No tienes permiso para usar este comando.");
      return;
    }

    const ecos = await getEcografias(env);
    if (ecos.length === 0) {
      await ctx.reply("No hay ecografías guardadas todavía.");
      return;
    }

    const lineas = ecos.map(
      (e) =>
        `• #${e.id} — ${formatearFechaCorta(e.fecha)}${e.tamano ? ` [${e.tamano}]` : ""}${e.descripcion ? ` — ${e.descripcion}` : ""}`
    );

    await ctx.reply(`*Ecografías guardadas:*\n\n${lineas.join("\n")}`, {
      parse_mode: "Markdown",
    });
  });
}
