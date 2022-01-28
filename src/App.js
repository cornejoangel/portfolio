import React, { useState } from 'react';
import useWindowWidth from './modules/useWindowWidth';
import Landing from './components/Landing';
import './styles/App.scss';

const App = () => {
  const width = useWindowWidth();

  let page = '';

  if (width < 768) {
    page = (
      <main>
        <Landing width={width} />
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
  }

  if (width >= 768) {
    page = <div>hello world {width} </div>;
  }
  return page;
};

export default App;
