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

## File Structure
- `index.html` — Clean semantic structure with updated centered layout.
- `styles.css` — Design tokens, Space Grotesk / Manrope typography, static glass background, and pill buttons.
- `app.js` — Navigation state management, mobile menu drawer, and modal form controller.
- `documentation.md` — Project specification and architecture.
- `README.md` — Deployment and project summary.
