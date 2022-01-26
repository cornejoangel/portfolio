import React from 'react';
import './styles/App.scss';

const App = () => {
  let page = '';

  page = (
    <main>
      <div className="landing main-content full-page">
        <h2 className="hi">Hi.</h2>
        <h2 className="my-name">
          My name is <br className="name-break" />
          Angel Cornejo and I'm a software developer.
        </h2>
      </div>
      <div className="projects main-content full-page">
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
      <div className="skills main-content full-page">
        <h2>Skills</h2>
        <div className="skill-card">
          <h3>Javascript</h3>
        </div>
      </div>
      <div className="contact main-content full-page">
        <h2>Contact</h2>
      </div>
    </main>
  );

  return page;
};

export default App;
