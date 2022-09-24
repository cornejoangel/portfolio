import React, { useState } from 'react';
import './styles/App.scss';
import battleship from './images/battleship.jpg';
import blog from './images/blog.jpg';
import kanban from './images/kanban.jpg';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';

const App = () => {
  const [currentTab, setCurrentTab] = useState('portfolio');

  const changeTab = (e, name) => {
    setCurrentTab(name);
  };
  let page = '';

  const battleShipDescription =
    'An Implementation of the classic game Battleship.';

  const battleshipTech = ['React,', 'CSS,', 'Jest,', 'react-dnd'];

  const kanbanDescription = 'A Trello inspired kanban board.';

  const kanbanTech = ['React,', 'Sass,', 'react-beautiful-dnd'];

  const blogDescription = 'A social media blog hybrid site';
  const blogTech = [
    'MongoDB,',
    'Express,',
    'React,',
    'Node',
    'Sass,',
    'Passportjs',
  ];

  page = (
    <div className="app">
      <Navbar currentTab={currentTab} changeTab={changeTab} />
      <main>
        <div className="about">
          <h3>Software Developer</h3>
          <p>Always striving for growth</p>
        </div>
        <div className="projects">
          <ProjectCard
            name="battleship"
            description={battleShipDescription}
            tech={battleshipTech}
            src={battleship}
            source="https://github.com/cornejoangel/battleship"
            live="https://cornejoangel.github.io/battleship/"
          />
          <ProjectCard
            name="social blog"
            description={blogDescription}
            tech={blogTech}
            src={blog}
            source="https://github.com/cornejoangel/blog-api"
            live="https://cryptic-cove-57692.herokuapp.com/"
          />
          <ProjectCard
            name="kanban board"
            description={kanbanDescription}
            tech={kanbanTech}
            src={kanban}
            source="https://github.com/cornejoangel/kanban-board"
            live="https://cornejoangel.github.io/kanban-board/"
          />
        </div>
      </main>
    </div>
  );

  return page;
};

export default App;
