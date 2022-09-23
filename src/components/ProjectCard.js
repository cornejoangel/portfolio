import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { MdOpenInNew } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { RiPriceTag3Line } from 'react-icons/ri';

import '../styles/ProjectCard.scss';

const ProjectCard = (props) => {
  const { name, description, tech, src, source, live } = props;

  const techList = [];
  for (let i = 0; i < tech.length; i += 1) {
    techList.push(<li key={uniqid()}>{tech[i]}</li>);
  }

  let card = '';

  card = (
    <div className="project-card">
      <img src={src} alt={name} />
      <div className="card-text">
        <h3 className="project-name">{name}</h3>
        <p className="description">{description}</p>
        <ul className="tech">
          <li className="tag-icon-container">
            <RiPriceTag3Line className="tag" />
          </li>
          {techList}
        </ul>
        <div className="project-links">
          <a
            href={source}
            target="_blank"
            className="svg-and-text"
            rel="noreferrer"
          >
            <SiGithub className="github-link small-svg" />
            Source Code
          </a>

          <a
            href={live}
            target="_blank"
            className="svg-and-text"
            rel="noreferrer"
          >
            <MdOpenInNew className="open-svg small-svg" />
            View Live
          </a>
        </div>
      </div>
    </div>
  );

  return card;
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  tech: PropTypes.array,
  src: PropTypes.string,
  source: PropTypes.string,
  live: PropTypes.string,
};

export default ProjectCard;
