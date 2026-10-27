# Makro Project — sitio web

Sitio estático (HTML + CSS + JS, sin dependencias) desplegado en Vercel.

## Estructura

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/diseno/` | Diseño y Renders · Diseño Industrial · Diseño de Interiores |
| `/fabricacion/` | Impresión en 3D · Corte y Grabado CNC |
| `/marca-contenido/` | Branding · Fotografía · Fotografía de Producto · Grabación con Drone · Edición de Video |
| `/crecimiento-digital/` | Páginas Web y Landing Pages · Marketing Digital · Ecommerce · Aplicaciones de IA para Negocios |

Estilos compartidos en `assets/styles.css` y comportamiento en `assets/main.js`.

## Configurar WhatsApp

El formulario de contacto abre WhatsApp con el mensaje armado. Cambia el número en la primera línea de `assets/main.js`:

```js
const WHATSAPP = "52XXXXXXXXXX";
```

## Despliegue

Cada push a `main` se publica automáticamente en Vercel (Framework preset: **Other**, sin build command).
