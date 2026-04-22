import './styles/Career.css';

const entries = [
  {
    role:    'Customer Service & Escalation Manager (L3)',
    company: 'Amazon',
    period:  '2023–25',
    bullets: [
      'Managed high-severity escalations for Concession Abuse Prevention, ensuring policy compliance and accurate resolution across thousands of cases.',
      'Conducted root-cause analysis on abuse patterns and delivered structured insights to cross-functional engineering and policy teams.',
      'Mentored team members, improving resolution quality and operational efficiency through data-driven feedback cycles.',
    ],
  },
];

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>My career <span>&amp;</span><br /> experience</h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-timeline-line" />
            <div className="career-dot" />
          </div>
          <div className="career-items">
            {entries.map((e) => (
              <div className="career-item career-info-box" key={e.role}>
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>{e.role}</h4>
                    <h5>{e.company}</h5>
                  </div>
                  <h3>{e.period}</h3>
                </div>
                <ul className="career-bullets">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;