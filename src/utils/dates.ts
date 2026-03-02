/**
 * Utilidades de cálculo de fechas para el embarazo
 * Basado en la Regla de Nägele: fecha_parto = ultima_regla + 280 días
 */

/**
 * Calcula la fecha estimada de parto usando la Regla de Nägele
 */
export function calcularFechaParto(fechaUltimaRegla: string): Date {
  const fecha = new Date(fechaUltimaRegla);
  fecha.setDate(fecha.getDate() + 280);
  return fecha;
}

/**
 * Calcula la semana actual de embarazo (1-based)
 * La semana 1 empieza el día de la última regla
 */
export function calcularSemanaActual(fechaUltimaRegla: string): number {
  const inicio = new Date(fechaUltimaRegla);
  const hoy = new Date();
  const diffMs = hoy.getTime() - inicio.getTime();
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return Math.floor(diffDias / 7);
}

/**
 * Calcula los días restantes para la fecha de parto
 */
export function calcularDiasRestantes(fechaParto: string): number {
  const parto = new Date(fechaParto);
  const hoy = new Date();
  // Normalizar a medianoche
  parto.setHours(0, 0, 0, 0);
  hoy.setHours(0, 0, 0, 0);
  const diffMs = parto.getTime() - hoy.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

/**
 * Formatea una fecha ISO a formato legible en español
 */
export function formatearFecha(fechaISO: string): string {
  const fecha = new Date(fechaISO);
  return fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Europe/Madrid",
  });
}

/**
 * Formatea una fecha ISO a formato corto (dd/mm/yyyy)
 */
export function formatearFechaCorta(fechaISO: string): string {
  const fecha = new Date(fechaISO + "T00:00:00");
  return fecha.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

/**
 * Convierte días en una cadena legible (semanas y días)
 */
export function formatearTiempoRestante(dias: number): string {
  if (dias < 0) {
    const diasPasados = Math.abs(dias);
    if (diasPasados === 1) return "hace 1 día";
    return `hace ${diasPasados} días`;
  }
  if (dias === 0) return "¡es hoy!";
  if (dias === 1) return "mañana";

  const semanas = Math.floor(dias / 7);
  const diasRestantes = dias % 7;

  if (semanas === 0) return `${dias} días`;
  if (diasRestantes === 0) {
    return semanas === 1 ? "1 semana" : `${semanas} semanas`;
  }
  const semanasStr = semanas === 1 ? "1 semana" : `${semanas} semanas`;
  const diasStr = diasRestantes === 1 ? "1 día" : `${diasRestantes} días`;
  return `${semanasStr} y ${diasStr}`;
}

/**
 * Obtiene la fecha actual en formato ISO (YYYY-MM-DD)
 */
export function fechaHoyISO(): string {
  return new Date().toISOString().split("T")[0];
}

/**
 * Valida que una cadena tenga formato de fecha YYYY-MM-DD
 */
export function esFechaValida(fecha: string): boolean {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(fecha)) return false;
  const d = new Date(fecha);
  return d instanceof Date && !isNaN(d.getTime());
}

/**
 * Valida que una cadena tenga formato de hora HH:MM
 */
export function esHoraValida(hora: string): boolean {
  const regex = /^([01]?\d|2[0-3]):([0-5]\d)$/;
  return regex.test(hora);
}
