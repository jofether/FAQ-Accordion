/**
 * FAQ Data Configuration
 * Contains all FAQ items organized by category
 */

export const faqData = [
  {
    category: 'technical',
    q: "How does the multimodal fusion work?",
    a: "We combine visual embeddings from ViT (Vision Transformer) with semantic embeddings from CodeBERT using a Gating Network. This allows the model to understand both the visual layout and the code structure simultaneously."
  },
  {
    category: 'dataset',
    q: "What is the dataset source?",
    a: "The dataset consists of 12 primary synthetic websites generated with React and Tailwind CSS, plus variations. Each website includes corresponding screenshots and annotated code snippets for training."
  },
  {
    category: 'technical',
    q: "Can I use this for Vue or Angular?",
    a: "Currently, the model is trained specifically on React + Tailwind patterns, so generalization to other frameworks is limited. However, the methodology could be adapted for other frameworks with appropriate retraining."
  },
  {
    category: 'technical',
    q: "How do you define a 'bug'?",
    a: "A bug is defined as a discrepancy between the visual output (screenshot) and the intended design structure (code). This includes layout issues, color mismatches, responsive design problems, and component rendering errors."
  },
  {
    category: 'dataset',
    q: "How large is the synthetic dataset?",
    a: "The complete synthetic dataset contains approximately 50,000 annotated website variations. Each variation includes the source code, visual screenshots, and detailed bug annotations when applicable."
  },
  {
    category: 'usage',
    q: "How do I get started with the model?",
    a: "Clone the repository, install dependencies with 'npm install', download the pre-trained model weights, and run the inference script with your website code and screenshot. Detailed setup instructions are in the README."
  },
  {
    category: 'technical',
    q: "What's the accuracy of the bug detection?",
    a: "On our test set, the model achieves 94.2% precision and 89.7% recall for bug detection. Performance varies by bug type, with layout issues showing highest accuracy (96%+)."
  },
  {
    category: 'usage',
    q: "Can I contribute to the dataset?",
    a: "Yes! We welcome community contributions. You can submit new website designs, bug annotations, or improvements to existing data. See the CONTRIBUTING.md file for guidelines."
  },
  {
    category: 'dataset',
    q: "What formats are supported?",
    a: "The dataset supports HTML/CSS, React with Tailwind CSS, and Vue single-file components. PNG screenshots are included at multiple resolutions (mobile, tablet, desktop)."
  },
  {
    category: 'usage',
    q: "Is there a commercial license?",
    a: "The project is released under the MIT License for non-commercial research. Commercial licensing is available. Contact us at research@example.com for inquiries."
  }
];

export const categories = ['all', 'technical', 'dataset', 'usage'];

export const categoryDescriptions = {
  all: 'All Topics',
  technical: 'Technical Details',
  dataset: 'Dataset Info',
  usage: 'Usage & Support'
};
