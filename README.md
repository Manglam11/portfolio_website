# Manglam Dubey — Developer Portfolio

<div align="center">

[![Vercel Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://your-portfolio.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org)
[![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=flat&logo=styled-components&logoColor=white)](https://styled-components.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion)

**A creative developer portfolio — built from scratch, fully responsive, animated.**

[🌐 Live Site](https://personal-portfolio-psi-sooty.vercel.app/) · [💼 Work](https://personal-portfolio-psi-sooty.vercel.app/work) · [📝 Blog](https://personal-portfolio-psi-sooty.vercel.app/blog)

</div>

---

## 🧠 About the Project

This is my personal developer portfolio — designed and built entirely from scratch. Not a template, not a Wix site.

The goal was to build something that reflects how I think as a developer: clean structure, purposeful animations, and a UI that feels alive without being noisy. Every page has its own personality while keeping a consistent design language throughout.

**What makes it stand out:**

- 🎨 Particle background that reacts to the theme
- 🌗 Light / Dark theming baked into every component
- 🎞️ Page transitions and element-level animations via Framer Motion
- 📱 Fully responsive — mobile, tablet, and desktop tested
- 🔊 Interactive soundbar easter egg on the home page

---

## 📄 Pages & Features

| Page       | Route     | What's on it                                                             |
| ---------- | --------- | ------------------------------------------------------------------------ |
| **Home**   | `/`       | Animated landing with yin-yang, particle background, nav to all sections |
| **About**  | `/about`  | Intro, spaceman illustration, staggered Framer Motion entrance animation |
| **Skills** | `/skills` | Three cards — Python, Data Science, Web Dev — with hover invert effect   |
| **Work**   | `/work`   | Horizontal scroll project showcase (touch/swipe on mobile)               |
| **Blog**   | `/blog`   | LinkedIn post grid with tags, dates, and direct post links               |

---

## 📂 Project Structure

```
src/
├── components/          # Page-level components
│   ├── AboutPage.js
│   ├── AllSvgs.js       # All custom SVG icons
│   ├── BlogComponent.js
│   ├── Intro.js
│   ├── Main.js          # Home / landing page
│   ├── MySkillsPage.js
│   ├── PostPage.js
│   ├── Themes.js
│   └── WorkPage.js
├── subComponents/       # Reusable UI pieces
│   ├── Anchor.js
│   ├── BigTitlte.js
│   ├── Card.js
│   ├── LogoComponent.js
│   ├── ParticleComponent.js
│   ├── PowerButton.js
│   ├── SocialIcons.js
│   └── SoundBar.js
├── data/                # Content data files
│   ├── WorkData.js      # Projects list
│   ├── PostData.js      # Blog/LinkedIn posts
│   └── PostImg/         # Post thumbnail images
├── styles/
│   └── Responsive.js    # Breakpoints — single source of truth
├── App.js               # Routing + AnimatePresence
└── index.js
```

---

## 🛠️ Tech Stack

| Layer          | Technology                    |
| -------------- | ----------------------------- |
| **UI Library** | React 18                      |
| **Styling**    | Styled Components (CSS-in-JS) |
| **Animations** | Framer Motion                 |
| **Particles**  | tsParticles                   |
| **Icons**      | Custom SVGs via AllSvgs.js    |
| **Routing**    | React Router v6               |
| **Deployment** | Vercel                        |

---

## 🚀 Run Locally

**1. Clone the repo**

```bash
git clone https://github.com/Manglam11/portfolio_website.git
cd portfolio_website
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the dev server**

```bash
npm start
```

App runs at `http://localhost:3000`

---

## 📱 Responsive Design

Responsiveness wasn't an afterthought — it was a full audit pass across every component.

| Component      | Mobile Behaviour                                          |
| -------------- | --------------------------------------------------------- |
| `WorkPage`     | Native touch horizontal scroll with CSS snap              |
| `MySkillsPage` | Cards stack vertically, full width                        |
| `PostPage`     | 2-column grid collapses to single column                  |
| `Intro`        | Side-by-side layout stacks vertically, image repositioned |
| `BigTitle`     | Hidden on mobile to prevent overflow                      |
| `SoundBar`     | Repositioned below logo to avoid overlap                  |

Breakpoints are defined once in `src/styles/Responsive.js` and imported wherever needed — no magic numbers scattered across files.

---

## 👨‍💻 Author

**Manglam Dubey** — CS Graduate | Full Stack + Data Science

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/manglam-dubey)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat&logo=github&logoColor=white)](https://github.com/Manglam11)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-000000?style=flat&logo=vercel&logoColor=white)](https://personal-portfolio-psi-sooty.vercel.app/)

---

<div align="center">
  <sub>Code is craft. This is mine.
</sub>
</div>
