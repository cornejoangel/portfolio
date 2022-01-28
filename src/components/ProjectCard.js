import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProjectCard.scss';

const ProjectCard = (props) => {
  const { width, name } = props;
  let card = '';

  card = (
    <div className="project-card">
      <h3 className="project-name">{name}</h3>
    </div>
  );

  return card;
};

ProjectCard.propTypes = {
  name: PropTypes.string,
};

export default ProjectCard;
