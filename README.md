# Anim Michael Asante Portfolio

The personal portfolio of **Anim Michael Asante**, a full-stack engineer and
application security specialist. The site presents selected work, explains the
development and security approach behind it, and provides direct contact
routes for collaboration.

This is a framework-free static website built with HTML, CSS, and vanilla
JavaScript. It can be deployed directly to GitHub Pages without a build step,
server, database, or runtime dependency.

## Hero Section

![Anim Michael Asante portfolio hero section](./Hero-Section.png)

The homepage opens with a focused introduction to the practice:

> Full-stack engineering and application security for ambitious teams that
> need clarity, momentum, and resilient software.

The hero section combines:

- A warm-to-cool geometric background with layered translucent panels
- Clear positioning around secure full-stack development and application
  security
- Space Grotesk display typography with Manrope supporting copy
- Responsive desktop and mobile navigation
- Primary paths to the Work, About, FAQ, and Contact pages
- A mobile hamburger menu with the “Let's talk” CTA inside the drawer

The visual system uses a light cream canvas, navy text and surfaces, soft blue
gradients, and warm amber accents. Motion is limited to purposeful entrance
and interaction states, with reduced-motion support for accessibility.

## Live site

<https://anim-michael-asante.github.io/portfolio-website/>

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Homepage with positioning, services, tools, security focus, and navigation |
| `About.html` | Background, working approach, timeline, and application security perspective |
| `Work.html` | Selected projects with descriptions, images, and GitHub repository links |
| `FAQ.html` | Answers about services, collaboration, timelines, and existing codebases |
| `Contact.html` | CTA-style contact page with email, LinkedIn, GitHub, and WhatsApp |
| `404.html` | Branded GitHub Pages not-found page |

## Featured work

- **PortSwigger Write-ups**
  A structured collection of Web Security Academy lab write-ups covering
  vulnerabilities, exploitation techniques, remediation, and testing
  methodology.
  <https://github.com/anim-michael-asante/portswigger-web-security-writeups>

- **PaperlessEdu**
  A secure Django and PWA school management system for digitized attendance,
  report cards, fee receipts, and auditable workflows.
  <https://github.com/anim-michael-asante/PaperlessEdu>

- **SecureVault**
  A Django file portal using AES-256 encryption and department/role-based
  access controls.
  <https://github.com/anim-michael-asante/SecureVault-Role-Based-Encrypted-File-Portal>

- **Aerixis ShopNow**
  An end-to-end commerce application with product discovery, cart persistence,
  atomic ordering, staff operations, analytics, and defensive security
  controls.
  <https://github.com/anim-michael-asante/Aerixis-ShopNow>

## Tech stack

- Semantic HTML5
- Modern CSS3 with custom properties, responsive layouts, fluid typography,
  gradients, and reduced-motion support
- Vanilla ES6+ JavaScript
- [Lucide Icons](https://lucide.dev), pinned to `0.468.0`
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) for display
  typography
