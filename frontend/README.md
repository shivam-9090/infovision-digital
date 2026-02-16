# Portfolio Website - Frontend

A professional portfolio website built with React, TypeScript, and Vite, featuring a retro-inspired design system with minimal animations.

## Features

- 🎨 **Retro Design System**: Muted earth tones, serif headings, and clean typography
- ⚡ **Fast & Modern**: Built with Vite for lightning-fast HMR and optimized builds
- 📱 **Responsive**: Mobile-first design that works beautifully on all devices
- ♿ **Accessible**: WCAG 2.2 AA compliant with keyboard navigation and focus states
- 🎯 **SEO Ready**: Semantic HTML, meta tags, and performance optimized

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety (ready for migration)
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS Modules** - Scoped styling

## Design System

### Colors

- **Primary**: Cream (#f5f1e8), Sand (#e8dcc4)
- **Accent**: Rust (#a0522d), Terracotta (#c47d5f)
- **Neutral**: Olive (#6b705c), Charcoal (#2b2d2f)

### Typography

- **Headings**: Crimson Pro (serif)
- **Body**: Inter (sans-serif)
- **Code**: IBM Plex Mono (monospace)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```powershell
# Navigate to frontend directory
cd frontend

# Install dependencies (already done if you see this)
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

```powershell
# Development
npm run dev          # Start dev server with HMR

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Lint code with ESLint
```

## Project Structure

```text
frontend/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Work.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.jsx          # Main app with routing
│   ├── index.css        # Design system & global styles
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── index.html           # HTML template
└── package.json
```

## Component Usage

### Button

```tsx
import { Button } from "./components/Button";

<Button variant="primary" size="lg">
  Click me
</Button>;
```

Variants: `primary` | `secondary` | `outline` | `ghost`
Sizes: `sm` | `md` | `lg`

### Card

```tsx
import { Card, CardBody, CardHeader, CardFooter } from "./components/Card";

<Card variant="hover">
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>;
```

## Deployment

### Build for Production

```powershell
npm run build
```

Output will be in `dist/` directory. Deploy to:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **Static hosting**: Upload `dist/` contents

### 3D Model Asset (GLB)

The rotating planet loads via `useGLTF('/model/neptune.glb')`. For deployment:

- Place the file at `public/model/neptune.glb` (already present) so Vite copies it unchanged into `dist/model/`.
- Do NOT import the GLB from `src/` for production; relative `/src/...` paths won't exist after build.
- If you replace the model, keep the path and name or update `SpaceBackground.jsx` accordingly.
- To reduce size, you can compress the GLB with tools like Blender (Draco compression) and overwrite the file.

### Netlify Settings

When connecting the repo:

- Base directory: `frontend`
- Build command: `npm run build`
- Publish directory: `frontend/dist`
- Add SPA redirect (already handled via `netlify.toml` if present). If not, create a `netlify.toml` with:

```toml
[build]
  base = "frontend"
  publish = "frontend/dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

After deploy, verify the model loads (no 404 in Network tab for `/model/neptune.glb`).

## SEO Operations

### Assumptions

- Primary production domain is `https://infovision.digital`
- Sitemap is served at `https://infovision.digital/sitemap.xml`
- Robots policy is public crawl (`Allow: /`)

### Quick SEO Check (PowerShell)

```powershell
# 1) Build locally
cd frontend
npm run build

# 2) Check robots and sitemap are reachable in production
Invoke-WebRequest https://infovision.digital/robots.txt | Select-Object StatusCode
Invoke-WebRequest https://infovision.digital/sitemap.xml | Select-Object StatusCode
```

### Google Indexing Steps

1. Open Google Search Console for your domain property.
2. Submit `https://infovision.digital/sitemap.xml` in Sitemaps.
3. Use URL Inspection for key pages (`/`, `/services`, `/work`, `/about`, `/contact`) and request indexing.

### Multilingual (Future)

- When language routes are live (`/es`, `/fr`, `/de`, `/th`), use the ready template in `seo-hreflang-template.md` to add correct `hreflang` tags and multilingual sitemap entries.

## Next Steps

1. **Content**: Replace placeholder content with real copy
2. **Images**: Add project images and optimize (WebP/AVIF)
3. **Services**: Build out Services detail pages
4. **Portfolio**: Create Case Study template with filtering
5. **Contact**: Add form with validation and email integration
6. **Analytics**: Integrate GA4 and Search Console
7. **SEO**: Add sitemap.xml, robots.txt, structured data

## Performance Goals

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms
- Lighthouse scores > 90

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers
