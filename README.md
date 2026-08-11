# Devdyd — Web corporativa

Sitio web de **Devdyd**, estudio de desarrollo de software con base en Sevilla: desarrollo web a
medida, automatización de procesos y mantenimiento técnico.

🔗 **En producción:** [devdyd.vercel.app](https://devdyd.vercel.app)

---

## Qué incluye

- **Landing de una sola página** con secciones de servicios, sobre nosotros, propuesta de valor y
  contacto, más navegación por anclas con desplazamiento suave.
- **Multiidioma** con `@ngx-translate`, cargando las traducciones bajo demanda vía HTTP.
- **Formulario de contacto** conectado con EmailJS, sin backend propio que mantener.
- **Banner de cookies** y páginas de aviso legal y política de privacidad conforme a RGPD y LOPDGDD.
- **Botón flotante de WhatsApp** para contacto directo desde móvil.
- **Fondo animado** por componente (`bg-lines`), sin librerías externas.
- **Datos estructurados** JSON-LD de tipo `LocalBusiness` para posicionamiento en buscadores.

## Stack

| Área | Tecnología |
|---|---|
| Framework | Angular 21 (componentes *standalone*, `app.config.ts`) |
| Enrutado | Angular Router con rutas de legal y *fallback* comodín |
| Estilos | SCSS |
| i18n | `@ngx-translate/core` + `@ngx-translate/http-loader` |
| Formularios | Angular Forms + `@emailjs/browser` |
| Reactividad | RxJS |
| Tests | Vitest |
| Formato | Prettier + EditorConfig |
| CI/CD | GitHub Actions → Cloudflare Pages (`wrangler-action`) |

## Arquitectura

```
src/app/
├── app.config.ts          Configuración raíz (providers standalone)
├── app.routes.ts          Rutas: home, aviso legal, privacidad, wildcard
├── components/            Bloques de la landing
│   ├── header/  hero/  services/  about/  why-us/  contact/  footer/
│   ├── bg-lines/          Fondo animado
│   ├── cookie-banner/     Consentimiento RGPD
│   └── whatsapp-fab/      Botón flotante de contacto
├── pages/                 Vistas enrutadas
└── services/
    └── scroll.service.ts  Desplazamiento suave entre secciones
```

## Puesta en marcha

```bash
npm install
npm start          # servidor de desarrollo en http://localhost:4200
npm run build      # build de producción en dist/devdyd-web/browser
npm test           # tests unitarios con Vitest
```

## Despliegue

Cada `push` a `main` dispara el workflow de GitHub Actions: instala dependencias, compila el proyecto
y publica en Cloudflare Pages. Las credenciales (`CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID`)
viven como *secrets* del repositorio y nunca se versionan.

---

Desarrollado por [Daniel Cano Domínguez](https://github.com/Persantyf).
