# Makro Project — sitio web

Sitio estático (HTML + CSS + JS, sin dependencias) desplegado en Vercel.

## Estructura

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/diseno/` | Diseño y Renders · Diseño Industrial · Diseño de Interiores · Retail Design |
| `/fabricacion/` | Impresión en 3D · Corte y Grabado CNC |
| `/marca/` | Branding |
| `/contenido/` | Fotografía · Fotografía de Producto · Grabación con Drone · Edición de Video |
| `/crecimiento-digital/` | Páginas Web y Landing Pages · Marketing Digital · Ecommerce · Aplicaciones de IA para Negocios |
| `/productos/` | Catálogo: Celosías CNC · Trofeos Deportivos (cada uno en `/productos/<id>/`) |

Cada servicio tiene además su propia página en `/<área>/<servicio>/` (por ejemplo `/contenido/drone/`), con qué incluye, qué recibe el cliente, proceso, qué necesitamos, preguntas frecuentes y servicios relacionados.

## Editar contenido

Las páginas se generan con un script; no edites los `index.html` a mano.

- `scripts/build.mjs`: áreas, servicios (nombre, descripción, qué incluye) y plantillas.
- `scripts/detalles.mjs`: contenido de cada página de servicio.
- `scripts/productos.mjs`: catálogo de productos. Para agregar uno, copia un bloque y cambia el contenido. Las fotos van en `assets/productos/<id>/` y se listan en `imagenes`.

Después de editar, ejecuta `node scripts/build.mjs` y sube los cambios a `main`.

Estilos compartidos en `assets/styles.css` y comportamiento en `assets/main.js`.

## Configurar WhatsApp

El formulario de contacto abre WhatsApp con el mensaje armado. Cambia el número en la primera línea de `assets/main.js`:

```js
const WHATSAPP = "52XXXXXXXXXX";
```

## Despliegue

Cada push a `main` se publica automáticamente en Vercel (Framework preset: **Other**, sin build command).
