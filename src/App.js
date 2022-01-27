import React, { useState } from 'react';
import useWindowWidth from './modules/useWindowWidth';
import './styles/App.scss';

const App = () => {
  let currentlyMobile = false;
  const width = useWindowWidth();
  if (width < 768) {
    currentlyMobile = true;
  }
  const [mobileStatus, setMobileStatus] = useState(currentlyMobile);

  let page = '';

  page = (
    <main>
      <div className="landing main-content full-page">
        <h2 className="hi">Hi.</h2>
        <h2 className="my-name">
          My name is <br className="name-break" />
          Angel Cornejo and I'm a software developer.
        </h2>
        <nav>
          <div className="offsite-links">
            <a href="#">Resume</a>
            <a href="#">Github</a>
          </div>
          <div className="onsite-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
      <div id="projects" className="main-content full-page">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Battleship</h3>
        </div>
        <div className="project-card">
          <h3>Movie Picker</h3>
        </div>
        <div className="project-card">
          <h3>Article Clone</h3>
        </div>
      </div>
      <div id="skills" className="main-content full-page">
        <h2>Skills</h2>
        <div className="skill-card">
          <h3>Javascript</h3>
        </div>
      </div>
      <div id="contact" className="main-content full-page">
        <h2>Contact</h2>
      </div>
    </main>
  );

  if (!mobileStatus) {
    page = <div>hello world</div>;
  }
  return page;
};

export default App;
