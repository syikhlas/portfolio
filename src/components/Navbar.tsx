import './styles/Navbar.css';

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="header">
      <a href="/" className="navbar-title" data-cursor="disable">Ikhlas</a>
      <ul>
        {[
          { label: 'ABOUT',   id: 'about'    },
          { label: 'WORK',    id: 'work'     },
          { label: 'CONTACT', id: 'contact'  },
        ].map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              data-cursor="disable"
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            >
              <span className="hover-link">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;