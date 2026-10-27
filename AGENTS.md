# AGENTS.md

Guidelines for AI agents working in this project.

## No workflows

Never use workflows or launch workflow agents for this project. Work directly using available tools: read files, edit code, run commands, without delegating to any workflow.

## Writing style

- Do not use em dashes (—) anywhere in copy, content, alt text, comments, or documentation. Use a colon, comma, or rewrite the sentence instead.
- Keep copy direct and plain. No filler phrases or hyperbole.

## Project structure

- Framework: Next.js 16 (App Router)
- Styling: Tailwind CSS v4 with shadcn/ui (base-nova style)
- Package manager: pnpm
- Key pages: `/` (main landing), `/about`, `/privacy`, `/terms`
- Shared components live in `components/` (e.g. `site-header.tsx`)
- Public assets in `public/`, favicon set in `public/favicon_io/`

## Conventions

- All copy and UI text follows the no-em-dash rule above.
- Use `next/link` for internal navigation, plain `<a>` for external links.
- Icons are inline SVGs or lucide-react, not image files.
