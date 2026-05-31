# Calagero LTD Website

A polished Next.js website for Calagero LTD, a global civil engineering and construction support company.

## Features

- Next.js App Router with TypeScript
- Tailwind CSS design system with light and dark themes
- `next-themes` persistent theme toggle
- Framer Motion hero, card reveals, mobile menu, and hover transitions
- URL-based project filtering with `/projects?category=bridges`
- Client-side project and blog search
- Responsive project, blog, team, service, and contact layouts
- SVG construction mark for the Calagero LTD logo
- Semantic HTML, per-page metadata, Open Graph metadata, and Organization structured data
- Optimized remote imagery through `next/image`

## Project Structure

```text
app/
  about/
  blog/
  contact/
  projects/
  team/
components/
data/
lib/
public/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Content Updates

Project, team, blog, partner, and contact content is stored in `data/`:

- `data/projects.ts`
- `data/team.ts`
- `data/blog.ts`
- `data/partners.ts`
- `data/contact.ts`

Add or edit entries there to update the website without changing page components.

## Notes

The contact form currently performs client-side validation and simulates a submit state. Connect it to an email API, CRM, or server action when production handling is ready.
