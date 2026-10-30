// Generador del sitio Makro Project → escribe el HTML estático en la raíz del repo.
// Uso: node scripts/build.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { DETALLES } from "./detalles.mjs";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..");

const ICON = {
  render: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
  industrial: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  interior: '<path d="M3 21V10l9-7 9 7v11"/><path d="M7 21v-6h10v6"/><path d="M7 15v-2h10v2"/>',
  print3d: '<rect x="3" y="3" width="18" height="6" rx="1"/><path d="M12 9v4"/><path d="m9 13 3 3 3-3"/><path d="M6 21h12M8 18h8"/>',
  cnc: '<path d="M4 20h16"/><path d="M12 3v9"/><path d="m9 12 3 4 3-4"/><path d="M6 20c0-2 2-3 6-3s6 1 6 3"/>',
  branding: '<path d="M12 2 2 7l10 5 10-5-10-5Z" opacity=".0"/><circle cx="8" cy="8" r="5"/><rect x="11" y="11" width="10" height="10" rx="1"/>',
  photo: '<rect x="2" y="6" width="20" height="14" rx="2"/><circle cx="12" cy="13" r="4"/><path d="M8 6l2-3h4l2 3"/>',
  drone: '<circle cx="5" cy="5" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="m7 7 2 2m8-2-2 2m-8 8 2-2m8 2-2-2"/>',
  marketing: '<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12"/>',
  ecommerce: '<path d="M3 4h2l2.5 11h11L21 7H6.2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/>',
  ai: '<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/><path d="M9.5 15 11 9h2l1.5 6M10 13h4"/>',
  video: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="m10 9 5 3-5 3V9Z"/><path d="M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  web: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20"/><path d="M5 6.5h.01M8 6.5h.01"/><path d="M6 13h7M6 16h4"/><rect x="15" y="12" width="4" height="5" rx=".5"/>',
  product: '<path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z"/><path d="m4 7 8 4 8-4M12 11v10"/><path d="M18 2l1 1.5M21 4.5 19.5 5M15.5 2.2 16 3.8"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
};
const icon = (k, cls = "ico") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;

