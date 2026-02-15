import React from 'react';

/**
 * AccordionItem Component
 * Renders a single accordion item with question and answer
 * @param {Object} props - Component props
 * @param {string} props.question - The FAQ question
 * @param {string} props.answer - The FAQ answer
 * @param {number} props.index - Index of the item
 * @param {boolean} props.isActive - Whether this item is currently expanded
 * @param {function} props.onClick - Handler for toggle click
 */
const AccordionItem = ({ question, answer, index, isActive, onClick }) => {
  return (\n    <div className=\"border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow\">\n      {/* ACCORDION HEADER (Clickable) */}\n      <button\n        onClick={onClick}\n        className={`w-full px-6 py-5 text-left flex justify-between items-start transition-all ${\n          isActive\n            ? 'bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-900'\n            : 'bg-white text-gray-800 hover:bg-gray-50'\n        }`}\n        aria-expanded={isActive}\n        aria-controls={`faq-answer-${index}`}\n      >\n        <span className=\"font-semibold text-base leading-snug pr-4\">{question}</span>\n        <span\n          className={`flex-shrink-0 text-xl transition-transform duration-300 ${\n            isActive ? 'rotate-180 text-indigo-600' : 'text-gray-400'\n          }`}\n        >\n          ▼\n        </span>\n      </button>\n\n      {/* ACCORDION CONTENT (Hidden/Visible) */}\n      {isActive && (\n        <div\n          id={`faq-answer-${index}`}\n          className=\"px-6 py-5 bg-white text-gray-600 leading-relaxed border-t border-gray-200 animate-fade-in\"\n          role=\"region\"\n        >\n          {answer}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default AccordionItem;
