/**
 * Entry point del Cloudflare Worker
 * Recibe las actualizaciones de Telegram vía webhook y las procesa
 */
import { webhookCallback } from "grammy";
import type { Env } from "./types";
import { createBot } from "./bot";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Solo aceptar peticiones POST al path /webhook
    if (request.method !== "POST") {
      return new Response("cuandoNaceBot is running.", { status: 200 });
    }

    // Verificar que la petición viene de Telegram (token en la URL)
    const url = new URL(request.url);
    const pathToken = url.pathname.slice(1); // quitar el /
    
    if (pathToken !== env.TELEGRAM_TOKEN) {
      return new Response("Unauthorized", { status: 401 });
    }

    try {
      const bot = createBot(env);
      const handleUpdate = webhookCallback(bot, "cloudflare-mod");
      return await handleUpdate(request);
    } catch (err) {
      console.error("Error procesando update:", err);
      return new Response("Error interno", { status: 500 });
    }
  },
};
