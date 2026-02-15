# FAQ Accordion - Synthetic Dataset & Bug Detection

An interactive FAQ accordion application built with React, Vite, and Tailwind CSS. Features category filtering, smooth animations, and a modern UI design showcasing frequently asked questions about a synthetic web design dataset and multimodal bug detection model.

## Features

✨ **Interactive UI**
- Single-panel accordion with smooth animations
- Category-based filtering (All, Technical, Dataset, Usage)
- Hover effects and visual feedback
- Responsive design for mobile and desktop

🎨 **Modern Design**
- Gradient backgrounds and shadows
- Indigo-themed color palette
- Smooth transitions and animations
- Professional typography

📱 **Responsive Layout**
- Mobile-first design approach
- Optimized for all screen sizes
- Touch-friendly button interactions

## Prerequisites
- Node.js 18+
- npm (bundled with Node)

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Project Structure

```
src/
├── App.jsx           # Main FAQ accordion component
├── index.css         # Global styles and animations
└── main.jsx          # React entry point

index.html           # HTML template
package.json         # Project dependencies
postcss.config.js    # PostCSS configuration
tailwind.config.js   # Tailwind CSS configuration
vite.config.js       # Vite configuration
```

## Technology Stack

- **React** - UI library for building components
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool

## Components

### App.jsx
The main component that manages the FAQ accordion state and renders the UI. Key features:
- `active` state: tracks which accordion item is expanded
- `category` state: manages category filtering
- `faqs` array: contains all FAQ items with categories
- `filteredFaqs`: displays FAQs based on selected category

## Styling Notes

- Tailwind is configured via `tailwind.config.js`
- PostCSS is configured in `postcss.config.js`
- Custom animations defined in `src/index.css` (`fade-in`)
- Gradient backgrounds and smooth color transitions for visual appeal

## FAQ Content

The accordion includes 10 frequently asked questions across 4 categories:
- **Technical**: How multimodal fusion works, framework compatibility, accuracy metrics
- **Dataset**: Data sources, size, format support
- **Usage**: Getting started, contributing, licensing

## Development Tips

- The accordion state logic in `App.jsx` prevents multiple panels from opening simultaneously
- Clicking an active item closes it (toggle behavior)
- Category filter resets the active item when switched
- All styling uses Tailwind utility classes for easy customization

## License

MIT License - Feel free to use this project for your research or applications.

## Support

For questions or improvements, please open an issue or contact the research team.
