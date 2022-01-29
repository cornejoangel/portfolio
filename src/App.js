import React, { useState } from 'react';
import useWindowWidth from './modules/useWindowWidth';
import Landing from './components/Landing';
import SectionToggle from './components/SectionToggle';
import ProjectCard from './components/ProjectCard';
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

  page = (
    <main>
      <Landing width={width} />
      <section className="projects-section">
        {width < 768 && (
          <SectionToggle
            name="projects"
            openStatus={projectsOpen}
            toggleOpen={toggleOpen}
          />
        )}
        {width >= 768 && <h2>Projects</h2>}
        <div className={`subsection ${projectsOpen ? 'open' : 'closed'}`}>
          <ProjectCard width={width} name="battleship" />
          <ProjectCard width={width} name="movie picker" />
          <ProjectCard width={width} name="article clone" />
        </div>
      </section>
      <section className="skills-section">
        {width < 768 && (
          <SectionToggle
            name="skills"
            openStatus={skillsOpen}
            toggleOpen={toggleOpen}
          />
        )}
        {width >= 768 && <h2>Skills</h2>}
        <div className={`subsection ${skillsOpen ? 'open' : 'closed'}`}>
          <h3>Javascript</h3>
        </div>
      </section>
      <section className="contact-section">
        {width < 768 && (
          <SectionToggle
            name="contact"
            openStatus={contactOpen}
            toggleOpen={toggleOpen}
          />
        )}
        {width >= 768 && <h2>Contact</h2>}
        <form className={`subsection ${contactOpen ? 'open' : 'closed'}`}>
          <input type="text" />
        </form>
      </section>
    </main>
  );

  return page;
};

export default App;
