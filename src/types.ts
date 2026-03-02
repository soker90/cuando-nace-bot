/**
 * Tipos para el entorno de Cloudflare Workers
 */
export interface Env {
  DB: D1Database;
  TELEGRAM_TOKEN: string;
  ADMIN_USER_ID: string;
}
