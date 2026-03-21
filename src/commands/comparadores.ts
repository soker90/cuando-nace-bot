/**
 * Comandos de comparación de tamaño - disponibles para chats autorizados
 *
 * Comandos:
 *   /fruta  - A qué fruta equivale el tamaño del bebé esta semana
 *   /animal - A qué animal equivale el tamaño del bebé esta semana
 *   /comida - A qué alimento equivale el tamaño del bebé esta semana
 */

import type { Bot } from "grammy";
import type { Env } from "../types";
import { isChatAuthorized } from "../utils/auth";
import { calcularSemanaActual } from "../utils/dates";
import { getEmbarazo } from "../db/queries";
import { getInfoSemana } from "../data/semanas";

export function registerComparadoresCommands(bot: Bot, env: Env): void {
  // ─── /fruta ───────────────────────────────────────────────────────────────
  bot.command("fruta", async (ctx) => {
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
    const info = getInfoSemana(semana);

    if (!info) {
      await ctx.reply(`Estamos en la semana ${semana}, fuera del rango de datos disponibles.`);
      return;
    }

    const { emoji, nombre, medida } = info.fruta;
    await ctx.reply(
      `${emoji} *Semana ${semana}*\n\nTu bebé mide como una *${nombre}*\n📏 ${medida}`,
      { parse_mode: "Markdown" }
    );
  });

  // ─── /animal ──────────────────────────────────────────────────────────────
  bot.command("animal", async (ctx) => {
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
    const info = getInfoSemana(semana);

    if (!info) {
      await ctx.reply(`Estamos en la semana ${semana}, fuera del rango de datos disponibles.`);
      return;
    }

    const { emoji, nombre, medida } = info.animal;
    await ctx.reply(
      `${emoji} *Semana ${semana}*\n\nTu bebé mide como un *${nombre}*\n📏 ${medida}`,
      { parse_mode: "Markdown" }
    );
  });

  // ─── /comida ──────────────────────────────────────────────────────────────
  bot.command("comida", async (ctx) => {
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
    const info = getInfoSemana(semana);

    if (!info) {
      await ctx.reply(`Estamos en la semana ${semana}, fuera del rango de datos disponibles.`);
      return;
    }

    const { emoji, nombre, medida } = info.comida;
    await ctx.reply(
      `${emoji} *Semana ${semana}*\n\nTu bebé mide como *${nombre}*\n📏 ${medida}`,
      { parse_mode: "Markdown" }
    );
  });
}
