import React, { useState } from 'react';

function App() {
  const [active, setActive] = useState(0);
  const [category, setCategory] = useState('all');

  const faqs = [
    { category: 'technical', q: "How does the multimodal fusion work?", a: "We combine visual embeddings from ViT (Vision Transformer) with semantic embeddings from CodeBERT using a Gating Network. This allows the model to understand both the visual layout and the code structure simultaneously." },
    { category: 'dataset', q: "What is the dataset source?", a: "The dataset consists of 12 primary synthetic websites generated with React and Tailwind CSS, plus variations. Each website includes corresponding screenshots and annotated code snippets for training." },
    { category: 'technical', q: "Can I use this for Vue or Angular?", a: "Currently, the model is trained specifically on React + Tailwind patterns, so generalization to other frameworks is limited. However, the methodology could be adapted for other frameworks with appropriate retraining." },
    { category: 'technical', q: "How do you define a 'bug'?", a: "A bug is defined as a discrepancy between the visual output (screenshot) and the intended design structure (code). This includes layout issues, color mismatches, responsive design problems, and component rendering errors." },
    { category: 'dataset', q: "How large is the synthetic dataset?", a: "The complete synthetic dataset contains approximately 50,000 annotated website variations. Each variation includes the source code, visual screenshots, and detailed bug annotations when applicable." },
    { category: 'usage', q: "How do I get started with the model?", a: "Clone the repository, install dependencies with 'npm install', download the pre-trained model weights, and run the inference script with your website code and screenshot. Detailed setup instructions are in the README." },
    { category: 'technical', q: "What's the accuracy of the bug detection?", a: "On our test set, the model achieves 94.2% precision and 89.7% recall for bug detection. Performance varies by bug type, with layout issues showing highest accuracy (96%+)." },
    { category: 'usage', q: "Can I contribute to the dataset?", a: "Yes! We welcome community contributions. You can submit new website designs, bug annotations, or improvements to existing data. See the CONTRIBUTING.md file for guidelines." },
    { category: 'dataset', q: "What formats are supported?", a: "The dataset supports HTML/CSS, React with Tailwind CSS, and Vue single-file components. PNG screenshots are included at multiple resolutions (mobile, tablet, desktop)." },
    { category: 'usage', q: "Is there a commercial license?", a: "The project is released under the MIT License for non-commercial research. Commercial licensing is available. Contact us at research@example.com for inquiries." }
  ];

  const categories = ['all', 'technical', 'dataset', 'usage'];
  const filteredFaqs = category === 'all' ? faqs : faqs.filter(item => item.category === category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">Everything you need to know about our synthetic dataset and bug detection model</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setActive(0);
              }}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                category === cat
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-indigo-400'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filteredFaqs.map((item, index) => {
            const isActive = active === index && (category === 'all' || item.category === category);
            return (
              <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                
                {/* ACCORDION HEADER (Clickable) */}
                <button 
                  onClick={() => setActive(isActive ? -1 : index)}
                  className={`w-full px-6 py-5 text-left flex justify-between items-start transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-900'
                      : 'bg-white text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-semibold text-base leading-snug pr-4">{item.q}</span>
                  <span className={`flex-shrink-0 text-xl transition-transform duration-300 ${
                    isActive ? 'rotate-180 text-indigo-600' : 'text-gray-400'
                  }`}>
                    ▼
                  </span>
                </button>

                {/* ACCORDION CONTENT (Hidden/Visible) */}
                {isActive && (
                  <div className="px-6 py-5 bg-white text-gray-600 leading-relaxed border-t border-gray-200 animate-fade-in">
                    {item.a}
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 text-sm mb-4">Didn't find your answer?</p>
          <a href="#contact" className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
}

export default App;