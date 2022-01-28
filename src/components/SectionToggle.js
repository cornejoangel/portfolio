import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SectionToggle.scss';

const SectionToggle = (props) => {
  const { name, openStatus, toggleOpen } = props;

  return (
    <h2 className="section-heading">
      <button
        type="button"
        className={`section-toggle ${name}`}
        onClick={(e) => toggleOpen(e, name, openStatus)}
      >
        {name}
      </button>
    </h2>
  );
};

SectionToggle.propTypes = {
  name: PropTypes.string,
  openStatus: PropTypes.bool,
  toggleOpen: PropTypes.func,
};

export default SectionToggle;
