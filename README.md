# Comcares Technologies Website Frontend

This is the initial setup for the Comcares Technologies Website frontend project. The project uses **React** with **Vite** for fast development and build, **Tailwind CSS** for utility-first styling, and **Material UI** for advanced UI components.

## Fonts

- **Manrope**: Used for headings.
- **Inter**: Used for body text.
- Both fonts are loaded via Google Fonts in [`index.html`](index.html).

## Tailwind CSS Setup

- Tailwind CSS is configured in [`tailwind.config.js`](tailwind.config.js).
- Custom font families are set for headings and body text.
- Styles are imported in [`src/styles/index.css`](src/styles/index.css).

## Theme Toggle Feature

- Implemented dark/light theme toggle using **Redux Toolkit** for state management.
- Used **Material UI**'s Switch component for the toggle.
- Integrated **react-icons** for theme-related icons.
- Tailwind CSS classes are dynamically applied based on the selected theme.
- The main app background uses `bg-slate-950` for dark mode compatibility.

## Layout and Structure

- The project features a **responsive layout** with a reusable `Header` and `Footer` component for consistent navigation and branding across all pages.
- The layout is designed to be compatible with both light and dark themes, and works seamlessly with the main app background (`bg-slate-950`).

## Custom UI Components

- Developed custom UI components in `src/components/ui/`:
  - **Button**: Theme-aware, supports `primary`, `secondary`, and `outline` variants.
  - **Input**: Custom styled input field, consistent with the app's theme and design.
  - **Textarea**: Custom styled textarea, theme-aware and accessible.
- All UI components are built using Material UI and styled for both light and dark modes.

## Contact Us Page

- Implemented a **Contact Us** page that utilizes the custom `Input`, `Textarea`, and `Button` components.
- The page is fully responsive and styled to match the overall theme.
- Includes form validation and user feedback for a better user experience.

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

This README will be updated as the project evolves and new features are added.