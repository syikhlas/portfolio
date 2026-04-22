# Ikhlas Syed — AI & ML Engineer Portfolio

🌐 **Live:** [ikhlas-syed.vercel.app](https://ikhlas-syed.vercel.app)

A modern, interactive portfolio built with React, Vite, TypeScript and GSAP.

---
git add .
git commit -m "docs: remove inspired by line"
git push origin main
## ✨ Features

- **Animated loading screen** — 5-step progress bar with scrolling marquee
- **3D avatar** — photo-based avatar with cursor-tracking parallax tilt effect
- **GSAP animations** — text blur-fade on load, scroll-triggered reveals throughout
- **Interactive tech stack** — filterable card grid of 20 ML/AI tools
- **Project carousel** — 3 projects with image slideshows (click or auto-advance)
- **Glowing cursor** — purple blob that turns teal on hover
- **Fully responsive** — works on desktop, tablet and mobile

---

## 🛠️ Built With

| Category | Tools |
|----------|-------|
| Framework | React 18 + Vite + TypeScript |
| Animations | GSAP + ScrollTrigger |
| Styling | CSS Modules (per component) |
| Fonts | Syne, Space Mono, DM Sans |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Character/        # 3D parallax avatar
│   │   └── index.tsx
│   ├── styles/           # Per-component CSS
│   ├── utils/
│   │   └── initialFX.ts  # GSAP scroll animations
│   ├── Landing.tsx       # Hero section
│   ├── About.tsx         # About me
│   ├── WhatIDo.tsx       # Skills cards
│   ├── Work.tsx          # Projects carousel
│   ├── Career.tsx        # Experience timeline
│   ├── TechStack.tsx     # Tools grid
│   ├── Contact.tsx       # Contact section
│   ├── Navbar.tsx        # Fixed navigation
│   ├── Loading.tsx       # Loading screen
│   └── Cursor.tsx        # Custom cursor
├── context/
│   └── LoadingProvider.tsx
├── data/
│   └── boneData.ts
└── types/
    └── gsap-splittext.d.ts

public/
├── avatar.png            # 3D avatar image
└── images/               # Project screenshots
```

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/syikhlas/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Deployed automatically on **Vercel** — every push to `main` triggers a new deployment.

---

## 📬 Contact

- **Email:** ikhlasatwork@gmail.com
- **LinkedIn:** [linkedin.com/in/syed-ikhlas](https://linkedin.com/in/syed-ikhlas)
- **GitHub:** [github.com/syikhlas](https://github.com/syikhlas)

---

*Designed & Developed by Ikhlas Syed*