const CATS = [
  {
    slug: "diseno",
    num: "01",
    name: "Diseño",
    tag: "Idea → forma",
    lead: "Convertimos ideas en proyectos visibles: renders que venden antes de construir, productos pensados para fabricarse y espacios que se sienten bien.",
    services: [
      {
        id: "renders", icon: "render", name: "Diseño y Renders",
        desc: "Modelado 3D y visualización fotorrealista para presentar, aprobar y vender un proyecto antes de que exista.",
        incl: ["Modelado 3D a partir de bocetos o planos", "Renders fotorrealistas interiores y exteriores", "Recorridos virtuales y animaciones", "Imágenes de producto para catálogo y ecommerce"],
        para: "Desarrolladores, arquitectos, marcas de producto",
      },
      {
        id: "industrial", icon: "industrial", name: "Diseño Industrial",
        desc: "Diseñamos productos funcionales, estéticos y listos para producirse, desde el concepto hasta el archivo de fabricación.",
        incl: ["Conceptualización y bocetaje", "Modelado CAD paramétrico", "Prototipos funcionales", "Archivos técnicos para manufactura"],
        para: "Emprendedores con un producto nuevo, fabricantes, startups de hardware",
      },
      {
        id: "interiores", icon: "interior", name: "Diseño de Interiores",
        desc: "Espacios residenciales y comerciales que reflejan quién eres y funcionan para cómo los usas.",
        incl: ["Distribución y planos de mobiliario", "Paleta de materiales y acabados", "Renders del espacio terminado", "Mobiliario a medida (con nuestra área de fabricación)"],
        para: "Casas, departamentos, oficinas, restaurantes y locales",
      },
    ],
  },
  {
    slug: "fabricacion",
    num: "02",
    name: "Fabricación",
    tag: "Forma → objeto",
    lead: "Del archivo a la pieza física. Prototipos, piezas únicas y producción en serie corta con impresión 3D y CNC.",
    services: [
      {
        id: "impresion-3d", icon: "print3d", name: "Impresión en 3D",
        desc: "Prototipos rápidos, piezas funcionales y objetos personalizados impresos con precisión.",
        incl: ["Prototipado rápido para validar diseños", "Piezas funcionales y de repuesto", "Maquetas arquitectónicas", "Producción de lotes cortos"],
        para: "Diseñadores, ingenieros, arquitectos, marcas",
      },
      {
        id: "cnc", icon: "cnc", name: "Corte y Grabado CNC",
        desc: "Corte y grabado de alta precisión en madera, MDF, acrílico y más, para piezas, letreros y mobiliario.",
        incl: ["Corte de piezas en madera, MDF y acrílico", "Grabado de logotipos y texto", "Letreros, displays y señalética", "Mobiliario y piezas a medida"],
        para: "Negocios, eventos, tiendas, proyectos de interiores",
      },
    ],
  },
  {
    slug: "marca",
    num: "03",
    name: "Marca",
    tag: "Objeto → identidad",
    lead: "Construimos la identidad de tu marca: un nombre, un logotipo y un sistema visual que te hacen reconocible en cualquier lugar.",
    services: [
      {
        id: "branding", icon: "branding", name: "Branding",
        desc: "Identidades de marca completas y coherentes, listas para aplicarse en digital, impreso y físico.",
        incl: ["Naming y concepto de marca", "Logotipo y sistema visual", "Manual de identidad", "Aplicaciones: empaque, papelería, señalética"],
        para: "Marcas nuevas o que necesitan renovarse",
      },
    ],
  },
  {
    slug: "contenido",
    num: "04",
    name: "Contenido",
    tag: "Identidad → imagen",
    lead: "Producimos la imagen de tu marca: fotografía, tomas aéreas y video listos para redes, tu tienda y tus campañas.",
    services: [
      {
        id: "fotografia", icon: "photo", name: "Fotografía",
        desc: "Fotografía profesional de espacios, marca y eventos para redes, prensa y sitios web.",
        incl: ["Fotografía de espacios e interiores", "Sesiones de marca, retrato y equipo", "Cobertura de eventos", "Edición y retoque"],
        para: "Restaurantes, inmobiliarias, marcas personales, empresas",
      },
      {
        id: "fotografia-producto", icon: "product", name: "Fotografía de Producto",
        desc: "Fotos de producto que venden: limpias, consistentes y listas para tu tienda en línea, marketplaces y anuncios.",
        incl: ["Fondo blanco para Amazon, Mercado Libre y Shopify", "Fotos de estilo de vida y ambientadas", "Detalles, texturas y empaque", "Retoque y entrega optimizada para web"],
        para: "Tiendas en línea, marcas de producto, catálogos",
      },
      {
        id: "drone", icon: "drone", name: "Grabación con Drone",
        desc: "Tomas aéreas en foto y video que dan escala y espectacularidad a tu proyecto o evento.",
        incl: ["Video y foto aérea en alta resolución", "Recorridos de desarrollos y terrenos", "Cobertura de eventos y bodas", "Edición de video final"],
        para: "Inmobiliarias, constructoras, eventos, turismo",
      },
      {
        id: "edicion-video", icon: "video", name: "Edición de Video",
        desc: "Editamos tu material en piezas listas para publicar: reels, anuncios, videos de marca y eventos.",
        incl: ["Reels y videos cortos para redes", "Videos promocionales y de marca", "Corrección de color y audio", "Subtítulos, gráficos y música"],
        para: "Marcas, creadores, negocios y eventos",
      },
    ],
  },
  {
    slug: "crecimiento-digital",
    num: "05",
    name: "Crecimiento Digital",
    tag: "Imagen → ventas",
    lead: "Llevamos tu marca a vender en línea: sitio web, tienda, campañas y herramientas de inteligencia artificial que trabajan por tu negocio.",
    services: [
      {
        id: "paginas-web", icon: "web", name: "Creación de Páginas Web y Landing Pages",
        desc: "Sitios web y landing pages rápidos, bonitos y pensados para convertir visitas en clientes.",
        incl: ["Sitios web corporativos y de servicios", "Landing pages para campañas y lanzamientos", "Diseño adaptado a celular", "Dominio, hosting y formularios de contacto"],
        para: "Negocios que necesitan presencia en línea o una página para vender",
      },
      {
        id: "marketing", icon: "marketing", name: "Marketing Digital",
        desc: "Estrategia, contenido y campañas pagadas para atraer clientes y medir cada peso invertido.",
        incl: ["Estrategia y calendario de contenido", "Gestión de redes sociales", "Campañas en Meta y Google Ads", "Reportes de resultados"],
        para: "Negocios que quieren más clientes y más ventas",
      },
      {
        id: "ecommerce", icon: "ecommerce", name: "Ecommerce",
        desc: "Tiendas en línea completas, listas para vender, cobrar y enviar.",
        incl: ["Tiendas en Shopify y otras plataformas", "Catálogo y carga de productos", "Pasarelas de pago y envíos", "Optimización de conversión"],
        para: "Marcas que venden o quieren vender en línea",
      },
      {
        id: "ia", icon: "ai", name: "Aplicaciones de IA para Negocios",
        desc: "Automatizaciones y herramientas con inteligencia artificial que ahorran tiempo y atienden a tus clientes.",
        incl: ["Chatbots de atención y ventas", "Automatización de procesos repetitivos", "Generación de contenido con IA", "Herramientas internas a la medida"],
        para: "Negocios que quieren escalar sin crecer la nómina",
      },
    ],
  },
];

