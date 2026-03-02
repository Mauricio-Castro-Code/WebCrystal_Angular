# WebCrystal Angular

Sitio web de **Alquiladora Crystal** construido con Angular (standalone components), orientado a una arquitectura modular y escalable.

## Stack

- Angular 21
- TypeScript
- Angular SSR
- CSS (component-scoped styles)

## Arquitectura

```text
src/app
  core/
  layout/
    navbar/
    footer/
  shared/
    components/
    interfaces/
    models/
  pages/
    home/
      components/
    services/
      components/
    about/
      components/
    contact/
      components/
    catalog/
```

## Caracteristicas implementadas

- Arquitectura profesional por capas: `core`, `layout`, `shared`, `pages`.
- Componentes standalone para Angular moderno.
- Home desacoplado por secciones (`hero`, `our-services`, `faq`, `testimonials`).
- Estilos encapsulados por componente (sin mezclar estilos globales innecesarios).
- SEO tecnico base:
  - `title` y `meta description` por ruta.
  - Open Graph y Twitter cards.
  - Canonical dinamico.
  - `robots.txt` y `sitemap.xml`.
- Optimizaciones de rendimiento para mobile:
  - Prioridad de carga para imagen hero.
  - Dimensiones explicitas en imagenes para reducir CLS.

## Scripts

```bash
npm install
npm start
npm run build
npm run test
```

## Desarrollo local

1. Instala dependencias:

```bash
npm install
```

2. Ejecuta en desarrollo:

```bash
npm start
```

3. Abre en navegador:

```text
http://localhost:4200
```

## SEO y archivos publicos

Archivos SEO relevantes:

- `src/index.html`
- `src/app/core/services/seo.service.ts`
- `src/app/app.routes.ts`
- `public/robots.txt`
- `public/sitemap.xml`

## Formulario de contacto funcional

El formulario de `/contacto` envia datos al endpoint backend `POST /api/contact` (SSR/Express) y este endpoint reenvia la solicitud por email usando Resend.

Variables de entorno requeridas:

- `RESEND_API_KEY`: API key de Resend.
- `CONTACT_TO_EMAIL`: correo destino que recibira las solicitudes (ej. `hola@alquiladoracrystal.com`).
- `CONTACT_FROM_EMAIL`: remitente validado en Resend (ej. `Alquiladora Crystal <noreply@tudominio.com>`).

Pasos recomendados:

1. Crear cuenta en [Resend](https://resend.com) y generar API key.
2. Verificar dominio/remitente en Resend para produccion.
3. Configurar variables en el entorno de deploy (Vercel/servidor).
4. Probar envio desde la pagina `/contacto`.

Ejemplo local (zsh/bash):

```bash
export RESEND_API_KEY="re_xxx"
export CONTACT_TO_EMAIL="tu_correo@dominio.com"
export CONTACT_FROM_EMAIL="Alquiladora Crystal <noreply@tudominio.com>"
npm start
```

## Deploy

Dominio objetivo:

- `https://alquiladoracrystal.com`

Al desplegar, valida:

- Respuesta `200` en rutas principales.
- `robots.txt` y `sitemap.xml` accesibles.
- Envio de sitemap en Google Search Console.

## Notas

- Proyecto preparado para crecer con nuevas features (por ejemplo, modulo de reservas).
- Mantener la convencion por feature para nuevas paginas y componentes.
