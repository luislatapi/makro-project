// Catálogo de productos de Makro Project.
// Para agregar un producto, copia un bloque, cambia el id (será la URL: /productos/<id>/) y el contenido,
// y ejecuta `node scripts/build.mjs`.
//
// Campos:
//   id, nombre, icon (de ICON en build.mjs), etiqueta (texto corto: técnica o material)
//   resumen: una línea para la tarjeta del catálogo
//   intro: párrafo principal de la página
//   opciones: [titulo, [detalles...]]  → materiales, tamaños, variantes
//   usos: dónde o para qué se usa
//   personaliza: qué puede elegir el cliente
//   proceso: [titulo, descripcion]
//   necesitamos: lo que pedimos para cotizar
//   faqs: [pregunta, respuesta]
//   relacionados: ids de servicios (build.mjs)
//   imagenes: rutas de fotos dentro de assets/ (opcional). Ej: ["productos/celosias/1.jpg"]

export const PRODUCTOS = [
  {
    id: "celosias",
    nombre: "Celosías CNC",
    icon: "lattice",
    etiqueta: "Metal y madera · Corte CNC",
    resumen: "Celosías decorativas a la medida en madera o metal para dividir espacios, fachadas, plafones y muebles.",
    intro: "Las celosías dan privacidad, dejan pasar la luz y convierten un muro, una fachada o un divisor en una pieza de diseño. Las cortamos en CNC con precisión, en madera o en metal, con diseños de catálogo o creados especialmente para tu espacio.",
    opciones: [
      ["Madera", ["MDF para interiores y acabados pintados", "Triplay y maderas con veta natural", "Acabado natural, barniz o pintura"]],
      ["Metal", ["Lámina de acero o aluminio", "Ideal para fachadas y exteriores", "Acabado en pintura del color que elijas"]],
    ],
    usos: ["Divisores de ambientes", "Fachadas y bardas decorativas", "Plafones y muros", "Cabeceras y frentes de muebles", "Puertas de closet y cubre-radiadores", "Restaurantes, oficinas y locales"],
    personaliza: ["Diseño de catálogo o 100 % personalizado", "Tu logotipo o patrón de marca integrado", "Medidas exactas para tu espacio", "Material, grosor y acabado"],
    proceso: [
      ["Medidas y uso", "Nos compartes el espacio, las medidas y si va en interior o exterior."],
      ["Diseño", "Elegimos un patrón o lo diseñamos y te mostramos cómo se verá."],
      ["Corte CNC", "Cortamos las piezas con precisión en el material elegido."],
      ["Acabado y entrega", "Aplicamos el acabado y te entregamos las piezas listas para instalar."],
    ],
    necesitamos: ["Medidas del espacio (ancho y alto)", "Material preferido: madera o metal", "Ubicación: interior o exterior", "Diseño o referencias que te gusten", "Cantidad de piezas"],
    faqs: [
      ["¿Puedo usar mi propio diseño?", "Sí. Podemos cortar tu diseño, integrar tu logotipo o crear un patrón exclusivo para tu proyecto."],
      ["¿Cuál material me conviene?", "Para interiores, la madera y el MDF dan calidez y se pintan fácilmente. Para exteriores y fachadas recomendamos metal con acabado de protección."],
      ["¿Hacen piezas grandes?", "Sí. Las celosías grandes se dividen en módulos que se unen al instalar, para cubrir muros o fachadas completas."],
      ["¿Las instalan?", "Te entregamos las piezas listas para instalar. Si necesitas instalación, coméntalo al cotizar."],
    ],
    relacionados: ["cnc", "interiores", "renders"],
    imagenes: [],
  },
  {
    id: "trofeos",
    nombre: "Trofeos Deportivos",
    icon: "trophy",
    etiqueta: "Impresos en 3D · Personalizados",
    resumen: "Trofeos y medallas únicos impresos en 3D para torneos, ligas, carreras y eventos, con el diseño de tu evento.",
    intro: "Olvídate de los trofeos genéricos de catálogo. Diseñamos e imprimimos en 3D trofeos únicos para tu torneo, liga o evento, con la forma de tu deporte, los colores de tu equipo y el nombre de cada ganador.",
    opciones: [
      ["Diseños", ["Figuras y formas de cada deporte", "Diseño exclusivo para tu evento", "Versiones para 1º, 2º y 3º lugar"]],
      ["Acabados", ["Colores de tu equipo o evento", "Acabados metalizados (oro, plata, bronce)", "Base con placa grabada"]],
    ],
    usos: ["Torneos de fútbol, pádel, tenis y más", "Ligas amateur y escolares", "Carreras y eventos deportivos", "Torneos de esports", "Premiaciones corporativas", "Reconocimientos y regalos"],
    personaliza: ["Nombre del torneo, fecha y categoría", "Logotipo del evento o patrocinadores", "Nombre de cada ganador", "Tamaño y colores"],
    proceso: [
      ["Brief", "Nos cuentas el deporte, el evento, la cantidad y la fecha."],
      ["Diseño 3D", "Diseñamos el trofeo y te mostramos un render para aprobarlo."],
      ["Impresión", "Imprimimos cada pieza en 3D."],
      ["Acabado y entrega", "Pintamos, personalizamos y entregamos listos para la premiación."],
    ],
    necesitamos: ["Deporte y nombre del evento", "Cantidad de trofeos por lugar (1º, 2º, 3º…)", "Logotipo del torneo o patrocinadores", "Textos: nombres, fecha, categoría", "Fecha de la premiación"],
    faqs: [
      ["¿Hay un mínimo de piezas?", "No. Hacemos desde un trofeo único hasta lotes completos para todas las categorías de tu torneo."],
      ["¿Puedo ver el diseño antes de producirlo?", "Sí. Te enviamos un render del trofeo para que lo apruebes antes de imprimir."],
      ["¿Con cuánto tiempo debo pedirlos?", "Depende del diseño y la cantidad. Escríbenos con anticipación a tu premiación y te confirmamos la fecha de entrega en la cotización."],
      ["¿Pueden hacer medallas también?", "Sí. Podemos diseñar medallas y reconocimientos que combinen con tus trofeos."],
    ],
    relacionados: ["impresion-3d", "branding", "industrial"],
    imagenes: [],
  },
];
