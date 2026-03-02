/**
 * Información semanal del embarazo (semanas 1-42)
 * Fuente: datos médicos generales sobre el desarrollo fetal
 */

export interface InfoSemana {
  semana: number;
  titulo: string;
  desarrollo: string;
  tamano: string;
  consejo: string;
}

export const SEMANAS: Record<number, InfoSemana> = {
  1: {
    semana: 1,
    titulo: "El ciclo comienza",
    desarrollo:
      "El cuerpo se prepara para la ovulación. Técnicamente el embarazo se cuenta desde el primer día de la última menstruación.",
    tamano: "El óvulo aún no ha sido fecundado",
    consejo:
      "Toma ácido fólico si aún no lo has hecho. Es crucial para prevenir defectos del tubo neural.",
  },
  2: {
    semana: 2,
    titulo: "La ovulación",
    desarrollo:
      "Se produce la ovulación. El óvulo puede ser fecundado en las próximas 12-24 horas tras ser liberado.",
    tamano: "El óvulo mide aproximadamente 0,1 mm",
    consejo: "Este es el momento de mayor fertilidad del ciclo.",
  },
  3: {
    semana: 3,
    titulo: "La fecundación",
    desarrollo:
      "El espermatozoide fecunda el óvulo formando el cigoto, que viaja por la trompa de Falopio hacia el útero dividiéndose continuamente.",
    tamano: "El blastocisto mide unas 0,1-0,2 mm",
    consejo:
      "El embrión en formación ya está viajando hacia el útero para implantarse.",
  },
  4: {
    semana: 4,
    titulo: "Implantación",
    desarrollo:
      "El blastocisto se implanta en la pared del útero. Comienza a producirse la hormona hCG, que es la que detectan los tests de embarazo.",
    tamano: "Tamaño de una semilla de amapola (0,2 mm)",
    consejo:
      "Es posible que notes un ligero sangrado de implantación. Puedes hacerte un test de embarazo.",
  },
  5: {
    semana: 5,
    titulo: "El corazón empieza a latir",
    desarrollo:
      "Se forman los rudimentos del corazón, cerebro, médula espinal y tracto gastrointestinal. El corazón ya late de forma primitiva.",
    tamano: "Tamaño de una semilla de sésamo (1,5 mm)",
    consejo:
      "Los niveles de hCG aumentan rápidamente. Pueden aparecer náuseas y cansancio.",
  },
  6: {
    semana: 6,
    titulo: "Los órganos se forman",
    desarrollo:
      "El cerebro y la cabeza crecen rápidamente. Aparecen las yemas de brazos y piernas. El corazón ya late con fuerza y puede verse en una ecografía.",
    tamano: "Tamaño de una lenteja (4-6 mm)",
    consejo:
      "Primera visita al médico si aún no la has hecho. Se puede ver el latido en ecografía transvaginal.",
  },
  7: {
    semana: 7,
    titulo: "Brazos y piernas",
    desarrollo:
      "Los brazos y piernas se alargan. Aparecen los pulgares. El cerebro crece a un ritmo de 100 neuronas por minuto. Se forman los ojos y oídos.",
    tamano: "Tamaño de un arándano (8-11 mm)",
    consejo:
      "Las náuseas matutinas pueden ser intensas. El olfato puede estar más sensible.",
  },
   8: {
     semana: 8,
     titulo: "Todo en su lugar",
     desarrollo:
       "Todos los órganos principales están en formación. Los dedos de las manos y los pies se separan. El bebé ya puede mover las extremidades aunque no se noten. ¡Tu bebé está creciendo perfectamente!",
     tamano: "Tamaño de una frambuesa (14-20 mm)",
     consejo:
       "La placenta está tomando el control. Tu cuerpo está haciendo un trabajo increíble.",
   },
  9: {
    semana: 9,
    titulo: "De embrión a feto",
    desarrollo:
      "A partir de esta semana se llama feto. Los párpados se forman aunque están fusionados. El hígado ya produce glóbulos rojos. Las articulaciones funcionan.",
    tamano: "Tamaño de una uva (22-30 mm)",
    consejo:
      "Puedes escuchar el corazón con un doppler fetal aunque aún puede ser difícil.",
  },
  10: {
    semana: 10,
    titulo: "El feto se mueve",
    desarrollo:
      "El feto hace movimientos espontáneos pero aún no los notarás. Las estructuras faciales están definidas. Los genitales externos comienzan a diferenciarse.",
    tamano: "Tamaño de una fresa (31-42 mm)",
    consejo:
      "Se puede realizar la biopsia de corion (10-13 semanas) si hay indicación.",
  },
  11: {
    semana: 11,
    titulo: "Cabeza grande, cuerpo pequeño",
    desarrollo:
      "La cabeza representa la mitad del tamaño del feto. Los huesos empiezan a endurecerse. El bebé puede bostezar, sorber y tragar líquido amniótico.",
    tamano: "Tamaño de un higo (44-60 mm)",
    consejo: "El primer trimestre casi termina. Las náuseas suelen mejorar pronto.",
  },
  12: {
    semana: 12,
    titulo: "Final del primer trimestre",
    desarrollo:
      "El feto ya tiene todas sus estructuras formadas. Los reflejos se desarrollan. Los riñones producen orina. La nariz y los labios están completamente formados.",
    tamano: "Tamaño de una lima (53-74 mm)",
    consejo:
      "Ecografía del primer trimestre y cribado de cromosomopatías (translucencia nucal). ¡Momento de compartir la noticia!",
  },
  13: {
    semana: 13,
    titulo: "Inicio del segundo trimestre",
    desarrollo:
      "El segundo trimestre comienza. El intestino se retrae al abdomen. Las huellas dactilares ya están formadas. El bebé puede hacer gestos faciales.",
    tamano: "Tamaño de un kiwi (65-78 mm)",
    consejo:
      "Muchas madres notan que las náuseas desaparecen. La energía suele volver.",
  },
  14: {
    semana: 14,
    titulo: "Expresiones faciales",
    desarrollo:
      "El bebé puede fruncir el ceño y hacer muecas. El pelo comienza a crecer, incluidas las cejas. El cuello se alarga y la cabeza se endereza.",
    tamano: "Tamaño de un limón (80-93 mm)",
    consejo:
      "Buen momento para comenzar ejercicios de suelo pélvico si aún no los has iniciado.",
  },
  15: {
    semana: 15,
    titulo: "Sensible a la luz",
    desarrollo:
      "Aunque los párpados están cerrados, el feto puede sentir la luz. Aparece el lanugo (vello fino que cubre el cuerpo). Los huesos se ven en las ecografías.",
    tamano: "Tamaño de una naranja (93-104 mm)",
    consejo: "Se puede realizar la amniocentesis si hay indicación (15-20 semanas).",
  },
  16: {
    semana: 16,
    titulo: "Primeros movimientos",
    desarrollo:
      "Algunas mamás empiezan a notar los primeros movimientos (especialmente si no es el primer embarazo). El sistema circulatorio funciona completamente.",
    tamano: "Tamaño de un aguacate (10-12 cm)",
    consejo:
      "Ecografía morfológica del segundo trimestre se acerca. Momento de planificar.",
  },
  17: {
    semana: 17,
    titulo: "Crecimiento rápido",
    desarrollo:
      "El esqueleto cambia de cartílago a hueso. Se deposita grasa bajo la piel. El cordón umbilical se vuelve más grueso y fuerte.",
    tamano: "Tamaño de una pera (11-13 cm)",
    consejo:
      "El útero crece rápidamente. Puedes notar el vientre más redondo.",
  },
  18: {
    semana: 18,
    titulo: "Oídos funcionando",
    desarrollo:
      "El bebé puede oír sonidos dentro del útero (latido del corazón, digestión). Las yemas de los dedos tienen huellas dactilares únicas. Se forman las redes nerviosas en el cerebro.",
    tamano: "Tamaño de un pimiento (12-14 cm)",
    consejo: "Hablarle y ponerle música ya tiene efecto. El bebé responde a sonidos.",
  },
  19: {
    semana: 19,
    titulo: "Recubierto de vérnix",
    desarrollo:
      "El feto está cubierto de vérnix caseoso (sustancia blanquecina protectora). Las piernas son ahora más largas que los brazos. El cerebro desarrolla zonas sensoriales.",
    tamano: "Tamaño de un mango (13-15 cm)",
    consejo:
      "Puedes empezar a notar los movimientos como 'mariposas' en el vientre.",
  },
  20: {
    semana: 20,
    titulo: "¡Mitad del camino!",
    desarrollo:
      "Se llega al ecuador del embarazo. Los movimientos son más notorios. Los genitales son claramente visibles en ecografía. El bebé traga líquido amniótico regularmente.",
    tamano: "Tamaño de un plátano (15-17 cm)",
    consejo:
      "Ecografía morfológica (semana 20) para revisar todos los órganos y estructuras del bebé.",
  },
  21: {
    semana: 21,
    titulo: "Sabores y sensaciones",
    desarrollo:
      "El bebé puede saborear el líquido amniótico (que varía según la dieta de la madre). Las cejas y párpados están completamente formados. Los movimientos son más coordinados.",
    tamano: "Tamaño de una zanahoria (18-22 cm)",
    consejo: "Los movimientos son ya claramente perceptibles para la mayoría de madres.",
  },
   22: {
     semana: 22,
     titulo: "Cara reconocible",
     desarrollo:
       "El bebé ya tiene los rasgos faciales definidos. El cerebro y los nervios se desarrollan rápidamente. El páncreas produce insulina. ¡Ya parece un bebé!",
     tamano: "Tamaño de un coco pequeño (19-26 cm)",
     consejo:
       "Bonito momento para compartir ecografías con familia y amigos. Tu bebé es cada vez más real.",
   },
  23: {
    semana: 23,
    titulo: "Pulmones en desarrollo",
    desarrollo:
      "Los pulmones producen surfactante, necesario para respirar al nacer. El oído interno está completamente desarrollado. El bebé tiene ciclos de sueño y vigilia.",
    tamano: "Tamaño de una berenjena (20-29 cm)",
    consejo:
      "Habla y canta al bebé: ya reconoce la voz de su madre y reacciona a ella.",
  },
   24: {
     semana: 24,
     titulo: "Límite de viabilidad",
     desarrollo:
       "El bebé alcanza un hito importante. Los pulmones maduran. La piel empieza a tomar el color definitivo. Abre y cierra los ojos descubriendo el mundo.",
     tamano: "Tamaño de un maíz (21-30 cm)",
     consejo:
       "Estás en el segundo trimestre. Tu bebé está fuerte y sano. Comienza a planificar para el tercer trimestre.",
   },
  25: {
    semana: 25,
    titulo: "Responde a sonidos",
    desarrollo:
      "El bebé responde a música y voces con movimientos. La grasa subcutánea aumenta. Las manos ya tienen fuerza de agarre. El cerebelo se desarrolla.",
    tamano: "Tamaño de una coliflor (22-34 cm)",
    consejo:
      "Empieza a pensar en la preparación al parto (cursos de preparto).",
  },
  26: {
    semana: 26,
    titulo: "Abre los ojos",
    desarrollo:
      "El bebé abre los ojos por primera vez. Los pulmones continúan madurando. El cerebro crece rápidamente. Reacciona al dolor y al tacto.",
    tamano: "Tamaño de una lechuga (23-35 cm)",
    consejo:
      "Test de O'Sullivan (sobrecarga oral de glucosa) se realiza entre las semanas 24-28.",
  },
   27: {
     semana: 27,
     titulo: "¡Hipo y todo! Final del segundo trimestre",
     desarrollo:
       "¡El segundo trimestre termina! El bebé ronca, hipa (sí, ¡hipos de verdad!) y practica movimientos de respiración. El cerebro es más activo. Los pulmones siguen madurando. Esos pequeños espasmos que sientes son sus primeros hipos, ¡qué bonito!",
     tamano: "Tamaño de una coliflor grande (24-36 cm)",
     consejo:
       "Los hipos del bebé son normales y bonitos. Duerme de lado (preferentemente izquierdo) para mejorar la circulación.",
   },
  28: {
    semana: 28,
    titulo: "Inicio del tercer trimestre",
    desarrollo:
      "Comienza el tercer trimestre. El cerebro forma pliegues característicos. Los ojos distinguen la luz y la oscuridad. El bebé se posiciona con la cabeza hacia abajo generalmente.",
    tamano: "Tamaño de una berenjena grande (25-38 cm)",
    consejo:
      "Las visitas al médico se vuelven más frecuentes. Empieza a preparar la bolsa del hospital.",
  },
  29: {
    semana: 29,
    titulo: "Crecimiento de huesos",
    desarrollo:
      "Los huesos están completamente desarrollados aunque aún blandos. El cerebro puede regular la temperatura corporal. El bebé patea con fuerza.",
    tamano: "Tamaño de una calabaza pequeña (26-39 cm)",
    consejo: "Cuenta los movimientos del bebé diariamente: al menos 10 en 2 horas.",
  },
  30: {
    semana: 30,
    titulo: "Lanugo desaparece",
    desarrollo:
      "El lanugo (vello fino) empieza a desaparecer. El cerebro desarrolla surcos. La médula ósea produce glóbulos rojos. Los músculos y pulmones maduran.",
    tamano: "Tamaño de un repollo (27-40 cm)",
    consejo: "Puede haber más ardor de estómago ya que el útero presiona el diafragma.",
  },
  31: {
    semana: 31,
    titulo: "Todos los sentidos activos",
    desarrollo:
      "Todos los sentidos están activos: ve, oye, gusta, huele y siente. El bebé puede distinguir sabores en el líquido amniótico. El espacio en el útero empieza a ser limitado.",
    tamano: "Tamaño de un coco (28-42 cm)",
    consejo: "Las patadas y movimientos son fuertes y regulares. Regístralos.",
  },
  32: {
    semana: 32,
    titulo: "Posición final",
    desarrollo:
      "La mayoría de bebés ya se han colocado en posición cefálica (cabeza abajo). Las uñas han crecido hasta las yemas de los dedos. La piel está suave.",
    tamano: "Tamaño de una melaza pequeña (28-43 cm)",
    consejo:
      "Ecografía del tercer trimestre (32-34 semanas) para comprobar posición, crecimiento y líquido amniótico.",
  },
  33: {
    semana: 33,
    titulo: "Pulmones casi listos",
    desarrollo:
      "Los pulmones están casi completamente maduros. Los huesos del cráneo aún son blandos para facilitar el parto. El bebé puede orinar hasta medio litro al día.",
    tamano: "Tamaño de una piña (28-44 cm)",
    consejo: "Prepara la bolsa del hospital si aún no lo has hecho.",
  },
  34: {
    semana: 34,
    titulo: "Sistema nervioso maduro",
    desarrollo:
      "El sistema nervioso central está maduro. Si naciera ahora, tendría excelente pronóstico. Los ojos pueden enfocar objetos cercanos. El bebé engorda rápidamente.",
    tamano: "Tamaño de una calabaza mediana (30-45 cm)",
    consejo:
      "Un nacimiento en semana 34 ya tiene muy buen pronóstico con cuidados neonatales.",
  },
  35: {
    semana: 35,
    titulo: "Engordando rápido",
    desarrollo:
      "El bebé gana unos 250 gramos por semana. Los riñones están completamente desarrollados. El hígado puede procesar productos de desecho.",
    tamano: "Tamaño de un melón mediano (32-46 cm)",
    consejo:
      "El útero llega casi al esternón. Es normal sentir más cansancio y falta de aire.",
  },
  36: {
    semana: 36,
    titulo: "Casi a término",
    desarrollo:
      "El bebé ocupa casi todo el espacio del útero. Los movimientos son más lentos pero más fuertes. El lanugo y el vérnix casi han desaparecido. El bebé 'encaja' en la pelvis.",
    tamano: "Tamaño de una sandía pequeña (33-49 cm)",
    consejo:
      "El bebé puede nacer en cualquier momento desde la semana 37. Revisa que tienes todo preparado.",
  },
   37: {
     semana: 37,
     titulo: "¡A término temprano! Ya puede venir en cualquier momento",
     desarrollo:
       "¡Oficial! El embarazo es considerado 'a término temprano'. Los pulmones están completamente maduros. El bebé ya practica la respiración con el líquido amniótico. Está completamente listo para llegar al mundo. Desde ahora, tu bebé puede nacer en cualquier momento.",
     tamano: "Tamaño de una sandía (34-50 cm)",
     consejo:
       "¡Estás en la recta final! Aprende a reconocer los signos de trabajo de parto: contracciones regulares, rotura de aguas, pérdida del tapón mucoso. Tu bebé está listo para llegar.",
   },
  38: {
    semana: 38,
    titulo: "Listo para nacer",
    desarrollo:
      "El bebé está completamente desarrollado. La mayoría del lanugo ha desaparecido. Las uñas pueden sobresalir de las yemas de los dedos. El cerebro sigue creciendo.",
    tamano: "Tamaño de un puerro (35-51 cm)",
    consejo: "Descansa todo lo que puedas. El parto puede ocurrir en cualquier momento.",
  },
  39: {
    semana: 39,
    titulo: "Semana de término",
    desarrollo:
      "El bebé continúa desarrollando su cerebro y pulmones. El sistema inmunológico se refuerza. La placenta sigue transfiriendo anticuerpos. Los pulmones producen suficiente surfactante.",
    tamano: "Tamaño de una calabaza (35-52 cm)",
    consejo: "Mantén un registro de las contracciones. Ve al hospital si son regulares e intensas.",
  },
   40: {
     semana: 40,
     titulo: "¡Fecha estimada de parto! El gran encuentro está cerca",
     desarrollo:
       "¡Has llegado a la fecha estimada de parto! Tu bebé está completamente desarrollado y listo para el gran encuentro. Todos los órganos funcionan perfectamente. El cuerpo de tu bebé es completamente maduro y listo para respirar, comer y vivir fuera del útero.",
     tamano: "Tamaño de una sandía grande (36-54 cm)",
     consejo:
       "¡Estás cerca! Solo el 5% de los bebés nacen en su fecha exacta. Es completamente normal nacer entre la semana 38 y la 42. Tu bebé llegará cuando sea el momento perfecto.",
   },
   41: {
     semana: 41,
     titulo: "Una semana más de crecimiento",
     desarrollo:
       "El bebé sigue creciendo y preparándose. Está ganando anticuerpos a través de la placenta. El médico hará controles para asegurar que todo va perfectamente. Tu bebé llega cuando es el momento justo.",
     tamano: "Tamaño de una sandía grande (37-54 cm)",
     consejo:
       "Los controles médicos son más frecuentes para monitorizar el bienestar del bebé. Descansa, relájate y confía en que tu cuerpo sabe lo que hace.",
   },
   42: {
     semana: 42,
     titulo: "El parto está muy cerca",
     desarrollo:
       "El bebé ha completado su desarrollo. El cuerpo está listo para el parto en cualquier momento. Todos los sistemas están perfectamente preparados para la vida fuera del útero. El médico evaluará el mejor momento para el parto de forma segura.",
     tamano: "Tamaño de una sandía grande (37-54 cm)",
     consejo:
       "En este momento, trabajarás estrechamente con tu médico para elegir el mejor plan. La mayoría de bebés nacen en esta semana. ¡Ya casi estás aquí! El encuentro con tu bebé es inminente.",
   },
};

/**
 * Obtiene la información de una semana, o un mensaje genérico si está fuera de rango
 */
export function getInfoSemana(semana: number): InfoSemana | null {
  if (semana < 1) return null;
  if (semana > 42) return null;
  return SEMANAS[semana] ?? null;
}
