# Hreflang Template (Ready for infovision.digital)

Use this template only when translated pages are live and indexable (for example `/es/`, `/fr/`, `/de/`, `/th/`).

## 1) `<head>` template for homepage variants

Place on every language homepage, changing `hreflang` and `href` values to match that page set.

```html
<link rel="canonical" href="https://infovision.digital/" />
<link rel="alternate" hreflang="en" href="https://infovision.digital/" />
<link rel="alternate" hreflang="es" href="https://infovision.digital/es/" />
<link rel="alternate" hreflang="fr" href="https://infovision.digital/fr/" />
<link rel="alternate" hreflang="de" href="https://infovision.digital/de/" />
<link rel="alternate" hreflang="th" href="https://infovision.digital/th/" />
<link rel="alternate" hreflang="x-default" href="https://infovision.digital/" />
```

### Rules

- Every language version must reference all other versions, including itself.
- Use absolute URLs only.
- Use valid language codes (`en`, `es`, `fr`, `de`, `th`).
- Keep the same canonical + hreflang mapping for equivalent pages only.

## 2) Page-level template (example: Services page)

English page: `https://infovision.digital/services`

```html
<link rel="canonical" href="https://infovision.digital/services" />
<link
  rel="alternate"
  hreflang="en"
  href="https://infovision.digital/services"
/>
<link
  rel="alternate"
  hreflang="es"
  href="https://infovision.digital/es/services"
/>
<link
  rel="alternate"
  hreflang="fr"
  href="https://infovision.digital/fr/services"
/>
<link
  rel="alternate"
  hreflang="de"
  href="https://infovision.digital/de/services"
/>
<link
  rel="alternate"
  hreflang="th"
  href="https://infovision.digital/th/services"
/>
<link
  rel="alternate"
  hreflang="x-default"
  href="https://infovision.digital/services"
/>
```

## 3) XML sitemap hreflang template (recommended)

Add this format in your multilingual sitemap using the `xhtml` namespace.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  <url>
    <loc>https://infovision.digital/services</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://infovision.digital/services" />
    <xhtml:link rel="alternate" hreflang="es" href="https://infovision.digital/es/services" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://infovision.digital/fr/services" />
    <xhtml:link rel="alternate" hreflang="de" href="https://infovision.digital/de/services" />
    <xhtml:link rel="alternate" hreflang="th" href="https://infovision.digital/th/services" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://infovision.digital/services" />
  </url>
</urlset>
```

## 4) Implementation checklist

- Create translated routes with equivalent content (not placeholders).
- Ensure each translated URL returns `200` (no redirect loops).
- Keep canonical self-referencing for each language page.
- Add full reciprocal hreflang sets on every equivalent page.
- Update sitemap with multilingual `xhtml:link` entries.
- Re-submit sitemap in Google Search Console.
- Validate with URL Inspection for each language URL.

## 5) Common mistakes to avoid

- Adding hreflang tags before translated pages are live.
- Missing reciprocal tags (A links to B, but B doesn’t link to A).
- Mixing language and country codes incorrectly (for example, using `es` when you mean `es-MX`).
- Pointing hreflang to redirected or `noindex` URLs.
- Using relative URLs in hreflang tags.
