import { useEffect, useState } from 'react';
import { useLoading } from '../context/LoadingProvider';
import './styles/Loading.css';

const STEPS = [0, 25, 50, 75, 100];
const STEP_DURATION = 1000; // 1s per step = 5s total

const Loading = () => {
  const { setIsLoading } = useLoading();
  const [stepIndex, setStepIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const percent = STEPS[stepIndex];

  useEffect(() => {
    if (stepIndex < STEPS.length - 1) {
      const t = setTimeout(() => setStepIndex(i => i + 1), STEP_DURATION);
      return () => clearTimeout(t);
    } else {
      // reached 100 — show briefly then exit
      const t = setTimeout(() => {
        setDone(true);
        setTimeout(() => {
          setLeaving(true);
          import('./utils/initialFX').then(m => m.initialFX?.());
          setTimeout(() => setIsLoading(false), 800);
        }, 600);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [stepIndex]);

  const roles = ['ML Engineer', 'AI Engineer'];

  return (
    <div className={`loading-screen ${leaving ? 'leaving' : ''}`}>
      {/* Scrolling marquee */}
      <div className="loading-marquee-wrap">
        <div className="loading-marquee-track">
          {[...roles, ...roles, ...roles, ...roles].map((r, i) => (
            <span key={i} className="loading-marquee-item">
              {r} <span className="loading-marquee-dot">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Loading pill */}
      <div className={`loading-pill ${done ? 'pill-done' : ''}`}>
        <div className="pill-inner">
          <span className="pill-label">
            Loading <span className="pill-percent">{percent}%</span>
          </span>
          <div className="pill-bar-wrap">
            <div
              className="pill-bar"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
        {done && <span className="pill-welcome">Welcome</span>}
      </div>
    </div>
  );
};

export default Loading;

// kept for compatibility — no longer used for progress
export const setProgress = (setLoading: (v: number) => void) => {
  setLoading(0);
  const loaded = () => Promise.resolve(100);
  return { loaded, percent: 0 };
};