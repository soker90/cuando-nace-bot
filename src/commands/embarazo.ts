/**
 * Comandos de embarazo - disponibles para chats autorizados con nivel 'semana'
 *
 * Comandos:
 *   /semana  - Semana actual + info + tiempo restante
 *   /parto   - Fecha estimada de parto y cuenta atrás
 *   /inicio  - Fecha de la última regla registrada
 */

import type { Bot } from "grammy";
import type { Env } from "../types";
import { isChatAuthorized } from "../utils/auth";
import {
  calcularSemanaActual,
  calcularDiasRestantes,
  formatearFecha,
  formatearTiempoRestante,
} from "../utils/dates";
import { getEmbarazo } from "../db/queries";
import { getInfoSemana } from "../data/semanas";

export function registerEmbarazoCommands(bot: Bot, env: Env): void {
  // ─── /semana ──────────────────────────────────────────────────────────────
  bot.command("semana", async (ctx) => {
    if (!(await isChatAuthorized(ctx, env, "usuario"))) {
      await ctx.reply("No tienes permiso para usar este comando en este chat.");
      return;
    }

    const embarazo = await getEmbarazo(env);
    if (!embarazo) {
      await ctx.reply(
        "Aún no se ha registrado la fecha de la última regla. El administrador debe usar /setregla primero."
      );
      return;
    }

    const semana = calcularSemanaActual(embarazo.fecha_ultima_regla);
    const diasRestantes = calcularDiasRestantes(embarazo.fecha_parto_calculada);
    const tiempoRestante = formatearTiempoRestante(diasRestantes);
    const info = getInfoSemana(semana);

    let mensaje = `*Ya estamos en la semana ${semana}*`;

    if (info) {
      mensaje += ` — ${info.titulo}\n\n`;
      mensaje += `*El bebé:* ${info.desarrollo}\n\n`;
      mensaje += `*Tamaño:* ${info.tamano}\n\n`;
      mensaje += `*Consejo:* ${info.consejo}\n\n`;
    } else if (semana > 42) {
      mensaje += `\n\n¡El embarazo ha superado las 42 semanas! Sigue las indicaciones de tu médico.\n\n`;
    } else {
      mensaje += "\n\n";
    }

    if (diasRestantes > 0) {
      mensaje += `Para la fecha de parto queda: *${tiempoRestante}*`;
    } else if (diasRestantes === 0) {
      mensaje += `La fecha estimada de parto es *hoy*. ¡Mucho ánimo!`;
    } else {
      mensaje += `La fecha estimada de parto fue ${tiempoRestante}. ¡El bebé llegará pronto!`;
    }

    await ctx.reply(mensaje, { parse_mode: "Markdown" });
  });

  // ─── /parto ───────────────────────────────────────────────────────────────
  bot.command("parto", async (ctx) => {
    if (!(await isChatAuthorized(ctx, env, "usuario"))) {
      await ctx.reply("No tienes permiso para usar este comando en este chat.");
      return;
    }

    const embarazo = await getEmbarazo(env);
    if (!embarazo) {
      await ctx.reply(
        "Aún no se ha registrado la fecha de la última regla. El administrador debe usar /setregla primero."
      );
      return;
    }

    const diasRestantes = calcularDiasRestantes(embarazo.fecha_parto_calculada);
    const semana = calcularSemanaActual(embarazo.fecha_ultima_regla);
    const tiempoRestante = formatearTiempoRestante(diasRestantes);
    const fechaFormateada = formatearFecha(embarazo.fecha_parto_calculada);

    let estado: string;
    if (diasRestantes > 0) {
      const meses = (diasRestantes / 30.44).toFixed(1).replace(".", ",");
      estado =
        `Faltan *${tiempoRestante}* (${diasRestantes} días, aproximadamente ${meses} meses).\n` +
        `Estamos en la semana *${semana}* de embarazo.`;
    } else if (diasRestantes === 0) {
      estado = `La fecha estimada de parto es *hoy*. Estamos en la semana *${semana}*.`;
    } else {
      estado =
        `La fecha estimada de parto ya ha pasado (${tiempoRestante}).\n` +
        `Estamos en la semana *${semana}*.`;
    }

    await ctx.reply(
      `*Fecha estimada de parto*\n\n${fechaFormateada}\n\n${estado}`,
      { parse_mode: "Markdown" }
    );
  });

  // ─── /inicio ──────────────────────────────────────────────────────────────
  bot.command("inicio", async (ctx) => {
    if (!(await isChatAuthorized(ctx, env, "usuario"))) {
      await ctx.reply("No tienes permiso para usar este comando en este chat.");
      return;
    }

    const embarazo = await getEmbarazo(env);
    if (!embarazo) {
      await ctx.reply(
        "Aún no se ha registrado la fecha de la última regla."
      );
      return;
    }

    const semana = calcularSemanaActual(embarazo.fecha_ultima_regla);
    const fechaReglaFormateada = formatearFecha(embarazo.fecha_ultima_regla);
    const fechaPartoFormateada = formatearFecha(embarazo.fecha_parto_calculada);

    await ctx.reply(
      `*Datos del embarazo*\n\n` +
        `Última regla: ${fechaReglaFormateada}\n` +
        `Fecha de parto estimada: *${fechaPartoFormateada}*\n` +
        `Semana actual: *${semana}*`,
      { parse_mode: "Markdown" }
    );
  });
}
