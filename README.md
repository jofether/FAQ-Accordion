# FAQ Accordion

Interactive FAQ accordion built with React, Vite, and Tailwind CSS. Only one panel is open at a time, pushing other items down to highlight hidden vs. visible content states.

## Prerequisites
- Node.js 18+
- npm (bundled with Node)

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   npm run dev
   ```
3. Build for production:
   ```sh
   npm run build
   ```
4. Preview the production build:
   ```sh
   npm run preview
   ```

## Notes
- Tailwind is configured via `tailwind.config.js` and `postcss.config.js`.
- The accordion state lives in `src/App.jsx`; toggling an item sets the active index or closes it.
