import React, { useState } from 'react';
import useWindowWidth from './modules/useWindowWidth';
import Landing from './components/Landing';
import SectionToggle from './components/SectionToggle';
import './styles/App.scss';

const App = () => {
  const width = useWindowWidth();
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [skillsOpen, setSkillsOpen] = useState(true);
  const [contactOpen, setContactOpen] = useState(true);

  const toggleOpen = (e, name, openStatus) => {
    switch (name) {
      case 'projects':
        setProjectsOpen(!openStatus);
        break;
      case 'skills':
        setSkillsOpen(!openStatus);
        break;
      case 'contact':
        setContactOpen(!openStatus);
        break;
      default:
        break;
    }
  };

  let page = '';

  if (width < 768) {
    page = (
      <main>
        <Landing width={width} />
        <section className="projects-section">
          <SectionToggle
            name="projects"
            openStatus={projectsOpen}
            toggleOpen={toggleOpen}
          />
          <div className={`subsection ${projectsOpen ? 'open' : 'closed'}`}>
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
        </section>
        <section className="skills-section">
          <SectionToggle
            name="skills"
            openStatus={skillsOpen}
            toggleOpen={toggleOpen}
          />
          <div className={`subsection ${skillsOpen ? 'open' : 'closed'}`}>
            <h3>Javascript</h3>
          </div>
        </section>
        <section className="contact-section">
          <SectionToggle
            name="contact"
            openStatus={contactOpen}
            toggleOpen={toggleOpen}
          />
          <form className={`subsection ${contactOpen ? 'open' : 'closed'}`}>
            <input type="text" />
          </form>
        </section>
      </main>
    );
  }

  if (width >= 768) {
    page = <div>hello world {width} </div>;
  }
  return page;
};

export default App;
