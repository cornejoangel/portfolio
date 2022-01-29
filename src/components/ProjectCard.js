import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProjectCard.scss';

const ProjectCard = (props) => {
  const { name, description, features } = props;

  const featureList = [];
  for (let i = 0; i < features.length; i += 1) {
    featureList.push(<li>{features[i]}</li>);
  }

  let card = '';

  card = (
    <div className="project-card">
      <h3 className="project-name">{name}</h3>
      <img src="#" alt={name} />
      <p className="description">{description}</p>
      <ul className="features">{featureList}</ul>
      <a href="#">View Live</a>
      <a href="#">Source Code</a>
    </div>
  );

  return card;
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.array,
};

export default ProjectCard;
