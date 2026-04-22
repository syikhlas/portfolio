import About from './About';
import Career from './Career';
import Contact from './Contact';
import Cursor from './Cursor';
import Landing from './Landing';
import Navbar from './Navbar';
import WhatIDo from './WhatIDo';
import Work from './Work';
import TechStack from './TechStack';

const MainContainer = () => {
  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <div className="landing-circle1" />
      <div className="landing-circle2" />
      <div className="nav-fade" />

      <Landing />
      <About />
      <WhatIDo />
      <Work />
      <Career />
      <TechStack />
      <Contact />
    </div>
  );
};

export default MainContainer;