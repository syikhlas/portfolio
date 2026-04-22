import CharacterModel from './Character/index.tsx';
import './styles/Landing.css';

const Landing = () => {
  return (
    <div className="landing-section" id="landingDiv">

      {/* LEFT — name + role */}
      <div className="landing-left">
        <h2 className="landing-greeting">Hello! I'm</h2>
        <h1 className="landing-name">
          <span className="ln ln-1">
            {'IKHLAS'.split('').map((c,i) => <span key={i} className="landing-name-char">{c}</span>)}
          </span>
          <span className="ln ln-2">
            {'ULLAH HUSSAINI'.split('').map((c,i) => (
              <span key={i} className={`landing-name-char${c===' '?' lsp':''}`}>{c===' '?'\u00A0':c}</span>
            ))}
          </span>
          <span className="ln ln-3">
            {'SYED'.split('').map((c,i) => <span key={i} className="landing-name-char">{c}</span>)}
          </span>
        </h1>
        <p className="landing-role-tag">AI &amp; ML Engineer</p>
      </div>

      {/* RIGHT — avatar */}
      <div className="landing-right">
        <div className="char-glow" />
        <div className="landing-avatar-wrap">
          <CharacterModel />
        </div>
      </div>

      <a className="resume-btn" href="mailto:ikhlasatwork@gmail.com" data-cursor="disable">
        RESUME ▣
      </a>
    </div>
  );
};

export default Landing;