# 🪑 Todana — Modern Furniture Experience (React + TypeScript + Tailwind + GSAP + shadcn/ui + Bun)

Todana is a modern furniture web experience built to explore **high-end UI design**, **smooth motion**, and a **scalable component system**.  
It started as a collaborative class project and this repository is **my personal version**, where I refactor the architecture, experiment with layout and animation patterns, and push the UI towards a polished, production-ready experience.

The goal is to simulate a real-world furniture brand website: visually refined, performant, and maintainable — something that speaks both to **recruiters** (design sense, project ownership) and **developers** (code quality, stack choices, structure).

> ⚠️ Project status: Work in progress — structure, components, and interactions are still evolving.

---

## 🎨 Visual Preview

[Hero Section Preview](./public/assets/images/screenshots/screenshot_home.webp)
[Collection Section Preview](./public/assets/images/screenshots/screenshot_collection.webp)
[Team Section Preview](./public/assets/images/screenshots/screenshot_team.webp)


### Homepage / Hero

_A hero section focused on a featured collection, with bold typography, strong imagery, and subtle motion to draw the eye._

### Catalog / Product Grid

_A responsive product grid with hover interactions, progressive reveal animations, and a consistent design system built on Tailwind + shadcn/ui._

### Product Detail / Micro-Interactions

_A product detail layout using layered sections, scroll-based animations, and GSAP-powered transitions to keep the experience smooth and immersive._

---

## ✨ Features & Architecture

### 1. Design System & UI Consistency

- **Component-driven UI** using shadcn/ui primitives extended with a custom design language.
- **Tailwind CSS utility classes** to keep styling predictable, reusable, and easy to refactor.
- Focus on **consistent spacing, typography, and color usage** to mirror a real furniture brand identity.

### 2. Type-safe Front-End

- **React + TypeScript** to ensure type-safety across components, props, and data models.
- Clear separation of:
  - Layout components (shells, sections)
  - UI components (buttons, cards, navigation)
  - Domain components (product cards, category sections, etc.).

### 3. Motion & Interactions

- **GSAP** for high-performance animations and scroll-based effects.
- Subtle **micro-interactions** on hover, navigation, and page transitions to give the interface a premium feel.
- Motion used **to support UX** (guiding attention, clarifying hierarchy), not just for decoration.

### 4. Scalable Project Structure

- Architecture refactored to be closer to a real-world app:
  - Clear folders for components, features, styles, and configuration.
  - A structure that can grow into a full e-commerce experience (filters, auth, cart, etc.).
- Built to be **maintainable by a team**, not just as a quick demo.

---

## 🛠 Tech Stack

- **React + TypeScript** — Components, state management, and type-safety.
- **Vite** — Fast dev server and bundler for a smooth DX.
- **Tailwind CSS** — Utility-first styling and design system.
- **shadcn/ui** — Accessible, themeable UI components based on Radix + Tailwind.
- **GSAP** — High-performance animations and motion timelines.
- **Bun** — Package manager and runtime (preferred over npm/yarn/pnpm).

---

## ⚙ Development & Setup

To run this project locally, you’ll need [Bun](https://bun.sh/) installed.

1. **Clone the repository**

```bash
git clone https://github.com/SolaKabuta/todana.git
cd todana


2. Install dependencies

```bash
bun install

```

3. Run the development server

```bash
bun run dev

```

The app will start on your local dev server (usually at ‎`http://localhost:5173/` or the port shown in your terminal).

4. Build for production

```bash
bun run build

```

5. Preview the production build

```bash
bun run preview

```

6. Optional: Linting & formatting

If configured in this repo:

```bash
bun run lint    # ESLint
bun run format  # Prettier

```

👥 Who This Project Is For ￼

This project is designed to be relevant for both non-technical stakeholders and developers.

For recruiters / hiring managers ￼

- Shows ownership of a front-end project from initial structure to visual polish.

- Demonstrates my ability to translate a business idea (furniture brand) into a coherent digital experience.

- Highlights collaboration potential: the codebase is structured to be understandable and extendable by a team.

- Reflects sensitivity to brand, aesthetics, and user experience, not just raw code.

For developers / tech leads ￼

- Uses a modern, production-oriented stack (React, TypeScript, Tailwind, shadcn/ui, GSAP, Bun).

- Emphasizes clean, typed components and a scalable folder structure.

- Leaves room to plug in “real” features later:

 - API integration (products, categories, search).

 - Filters, cart logic, and user accounts.

 - Analytics or A/B testing hooks.

🚧 Roadmap / Next Steps ￼

Todana is intentionally still evolving. Upcoming work includes:

- Data Layer

 - Introduce typed product data models (mock JSON or a headless CMS later).

 - Add categories, filters, and sorting for the catalog page.

- UX & UI

 - Refine responsive behavior across breakpoints (desktop-first, then tablet and mobile).

 - Add more detailed product pages (materials, dimensions, recommendations).

 - Improve accessibility (focus states, ARIA where needed, and color contrast).

- Animations & Performance

 - Fine-tune GSAP timelines for smoother page transitions and scroll effects.

 - Optimize initial load and animation costs for low-end devices.

- Potential Integrations

 - Fake cart flow and checkout simulation for a full e-commerce narrative.

 - Basic analytics-style tracking for user interactions (useful for a case study).

📁 Project Status ￼

Todana is currently a work in progress:

- Core layout, design direction, and architecture are in place.

- Components and animations are being iterated on as I refine both the UX and the code quality.

- The repository is meant to reflect how I think about real-world front-end work:

not just building pages, but designing systems that can grow.

👤 About the Developer ￼

I’m Sola Kabuta, a creative front-end developer and web designer based in Brussels.

I enjoy working on projects where visual identity, interaction design, and clean code all meet. Todana is one of those playgrounds: a way to explore furniture e-commerce aesthetics while practicing modern React, TypeScript, motion design, and component-based architecture.

If you’d like to talk about this project, collaboration, or opportunities:

- Portfolio: solakabuta.com (https://solakabuta.com)

- GitHub: github.com/SolaKabuta (https://github.com/SolaKabuta)

- Email: ‎`solakabuta@gmail.com`

Todana is a learning and portfolio project — not an actual commercial furniture brand. The goal is to demonstrate front-end craft, design thinking, and long-term maintainability of a modern web experience.