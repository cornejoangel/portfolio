import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SkillCard.scss';

const SkillCard = (props) => {
  const { name, logo } = props;

  let card = '';

  card = (
    <div className="skill-card">
      {logo}
      <h3 className="skill-name">{name}</h3>
    </div>
  );

  return card;
};

SkillCard.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.element,
};

export default SkillCard;
