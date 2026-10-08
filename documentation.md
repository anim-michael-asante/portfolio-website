# Project Documentation

## Overview
A high-precision, centered Hero Section website for **Michael Asante Anim (0x1aerixis)**, built using semantic HTML5, modern CSS3, and vanilla JavaScript for GitHub Pages deployment.

## Typography & Design System
- **Fonts**:
  - Headings & Display: `Space Grotesk` (Google Fonts)
  - Supporting Copy: `Manrope` (Google Fonts)
- **Palette**:
  - Near-black text: `#111218`
  - Purple headline accent: `hsl(268, 88%, 51%)` (`#7c3aed`)
  - Supporting copy: Muted slate grey (`#475569` and `#64748b`)
  - Background: Layered translucent angled glass panels with warm peach/amber on the left and pale sky blue on the right, fading softly to near-white in the center.

## Component Mapping (Top to Bottom)

### 1. Navigation
- **Logo:** `0x` monogram in a circular badge (`.monogram-badge`).
- **Links:** `Home` (active with underline indicator), `About`, `Projects`, `Write-ups`, `Contact`.
- **Top-Right CTA:** `Let's talk` dark pill button (triggers the contact modal).

### 2. Centered Hero Content
- **Eyebrow:** *"Hey, I'm Michael"*
- **Headline (2 Lines):**
  - Line 1 (Purple Accent): `Offensive`
  - Line 2 (Near-Black): `Web Security`
- **Subtext (Centered, 2 Lines):**
  *"I'm a cyber security student based in Ghana. I build secure Django apps, then attack them, so real attackers find nothing left to exploit."*
- **Dual Centered CTAs:**
  - Primary (Solid Dark Pill): `Get in Touch`
  - Secondary (Outlined Pill): `Browse Projects`
- **Credential Line:**
  *"BSc Cyber Security @ UMaT · Member, UMaT Cybersecurity Club"*

### 3. Bottom Row
- **Project Chips:** `FEATURED WORK`: `SecureVault`, `Aerixis-ShopNow`, `PaperlessEdu` (subtle interactive pill chips).
- **Tagline:** *"Built by Aerixis"*

### 4. Interactive Contact Modal
- 8-state dialog for inquiries (penetration testing, code reviews, Django development), with OWASP input sanitization, focus trap, and toast notifications.

### 5. About Page (About.html)
Full premium About page with warm amber/peach palette (hsl(31, 91%, 73%)).

**Sections:**
1. **Hero** — Circular portrait with animated ring pulse, "I'm Michael." headline, lead paragraph, and animated stat counters (5 Certifications, 15+ Tools, 2 Disciplines).
2. **My Approach** — "Build. Audit. Secure. Ship." philosophy with 4 pillar cards (Build with intention, Test every assumption, Harden by default, Ship with confidence).
3. **Certifications** — Dark navy section with glassmorphism cards for Google Cybersecurity Professional, GitHub, Cisco, Anthropic, and Microsoft certifications.
4. **Journey / Timeline** — Sticky header with vertical warm-amber timeline showing career progression.
5. **Tech Stack** — Categorized pill badges (Development, Security & Pen Testing, Design & Deployment) with tinted hover states.
6. **CTA** — Dark navy section with warm amber "Let's talk" button and ambient glows.

**Design Decisions:**
- Warm amber palette chosen for approachability and personality contrast against the professional navy.
- Scroll-reveal animations via IntersectionObserver with staggered timing for visual depth.
- Counter animation on stats for engagement.
- Separate CSS/JS files (`about.css`, `about.js`) to avoid bloating the shared stylesheet.

## File Structure
- `index.html` — Clean semantic structure with updated centered layout.
- `styles.css` — Design tokens, Space Grotesk / Manrope typography, static glass background, and pill buttons.
- `about.css` — About page-specific styles: warm amber palette, hero portrait, pillar cards, cert cards, timeline, tech stack pills, CTA section.
- `app.js` — Navigation state management, mobile menu drawer, and modal form controller.
- `about.js` — About page scroll-reveal animations, counter animations, and mobile menu re-binding.
- `documentation.md` — Project specification and architecture.
- `README.md` — Deployment and project summary.

## Home Page Sections
- Home now includes the exact Work, Contact, and FAQ section markup used by their standalone pages.
- Home loads `work.css`, `contact.css`, and `faq.css` for visual parity.
- The standalone `Work.html`, `Contact.html`, and `FAQ.html` pages remain unchanged.

## Footer Social Links
- Every public HTML page footer includes clickable Email, LinkedIn, GitHub, and WhatsApp icons.
- External social links open in a new tab with `noopener noreferrer`; email opens the configured mail client.
