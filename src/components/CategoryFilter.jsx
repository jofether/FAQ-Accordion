import React from 'react';

/**
 * CategoryFilter Component
 * Renders category filter buttons
 * @param {Object} props - Component props
 * @param {Array} props.categories - Available categories
 * @param {string} props.activeCategory - Currently selected category
 * @param {function} props.onCategoryChange - Handler for category selection
 */
const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {\n  const getCategoryLabel = (cat) => {\n    const labels = {\n      all: 'All Topics',\n      technical: 'Technical',\n      dataset: 'Dataset',\n      usage: 'Usage'\n    };\n    return labels[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);\n  };\n\n  return (\n    <div className=\"flex flex-wrap gap-3 justify-center mb-10\">\n      {categories.map(cat => (\n        <button\n          key={cat}\n          onClick={() => onCategoryChange(cat)}\n          className={`px-5 py-2 rounded-full font-medium transition-all ${\n            activeCategory === cat\n              ? 'bg-indigo-600 text-white shadow-lg'\n              : 'bg-white text-gray-700 border border-gray-300 hover:border-indigo-400'\n          }`}\n          aria-pressed={activeCategory === cat}\n        >\n          {getCategoryLabel(cat)}\n        </button>\n      ))}\n    </div>\n  );\n};\n\nexport default CategoryFilter;
