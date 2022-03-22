import React, { useState } from 'react';
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiWebpack,
  SiJest,
  SiTrello,
} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import useWindowWidth from './modules/useWindowWidth';
import Landing from './components/Landing';
import SectionToggle from './components/SectionToggle';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import ContactForm from './components/ContactForm';
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

  const battleShipDescription =
    'An Implementation of the classic game Battleship.';
  const moviePickerDescription =
    'A single page app that will pick a movie for you to watch based on two categories you choose and one category the app chooses for you.';
  const articleCloneDescription = 'A clone of an article from NewScientist';

  const battleshipFeatures = [
    'Responsive',
    'Intuitive drag-and-drop interface using react-dnd',
    'AI algorithm that knows when it has gotten a hit and will search for the rest of the ship until it is sunk',
  ];
  const moviePickerFeatures = [
    'Responsive',
    'Implements IMDB API to search for movies',
  ];
  const articleCloneFeatures = [
    'Demonstrates ability to create a professional look',
    'Native HTML5 and CSS3',
  ];

  let page = '';
  const jsLogo = <SiJavascript className="logo js-logo" />;
  const reactLogo = <SiReact className="logo react-logo" />;
  const htmlLogo = <SiHtml5 className="logo html-logo" />;
  const cssLogo = <SiCss3 className="logo css-logo" />;
  const sassLogo = <FaSass className="logo sass-logo" />;
  const githubLogo = <SiGithub className="logo github-logo" />;
  const webpackLogo = <SiWebpack className="logo webpack-logo" />;
  const jestLogo = <SiJest className="logo jest-logo" />;
  const trelloLogo = <SiTrello className="logo trello-logo" />;

  page = (
    <main>
      <Landing width={width} />
      <section className="skills-section">
        {width < 768 && (
          <SectionToggle
            name="skills"
            openStatus={skillsOpen}
            toggleOpen={toggleOpen}
          />
        )}
        {width >= 768 && <h2>Skills</h2>}
        <div className={`skills-container ${skillsOpen ? 'open' : 'closed'}`}>
          <SkillCard name="Javascript" logo={jsLogo} />
          <SkillCard name="React" logo={reactLogo} />
          <SkillCard name="HTML5" logo={htmlLogo} />
          <SkillCard name="CSS3" logo={cssLogo} />
          <SkillCard name="SASS" logo={sassLogo} />
          <SkillCard name="Github" logo={githubLogo} />
          <SkillCard name="Webpack" logo={webpackLogo} />
          <SkillCard name="Jest" logo={jestLogo} />
          <SkillCard name="Trello" logo={trelloLogo} />
        </div>
      </section>
      <section className="projects-section">
        {width < 768 && (
          <SectionToggle
            name="projects"
            openStatus={projectsOpen}
            toggleOpen={toggleOpen}
          />
        )}
        {width >= 768 && <h2>Projects</h2>}
        <div
          className={`projects-container ${projectsOpen ? 'open' : 'closed'}`}
        >
          <ProjectCard
            name="battleship"
            description={battleShipDescription}
            features={battleshipFeatures}
          />
          <ProjectCard
            name="movie picker"
            description={moviePickerDescription}
            features={moviePickerFeatures}
          />
          <ProjectCard
            name="article clone"
            description={articleCloneDescription}
            features={articleCloneFeatures}
          />
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
        <div className={`contact-container ${contactOpen ? 'open' : 'closed'}`}>
          <ContactForm width={width} />
        </div>
      </section>
    </main>
  );

  return page;
};

export default App;
