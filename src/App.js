import React, { useState } from 'react';
import './styles/App.scss';
import battleship from './images/battleship.jpg';
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
