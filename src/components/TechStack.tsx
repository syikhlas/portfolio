import './styles/TechStack.css';

const allItems = [
  { name: 'Python',         cat: 'Languages',    icon: '🐍' },
  { name: 'TensorFlow',     cat: 'ML / DL',      icon: '🧠' },
  { name: 'Keras',          cat: 'ML / DL',      icon: '🔥' },
  { name: 'scikit-learn',   cat: 'ML / DL',      icon: '⚙️' },
  { name: 'MLFlow',         cat: 'MLOps',         icon: '🔬' },
  { name: 'DVC',            cat: 'MLOps',         icon: '📦' },
  { name: 'Pandas',         cat: 'Data',          icon: '📊' },
  { name: 'NumPy',          cat: 'Data',          icon: '🔢' },
  { name: 'OpenCV',         cat: 'ML / DL',      icon: '👁️' },
  { name: 'Docker',         cat: 'MLOps',         icon: '🐳' },
  { name: 'GCP',            cat: 'Cloud & Tools', icon: '☁️' },
  { name: 'Git',            cat: 'MLOps',         icon: '🔧' },
  { name: 'GitHub Actions', cat: 'MLOps',         icon: '⚡' },
  { name: 'Jupyter',        cat: 'Cloud & Tools', icon: '📓' },
  { name: 'SQL',            cat: 'Languages',     icon: '🗄️' },
  { name: 'Tableau',        cat: 'Data',          icon: '📈' },
  { name: 'Java',           cat: 'Languages',     icon: '☕' },
  { name: 'Flutter',        cat: 'Cloud & Tools', icon: '📱' },
  { name: 'Matplotlib',     cat: 'Data',          icon: '📉' },
  { name: 'Google Colab',   cat: 'Cloud & Tools', icon: '🚀' },
];

const TechStack = () => {
  return (
    <div className="techstack-section" id="techstack">
      <h2 className="stack-title">My <span>Stack</span></h2>
      <div className="stack-grid">
        {allItems.map((item) => (
          <div className="stack-card" key={item.name}>
            <span className="stack-icon">{item.icon}</span>
            <span className="stack-name">{item.name}</span>
            <span className="stack-cat">{item.cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;