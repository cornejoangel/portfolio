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
import battleship from './images/battleship.jpg';
import kanban from './images/kanban.jpg';
import article from './images/article-clone.jpg';
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
  const [aboutOpen, setAboutOpen] = useState(true);
  const [contactOpen, setContactOpen] = useState(true);

  const toggleOpen = (e, name, openStatus) => {
    switch (name) {
      case 'projects':
        setProjectsOpen(!openStatus);
        break;
      case 'about':
        setAboutOpen(!openStatus);
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
  const kanbanDescription = 'A Trello inspired kanban board.';
  const articleCloneDescription = 'A clone of an article from NewScientist';

  const battleshipFeatures = [
    'Made with React and styled with pure CSS3',
    'Responsive mobile layout',
    'Intuitive drag-and-drop interface for ship placement using react-dnd',
    'AI algorithm that knows when it has gotten a hit and will search for the rest of your ship until it is sunk',
    'Developed using test-driven-development with Jest',
  ];
  const kanbanFeatures = [
    'Made with React and styled with Sass',
    'Implements full Create-Read-Update-Delete functionality for both lists and cards using local storage',
    'Intuitive interface utilizing react-beautiful-dnd library: users can switch the order of lists, move cards within a list or to another',
    'Card descriptions can be set in a pop-up modal',
    'Optional dark mode',
  ];
  const articleCloneFeatures = [
    'Accurate recreation of a professional UI',
    'Created with native HTML5 and CSS3',
    'Demonstrates solid fundamentals of HTML and CSS',
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
      <section className="about-section">
        {width < 768 && (
          <SectionToggle
            name="about"
            openStatus={aboutOpen}
            toggleOpen={toggleOpen}
          />
        )}
        {width >= 768 && <h2>About</h2>}
        <div className={`about ${aboutOpen ? 'open' : 'closed'}`}>
          <div className="about-text">
            <p>
              During my time at University I was exposed to a wide range of
              topics, my two favorite courses being Algorithms and Operating
              Systems. Algorithms allowed me to indulge my interest in seeing
              just how optimal you can make something. Operating Systems helped
              me to see how an enormously complex machine with many moving parts
              can work.
            </p>
            <p>
              Outside of school my primary interest was competitive video
              gaming, and I found myself wishing there were better web resources
              for my most played games. It seems only natural then that I have
              found myself so drawn to web development! Front-End in particular
              is the area I'm most interested in right now, but who knows where
              my insatiable drive to grow as a developer will take me.
            </p>
          </div>
          <div className="skills-wrapper">
            <h3>My Primary Skills</h3>
            <div className="skills-container">
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
          </div>
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
            width={width}
            src={battleship}
          />
          <ProjectCard
            name="kanban board"
            description={kanbanDescription}
            features={kanbanFeatures}
            width={width}
            src={kanban}
          />
          <ProjectCard
            name="article clone"
            description={articleCloneDescription}
            features={articleCloneFeatures}
            width={width}
            src={article}
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
