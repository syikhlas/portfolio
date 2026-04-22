import './styles/About.css';

const About = () => {
  return (
    <div className="about-section section-container" id="about">
      <p className="about-label">ABOUT ME</p>
      <p className="about-body">
        I'm an <em>AI & ML engineer</em> and CS grad student at UNT.
        I build intelligent systems — from <em>predictive maintenance</em> pipelines
        on industrial sensors to <em>medical image classifiers</em> using deep learning.
        My craft was sharpened at <em>Amazon</em>, managing high-stakes escalations at scale.
        I believe the best ML is <em>reproducible, measurable</em> and quietly solves real problems.
      </p>
    </div>
  );
};

export default About;