const PROCESS = [
  ["Brief", "Nos cuentas tu idea, objetivo y presupuesto."],
  ["Propuesta", "Te enviamos alcance, tiempos y cotización clara."],
  ["Producción", "Diseñamos, fabricamos o lanzamos con revisiones contigo."],
  ["Entrega", "Recibes tu proyecto terminado y listo para usarse."],
];

// r = prefijo hacia la raíz del sitio: "./" (inicio), "../" (área), "../../" (servicio)
const head = (title, desc, r) => `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta name="theme-color" content="#111111">
<link rel="icon" href="${r}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${r}assets/styles.css">
</head>
<body>`;

const nav = (r, active) => {
  const links = CATS.map(
    (c) => `<a href="${r}${c.slug}/"${active === c.slug ? ' aria-current="page"' : ""}><span class="mono">${c.num}</span> ${c.name}</a>`
  ).join("");
  return `<header class="nav">
  <div class="wrap nav-in">
    <a class="logo" href="${r}" aria-label="Makro Project, inicio"><span class="logo-mark">M</span><span>MAKRO<b>PROJECT</b></span></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="menu" aria-label="Abrir menú"><span></span><span></span></button>
    <nav id="menu" class="menu">${links}<a class="btn btn-sm" href="#contacto">Cotizar</a></nav>
  </div>
</header>`;
};

const contact = (preset = "") => `<section class="contact" id="contacto">
  <div class="wrap contact-in">
    <div>
      <p class="eyebrow mono">// Contacto</p>
      <h2>¿Tienes un proyecto?<br>Hablemos.</h2>
      <p class="muted">Cuéntanos qué necesitas y te respondemos con una propuesta. Puedes combinar varios servicios en un solo proyecto.</p>
    </div>
    <form class="form" data-contact>
      <label>Nombre<input name="nombre" required autocomplete="name"></label>
      <label>Servicio
        <select name="servicio">
          <option value="">Selecciona…</option>
          ${CATS.map((c) => `<optgroup label="${c.name}">${c.services.map((s) => `<option${preset === s.name ? " selected" : ""}>${s.name}</option>`).join("")}</optgroup>`).join("")}
          <option>Varios / no estoy seguro</option>
        </select>
      </label>
      <label>Cuéntanos tu proyecto<textarea name="mensaje" rows="4" required></textarea></label>
      <button class="btn" type="submit">Enviar por WhatsApp ${icon("arrow", "ico-sm")}</button>
    </form>
  </div>
</section>`;

