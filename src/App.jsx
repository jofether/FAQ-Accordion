import React, { useState } from 'react';

function App() {
  const [active, setActive] = useState(0);

  const faqs = [
    { q: "How does the multimodal fusion work?", a: "We combine visual embeddings from ViT with semantic embeddings from CodeBERT using a Gating Network." },
    { q: "What is the dataset source?", a: "The dataset consists of 12 primary synthetic websites generated with React and Tailwind CSS, plus variations." },
    { q: "Can I use this for Vue or Angular?", a: "Currently, the model is trained specifically on React + Tailwind patterns, so generalization to other frameworks is limited." },
    { q: "How do you define a 'bug'?", a: "A bug is defined as a discrepancy between the visual output (screenshot) and the intended design structure (code)." }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 font-sans">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              
              {/* ACCORDION HEADER (Clickable) */}
              <button 
                onClick={() => setActive(active === index ? -1 : index)}
                className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors 
                  ${active === index ? 'bg-indigo-50 text-indigo-700' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                <span className="font-medium text-lg">{item.q}</span>
                <span className={`transform transition-transform duration-200 ${active === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* ACCORDION CONTENT (Hidden/Visible) */}
              {/* FUTURE BUG: Remove this conditional rendering to make text always visible */}
              {active === index && (
                <div className="px-6 py-4 bg-white text-gray-600 leading-relaxed border-t border-gray-100 animate-fade-in">
                  {item.a}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;