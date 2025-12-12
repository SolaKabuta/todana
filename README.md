
# Furniture Project — Vite + React + TypeScript + Tailwind + GSAP + shadcn/ui (Bun)

Collaborative project to build a modern furniture website with smooth animations and a consistent UI system. This README explains the tech stack, project structure, setup, workflow, and good practices for our team.

## Tech Stack

- React + TypeScript — Components, state, and type-safety
- Vite — Fast dev server and bundling
- Tailwind CSS — Utility-first styling and design system
- shadcn/ui — Accessible, themeable UI components (Radix + Tailwind)
- GSAP — High-performance animations
- Bun — Package manager and runtime (use Bun, not npm/yarn/pnpm)

## Requirements

- Bun installed: [https://bun.sh](https://bun.sh)
- Node 18+ recommended for tooling compatibility
- A GitHub account (forking, PRs)
- Code editor with TypeScript + Tailwind plugins (e.g., VS Code)

---

## Getting Started

1) Fork the repository on GitHub
- Go to the repo and click “Fork”
- Clone your fork locally

2) Create your personal branch
- Branch naming: feature/<your-name>-<short-topic>
- Examples:
  - feature/amina-navbar
  - feature/sola-product-grid

3) Install dependencies (use Bun)
- Do NOT mix package managers. Stick to Bun.

4) Bun command: :

- bun run dev         # Vite dev server
- bun run build   # Production build
- bun run preview # Preview dist locally
- bun run lint    # ESLint (if configured)
- bun run format  # Prettier (if configured)


Good Practices Checklist :

- Use Bun for all package tasks (‎`bun add`, ‎`bun remove`)

- Branch per feature; no direct pushes to ‎`main`

- PRs with screenshots for UI/animations

- Strong types; avoid ‎`any`

- Reuse shadcn/ui patterns; keep components accessible

- Consistent Tailwind tokens and spacing

- Document non-obvious logic with short comments