const footer = (r) => `<footer class="foot">
  <div class="wrap foot-in">
    <a class="logo" href="${r}"><span class="logo-mark">M</span><span>MAKRO<b>PROJECT</b></span></a>
    <div class="foot-cols">
      ${CATS.map((c) => `<div><a class="foot-h" href="${r}${c.slug}/">${c.name}</a>${c.services.map((s) => `<a href="${r}${c.slug}/${s.id}/">${s.name}</a>`).join("")}</div>`).join("")}
    </div>
    <p class="mono muted small">© <span data-year></span> Makro Project · Diseño, fabricación y crecimiento</p>
  </div>
</footer>
<script src="${r}assets/main.js" defer></script>
</body>
</html>`;

// ---------- HOME ----------
const allServices = CATS.flatMap((c) => c.services.map((s) => ({ ...s, cat: c })));
const byId = Object.fromEntries(allServices.map((s) => [s.id, s]));

const home = `${head("Makro Project · Diseño, fabricación y crecimiento", "Estudio integral: diseño y renders, impresión 3D, CNC, branding, fotografía, drone, video, páginas web, marketing digital, ecommerce e IA para negocios.", "./")}
${nav("./")}
<main>
<section class="hero">
  <div class="grid-bg" aria-hidden="true"></div>
  <div class="wrap hero-in">
    <p class="eyebrow mono">// Estudio de diseño, fabricación y crecimiento</p>
    <h1>De la idea<br>al <span class="hl">mercado</span>,<br>en un solo lugar.</h1>
    <p class="lead">Diseñamos tu proyecto, lo fabricamos, le damos identidad y lo ponemos a vender. Catorce servicios, un solo equipo.</p>
    <div class="hero-cta">
      <a class="btn" href="#servicios">Ver servicios ${icon("arrow", "ico-sm")}</a>
      <a class="btn btn-ghost" href="#contacto">Cotizar proyecto</a>
    </div>
  </div>
  <ol class="wrap flow" aria-label="Cómo se conectan nuestras áreas">
    ${CATS.map((c) => `<li><a href="./${c.slug}/"><span class="mono">${c.num}</span><strong>${c.name}</strong><em class="mono">${c.tag}</em></a></li>`).join("")}
  </ol>
</section>

<section class="section" id="servicios">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow mono">// Áreas</p>
      <h2>Cinco áreas que se conectan</h2>
      <p class="muted">Cada área funciona por separado, pero juntas cubren todo el camino de un proyecto: de la primera idea hasta la primera venta.</p>
    </div>
    <div class="cats">
      ${CATS.map((c) => `<article class="cat">
        <a class="cat-link" href="./${c.slug}/" aria-label="Ver ${c.name}"></a>
        <div class="cat-top"><span class="mono num">${c.num}</span><span class="mono tag">${c.tag}</span></div>
        <h3>${c.name}</h3>
        <p class="muted">${c.lead}</p>
        <ul class="chips">${c.services.map((s) => `<li><a href="./${c.slug}/${s.id}/">${icon(s.icon, "ico-sm")}${s.name}</a></li>`).join("")}</ul>
        <span class="cat-more mono">Ver área ${icon("arrow", "ico-sm")}</span>
      </article>`).join("")}
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow mono">// Todos los servicios</p>
      <h2>Catorce servicios, un equipo</h2>
    </div>
    <div class="svc-grid">
      ${allServices.map((s, i) => `<a class="svc" href="./${s.cat.slug}/${s.id}/">
        <span class="mono small dim">${String(i + 1).padStart(2, "0")} · ${s.cat.name}</span>
        ${icon(s.icon)}
        <strong>${s.name}</strong>
        <span class="small dim">${s.desc}</span>
      </a>`).join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow mono">// Cómo trabajamos</p>
      <h2>Un proceso simple</h2>
    </div>
    <ol class="steps">${PROCESS.map(([t, d], i) => `<li><span class="mono num">0${i + 1}</span><strong>${t}</strong><p class="muted">${d}</p></li>`).join("")}</ol>
  </div>
</section>

<section class="section band">
  <div class="wrap band-in">
    <p class="eyebrow mono">// Ejemplo de proyecto integral</p>
    <p class="band-text">Diseñamos tu producto → imprimimos el prototipo en 3D → creamos la marca y lo fotografiamos → lanzamos tu tienda en línea y las campañas.</p>
  </div>
</section>
${contact()}
</main>
${footer("./")}`;

