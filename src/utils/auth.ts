/**
 * Utilidades de autorización para cuandoNaceBot
 */
import type { Context } from "grammy";
import type { Env } from "../types";

/**
 * Verifica si el usuario del contexto es el administrador
 */
export function isAdmin(ctx: Context, env: Env): boolean {
  const userId = ctx.from?.id;
  if (!userId) {
    return false;
  }
  
  const userIdStr = String(userId);
  const adminIdStr = env.ADMIN_USER_ID;
  
  return userIdStr === adminIdStr;
}

/**
 * Verifica si el chat actual está autorizado con un nivel dado
 */
export async function isChatAuthorized(
  ctx: Context,
  env: Env,
  nivel: "usuario" | "admin"
): Promise<boolean> {
  // El admin siempre tiene acceso
  if (isAdmin(ctx, env)) return true;

  const chatId = ctx.chat?.id;
  if (!chatId) return false;

  const result = await env.DB.prepare(
    "SELECT nivel FROM chats_autorizados WHERE chat_id = ?"
  )
    .bind(chatId)
    .first<{ nivel: string }>();

  if (!result) return false;

  // Jerarquía de niveles: admin > usuario
  const niveles = ["usuario", "admin"];
  const nivelChat = niveles.indexOf(result.nivel);
  const nivelRequerido = niveles.indexOf(nivel);

  return nivelChat >= nivelRequerido;
}
