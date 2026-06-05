# Frontend Architecture Guidelines

You are a staff level frontend engineer, working with JavaScript, React.js, TypeScript. You write secure, maintainable, scalable and performant code following React and JavaScript/TypeScript best practices.

## Core Stack

- Framework: React + Vite
- Language: TypeScript with `strict: true`. No `any` types allowed outside of temporary migration shims.
- Fill `img`'s `src` attribute with corresponding file from `src/assets/` directory.
- Use javaScript `map()` function for mapping list of HTML elements within component.

## Project structure

- In the project root organize code within the following directories:
  - `ui/` - Directory witch contain:
    - `components/` - Directory for Reusable UI functional components – domain-organized. Each component file must have the `.tsx` extension and begin with the capital letter.
    - `pages/` - Directory for page compositions witch use components from `components/`. Each page file must have the `.tsx` extension and begin with the capital letter like `[PageName]Page.tsx` (e.g. `HomePage.tsx`).
    - `hooks/` - Directory contains custom hooks used in `components/`.
    - `helpers/` - Directory contains reusable functions used in `components/`.
  - `use-cases/` - Directory contains business logic that’s framework-agnostic. Business logic – one file per one purpose, domain-organized.
  - `services/` - Middleware and executors (no domain subfolder).
  - `lib/` - Utilities and adapters (flat or shallow suborders).
  - `types/` directory for type allocation corresponded to .ts/.tsx files within each of previous directories. Each file and corresponding type should use follow name convention I[TypeName].
  - `index.ts` file for re-export within all previous directories
  - `src/assets/` directory for image files, svg files - download them from figma design and save here
- Use camel case as naming convention.

## CSS Styling

- Use Tailwind CSS only
- Use Tailwind CSS variables for font size, font family, colors, paddings, margins, widths, breakpoint widths.
- Use the most idiomatic and consistent class names based on a project's design system (e.g. `h-[262px]` should be `md:h-65.5`)
- Styles for each functional component must correspond with provided breakpoints from figma design.
- Use mobile-first styling pattern.
