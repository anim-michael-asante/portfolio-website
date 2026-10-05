# Anim Michael Asante — Portfolio Website

A modern, high-performance portfolio website built with pure Vanilla HTML5, CSS3, and JavaScript, designed to be hosted directly on **GitHub Pages**.

![Portfolio Preview Banner](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80)

## Design Philosophy & Aesthetics

- **Reference Architecture**: Strict reproduction of the high-end software agency aesthetic — featuring layered 3D isometric translucent glass plates, warm-to-cool radial ambient glows, and clean geometric typography.
- **Pure Vanilla Stack**: Zero bloated frameworks, zero Tailwind dependencies. Written in clean, standards-compliant HTML5, CSS3 with HSL custom properties, and ES6+ JavaScript.
- **Accessibility & UX**: WCAG AA color contrast ratios (min 4.5:1), fluid `clamp()` responsive typography, 8-state interactive component mapping, and full keyboard navigation.
- **Zero Emojis**: 100% powered by official [Lucide Icons](https://lucide.dev).

---

## File Structure

```
├── index.html         # Semantic structure, accessible markup & SEO metadata
├── styles.css         # Modern HSL design tokens, 3D angled panels & animations
├── app.js             # Mobile drawer, modals, OWASP sanitized form & filter tabs
├── documentation.md   # Architectural decisions, component map & security audit
└── README.md          # Project overview & deployment guide
```

---

## Key Features

1. **Reference Hero Section**:
   - Translucent angled glass panels cascade with subtle ambient mouse parallax.
   - High-contrast display headline: *"Build with confidence and deliver on time"*.
   - Sub-hero metric banner with delivery highlights and Clutch 4.8/5 social proof.
2. **Case Studies & Production Implementations**:
   - Filterable project gallery (Full-Stack, Cloud & Systems, Enterprise).
   - Interactive deep-dive modal detailing metrics, architecture, and technology stacks.
3. **End-to-End Capabilities & Expertise**:
   - Full-stack development, cloud orchestration, OWASP Top 10 security audits, and system performance.
   - Interactive competency tabs for Frontend, Backend, Cloud/DevOps, and Security.
4. **Predictable 5-Stage Delivery Process**:
   - Discovery, Architectural Review, Iterative Build, Automated Audits, and Zero-Downtime Rollouts.
5. **Interactive Contact Modal**:
   - Complete 8-state handling (Default, Hover, Active, Focus, Loading spinner, Error, Empty, Disabled).
   - OWASP A03/A04 client-side input sanitization.
   - Animated toast confirmation system.

---

## GitHub Pages Deployment Instructions

This repository is pre-configured for instant zero-build deployment on GitHub Pages:

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "feat: complete portfolio implementation"
   git push origin main
   ```
2. Navigate to your repository on GitHub:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Choose `main` as the source branch and `/ (root)` as the folder.
   - Click **Save**.
3. Your portfolio will be live at:
   `https://anim-michael-asante.github.io/portfolio-website/`

---

## Local Development

To run locally without installing any dependencies:

```bash
# Using Python:
python -m http.server 8080

# Or using Node:
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your web browser.
