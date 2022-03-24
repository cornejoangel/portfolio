import React from 'react';
import PropTypes from 'prop-types';
import { MdOpenInNew } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import '../styles/ProjectCard.scss';

const ProjectCard = (props) => {
  const { name, description, features, width, src } = props;

  const featureList = [];
  for (let i = 0; i < features.length; i += 1) {
    featureList.push(<li>{features[i]}</li>);
  }

  let card = '';

  card = (
    <div className="project-card">
      <h3 className="project-name">{name}</h3>
      <img src={src} alt={name} />
      <p className="description">{description}</p>
      <ul className="features">{featureList}</ul>
      <nav className="project-links">
        {width < 768 && (
          <a href="#" className="svg-link">
            <SiGithub className="github-link small-svg" />
          </a>
        )}
        {width >= 768 && (
          <a href="#" className="svg-and-text">
            <SiGithub className="github-link small-svg" />
            Source Code
          </a>
        )}
        {width < 768 && (
          <a href="#" className="svg-link">
            <MdOpenInNew className="open-link small-svg" />
          </a>
        )}
        {width >= 768 && (
          <a href="#" className="svg-and-text">
            <MdOpenInNew className="open-svg" />
            View Live
          </a>
        )}
      </nav>
    </div>
  );

  return card;
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.array,
  width: PropTypes.number,
  src: PropTypes.string,
};

export default ProjectCard;
