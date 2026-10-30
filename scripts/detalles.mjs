// Contenido de las páginas individuales de cada servicio.
// Clave = id del servicio en build.mjs.
// intro: párrafo principal · recibes: entregables · proceso: [título, descripción]
// necesitamos: lo que pedimos al cliente · faqs: [pregunta, respuesta] · relacionados: ids

export const DETALLES = {
  renders: {
    intro: "Un render bien hecho vende un proyecto antes de que exista. Convertimos tus planos, bocetos o ideas en imágenes fotorrealistas y recorridos virtuales para presentar a clientes, inversionistas o socios, aprobar decisiones de diseño y lanzar preventas con confianza.",
    recibes: ["Imágenes en alta resolución listas para web e impresión", "Versiones optimizadas para redes sociales", "Recorrido o animación en video (si se contrata)", "Archivos del modelo 3D a solicitud"],
    proceso: [
      ["Brief y referencias", "Revisamos planos, medidas, materiales y el estilo que buscas."],
      ["Modelado 3D", "Construimos el modelo y te enviamos vistas preliminares de encuadres."],
      ["Materiales y luz", "Aplicamos acabados, mobiliario e iluminación realista."],
      ["Render final", "Hacemos ajustes con tus comentarios y entregamos en alta calidad."],
    ],
    necesitamos: ["Planos, bocetos o medidas del proyecto", "Referencias de estilo, materiales y acabados", "Número de vistas o tomas que necesitas", "Uso final de las imágenes (web, impreso, preventa)"],
    faqs: [
      ["¿Puedo pedir cambios?", "Sí. Cada proyecto incluye rondas de revisión; el número exacto queda definido en tu propuesta."],
      ["¿Necesito tener planos profesionales?", "No necesariamente. Podemos trabajar con bocetos a mano y medidas aproximadas, aunque mientras más información tengamos, más preciso será el resultado."],
      ["¿Hacen recorridos virtuales en video?", "Sí. Además de imágenes fijas producimos animaciones y recorridos para presentaciones, redes y preventas."],
      ["¿Cuánto tiempo toma?", "Depende del número de vistas y la complejidad. Te damos una fecha de entrega clara en la propuesta antes de empezar."],
    ],
    relacionados: ["interiores", "drone", "paginas-web"],
  },

  industrial: {
    intro: "Llevamos tu producto de una idea en papel a un diseño listo para fabricarse. Pensamos en cómo se usa, cómo se ve y cómo se produce, para que tu producto sea funcional, atractivo y viable de manufacturar desde el primer prototipo.",
    recibes: ["Propuestas de concepto y bocetos", "Modelo CAD 3D del producto", "Renders del diseño final", "Archivos técnicos para manufactura o impresión 3D"],
    proceso: [
      ["Investigación", "Entendemos al usuario, el uso del producto y su competencia."],
      ["Concepto", "Exploramos alternativas en bocetos y elegimos una dirección contigo."],
      ["Diseño CAD", "Desarrollamos el modelo 3D con medidas, ensambles y detalles."],
      ["Prototipo y ajuste", "Validamos con un prototipo físico y preparamos archivos finales."],
    ],
    necesitamos: ["Descripción del producto y del problema que resuelve", "Bocetos, fotos o referencias si las tienes", "Medidas, materiales o restricciones conocidas", "Volumen de producción que tienes en mente"],
    faqs: [
      ["¿Pueden fabricar el prototipo?", "Sí. Con nuestra área de Fabricación imprimimos en 3D o cortamos en CNC el prototipo para que lo tengas en tus manos."],
      ["¿Mi idea queda protegida?", "Podemos firmar un acuerdo de confidencialidad antes de que nos compartas los detalles de tu producto."],
      ["¿Me ayudan a encontrar fabricante?", "Te entregamos archivos técnicos listos para que cualquier fabricante pueda cotizar y producir tu pieza."],
    ],
    relacionados: ["impresion-3d", "renders", "branding"],
  },

  interiores: {
    intro: "Diseñamos espacios que se ven bien y funcionan para quien los usa. Desde un departamento hasta un restaurante o una oficina, definimos distribución, materiales, iluminación y mobiliario, y te mostramos el resultado en renders antes de invertir en obra.",
    recibes: ["Plano de distribución y mobiliario", "Paleta de materiales, colores y acabados", "Renders del espacio terminado", "Lista de mobiliario y piezas a medida"],
    proceso: [
      ["Visita y levantamiento", "Conocemos el espacio, tomamos medidas y escuchamos cómo lo usas."],
      ["Propuesta de diseño", "Presentamos distribución, estilo y paleta de materiales."],
      ["Renders", "Visualizas el espacio terminado y hacemos ajustes antes de construir."],
      ["Proyecto final", "Entregamos planos, especificaciones y piezas a medida listas para ejecutar."],
    ],
    necesitamos: ["Ubicación y medidas del espacio (o acceso para medirlo)", "Fotos del estado actual", "Ideas, referencias o estilos que te gustan", "Presupuesto aproximado para la obra y mobiliario"],
    faqs: [
      ["¿Trabajan espacios comerciales?", "Sí. Diseñamos casas y departamentos, pero también restaurantes, locales, oficinas y showrooms."],
      ["¿Pueden fabricar muebles a medida?", "Sí. Con nuestro corte CNC fabricamos mobiliario, repisas, paneles y señalética para tu espacio."],
      ["¿Puedo ver cómo quedará antes de construir?", "Siempre. Cada proyecto incluye renders para que apruebes el diseño antes de invertir en obra."],
    ],
    relacionados: ["renders", "cnc", "fotografia"],
  },

  "impresion-3d": {
    intro: "Imprimimos en 3D prototipos, piezas funcionales y objetos personalizados. Es la forma más rápida de pasar de un archivo a algo que puedes tocar, probar y mostrar, sin moldes ni pedidos mínimos.",
    recibes: ["Piezas impresas listas para usar o presentar", "Asesoría de material según el uso", "Acabado según lo acordado (lijado, pintura, ensamble)", "Ajustes al archivo si la pieza lo requiere"],
    proceso: [
      ["Revisión del archivo", "Verificamos que tu modelo sea imprimible o lo modelamos por ti."],
      ["Material y cotización", "Elegimos material, resolución y acabado según el uso."],
      ["Impresión", "Imprimimos la pieza y revisamos medidas y calidad."],
      ["Acabado y entrega", "Hacemos post-proceso y te entregamos la pieza lista."],
    ],
    necesitamos: ["Archivo 3D (STL, OBJ, STEP) o una idea, foto o boceto", "Medidas aproximadas de la pieza", "Para qué se va a usar (prototipo, pieza funcional, decorativa)", "Número de piezas"],
    faqs: [
      ["No tengo archivo 3D, ¿pueden ayudarme?", "Sí. Modelamos la pieza a partir de una foto, un boceto o una pieza existente."],
      ["¿Hacen lotes de varias piezas?", "Sí. Producimos desde una pieza única hasta lotes cortos, sin necesidad de moldes."],
      ["¿Qué tan resistentes son las piezas?", "Depende del material. Te recomendamos el adecuado según si la pieza es decorativa, funcional o de uso rudo."],
    ],
    relacionados: ["industrial", "cnc", "fotografia-producto"],
  },

  cnc: {
    intro: "Cortamos y grabamos con precisión en madera, MDF, acrílico y otros materiales. Ideal para letreros, displays, mobiliario, regalos corporativos y piezas a medida con un acabado limpio y profesional.",
    recibes: ["Piezas cortadas o grabadas listas para instalar o entregar", "Revisión y preparación de tu diseño para corte", "Asesoría de material y grosor", "Acabado según lo acordado"],
    proceso: [
      ["Diseño", "Recibimos tu archivo o diseñamos la pieza contigo."],
      ["Prueba y material", "Definimos material, grosor y hacemos pruebas si es necesario."],
      ["Corte y grabado", "Producimos las piezas con precisión."],
      ["Acabado", "Lijamos, ensamblamos o pintamos y te entregamos."],
    ],
    necesitamos: ["Diseño o logotipo en vector (AI, SVG, DXF, PDF) o una idea", "Medidas de la pieza", "Material deseado", "Cantidad de piezas"],
    faqs: [
      ["¿Qué materiales trabajan?", "Principalmente madera, MDF, triplay y acrílico. Si necesitas otro material, pregúntanos."],
      ["Solo tengo mi logo en imagen, ¿sirve?", "Sí. Lo vectorizamos para que pueda cortarse o grabarse con precisión."],
      ["¿Hacen pedidos grandes para eventos?", "Sí. Producimos señalética, displays y recuerdos en cantidad para eventos y marcas."],
    ],
    relacionados: ["interiores", "branding", "impresion-3d"],
  },

  branding: {
    intro: "Tu marca es lo que la gente recuerda de ti. Construimos identidades completas y coherentes, desde el nombre y el logotipo hasta cómo se ve tu marca en redes, empaques y en tu local, para que te reconozcan y te elijan.",
    recibes: ["Logotipo y sus variantes", "Paleta de colores y tipografías", "Manual de identidad de marca", "Aplicaciones: papelería, redes, empaque o señalética"],
    proceso: [
      ["Descubrimiento", "Entendemos tu negocio, tu cliente y lo que te hace diferente."],
      ["Concepto", "Definimos personalidad, tono y dirección visual de la marca."],
      ["Diseño", "Presentamos propuestas de logotipo y sistema visual."],
      ["Manual y aplicaciones", "Entregamos el manual y las piezas listas para usar."],
    ],
    necesitamos: ["Nombre del negocio (o ayuda para definirlo)", "A qué te dedicas y quién es tu cliente", "Marcas o estilos que te gustan y que no", "Dónde se va a usar la marca (redes, local, empaque)"],
    faqs: [
      ["¿Pueden renovar una marca que ya tengo?", "Sí. Podemos actualizar tu identidad manteniendo lo que ya reconocen tus clientes."],
      ["¿Me entregan los archivos editables?", "Sí. Recibes tu logotipo en todos los formatos necesarios para digital e impresión."],
      ["¿Me ayudan con el nombre?", "Sí. El naming forma parte del servicio cuando la marca es nueva."],
    ],
    relacionados: ["paginas-web", "fotografia-producto", "cnc"],
  },

  fotografia: {
    intro: "Fotografía profesional que muestra lo mejor de tu espacio, tu equipo y tu marca. Imágenes con luz y composición cuidadas para redes, sitio web, prensa y materiales de venta.",
    recibes: ["Galería de fotos editadas en alta resolución", "Versiones optimizadas para web y redes", "Selección y retoque profesional", "Derechos de uso para tu marca"],
    proceso: [
      ["Planeación", "Definimos el objetivo, la lista de tomas y el estilo visual."],
      ["Sesión", "Fotografiamos en tu espacio o en locación."],
      ["Selección", "Elegimos las mejores tomas contigo."],
      ["Edición y entrega", "Retocamos y entregamos tu galería lista para usar."],
    ],
    necesitamos: ["Tipo de sesión (espacio, equipo, marca, evento)", "Ubicación y fecha tentativa", "Referencias de estilo", "Uso de las fotos (redes, web, prensa)"],
    faqs: [
      ["¿Van a mi local u oficina?", "Sí. Hacemos sesiones en tu espacio o en la locación que elijas."],
      ["¿Cubren eventos?", "Sí. Cubrimos lanzamientos, eventos corporativos y sociales."],
      ["¿Puedo usar las fotos en anuncios?", "Sí. Las fotos son para uso de tu marca en redes, web y publicidad."],
    ],
    relacionados: ["fotografia-producto", "drone", "edicion-video"],
  },

  "fotografia-producto": {
    intro: "Una buena foto de producto es la diferencia entre que alguien compre o se vaya. Hacemos fotos limpias, consistentes y atractivas para tu tienda en línea, marketplaces, catálogos y anuncios.",
    recibes: ["Fotos con fondo blanco listas para marketplaces", "Fotos ambientadas o de estilo de vida", "Detalles, texturas y empaque", "Archivos optimizados para web y para cada plataforma"],
    proceso: [
      ["Lista de productos", "Definimos productos, ángulos y estilo de cada toma."],
      ["Envío o entrega", "Recibimos tus productos en estudio o vamos a tu ubicación."],
      ["Sesión", "Fotografiamos con iluminación de estudio y estilismo."],
      ["Retoque y entrega", "Editamos y entregamos en los formatos de cada plataforma."],
    ],
    necesitamos: ["Lista de productos y cantidad", "Muestras físicas de los productos", "Plataformas donde vas a vender (Shopify, Amazon, Mercado Libre…)", "Referencias de estilo"],
    faqs: [
      ["¿Cumplen los requisitos de Amazon y Mercado Libre?", "Sí. Entregamos fotos con fondo blanco y tamaños que piden los principales marketplaces."],
      ["¿Hacen fotos ambientadas?", "Sí. Además del fondo blanco hacemos tomas de estilo de vida que muestran el producto en uso."],
      ["¿Tengo que enviar los productos?", "Puedes enviarlos o llevarlos; te los regresamos al terminar la sesión."],
    ],
    relacionados: ["ecommerce", "edicion-video", "marketing"],
  },

  drone: {
    intro: "Las tomas aéreas dan escala, contexto y espectacularidad. Grabamos con drone desarrollos inmobiliarios, terrenos, eventos y lugares turísticos para que tu proyecto se vea como nunca.",
    recibes: ["Video aéreo en alta resolución", "Fotografías aéreas editadas", "Video final editado con música", "Clips para redes en formato vertical"],
    proceso: [
      ["Planeación de vuelo", "Revisamos ubicación, permisos, clima y tomas necesarias."],
      ["Vuelo", "Grabamos en el horario de mejor luz para tu proyecto."],
      ["Edición", "Seleccionamos y editamos las mejores tomas."],
      ["Entrega", "Recibes video final, fotos y clips para redes."],
    ],
    necesitamos: ["Ubicación exacta del lugar", "Fecha tentativa y horario preferido", "Tipo de tomas que buscas", "Uso del material (preventa, evento, redes)"],
    faqs: [
      ["¿Pueden volar en cualquier lugar?", "Revisamos cada ubicación antes del vuelo. Algunas zonas tienen restricciones y te lo confirmamos en la planeación."],
      ["¿Qué pasa si llueve?", "Reprogramamos el vuelo sin costo para cuidar la calidad y la seguridad."],
      ["¿Cubren bodas y eventos?", "Sí. Grabamos bodas, eventos sociales y corporativos."],
    ],
    relacionados: ["edicion-video", "renders", "fotografia"],
  },

  "edicion-video": {
    intro: "Convertimos tu material en videos que la gente sí ve. Editamos reels, anuncios, videos de marca y eventos con ritmo, música, color y subtítulos listos para publicar.",
    recibes: ["Video final en la calidad y formato que necesitas", "Versiones verticales y horizontales", "Subtítulos y gráficos en pantalla", "Música con licencia de uso"],
    proceso: [
      ["Brief", "Definimos objetivo, duración, plataforma y estilo."],
      ["Primer corte", "Armamos la historia con tu material."],
      ["Revisión", "Hacemos ajustes con tus comentarios."],
      ["Color, audio y entrega", "Pulimos color y sonido, y exportamos en cada formato."],
    ],
    necesitamos: ["Tu material en video (o lo grabamos nosotros)", "Plataforma donde se publicará", "Logotipo y recursos de marca", "Referencias de videos que te gustan"],
    faqs: [
      ["No tengo material grabado, ¿pueden grabar?", "Sí. Podemos grabar en tierra o con drone y luego editar."],
      ["¿Hacen paquetes mensuales de reels?", "Sí. Podemos editar contenido de forma recurrente para tus redes."],
      ["¿Agregan subtítulos?", "Sí. La mayoría de la gente ve videos sin sonido, así que los incluimos."],
    ],
    relacionados: ["drone", "marketing", "fotografia"],
  },

  "paginas-web": {
    intro: "Tu página web trabaja por ti las 24 horas. Diseñamos sitios y landing pages rápidos, bonitos y pensados para convertir visitas en clientes, que se ven perfectos en celular y que puedes actualizar con facilidad.",
    recibes: ["Sitio o landing page publicado en tu dominio", "Diseño adaptado a celular, tablet y computadora", "Formulario o botón de contacto por WhatsApp", "Configuración básica de SEO y analítica"],
    proceso: [
      ["Estrategia", "Definimos objetivo, público y estructura de la página."],
      ["Diseño", "Te presentamos el diseño con tus textos e imágenes."],
      ["Desarrollo", "Construimos la página rápida y adaptada a celular."],
      ["Publicación", "La conectamos a tu dominio y la ponemos en línea."],
    ],
    necesitamos: ["Información de tu negocio y servicios", "Logotipo, fotos y textos (o los creamos contigo)", "Dominio, si ya tienes uno", "Páginas de referencia que te gusten"],
    faqs: [
      ["¿Cuál es la diferencia entre sitio web y landing page?", "Una landing page es una sola página enfocada en una acción, como cotizar o comprar. Un sitio web tiene varias páginas y presenta todo tu negocio."],
      ["¿Me ayudan con el dominio?", "Sí. Te ayudamos a comprarlo o a conectar el que ya tienes."],
      ["¿Puedo hacer cambios después?", "Sí. Podemos darte mantenimiento o dejarte una forma sencilla de editar textos."],
    ],
    relacionados: ["branding", "marketing", "ecommerce"],
  },

  marketing: {
    intro: "Atraemos clientes con estrategia, contenido y campañas pagadas. Planeamos qué publicar, gestionamos tus redes y lanzamos anuncios en Meta y Google, midiendo los resultados para invertir mejor cada mes.",
    recibes: ["Estrategia y calendario de contenido", "Publicaciones diseñadas y programadas", "Campañas en Meta Ads y Google Ads", "Reporte mensual de resultados"],
    proceso: [
      ["Diagnóstico", "Revisamos tus redes, competencia y objetivos de venta."],
      ["Estrategia", "Definimos mensajes, público, canales y presupuesto."],
      ["Ejecución", "Creamos contenido y lanzamos campañas."],
      ["Medición", "Analizamos resultados y optimizamos cada mes."],
    ],
    necesitamos: ["Acceso a tus redes sociales y cuentas publicitarias", "Objetivos claros (ventas, citas, visitas)", "Presupuesto para anuncios", "Recursos de marca: logo, fotos y videos"],
    faqs: [
      ["¿El presupuesto de anuncios está incluido?", "No. El presupuesto que se paga a Meta o Google es aparte de nuestro servicio, y tú decides cuánto invertir."],
      ["¿Cuándo veo resultados?", "Las campañas empiezan a generar datos desde los primeros días; los resultados mejoran conforme optimizamos con esa información."],
      ["¿Hay contrato forzoso?", "Te explicamos las condiciones del servicio en tu propuesta antes de empezar."],
    ],
    relacionados: ["edicion-video", "paginas-web", "ia"],
  },

  ecommerce: {
    intro: "Montamos tu tienda en línea completa para que vendas, cobres y envíes sin complicaciones. Configuramos productos, pagos, envíos y todo lo necesario para que tus clientes compren fácil desde el celular.",
    recibes: ["Tienda en línea publicada y lista para vender", "Catálogo de productos cargado", "Pagos y envíos configurados", "Capacitación para administrar tu tienda"],
    proceso: [
      ["Planeación", "Definimos plataforma, catálogo, métodos de pago y envío."],
      ["Diseño", "Adaptamos la tienda a tu marca."],
      ["Configuración", "Cargamos productos y configuramos pagos y envíos."],
      ["Lanzamiento", "Probamos compras, publicamos y te capacitamos."],
    ],
    necesitamos: ["Lista de productos con precios y descripciones", "Fotos de producto (o las hacemos nosotros)", "Datos para recibir pagos", "Logotipo y recursos de marca"],
    faqs: [
      ["¿Qué plataforma usan?", "Trabajamos principalmente con Shopify y te recomendamos la mejor opción según tu negocio."],
      ["¿Puedo administrar la tienda yo mismo?", "Sí. Te capacitamos para que agregues productos, revises pedidos y hagas cambios."],
      ["¿Ayudan con las fotos de producto?", "Sí. Con nuestro servicio de Fotografía de Producto tu tienda se ve profesional desde el día uno."],
    ],
    relacionados: ["fotografia-producto", "marketing", "paginas-web"],
  },

  ia: {
    intro: "La inteligencia artificial puede atender a tus clientes, automatizar tareas repetitivas y ahorrarte horas cada semana. Diseñamos herramientas de IA a la medida de tu negocio, fáciles de usar para ti y tu equipo.",
    recibes: ["Herramienta o automatización funcionando", "Integración con tus canales (WhatsApp, web, correo)", "Capacitación para tu equipo", "Documentación de uso"],
    proceso: [
      ["Diagnóstico", "Identificamos qué tareas consumen más tiempo en tu negocio."],
      ["Propuesta", "Diseñamos la solución de IA y el impacto esperado."],
      ["Desarrollo", "Construimos, conectamos y probamos la herramienta."],
      ["Implementación", "La ponemos en marcha y capacitamos a tu equipo."],
    ],
    necesitamos: ["Descripción de los procesos que quieres automatizar", "Herramientas que ya usas (CRM, WhatsApp, hojas de cálculo)", "Preguntas frecuentes de tus clientes", "Una persona de tu equipo como contacto"],
    faqs: [
      ["¿Necesito saber de tecnología?", "No. Diseñamos las herramientas para que tú y tu equipo las usen sin conocimientos técnicos."],
      ["¿Qué puede hacer un chatbot por mi negocio?", "Responder preguntas frecuentes, dar información de productos, agendar citas y pasar a un humano cuando hace falta."],
      ["¿Mis datos están seguros?", "Diseñamos cada solución cuidando la información de tu negocio y de tus clientes."],
    ],
    relacionados: ["marketing", "paginas-web", "ecommerce"],
  },
};