- [Manrope](https://fonts.google.com/specimen/Manrope) for body copy
- GitHub Pages for hosting

## Site features

- Responsive desktop and mobile navigation
- Mobile hamburger menu with an in-menu “Let's talk” CTA
- Dedicated About, Work, FAQ, and Contact pages
- Marquee-style Work project cards with repository links
- Accessible native FAQ accordions using `<details>` and `<summary>`
- Contact page with direct email, LinkedIn, GitHub, and WhatsApp links
- Shared CTA footer across the main pages
- Keyboard-visible focus states and semantic landmarks
- Reduced-motion support for animations and transitions
- Lazy-loaded below-the-fold images with explicit dimensions where applicable
- Deferred JavaScript loading
- Pinned external icon library URL for more predictable caching

## Google Analytics

Google Analytics is installed on every HTML page using the Google tag with
measurement ID `G-KHM4VHE66D`:

- `index.html`
- `About.html`
- `Work.html`
- `FAQ.html`
- `Contact.html`
- `404.html`

The site is a GitHub Pages project site, so the configured website URL must
include the repository path:

```text
https://anim-michael-asante.github.io/portfolio-website/
```

To confirm tracking, open the live site and check **Reports → Realtime** in
Google Analytics. The tag is loaded directly from Google Tag Manager's
`gtag.js` endpoint and does not require a build step.

## Google Tag Manager

Google Tag Manager is installed on every HTML page using container
`GTM-5TWV46VL`:

- `index.html`
- `About.html`
- `Work.html`
- `FAQ.html`
- `Contact.html`
- `404.html`

Each page includes both required GTM snippets:

- The asynchronous GTM loader at the top of `<head>`
- The noscript iframe immediately after the opening `<body>` tag

To verify the installation, open the live project site in Google Tag
Assistant or GTM Preview mode:

```text
https://anim-michael-asante.github.io/portfolio-website/
```

If GA4 is later configured as a tag inside GTM, remove the direct GA4
`gtag.js` snippets from the HTML pages first. Running both implementations
would send duplicate page views and events.

## SEO and crawler files

The repository includes the files needed for static-site discovery and
indexing:

- `robots.txt` allows crawling and points to the sitemap
- `sitemap.xml` lists the canonical homepage and dedicated pages
- `llm.txt` provides a concise, machine-readable site and project summary
- Canonical URLs are defined on the homepage and dedicated pages
- The homepage includes Open Graph and Twitter/X sharing metadata
- Page-specific titles and meta descriptions are included throughout the site

After deployment, submit this URL to Google Search Console:

```text
https://anim-michael-asante.github.io/portfolio-website/sitemap.xml
```

## Project structure

```text
.
├── index.html                 # Homepage
├── About.html                 # About page
├── Work.html                  # Featured work page
├── FAQ.html                   # FAQ page
├── Contact.html               # Contact page
├── 404.html                   # GitHub Pages fallback page
├── styles.css                 # Shared design system and global components
├── about.css                  # About page styles
├── work.css                   # Work page styles
├── faq.css                    # FAQ page styles
├── contact.css                # Contact page styles
├── app.js                     # Homepage navigation and form behavior
├── about.js                   # About page interactions and quote carousel
├── work.js                    # Work page navigation behavior
├── faq.js                     # FAQ page navigation behavior
├── contact.js                 # Contact page navigation behavior
├── Projects/                  # Featured project images
├── Tools/                     # Technology and security tool images
├── assets/services/           # Local SVG service illustrations
├── logo.jpeg                  # Site branding image
├── Hero-Section.png           # README preview image
├── site.webmanifest           # Web app manifest
├── robots.txt                 # Crawler rules
├── sitemap.xml                # Canonical URL list
├── llm.txt                    # Machine-readable site summary
└── documentation.md           # Design and implementation notes
```

## Local development

No package installation is required. Serve the repository from its root so
relative links and assets behave as they do on GitHub Pages:

```bash
python -m http.server 8080
```

Open <http://localhost:8080> in a browser.

Alternatively, use any static file server:

```bash
npx serve .
```

Do not open the HTML files directly with `file://` when testing navigation,
asset loading, or crawler files. Use a local HTTP server instead.

## Deployment

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Save the configuration.
6. Confirm that the published URL matches the canonical URLs in the HTML,
   `robots.txt`, and `sitemap.xml`.
7. Submit the sitemap in Google Search Console.

## Validation checklist

Before publishing changes:

```bash
git diff --check
```

Then verify:

- Each page loads through the local HTTP server.
- Navigation links open the intended dedicated page.
- The mobile hamburger opens and closes correctly.
- The mobile “Let's talk” link appears inside the hamburger menu.
- Work repository links open the correct GitHub repositories.
- FAQ entries open and close with keyboard and pointer input.
- Contact links use the correct email and social URLs.
- `robots.txt` points to the live sitemap.
- `sitemap.xml` contains only canonical indexable pages.
- Images have meaningful `alt` text and below-the-fold images are lazy-loaded.

## Contact

- Email: <mailto:animmichaelasante@gmail.com>
- LinkedIn: <https://www.linkedin.com/in/anim-michael-asante/>
- GitHub: <https://github.com/anim-michael-asante>
- WhatsApp: <https://wa.me/233541881026>

## Known limitations

- The homepage contact form currently provides browser-side validation and
  simulated feedback. It does not send submissions to a backend.
- The site uses Google Fonts and the Lucide CDN, so those resources require a
  network connection unless they are later self-hosted.
- Analytics depends on the Google tag loading successfully and may be affected
  by browser privacy settings or content blockers.
- Google Tag Manager depends on the GTM container being published. Preview
  mode can verify the snippets before publishing container changes.
- GitHub Pages serves the site as static files; dynamic form handling would
  require a separate trusted service or backend.
