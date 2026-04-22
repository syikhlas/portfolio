import { useState, useCallback, useEffect } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import './styles/Work.css';

const projects = [
  {
    num: '01',
    title: 'Kidney Disease Classifier',
    category: 'Deep Learning · Computer Vision',
    tools: 'Python, TensorFlow, Keras, VGG16, MLFlow, DVC, OpenCV',
    points: [
      'Transfer learning with VGG16 achieving high classification accuracy on CT scan images',
      'Full MLFlow + DVC pipeline for reproducible experiment tracking and model versioning',
      'Image preprocessing, augmentation and evaluation with precision, recall & F1-score',
    ],
    link: 'https://github.com/syikhlas/Kidney-Disease-Classification-MLFlow-DVC',
    images: ['/images/kidney_01_upload.png', '/images/kidney_02_normal.png', '/images/kidney_03_uncertain.png'],
  },
  {
    num: '02',
    title: 'TickTalk — Voice Timer',
    category: 'Accessibility · AI / LLM',
    tools: 'Flutter, Dart, GitHub Actions, CI/CD, Agile, LLM',
    points: [
      'Voice-controlled timer app built for visually impaired users with AI command interpretation',
      'Automated CI/CD pipeline via GitHub Actions for continuous builds and testing',
      'Agile/Scrum workflow with user stories, backlog management and sprint planning',
    ],
    link: 'https://github.com/devgrg25/TickTalk-User-Stories-and-Project-Setup-Group-2-',
    images: ['/images/ticktalk_01_home.jpg', '/images/ticktalk_02_timer.jpg', '/images/ticktalk_03_routines.jpg', '/images/ticktalk_04_stopwatch.jpg', '/images/ticktalk_05_settings.jpg'],
  },
  {
    num: '03',
    title: 'Predictive Maintenance',
    category: 'Machine Learning · MLOps',
    tools: 'Python, TensorFlow, scikit-learn, MLFlow, Pandas, NumPy',
    points: [
      'ML pipeline for industrial equipment failure prediction using structured sensor data',
      'Feature engineering and hyperparameter tuning evaluated via ROC-AUC and F1-score',
      'Experiment tracking and model versioning with MLFlow for full reproducibility',
    ],
    link: 'https://github.com/syikhlas',
    images: [
      '/images/01_attributes_histogram.png',
      '/images/02_failure_type_counts.png',
      '/images/03_product_quality_pie.png',
      '/images/04_tool_wear_by_failure.png',
      '/images/05_air_temp_boxplot.png',
      '/images/06_rotational_speed_violin.png',
      '/images/07_algorithm_comparison.png',
      '/images/08_confusion_matrices.png',
    ],
  },
];

function ImageSlideshow({ images }: { images: string[] }) {
  const [slide, setSlide] = useState(0);
  const [fading, setFading] = useState(false);

  const advance = useCallback((dir: 1 | -1 = 1) => {
    setFading(true);
    setTimeout(() => {
      setSlide(s => (s + dir + images.length) % images.length);
      setFading(false);
    }, 300);
  }, [images.length]);

  // Auto-advance every 3.5s
  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => advance(1), 3500);
    return () => clearInterval(t);
  }, [images.length, advance]);

  const goTo = (i: number) => {
    if (i === slide) return;
    setFading(true);
    setTimeout(() => { setSlide(i); setFading(false); }, 300);
  };

  if (images.length === 0) {
    return (
      <div className="work-img-placeholder">
        <span>Coming Soon</span>
      </div>
    );
  }

  return (
    <div
      className="slideshow-wrap"
      onClick={() => advance(1)}
      title="Click to see next image"
    >
      <img
        key={slide}
        src={images[slide]}
        alt={`Slide ${slide + 1} of ${images.length}`}
        className={`slideshow-img ${fading ? 'fading' : ''}`}
        draggable={false}
      />

      {/* Counter top-right */}
      <div className="slideshow-counter">
        {slide + 1} / {images.length}
      </div>

      {/* Click hint — fades after first interaction */}
      <div className="slideshow-hint">Click to advance →</div>

      {/* Dot indicators */}
      <div className="slideshow-dots" onClick={e => e.stopPropagation()}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`slideshow-dot ${i === slide ? 'active' : ''}`}
            onClick={() => goTo(i)}
            data-cursor="disable"
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const Work = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 500);
  }, [animating]);

  const prev = useCallback(() =>
    go(current === 0 ? projects.length - 1 : current - 1), [current, go]);
  const next = useCallback(() =>
    go(current === projects.length - 1 ? 0 : current + 1), [current, go]);

  const p = projects[current];

  return (
    <div className="work-section section-container" id="work">
      <h2>My <span>Work</span></h2>

      <div className="work-carousel">
        <button className="carousel-arrow left" onClick={prev} data-cursor="disable" aria-label="Prev">
          <MdArrowBack />
        </button>
        <button className="carousel-arrow right" onClick={next} data-cursor="disable" aria-label="Next">
          <MdArrowForward />
        </button>

        <div className={`work-slide project-row ${animating ? 'animating' : ''}`}>
          {/* LEFT */}
          <div className="work-meta">
            <div className="work-num">{p.num}</div>
            <div className="work-details">
              <a className="work-title-link" href={p.link} target="_blank" rel="noreferrer" data-cursor="disable">
                {p.title} <span className="work-title-arrow">↗</span>
              </a>
              <p className="work-cat">{p.category}</p>
              <ul className="work-points">
                {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
              <div className="work-tools">
                <span className="tools-label">TOOLS &amp; STACK</span>
                <p>{p.tools}</p>
              </div>
            </div>
          </div>

          {/* RIGHT — slideshow */}
          <div className="work-visual">
            <ImageSlideshow images={p.images} />
          </div>
        </div>

        <div className="carousel-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === current ? 'active' : ''}`}
              onClick={() => go(i)}
              data-cursor="disable"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;