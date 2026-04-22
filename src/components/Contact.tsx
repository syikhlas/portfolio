import './styles/Contact.css';

const socials = [
  { label: 'GitHub',           href: 'https://github.com/syikhlas' },
  { label: 'LinkedIn',         href: 'https://linkedin.com/in/syed-ikhlas' },
  { label: 'Email',            href: 'mailto:ikhlasatwork@gmail.com' },
  { label: '+1 (817) 450-3708', href: 'tel:+18174503708' },
];

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <h2 className="contact-title">CONTACT</h2>

      <div className="contact-grid">
        {/* Education */}
        <div>
          <div className="contact-group-label">Education</div>
          <div className="contact-info">
            M.S. Computer Science, UNT — 2025–Present<br />
            B.E. CSE (AI &amp; ML), Lords / Osmania University — 2021–2025
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="contact-group-label">Certifications</div>
          <div className="contact-info">
            Google Cloud — ML Fundamentals (2024)<br />
            IBM SkillsBuild — Data Science &amp; AI (2024)
          </div>
        </div>

        {/* Social */}
        <div>
          <div className="contact-group-label">Social</div>
          <ul className="social-list">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" data-cursor="disable">
                  {s.label} <span className="arrow-icon">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="contact-footer-note">
        Designed &amp; Developed by <span>Ikhlas Syed</span>
      </p>
    </div>
  );
};

export default Contact;