# Crystal Web

**Crystal Rental** (Alquiladora Crystal) is a modern, high-performance website for event
furniture rental services. Built with Angular 21 and optimized for SEO, performance, and
conversion. Specializing in chair, table, and accessory rentals for events in Puebla,
Mexico.

## About Crystal Rental

Alquiladora Crystal provides premium event furniture rental services with a focus on
quality, reliability, and exceptional customer service. This website is engineered to
capture local clients, build trust, and facilitate seamless quotation requests.

## Technology Stack

- **Framework**: Angular 21 with Server-Side Rendering (SSR)
- **Language**: TypeScript
- **Styling**: Component-scoped CSS (no external CSS frameworks)
- **Build Tool**: Angular CLI
- **Package Manager**: npm
- **Architecture**: Standalone components, feature-based structure
- **Performance**: Optimized for Core Web Vitals, lazy loading, image optimization
- **SEO**: Dynamic meta tags, JSON-LD schema, sitemap, robots.txt, Open Graph cards

## Project Structure

```
src/
  app/
    core/                  # Global services, guards, interceptors
    layout/                # Header, footer, shared layout components
      navbar/
      footer/
    shared/                # Reusable components, pipes, directives
      components/
      interfaces/
      models/
    pages/                 # Feature pages with lazy loading
      home/
      services/
      about/
      contact/
      catalog/
  server.ts                # Express + Angular SSR configuration
  index.html               # Root HTML with SEO meta tags
```

## Key Features

✨ **Professional Architecture**
- Layered structure: `core`, `layout`, `shared`, `pages`
- Standalone components (modern Angular pattern)
- Feature-based organization for scalability

🚀 **Performance Optimized**
- Server-Side Rendering (SSR) for fast initial load
- Lazy loading per page
- Explicit image dimensions to minimize CLS
- Optimized bundle size and code splitting

🔍 **SEO First**
- Dynamic `<title>` and `<meta description>` per route
- Structured data (JSON-LD) for rich snippets
- Open Graph and Twitter Card support
- Dynamic canonical tags
- Auto-generated `robots.txt` and `sitemap.xml`
- Mobile-first responsive design

🎨 **Design & UX**
- Clean, professional interface aligned with brand colors
- Component-scoped CSS (no style pollution)
- Home page with modular sections (hero, services, FAQ, testimonials)
- Fully responsive across all devices

## Quick Start

### Prerequisites
- Node.js (v18+)
- npm v10+

### Development

```bash
# Install dependencies
npm install

# Start development server with SSR
npm start

# Open in browser
http://localhost:4200
```

### Production Build & Testing

```bash
# Build for production
npm run build:prod

# Start production server (for Lighthouse testing)
npm run start:prod

# Run unit tests
npm run test
```

### Important: Performance Testing with Lighthouse

⚠️ **Do NOT use `npm start` for Lighthouse audits.** Development mode disables Angular
optimizations, causing artificially low performance scores.

Instead:
```bash
npm run start:prod
# Then run Lighthouse on http://localhost:4200
```

## SEO Configuration

Key files for SEO management:

- **`src/index.html`** — Root template with base meta tags
- **`src/app/core/services/seo.service.ts`** — Dynamic meta tag injection
- **`src/app/app.routes.ts`** — Route configuration with meta data
- **`public/robots.txt`** — Search engine crawler directives
- **`public/sitemap.xml`** — URL index for search engines

Each page includes:
- Unique `<title>` and description tags
- Open Graph meta tags for social sharing
- Twitter Card support
- JSON-LD structured data (LocalBusiness, Product schema)
- Semantic HTML5 (`<main>`, `<article>`, `<section>`)

## Product Catalog

The catalog is decoupled from layout and fully typed:

- **Components**: `src/app/pages/catalog/components/*`
- **Data**: `src/app/pages/catalog/data/catalog-products.data.ts`
- **Models**: `src/app/pages/catalog/models/catalog-product.model.ts`

To edit or add products, update `catalog-products.data.ts`. The component layer handles
display logic independently.

### Scaling Strategy

- **Phase 1 (current)**: Typed data in repo (maximum SEO control, zero latency)
- **Phase 2**: JSON in `public/data` or S3 + CloudFront with long cache headers
- **Phase 3**: Headless CMS + API with SSR/SSG for dynamic content while maintaining SEO

## Contact Form

The contact form at `/contact` submits to the SSR backend (`POST /api/contact`) which
forwards requests via [Resend](https://resend.com) email service.

### Setup

1. Create a free account at [Resend](https://resend.com) and generate an API key
2. Verify your sending domain/email in Resend
3. Create `.env` file (copy from `.env.example`):
   ```bash
   RESEND_API_KEY="re_xxxxx"
   CONTACT_TO_EMAIL="info@alquiladoracrystal.com"
   CONTACT_FROM_EMAIL="Crystal Rental <noreply@alquiladoracrystal.com>"
   ```
4. For local testing, use the default Resend test sender:
   ```bash
   CONTACT_FROM_EMAIL="Onboarding <onboarding@resend.dev>"
   ```
5. Apply the same environment variables in your hosting platform (Vercel, etc.)

### Local Testing

```bash
export RESEND_API_KEY="re_xxxxx"
export CONTACT_TO_EMAIL="your-email@example.com"
export CONTACT_FROM_EMAIL="Onboarding <onboarding@resend.dev>"
npm start
```

Then test the form at `http://localhost:4200/contact`.

## Deployment

### Target Domain
- `https://alquiladoracrystal.com`

### Pre-Deploy Checklist

- [ ] All main routes respond with HTTP 200
- [ ] `robots.txt` and `sitemap.xml` are publicly accessible
- [ ] Open Graph meta tags render correctly (test with [og-image.vercel.app](https://og-image.vercel.app))
- [ ] Core Web Vitals pass (LCP < 2.5s, CLS < 0.1, INP < 200ms)
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] No 404 errors in Google Search Console
- [ ] Mobile-friendly test passes

### Environment Variables (Required)

- `RESEND_API_KEY` — API key for email service
- `CONTACT_TO_EMAIL` — Recipient email for contact submissions
- `CONTACT_FROM_EMAIL` — Sender email (must be verified in Resend)

## Contributing

This project follows Angular best practices:
- Feature-based folder structure
- Standalone components
- Lazy-loaded pages
- Component-scoped styles
- TypeScript strict mode

When adding new pages:
1. Create a feature folder in `src/app/pages/`
2. Define routes with SEO metadata
3. Use the SEO service for dynamic meta tags
4. Keep components small and focused
5. Add proper `alt` text to all images

## License

Proprietary — Alquiladora Crystal