// ---------- PÁGINAS DE ÁREA ----------
const catPage = (c, idx) => {
  const others = CATS.filter((x) => x.slug !== c.slug);
  const next = CATS[(idx + 1) % CATS.length];
  return `${head(`${c.name} · Makro Project`, c.lead, "../")}
${nav("../", c.slug)}
<main>
<section class="hero hero-sub">
  <div class="grid-bg" aria-hidden="true"></div>
  <div class="wrap hero-in">
    <nav class="crumbs mono small" aria-label="Ruta"><a href="../">Inicio</a> / <span>${c.name}</span></nav>
    <p class="eyebrow mono">// Área ${c.num} · ${c.tag}</p>
    <h1>${c.name}</h1>
    <p class="lead">${c.lead}</p>
    <ul class="chips chips-lg">${c.services.map((s) => `<li><a href="./${s.id}/">${icon(s.icon, "ico-sm")}${s.name}</a></li>`).join("")}</ul>
  </div>
</section>

${c.services.map((s, i) => `<section class="section svc-detail${i % 2 ? " alt" : ""}" id="${s.id}">
  <div class="wrap detail-in">
    <a class="detail-visual" href="./${s.id}/" aria-label="Ver ${s.name}">
      <div class="grid-bg"></div>
      ${icon(s.icon, "ico-xl")}
      <span class="mono small">${c.num}.${i + 1}</span>
    </a>
    <div>
      <p class="eyebrow mono">// ${c.name}</p>
      <h2><a href="./${s.id}/">${s.name}</a></h2>
      <p class="lead-sm">${s.desc}</p>
      <h3 class="mono small label">Incluye</h3>
      <ul class="checks">${s.incl.map((x) => `<li>${x}</li>`).join("")}</ul>
      <p class="muted"><strong>Ideal para:</strong> ${s.para}</p>
      <div class="btn-row">
        <a class="btn" href="./${s.id}/">Ver detalles ${icon("arrow", "ico-sm")}</a>
        <a class="btn btn-ghost" href="#contacto" data-service="${s.name}">Cotizar</a>
      </div>
    </div>
  </div>
</section>`).join("")}

<section class="section section-dark">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow mono">// Combínalo</p>
      <h2>Lo que sigue en tu proyecto</h2>
      <p class="dim">Todas nuestras áreas se conectan. Siguiente paso natural: <a class="ul" href="../${next.slug}/">${next.name}</a>.</p>
    </div>
    <div class="svc-grid svc-grid-3">
      ${others.map((o) => `<a class="svc" href="../${o.slug}/">
        <span class="mono small dim">${o.num} · ${o.tag}</span>
        <strong>${o.name}</strong>
        <span class="small dim">${o.services.map((s) => s.name).join(" · ")}</span>
        <span class="mono small cat-more">Ver área ${icon("arrow", "ico-sm")}</span>
      </a>`).join("")}
    </div>
  </div>
</section>
${contact()}
</main>
${footer("../")}`;
};

