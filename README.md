# Comcares Technologies Website Frontend

This is the initial setup for the Comcares Technologies Website frontend project. The project uses **React** with **Vite** for fast development and build, and **Tailwind CSS** for utility-first styling.

## Fonts

- **Manrope**: Used for headings.
- **Inter**: Used for body text.
- Both fonts are loaded via Google Fonts in [`index.html`](index.html).

## Tailwind CSS Setup

- Tailwind CSS is configured in [`tailwind.config.js`](tailwind.config.js).
- Custom font families are set for headings and body text.
- Styles are imported in [`src/styles/index.css`](src/styles/index.css).

## Folder Structure

```
frontend/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   ├── pages/
  │   ├── store/
  │   ├── styles/
  │   └── types/
  ├── index.html
  ├── package.json
  ├── tailwind.config.js
  ├── vite.config.ts
  └── ...
```

- `src/components/`: Reusable React components.
- `src/pages/`: Page-level components.
- `src/store/`: State management logic.
- `src/styles/`: CSS and Tailwind imports.
- `src/types/`: TypeScript type definitions.

## Note

This README will be updated as the project evolves and new features