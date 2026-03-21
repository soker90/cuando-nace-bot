/**
 * Información semanal del embarazo (semanas 1-42)
 * Fuente: datos médicos generales sobre el desarrollo del bebé
 */

export interface InfoSemana {
  semana: number;
  titulo: string;
  desarrollo: string;
  tamano: string;
  consejo: string;
  fruta: { emoji: string; nombre: string; medida: string };
  animal: { emoji: string; nombre: string; medida: string };
  comida: { emoji: string; nombre: string; medida: string };
}

export const SEMANAS: Record<number, InfoSemana> = {
  1: {
    semana: 1,
    titulo: "El ciclo comienza",
    desarrollo:
      "Tu cuerpo se está preparando para la ovulación. Técnicamente, el embarazo se empieza a contar desde el primer día de tu última menstruación, ¡el primer paso para conocer a tu bebé!",
    tamano: "El óvulo aún no ha sido fecundado.",
    consejo:
      "Si aún no lo haces, empieza a tomar ácido fólico. Es fundamental para el sano desarrollo de tu futuro bebé.",
    fruta: { emoji: "🌱", nombre: "semilla de amapola", medida: "< 0,1 mm" },
    animal: { emoji: "🦠", nombre: "célula", medida: "< 0,1 mm" },
    comida: { emoji: "🧂", nombre: "grano de sal", medida: "< 0,1 mm" },
  },
  2: {
    semana: 2,
    titulo: "La ovulación",
    desarrollo:
      "Tu cuerpo libera un óvulo, que estará listo para encontrarse con un espermatozoide en las próximas 12 a 24 horas. ¡La magia está a punto de empezar!",
    tamano: "El óvulo mide aproximadamente 0,1 mm.",
    consejo:
      "Este es el momento de mayor fertilidad de tu ciclo. Mantén un estilo de vida saludable y cuídate mucho.",
    fruta: { emoji: "🌱", nombre: "semilla de amapola", medida: "0,1 mm" },
    animal: { emoji: "🦠", nombre: "célula", medida: "0,1 mm" },
    comida: { emoji: "🧂", nombre: "grano de sal", medida: "0,1 mm" },
  },
  3: {
    semana: 3,
    titulo: "El comienzo de la vida",
    desarrollo:
      "¡Ha habido encuentro! El espermatozoide y el óvulo se han unido y la vida de tu bebé acaba de comenzar. Ahora viaja por la trompa de Falopio hacia el útero, creciendo sin parar.",
    tamano: "Tamaño de una cabeza de alfiler (0,1-0,2 mm).",
    consejo:
      "Tu bebé en formación ya está en camino a su nuevo hogar. Sigue cuidándote, aunque probablemente aún no notes nada.",
    fruta: { emoji: "🫐", nombre: "semilla de arándano", medida: "0,1-0,2 mm" },
    animal: { emoji: "🐜", nombre: "huevo de hormiga", medida: "0,2 mm" },
    comida: { emoji: "🌾", nombre: "grano de arroz crudo", medida: "0,2 mm" },
  },
  4: {
    semana: 4,
    titulo: "La implantación",
    desarrollo:
      "Tu bebé, pequeñito como una semilla, se implanta de forma segura en la pared del útero. Tu cuerpo empieza a producir la hormona del embarazo, que es la que detectan los test.",
    tamano: "Tamaño de una semilla de amapola (0,2 mm).",
    consejo:
      "Es posible que notes un ligero manchado (sangrado de implantación). ¡Ya puedes hacerte un test de embarazo de alta sensibilidad!",
    fruta: { emoji: "🫐", nombre: "semilla de arándano", medida: "0,2 mm" },
    animal: { emoji: "🐜", nombre: "hormiga", medida: "0,2 mm" },
    comida: { emoji: "🌾", nombre: "grano de arroz", medida: "0,2 mm" },
  },
  5: {
    semana: 5,
    titulo: "El corazón empieza a latir",
    desarrollo:
      "Se están formando los cimientos de sus órganos principales: el cerebro, la médula espinal y su corazoncito, que ya empieza a latir a un ritmo constante.",
    tamano: "Tamaño de una semilla de sésamo o manzana (1,5 - 2 mm).",
    consejo:
      "Tus niveles de hormonas se disparan. Es muy normal que empieces a sentirte inusualmente cansada, con náuseas o con los pechos sensibles.",
    fruta: { emoji: "🫐", nombre: "arándano pequeño", medida: "1,5-2 mm" },
    animal: { emoji: "🐝", nombre: "huevo de abeja", medida: "1,5 mm" },
    comida: { emoji: "🌿", nombre: "semilla de sésamo", medida: "1,5-2 mm" },
  },
  6: {
    semana: 6,
    titulo: "Tomando forma",
    desarrollo:
      "Su cabecita crece a un ritmo vertiginoso. Empiezan a asomar unos pequeños bultos que se convertirán en sus bracitos y piernas. Su corazón late con mucha fuerza (hasta 150 veces por minuto).",
    tamano: "Tamaño de una lenteja (4-6 mm).",
    consejo:
      "Si aún no lo has hecho, pide cita para tu primera visita obstétrica. Come en pequeñas cantidades a lo largo del día para mantener a raya las náuseas.",
    fruta: { emoji: "🍇", nombre: "grano de uva pequeño", medida: "4-6 mm" },
    animal: { emoji: "🐛", nombre: "oruga pequeña", medida: "5 mm" },
    comida: { emoji: "🫘", nombre: "lenteja", medida: "4-6 mm" },
  },
  7: {
    semana: 7,
    titulo: "Aparecen manos y pies",
    desarrollo:
      "Los bracitos y las piernas de tu bebé se alargan y empiezan a formarse las manos y los pies, ¡incluso con pequeños deditos! Su cerebro genera 100 nuevas neuronas por minuto.",
    tamano: "Tamaño de un arándano (8-11 mm).",
    consejo:
      "Tu olfato puede estar más sensible de lo normal y causarte aversión a ciertos olores. Es buena idea tener a mano galletas saladas o jengibre.",
    fruta: { emoji: "🫐", nombre: "arándano", medida: "8-11 mm" },
    animal: { emoji: "🐌", nombre: "caracol sin concha", medida: "10 mm" },
    comida: { emoji: "🫘", nombre: "judía blanca", medida: "8-11 mm" },
  },
  8: {
    semana: 8,
    titulo: "¡Creciendo a toda velocidad!",
    desarrollo:
      "Todos sus órganos principales están en su sitio y en desarrollo. Tu bebé ya puede mover sus extremidades, aunque es demasiado pronto para que lo notes.",
    tamano: "Tamaño de una frambuesa (14-20 mm).",
    consejo:
      "La placenta está desarrollándose para tomar el control de la nutrición de tu pequeño. Bebe mucha agua y descansa siempre que tu cuerpo te lo pida.",
    fruta: { emoji: "🍓", nombre: "frambuesa", medida: "14-20 mm" },
    animal: { emoji: "🐌", nombre: "caracol", medida: "15 mm" },
    comida: { emoji: "🫘", nombre: "judía grande", medida: "14-20 mm" },
  },
  9: {
    semana: 9,
    titulo: "Un gran salto en su desarrollo",
    desarrollo:
      "¡Hito importante! El desarrollo de tu bebé da un gran salto. Sus rasgos faciales están cada vez más definidos y las articulaciones de sus codos y rodillas ya funcionan.",
    tamano: "Tamaño de una uva o cereza (22-30 mm).",
    consejo:
      "Tu volumen sanguíneo está aumentando para llevarle nutrientes, lo que puede hacer que te sientas mareada o te notes las venas más marcadas.",
    fruta: { emoji: "🍒", nombre: "cereza", medida: "22-30 mm" },
    animal: { emoji: "🦗", nombre: "grillo", medida: "25 mm" },
    comida: { emoji: "🍬", nombre: "caramelo pequeño", medida: "22-30 mm" },
  },
  10: {
    semana: 10,
    titulo: "Huesos y cartílagos",
    desarrollo:
      "Sus órganos vitales (como riñones, intestinos y cerebro) ya están funcionando. Sus huesecitos empiezan a formarse, y los deditos de sus manos y pies ya están separados.",
    tamano: "Tamaño de una fresa (31-42 mm).",
    consejo:
      "Entre las semanas 10 y 13 se suele realizar el análisis de sangre para el cribado combinado del primer trimestre (o test prenatal no invasivo si lo deseas).",
    fruta: { emoji: "🍓", nombre: "fresa pequeña", medida: "31-42 mm" },
    animal: { emoji: "🦎", nombre: "lagartija pequeña", medida: "35 mm" },
    comida: { emoji: "🍪", nombre: "galleta pequeña", medida: "31-42 mm" },
  },
  11: {
    semana: 11,
    titulo: "Bostezos y estiramientos",
    desarrollo:
      "La cabeza aún representa casi la mitad de su tamaño. Tu bebé ya puede bostezar, estirarse e incluso tragar líquido amniótico. Debajo de sus encías se están formando los futuros dientes de leche.",
    tamano: "Tamaño de un higo (44-60 mm).",
    consejo:
      "¡Ánimo! El primer trimestre está a punto de terminar. Las molestias como las náuseas y el cansancio extremo suelen empezar a mejorar a partir de ahora.",
    fruta: { emoji: "🍈", nombre: "higo", medida: "44-60 mm" },
    animal: { emoji: "🐸", nombre: "ranita", medida: "50 mm" },
    comida: { emoji: "🥒", nombre: "pepinillo en vinagre", medida: "44-60 mm" },
  },
  12: {
    semana: 12,
    titulo: "Reflejos en acción",
    desarrollo:
      "Tu bebé ya tiene reflejos: si tocas tu vientre (aunque no lo sientas), él reaccionará moviéndose. Los intestinos, que crecieron tanto que se metieron en el cordón umbilical, vuelven a su abdomen.",
    tamano: "Tamaño de una ciruela o lima (53-74 mm).",
    consejo:
      "Suele ser el momento de la ecografía más emocionante del primer trimestre (translucencia nucal) y, para muchas familias, ¡el momento de dar la noticia!",
    fruta: { emoji: "🍋", nombre: "lima pequeña", medida: "53-74 mm" },
    animal: { emoji: "🐹", nombre: "ratón de campo", medida: "6-7 cm" },
    comida: { emoji: "🥝", nombre: "kiwi", medida: "53-74 mm" },
  },
  13: {
    semana: 13,
    titulo: "¡Bienvenida al segundo trimestre!",
    desarrollo:
      "Comienza la etapa más dulce del embarazo. Tu bebé ya tiene sus huellas dactilares formadas y sus cuerdas vocales se están desarrollando. Puede hacer muecas y chuparse el dedo.",
    tamano: "Tamaño de un melocotón (65-78 mm).",
    consejo:
      "El embarazo se asienta y entras en una etapa de mucha mayor tranquilidad. Probablemente empieces a recuperar tu energía y a notar que la ropa te aprieta un poco más.",
    fruta: { emoji: "🍑", nombre: "melocotón pequeño", medida: "65-78 mm" },
    animal: { emoji: "🐹", nombre: "hámster", medida: "7 cm" },
    comida: { emoji: "🧅", nombre: "cebolla pequeña", medida: "65-78 mm" },
  },
  14: {
    semana: 14,
    titulo: "Expresiones faciales",
    desarrollo:
      "Su cuello se alarga, su cabecita se yergue un poco más y empieza a aparecer un fino vello (lanugo) por todo su cuerpo para mantenerlo abrigado. Su bazo empieza a producir glóbulos rojos.",
    tamano: "Tamaño de un limón (80-93 mm).",
    consejo:
      "Es un momento ideal para empezar a cuidar tu piel con cremas hidratantes o aceites para prevenir estrías, ya que tu tripa empezará a crecer pronto.",
    fruta: { emoji: "🍋", nombre: "limón", medida: "80-93 mm" },
    animal: { emoji: "🐇", nombre: "ratón doméstico", medida: "8-9 cm" },
    comida: { emoji: "🍋", nombre: "limón", medida: "80-93 mm" },
  },
  15: {
    semana: 15,
    titulo: "Sensible a la luz",
    desarrollo:
      "Aunque tiene los ojitos cerrados herméticamente, ya puede percibir cambios de luz a través de tu vientre. Además, está entrenando sus pulmones inhalando y exhalando líquido amniótico.",
    tamano: "Tamaño de una manzana (93-104 mm).",
    consejo:
      "Tu corazón tiene que bombear hasta un 20% más de sangre. Si te levantas rápido, puedes marearte un poco. Tómatelo con calma.",
    fruta: { emoji: "🍎", nombre: "manzana pequeña", medida: "93-104 mm" },
    animal: { emoji: "🐇", nombre: "ratón grande", medida: "10 cm" },
    comida: { emoji: "🍎", nombre: "manzana", medida: "93-104 mm" },
  },
  16: {
    semana: 16,
    titulo: "¿Burbujas o patadas?",
    desarrollo:
      "Sus piernecitas ya están más desarrolladas y su sistema nervioso le permite hacer movimientos más coordinados. El cordón umbilical le envía nutrientes sin parar.",
    tamano: "Tamaño de un aguacate (10-12 cm).",
    consejo:
      "Algunas madres (especialmente en su segundo embarazo) empiezan a sentir leves movimientos, como pequeñas burbujas, aleteos o mariposas en la tripa.",
    fruta: { emoji: "🥑", nombre: "aguacate", medida: "10-12 cm" },
    animal: { emoji: "🐿️", nombre: "ardilla pequeña", medida: "11 cm" },
    comida: { emoji: "🥑", nombre: "aguacate", medida: "10-12 cm" },
  },
  17: {
    semana: 17,
    titulo: "Desarrollando los sentidos",
    desarrollo:
      "Tu bebé está empezando a ganar peso gracias a la grasita que se acumula bajo su piel, la cual le ayudará a regular su temperatura al nacer. Su esqueleto empieza a endurecerse.",
    tamano: "Tamaño de una pera grande (11-13 cm).",
    consejo:
      "Es posible que notes algún dolor punzante en los laterales del vientre; suelen ser los ligamentos redondos estirándose para acomodar tu útero que crece.",
    fruta: { emoji: "🍐", nombre: "pera", medida: "11-13 cm" },
    animal: { emoji: "🐿️", nombre: "ardilla", medida: "12 cm" },
    comida: { emoji: "🍐", nombre: "pera", medida: "11-13 cm" },
  },
  18: {
    semana: 18,
    titulo: "¡Te está escuchando!",
    desarrollo:
      "Los huesecillos de su oído interno y las terminaciones nerviosas de su cerebro se han desarrollado lo suficiente como para escuchar tus latidos, tu respiración e incluso tu voz.",
    tamano: "Tamaño de un boniato (12-14 cm).",
    consejo:
      "Háblale, cántale o ponle música suave. Tu voz le calmará una vez que nazca porque ya la reconocerá perfectamente.",
    fruta: { emoji: "🍠", nombre: "boniato pequeño", medida: "12-14 cm" },
    animal: { emoji: "🦔", nombre: "erizo", medida: "13 cm" },
    comida: { emoji: "🍠", nombre: "boniato", medida: "12-14 cm" },
  },
  19: {
    semana: 19,
    titulo: "Protegido por el vérnix",
    desarrollo:
      "Su piel comienza a cubrirse de 'vérnix caseoso', una capa blanca y cerosa que lo protege del líquido amniótico (evitando que se arrugue tras tantos meses en remojo).",
    tamano: "Tamaño de un mango (13-15 cm).",
    consejo:
      "Tu centro de gravedad está cambiando y es normal tener dolores de espalda. Intenta no cargar pesos y usa calzado cómodo y plano.",
    fruta: { emoji: "🥭", nombre: "mango pequeño", medida: "13-15 cm" },
    animal: { emoji: "🐇", nombre: "conejo pequeño", medida: "14 cm" },
    comida: { emoji: "🥭", nombre: "mango", medida: "13-15 cm" },
  },
  20: {
    semana: 20,
    titulo: "¡Mitad del embarazo!",
    desarrollo:
      "¡Ecuador superado! Tu bebé está muy activo, traga más líquido amniótico para practicar la digestión y sus riñones producen orina. En las niñas, los ovarios ya tienen millones de óvulos.",
    tamano: "Tamaño de un plátano (15-17 cm a la coronilla, unos 25 cm de pie a cabeza).",
    consejo:
      "Es la semana de la importante ecografía morfológica (semana 20), donde revisarán detalladamente la anatomía de tu bebé de la cabeza a los pies.",
    fruta: { emoji: "🍌", nombre: "plátano", medida: "25 cm de pie a cabeza" },
    animal: { emoji: "🐈", nombre: "gatito recién nacido", medida: "15 cm" },
    comida: { emoji: "🌽", nombre: "mazorca de maíz pequeña", medida: "25 cm" },
  },
  21: {
    semana: 21,
    titulo: "Probando nuevos sabores",
    desarrollo:
      "Sus papilas gustativas están en pleno funcionamiento. Como el sabor del líquido amniótico cambia según lo que tú comas, tu bebé ya está empezando a conocer tus comidas favoritas.",
    tamano: "Tamaño de una zanahoria grande (18-22 cm a la coronilla).",
    consejo:
      "Mantén una dieta variada y saludable; ¡estás educando el paladar de tu bebé desde ahora! Ya deberías notar sus pataditas con claridad.",
    fruta: { emoji: "🍈", nombre: "melón pequeño", medida: "27 cm" },
    animal: { emoji: "🐈", nombre: "gato pequeño", medida: "20 cm" },
    comida: { emoji: "🥕", nombre: "zanahoria grande", medida: "18-22 cm" },
  },
  22: {
    semana: 22,
    titulo: "Cada vez más parecido a un recién nacido",
    desarrollo:
      "Su piel todavía es finita, pero sus labios, párpados y cejas son ya muy evidentes. El páncreas está desarrollándose de forma constante, preparándose para la vida en el exterior.",
    tamano: "Tamaño de un coco o una papaya pequeña (27 cm de cabeza a talón).",
    consejo:
      "Puedes notar retención de líquidos (pies o manos un poco hinchados). Sigue bebiendo agua, eleva las piernas al descansar y mantente activa.",
    fruta: { emoji: "🥥", nombre: "coco", medida: "27 cm" },
    animal: { emoji: "🐈", nombre: "gato doméstico joven", medida: "27 cm" },
    comida: { emoji: "🥥", nombre: "coco entero", medida: "27 cm" },
  },
  23: {
    semana: 23,
    titulo: "Preparando los pulmones",
    desarrollo:
      "En sus pulmones se están formando los vasos sanguíneos y se empieza a preparar la producción de surfactante, una sustancia vital para que pueda respirar aire al nacer.",
    tamano: "Tamaño de una berenjena grande (unos 28-29 cm de cabeza a talón).",
    consejo:
      "A medida que tu bebé gana fuerza, es posible que algunas patadas te sobresalten. Siéntate, respira y disfruta de esta increíble conexión.",
    fruta: { emoji: "🍆", nombre: "berenjena", medida: "28-29 cm" },
    animal: { emoji: "🦆", nombre: "pato joven", medida: "28 cm" },
    comida: { emoji: "🍆", nombre: "berenjena grande", medida: "28-29 cm" },
  },
  24: {
    semana: 24,
    titulo: "Un hito de viabilidad",
    desarrollo:
      "¡Momento muy importante! El bebé alcanza una etapa clave en su desarrollo y viabilidad. Sus pulmones y sistema nervioso siguen perfeccionándose a un ritmo increíble.",
    tamano: "Tamaño de una mazorca de maíz (unos 30 cm de cabeza a talón).",
    consejo:
      "Entre las semanas 24 y 28 te realizarán la prueba del azúcar (Test de O'Sullivan) para asegurarnos de que todo sigue en orden.",
    fruta: { emoji: "🍈", nombre: "melón cantalupo pequeño", medida: "30 cm" },
    animal: { emoji: "🦆", nombre: "pato adulto", medida: "30 cm" },
    comida: { emoji: "🌽", nombre: "mazorca de maíz", medida: "30 cm" },
  },
  25: {
    semana: 25,
    titulo: "Creando reservas de grasa",
    desarrollo:
      "El cabello de su cabecita ya tiene color y textura. Su cuerpecito sigue acumulando grasita, estirando su piel y haciéndolo lucir cada vez más gordito y sonrosado.",
    tamano: "Tamaño de una coliflor (unos 34 cm de cabeza a talón).",
    consejo:
      "Es un momento excelente para investigar sobre cursos de preparación al parto y empezar a hablar de tus preferencias con tu matrona o ginecólogo.",
    fruta: { emoji: "🍍", nombre: "piña pequeña", medida: "34 cm" },
    animal: { emoji: "🐓", nombre: "pollo adulto pequeño", medida: "33 cm" },
    comida: { emoji: "🥦", nombre: "brócoli grande", medida: "34 cm" },
  },
  26: {
    semana: 26,
    titulo: "Abriendo los ojitos",
    desarrollo:
      "¡Una gran novedad! Los párpados de tu bebé, que han estado cerraditos durante meses, empiezan a abrirse. Puede ver lo que hay a su alrededor, aunque por ahora solo sea la luz filtrada de tu vientre.",
    tamano: "Tamaño de una lechuga iceberg (unos 35 cm de cabeza a talón).",
    consejo:
      "Es posible que notes contracciones de Braxton Hicks (tu vientre se pone duro unos segundos y luego se relaja). Es tu cuerpo entrenando para el gran día.",
    fruta: { emoji: "🍍", nombre: "piña mediana", medida: "35 cm" },
    animal: { emoji: "🐓", nombre: "gallina", medida: "35 cm" },
    comida: { emoji: "🥬", nombre: "lechuga iceberg", medida: "35 cm" },
  },
  27: {
    semana: 27,
    titulo: "¡Hipo! Fin del segundo trimestre",
    desarrollo:
      "Tu bebé tiene rutinas de sueño y vigilia. Sus pulmones siguen madurando y practica movimientos respiratorios. A veces tiene hipo, ¡lo sentirás como pequeños saltitos rítmicos en tu barriga!",
    tamano: "Tamaño de una coliflor grande (unos 36 cm de cabeza a talón).",
    consejo:
      "¡Despídete del segundo trimestre! Para dormir mejor y favorecer la llegada de sangre y nutrientes a tu bebé, intenta acostarte sobre tu lado izquierdo.",
    fruta: { emoji: "🥭", nombre: "mango grande", medida: "36 cm" },
    animal: { emoji: "🐓", nombre: "gallo", medida: "36 cm" },
    comida: { emoji: "🥦", nombre: "coliflor grande", medida: "36 cm" },
  },
  28: {
    semana: 28,
    titulo: "¡Hola, tercer trimestre!",
    desarrollo:
      "Su cerebro pasa de ser lisito a empezar a formar los pliegues típicos. Sus sentidos están muy alerta y reacciona claramente ante ruidos fuertes y cambios de luz.",
    tamano: "Tamaño de una berenjena grande (unos 38 cm de cabeza a talón).",
    consejo:
      "Si tu grupo sanguíneo es Rh negativo, probablemente en esta semana te administren la vacuna anti-D (inmunoglobulina) para proteger a tu bebé.",
    fruta: { emoji: "🍆", nombre: "berenjena grande", medida: "38 cm" },
    animal: { emoji: "🦜", nombre: "loro grande", medida: "38 cm" },
    comida: { emoji: "🍆", nombre: "berenjena muy grande", medida: "38 cm" },
  },
  29: {
    semana: 29,
    titulo: "Más fuerte y enérgico",
    desarrollo:
      "Los músculos y los pulmones de tu pequeño continúan madurando. Su cabecita está creciendo rápido. Ya no tiene tanto espacio para dar volteretas, por lo que notarás más estiramientos y empujones.",
    tamano: "Tamaño de una calabaza pequeña (unos 39 cm de cabeza a talón).",
    consejo:
      "Puede que empieces a sentirte pesada o con ardor de estómago por la presión de la barriga. Haz comidas pequeñas y no te acuestes justo después de comer.",
    fruta: { emoji: "🍈", nombre: "melón verde", medida: "39 cm" },
    animal: { emoji: "🐇", nombre: "conejo adulto", medida: "39 cm" },
    comida: { emoji: "🎃", nombre: "calabaza pequeña", medida: "39 cm" },
  },
  30: {
    semana: 30,
    titulo: "Perdiendo el lanugo",
    desarrollo:
      "El vellito fino que lo cubría empieza a caerse, ya que ahora cuenta con suficiente grasa corporal para mantenerse calentito. Su médula ósea ya produce todos sus glóbulos rojos.",
    tamano: "Tamaño de un repollo grande (unos 40 cm de cabeza a talón).",
    consejo:
      "Empieza a preparar mental y físicamente las cositas del bebé en casa. Es normal que sientas el famoso 'instinto de nido'.",
    fruta: { emoji: "🍉", nombre: "sandía pequeña", medida: "40 cm" },
    animal: { emoji: "🐱", nombre: "gato adulto", medida: "40 cm" },
    comida: { emoji: "🥬", nombre: "repollo grande", medida: "40 cm" },
  },
  31: {
    semana: 31,
    titulo: "Acumulando gramos",
    desarrollo:
      "A partir de ahora no crecerá tanto en longitud, pero ganará peso rápidamente (¡hasta 200 gramos por semana!). Su cerebro procesa muchísima información y sigue aprendiendo de su entorno.",
    tamano: "Tamaño de un coco (unos 41-42 cm de cabeza a talón).",
    consejo:
      "Tus pechos pueden empezar a segregar calostro (el 'primer oro líquido' que alimentará a tu bebé). Usa discos absorbentes si lo necesitas.",
    fruta: { emoji: "🍉", nombre: "sandía mediana", medida: "41-42 cm" },
    animal: { emoji: "🐱", nombre: "gato adulto grande", medida: "42 cm" },
    comida: { emoji: "🥥", nombre: "coco grande", medida: "41-42 cm" },
  },
  32: {
    semana: 32,
    titulo: "Poniéndose en posición",
    desarrollo:
      "La mayoría de los bebés ya se colocan con la cabecita hacia abajo, preparándose para el nacimiento. Su piel ya es suave y rosada, y sus uñitas llegan a la punta de sus deditos.",
    tamano: "Tamaño de un melón cantalupo (unos 43 cm de cabeza a talón).",
    consejo:
      "Llega el momento de la ecografía del tercer trimestre. Tu médico comprobará su peso estimado, la postura de tu bebé y la cantidad de líquido amniótico.",
    fruta: { emoji: "🍈", nombre: "melón cantalupo", medida: "43 cm" },
    animal: { emoji: "🦮", nombre: "perro pequeño", medida: "43 cm" },
    comida: { emoji: "🎃", nombre: "calabaza mediana", medida: "43 cm" },
  },
  33: {
    semana: 33,
    titulo: "Pulmones casi listos",
    desarrollo:
      "Tu bebé está recibiendo muchísimos anticuerpos tuyos para protegerlo cuando nazca. Sus huesitos están duros, excepto los de su cabecita, que deben mantenerse flexibles para facilitar el parto.",
    tamano: "Tamaño de una piña (unos 44 cm de cabeza a talón).",
    consejo:
      "Prepara la bolsa para el hospital o clínica (la tuya y la del bebé). Tenerla lista te dará mucha tranquilidad en estas últimas semanas.",
    fruta: { emoji: "🍍", nombre: "piña grande", medida: "44 cm" },
    animal: { emoji: "🦮", nombre: "perro mediano", medida: "44 cm" },
    comida: { emoji: "🍍", nombre: "piña entera", medida: "44 cm" },
  },
  34: {
    semana: 34,
    titulo: "Maduración clave",
    desarrollo:
      "Su sistema nervioso y pulmonar están prácticamente listos. De hecho, si naciera ahora mismo, lo haría con muchísima fuerza y un pronóstico de salud excelente.",
    tamano: "Tamaño de un melón amarillo (unos 45 cm de cabeza a talón).",
    consejo:
      "Sigue contando sus movimientos cada día. Aunque tenga menos espacio y se mueva distinto, debes sentir a tu bebé a diario.",
    fruta: { emoji: "🍈", nombre: "melón amarillo", medida: "45 cm" },
    animal: { emoji: "🦮", nombre: "perro tamaño mediano", medida: "45 cm" },
    comida: { emoji: "🎃", nombre: "calabaza grande", medida: "45 cm" },
  },
  35: {
    semana: 35,
    titulo: "Redondito y precioso",
    desarrollo:
      "Sus riñones están completamente desarrollados. Su cuerpecito está cada vez más redondito gracias a la grasa acumulada, que suma hasta el 20% de su peso total.",
    tamano: "Tamaño de un melón de piel de sapo (unos 46 cm de cabeza a talón).",
    consejo:
      "El cansancio vuelve a ser intenso. Tu barriga presiona tus costillas y pulmones, así que es normal que te falte un poco el aliento al caminar o hablar.",
    fruta: { emoji: "🍈", nombre: "melón de piel de sapo", medida: "46 cm" },
    animal: { emoji: "🐕", nombre: "perro grande", medida: "46 cm" },
    comida: { emoji: "🍉", nombre: "sandía mediana", medida: "46 cm" },
  },
  36: {
    semana: 36,
    titulo: "Encajándose",
    desarrollo:
      "Tu bebé ocupa casi todo el espacio. Puede que notes que tu barriga baja un poco porque su cabecita se está 'encajando' en tu pelvis. Esto te dejará respirar mejor, pero te hará ir más al baño.",
    tamano: "Tamaño de una lechuga romana grande (unos 47-49 cm de cabeza a talón).",
    consejo:
      "Entre esta semana y la 37, tu matrona o ginecólogo te hará la prueba del estreptococo para asegurar que el canal de parto está libre de bacterias para tu bebé.",
    fruta: { emoji: "🍉", nombre: "sandía grande", medida: "47-49 cm" },
    animal: { emoji: "🐕", nombre: "perro grande", medida: "48 cm" },
    comida: { emoji: "🥬", nombre: "lechuga romana grande", medida: "47-49 cm" },
  },
  37: {
    semana: 37,
    titulo: "¡Embarazo a término temprano!",
    desarrollo:
      "¡Felicidades, tu bebé ya no se considera prematuro si nace ahora! Está completamente listo para conocerte, practicando cómo tragar y respirar. Sus pulmones funcionan de maravilla.",
    tamano: "Tamaño de un manojo grande de acelgas o apio (unos 48-50 cm).",
    consejo:
      "Familiarízate con las señales reales de parto: rotura de aguas, pérdida del tapón mucoso o contracciones rítmicas que no se calman al descansar.",
    fruta: { emoji: "🍉", nombre: "sandía mediana-grande", medida: "48-50 cm" },
    animal: { emoji: "🐕", nombre: "perro mediano-grande", medida: "49 cm" },
    comida: { emoji: "🎃", nombre: "calabaza redonda grande", medida: "48-50 cm" },
  },
  38: {
    semana: 38,
    titulo: "Los últimos retoques",
    desarrollo:
      "A tu bebé ya no le queda casi nada de la capita protectora de su piel; se la ha ido tragando y con eso formará su primera caquita (meconio). Su cerebro sigue perfeccionándose cada día.",
    tamano: "Tamaño de una calabaza alargada o melón grande (unos 50-51 cm).",
    consejo:
      "Intenta descansar. Camina un poco cada día, utiliza una pelota de pilates para mover la pelvis y ten paciencia. ¡El gran encuentro puede ser en cualquier momento!",
    fruta: { emoji: "🍉", nombre: "sandía grande", medida: "50-51 cm" },
    animal: { emoji: "🐕", nombre: "perro grande", medida: "50 cm" },
    comida: { emoji: "🎃", nombre: "calabaza alargada", medida: "50-51 cm" },
  },
  39: {
    semana: 39,
    titulo: "Todo listo para nacer",
    desarrollo:
      "Tu bebé está perfectamente abrigado por su propia capa de grasa. Su cabecita está ya apoyada en el canal de parto, esperando pacientemente el momento perfecto para salir a tus brazos.",
    tamano: "Tamaño de una sandía pequeña (unos 51-52 cm).",
    consejo:
      "Es una etapa de mucha expectación. No te agobies si recibes muchos mensajes de familiares. Desconecta si lo necesitas y céntrate en ti y en la inminente llegada de tu pequeño.",
    fruta: { emoji: "🍉", nombre: "sandía pequeña-mediana", medida: "51-52 cm" },
    animal: { emoji: "🐕", nombre: "perro labrador", medida: "51 cm" },
    comida: { emoji: "🎃", nombre: "calabaza mediana-grande", medida: "51-52 cm" },
  },
  40: {
    semana: 40,
    titulo: "La fecha prevista (y el final del camino)",
    desarrollo:
      "¡Has llegado a la fecha calculada! Tu bebé está precioso, maduro y totalmente desarrollado. Solo recuerda que la fecha es una estimación médica, ¡él decidirá cuándo es el momento exacto!",
    tamano: "Tamaño de una calabaza redonda o sandía mediana (unos 51-53 cm).",
    consejo:
      "Solo un porcentaje pequeñísimo de bebés nacen exactamente el día previsto. Confía en tu cuerpo y en tu hijo, el momento perfecto llegará de un instante a otro.",
    fruta: { emoji: "🍉", nombre: "sandía mediana", medida: "51-53 cm" },
    animal: { emoji: "🐕", nombre: "perro mediano-grande", medida: "52 cm" },
    comida: { emoji: "🎃", nombre: "calabaza redonda", medida: "51-53 cm" },
  },
  41: {
    semana: 41,
    titulo: "Un poco de tiempo extra",
    desarrollo:
      "Tu bebé sigue creciendo un poquito más en tu barriga y recibiendo tus valiosos anticuerpos. Simplemente está demasiado a gusto y calientito ahí dentro, y necesita unos días de margen.",
    tamano: "Tamaño de una sandía grande (unos 52-54 cm).",
    consejo:
      "Tu equipo médico te verá muy a menudo (monitores) para confirmar que todo sigue en perfecto estado. Mantén la calma, ya queda poquísimo para ver su carita.",
    fruta: { emoji: "🍉", nombre: "sandía grande", medida: "52-54 cm" },
    animal: { emoji: "🐕", nombre: "perro grande adulto", medida: "53 cm" },
    comida: { emoji: "🎃", nombre: "calabaza grande", medida: "52-54 cm" },
  },
  42: {
    semana: 42,
    titulo: "El encuentro inminente",
    desarrollo:
      "Los bebés que nacen en esta semana suelen llegar con la piel un poquito peladita, el pelito más largo y las uñas larguitas, ¡totalmente listos para abrazarte! Ya no puede crecer más ahí dentro.",
    tamano: "Tamaño de una gran sandía o calabaza (unos 52-54 cm).",
    consejo:
      "En esta semana, los médicos suelen dar un 'empujoncito' e inducir el parto para que todo sea seguro. Tranquila, prepárate, ¡porque el momento de conocer a tu bebé ya está aquí!",
    fruta: { emoji: "🍉", nombre: "sandía muy grande", medida: "52-54 cm" },
    animal: { emoji: "🐕", nombre: "perro adulto grande", medida: "54 cm" },
    comida: { emoji: "🎃", nombre: "calabaza enorme", medida: "52-54 cm" },
  },
};

/**
 * Obtiene la información de una semana, o un mensaje genérico si está fuera de rango
 */
export function getInfoSemana(semana: number): InfoSemana | null {
  if (semana < 1 || semana > 42) return null;
  return SEMANAS[semana] ?? null;
}