// ---------- PÁGINAS DE SERVICIO ----------
const svcPage = (c, s, i) => {
  const d = DETALLES[s.id];
  if (!d) throw new Error(`Falta contenido en detalles.mjs para "${s.id}"`);
  const siblings = c.services.filter((x) => x.id !== s.id);
  const rel = d.relacionados.map((id) => byId[id]).filter(Boolean);
  return `${head(`${s.name} · Makro Project`, s.desc, "../../")}
${nav("../../", c.slug)}
<main>
<section class="hero hero-sub">
  <div class="grid-bg" aria-hidden="true"></div>
  <div class="wrap hero-svc">
    <div>
      <nav class="crumbs mono small" aria-label="Ruta"><a href="../../">Inicio</a> / <a href="../">${c.name}</a> / <span>${s.name}</span></nav>
      <p class="eyebrow mono">// ${c.name} · Servicio ${c.num}.${i + 1}</p>
      <h1 class="h1-svc">${s.name}</h1>
      <p class="lead">${d.intro}</p>
      <div class="hero-cta">
        <a class="btn" href="#contacto">Cotizar ${s.name} ${icon("arrow", "ico-sm")}</a>
        <a class="btn btn-ghost" href="#como">Cómo trabajamos</a>
      </div>
    </div>
    <div class="detail-visual hero-visual" aria-hidden="true">
      <div class="grid-bg"></div>
      ${icon(s.icon, "ico-xl")}
      <span class="mono small">${c.num}.${i + 1}</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="info-grid">
      <article class="info">
        <h2 class="h-sm">Qué incluye</h2>
        <ul class="checks">${s.incl.map((x) => `<li>${x}</li>`).join("")}</ul>
      </article>
      <article class="info">
        <h2 class="h-sm">Qué recibes</h2>
        <ul class="checks">${d.recibes.map((x) => `<li>${x}</li>`).join("")}</ul>
      </article>
      <article class="info info-accent">
        <h2 class="h-sm">Ideal para</h2>
        <p class="info-big">${s.para}</p>
      </article>
    </div>
  </div>
</section>

<section class="section section-dark" id="como">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow mono">// Cómo trabajamos</p>
      <h2>Paso a paso</h2>
    </div>
    <ol class="steps steps-dark">${d.proceso.map(([t, x], k) => `<li><span class="mono num">0${k + 1}</span><strong>${t}</strong><p class="dim">${x}</p></li>`).join("")}</ol>
  </div>
</section>

<section class="section">
  <div class="wrap two-col">
    <div>
      <p class="eyebrow mono">// Para empezar</p>
      <h2 class="h-md">Qué necesitamos de ti</h2>
      <p class="muted">Con esta información te mandamos una propuesta clara de alcance, tiempos y costo.</p>
      <ul class="checks">${d.necesitamos.map((x) => `<li>${x}</li>`).join("")}</ul>
      <a class="btn" href="#contacto">Enviar mi información ${icon("arrow", "ico-sm")}</a>
    </div>
    <div>
      <p class="eyebrow mono">// Preguntas frecuentes</p>
      <h2 class="h-md">Dudas comunes</h2>
      <div class="faqs">${d.faqs.map(([q, a]) => `<details><summary>${q}</summary><p class="muted">${a}</p></details>`).join("")}</div>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow mono">// Combínalo</p>
      <h2>Servicios que van bien juntos</h2>
    </div>
    <div class="rel-grid">
      ${rel.map((o) => `<a class="rel" href="../../${o.cat.slug}/${o.id}/">
        <span class="mono small muted">${o.cat.name}</span>
        ${icon(o.icon)}
        <strong>${o.name}</strong>
        <span class="small muted">${o.desc}</span>
        <span class="mono small cat-more">Ver servicio ${icon("arrow", "ico-sm")}</span>
      </a>`).join("")}
    </div>
    ${siblings.length ? `<p class="also muted">También en ${c.name}: ${siblings.map((x) => `<a class="ul-ink" href="../${x.id}/">${x.name}</a>`).join(" · ")}</p>` : `<p class="also muted"><a class="ul-ink" href="../">Ver el área de ${c.name}</a></p>`}
  </div>
</section>
${contact(s.name)}
</main>
${footer("../../")}`;
};

// ---------- ESCRITURA ----------
writeFileSync(join(OUT, "index.html"), home);
CATS.forEach((c, i) => {
  mkdirSync(join(OUT, c.slug), { recursive: true });
  writeFileSync(join(OUT, c.slug, "index.html"), catPage(c, i));
  c.services.forEach((s, k) => {
    mkdirSync(join(OUT, c.slug, s.id), { recursive: true });
    writeFileSync(join(OUT, c.slug, s.id, "index.html"), svcPage(c, s, k));
  });
});
console.log(`ok · ${CATS.length} áreas · ${allServices.length} servicios`);
