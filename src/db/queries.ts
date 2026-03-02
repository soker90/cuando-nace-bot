/**
 * Queries de acceso a la base de datos D1
 */
import type { Env } from "../types";
import { calcularFechaParto, fechaHoyISO } from "../utils/dates";

// ─── Tipos ───────────────────────────────────────────────────────────────────

export interface Embarazo {
  id: number;
  fecha_ultima_regla: string;
  fecha_parto_calculada: string;
  updated_at: string;
}

export interface Ecografia {
  id: number;
  file_id: string;
  fecha: string;
  descripcion: string | null;
  tamano: string | null;
  created_at: string;
}

export interface Cita {
  id: number;
  titulo: string;
  fecha: string;
  hora: string | null;
  descripcion: string | null;
  created_at: string;
}

export interface ChatAutorizado {
  chat_id: number;
  nombre: string | null;
  nivel: string;
  created_at: string;
}

// ─── Embarazo ─────────────────────────────────────────────────────────────────

export async function getEmbarazo(env: Env): Promise<Embarazo | null> {
  return env.DB.prepare("SELECT * FROM embarazo WHERE id = 1")
    .first<Embarazo>();
}

export async function setFechaUltimaRegla(
  env: Env,
  fecha: string
): Promise<void> {
  const fechaParto = calcularFechaParto(fecha);
  const fechaPartoISO = fechaParto.toISOString().split("T")[0];
  const ahora = new Date().toISOString();

  await env.DB.prepare(`
    INSERT INTO embarazo (id, fecha_ultima_regla, fecha_parto_calculada, updated_at)
    VALUES (1, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      fecha_ultima_regla = excluded.fecha_ultima_regla,
      fecha_parto_calculada = excluded.fecha_parto_calculada,
      updated_at = excluded.updated_at
  `)
    .bind(fecha, fechaPartoISO, ahora)
    .run();
}

// ─── Ecografías ───────────────────────────────────────────────────────────────

export async function addEcografia(
  env: Env,
  fileId: string,
  fecha: string,
  descripcion?: string,
  tamano?: string
): Promise<void> {
  await env.DB.prepare(`
    INSERT INTO ecografias (file_id, fecha, descripcion, tamano, created_at)
    VALUES (?, ?, ?, ?, ?)
  `)
    .bind(fileId, fecha, descripcion ?? null, tamano ?? null, new Date().toISOString())
    .run();
}

export async function getEcografias(env: Env): Promise<Ecografia[]> {
  const result = await env.DB.prepare(
    "SELECT * FROM ecografias ORDER BY fecha DESC"
  ).all<Ecografia>();
  return result.results;
}

export async function deleteEcografia(env: Env, id: number): Promise<boolean> {
  const result = await env.DB.prepare("DELETE FROM ecografias WHERE id = ?")
    .bind(id)
    .run();
  return (result.meta.changes ?? 0) > 0;
}

// ─── Citas ────────────────────────────────────────────────────────────────────

export async function addCita(
  env: Env,
  titulo: string,
  fecha: string,
  hora?: string,
  descripcion?: string
): Promise<void> {
  await env.DB.prepare(`
    INSERT INTO citas (titulo, fecha, hora, descripcion, created_at)
    VALUES (?, ?, ?, ?, ?)
  `)
    .bind(titulo, fecha, hora ?? null, descripcion ?? null, new Date().toISOString())
    .run();
}

export async function getCitasFuturas(env: Env): Promise<Cita[]> {
  const hoy = fechaHoyISO();
  const result = await env.DB.prepare(
    "SELECT * FROM citas WHERE fecha >= ? ORDER BY fecha ASC, hora ASC"
  )
    .bind(hoy)
    .all<Cita>();
  return result.results;
}

export async function getAllCitas(env: Env): Promise<Cita[]> {
  const result = await env.DB.prepare(
    "SELECT * FROM citas ORDER BY fecha ASC, hora ASC"
  ).all<Cita>();
  return result.results;
}

export async function deleteCita(env: Env, id: number): Promise<boolean> {
  const result = await env.DB.prepare("DELETE FROM citas WHERE id = ?")
    .bind(id)
    .run();
  return (result.meta.changes ?? 0) > 0;
}

// ─── Chats autorizados ────────────────────────────────────────────────────────

export async function addChatAutorizado(
  env: Env,
  chatId: number,
  nivel: string,
  nombre?: string
): Promise<void> {
  await env.DB.prepare(`
    INSERT INTO chats_autorizados (chat_id, nombre, nivel, created_at)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(chat_id) DO UPDATE SET
      nivel = excluded.nivel,
      nombre = excluded.nombre
  `)
    .bind(chatId, nombre ?? null, nivel, new Date().toISOString())
    .run();
}

export async function removeChatAutorizado(
  env: Env,
  chatId: number
): Promise<boolean> {
  const result = await env.DB.prepare(
    "DELETE FROM chats_autorizados WHERE chat_id = ?"
  )
    .bind(chatId)
    .run();
  return (result.meta.changes ?? 0) > 0;
}

export async function getChatsAutorizados(env: Env): Promise<ChatAutorizado[]> {
  const result = await env.DB.prepare(
    "SELECT * FROM chats_autorizados ORDER BY nivel DESC, chat_id ASC"
  ).all<ChatAutorizado>();
  return result.results;
}
