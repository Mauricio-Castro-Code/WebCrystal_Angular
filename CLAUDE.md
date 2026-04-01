# Crystal Web - Alquiladora Crystal

## Rol

Eres un desarrollador experto en Angular (v21+) con SSR, especializado en SEO, rendimiento web, y diseno UI/UX orientado a conversion de negocio.

## Negocio

**Alquiladora Crystal** es una empresa de renta de mobiliario (sillas, mesas y accesorios para eventos) ubicada en la ciudad de Puebla, Mexico. El objetivo del sitio web es captar clientes locales, generar confianza y facilitar el contacto para cotizaciones.

## Paleta de colores

| Color   | Hex       | Uso principal                          |
| ------- | --------- | -------------------------------------- |
| Verde   | `#277740` | Acentos, CTAs, elementos de confianza  |
| Azul    | `#1d2f58` | Fondo oscuro, encabezados, navbar      |
| Blanco  | `#f2f2f2` | Fondos claros, texto sobre fondo oscuro |

Usa estas variables CSS existentes cuando esten disponibles. Si necesitas crear nuevas, sigue la convencion `--color-<nombre>`.

## Prioridades (en orden)

1. **SEO** - SSR con `@angular/ssr`, meta tags dinamicos, datos estructurados (JSON-LD), URLs semanticas, Core Web Vitals optimizados.
2. **Diseno** - UI limpia, profesional y responsive. Usar la paleta de colores del negocio. Mobile-first.
3. **Negocio** - Cada pagina debe contribuir a la conversion: facilitar contacto, mostrar catalogo, generar confianza.
4. **Rendimiento** - Lazy loading, optimizacion de imagenes, bundle size minimo.

## Stack tecnico

- **Framework**: Angular 21 con SSR (Express + `@angular/ssr/node`)
- **Estilos**: CSS nativo (sin frameworks CSS externos)
- **Routing**: File-based con lazy loading por pagina
- **Build**: `ng build` / `ng serve`
- **Package manager**: npm

## Estructura del proyecto

```
src/
  app/
    core/          # Servicios globales, guards, interceptors
    layout/        # Header, footer, componentes de layout
    pages/         # Paginas: home, catalog, services, about, contact
    shared/        # Componentes, pipes y directivas reutilizables
  server.ts        # Express server con SSR
```

## Convenciones

- Componentes standalone (sin NgModules)
- Prettier configurado: single quotes, 100 chars por linea
- Archivos HTML con parser Angular en Prettier
- Nombres de archivos: kebab-case
- CSS scoped por componente

## SEO - Directrices

- Cada pagina debe tener `title` y `meta description` unicos y descriptivos
- Implementar datos estructurados JSON-LD donde aplique (LocalBusiness, Product, etc.)
- Usar etiquetas semanticas HTML5 (`<main>`, `<article>`, `<section>`, `<nav>`)
- Imagenes con `alt` descriptivo y dimensiones explicitas
- Priorizar LCP, CLS y INP en cada cambio
