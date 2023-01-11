import React from 'react';
import battleship from '../images/battleship.jpg';
import blog from '../images/blog.jpg';
import kanban from '../images/kanban.jpg';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  let portfolio = '';
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
  portfolio = (
    <div className="portfolio-content">
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
        {/* <ProjectCard
          name="social blog"
          description={blogDescription}
          tech={blogTech}
          src={blog}
          source="https://github.com/cornejoangel/blog-api"
          live="https://social-blog.herokuapp.com/"
        /> */}
        <ProjectCard
          name="kanban board"
          description={kanbanDescription}
          tech={kanbanTech}
          src={kanban}
          source="https://github.com/cornejoangel/kanban-board"
          live="https://cornejoangel.github.io/kanban-board/"
        />
      </div>
    </div>
  );

  return portfolio;
};

export default Portfolio;
