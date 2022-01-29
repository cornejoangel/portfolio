import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SkillCard.scss';

const SkillCard = (props) => {
  const { name, src } = props;

  let card = '';

  card = (
    <div className="skill-card">
      <img src="#" alt={`${name} logo`} />
      <h3 className="skill-name">
        {name}
        {src}
      </h3>
    </div>
  );

  return card;
};

SkillCard.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};

export default SkillCard;
