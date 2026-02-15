/**
 * Utility Functions
 * Helper functions for common operations
 */

/**
 * Get the display name for a category
 * @param {string} category - The category key
 * @returns {string} - The display name for the category
 */
export const getCategoryLabel = (category) => {
  const labels = {
    all: 'All Topics',
    technical: 'Technical Details',
    dataset: 'Dataset Information',
    usage: 'Usage & Support'
  };
  return labels[category] || category;
};

/**
 * Filter FAQs by category
 * @param {Array} faqs - Array of FAQ items
 * @param {string} category - Category to filter by
 * @returns {Array} - Filtered FAQ items
 */
export const filterFaqsByCategory = (faqs, category) => {
  if (category === 'all') return faqs;
  return faqs.filter(item => item.category === category);
};

/**
 * Format text for display
 * @param {string} text - Text to format
 * @returns {string} - Formatted text
 */
export const formatText = (text) => {
  return text.trim();
};

/**
 * Get category color for styling
 * @param {string} category - Category type
 * @returns {string} - Tailwind color class
 */
export const getCategoryColor = (category) => {
  const colors = {
    technical: 'from-blue-50 to-blue-100',
    dataset: 'from-green-50 to-green-100',
    usage: 'from-purple-50 to-purple-100',
    all: 'from-indigo-50 to-indigo-100'
  };
  return colors[category] || colors.all;
};
