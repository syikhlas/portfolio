import './styles/WhatIDo.css';

const cards = [
  {
    title: 'ML Engineering',
    sub:   'End-to-end model development',
    desc:  'Designing, training and deploying models — from raw data ingestion and feature engineering through hyperparameter tuning and production-ready evaluation.',
  },
  {
    title: 'Deep Learning',
    sub:   'CNNs · Transfer Learning · Vision',
    desc:  'Building computer-vision pipelines with TensorFlow and Keras. Transfer learning with VGG16 and custom CNN architectures for classification and detection.',
  },
  {
    title: 'MLOps',
    sub:   'Reproducible & trackable experiments',
    desc:  'MLFlow experiment tracking, Docker containerisation, CI/CD via GitHub Actions, and version-controlled model registries.',
  },
  {
    title: 'Data Engineering',
    sub:   'Pandas · NumPy · SQL · Tableau',
    desc:  'Preprocessing real-world data, engineering features that matter, and communicating insights through clean visualisations and dashboards.',
  },
];

const WhatIDo = () => {
  return (
    <div className="whatIDO whatido-section section-container">
      <h2 className="whatido-title">
        WHAT<br /><span>I DO</span>
      </h2>
      <div className="what-box-in">
        {cards.map((c) => (
          <div className="whatido-card" key={c.title}>
            <span className="corner-tr" />
            <span className="corner-bl" />
            <div className="card-title">{c.title}</div>
            <div className="card-sub">{c.sub}</div>
            <div className="card-desc">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;