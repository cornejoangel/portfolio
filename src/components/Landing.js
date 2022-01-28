import React from 'react';
import PropTypes from 'prop-types';

const Landing = (props) => {
  const { width } = props;
  let landing = '';
  landing = (
    <div className="landing main-content full-page">
      <h2 className="hi">Hi.</h2>
      <h2 className="my-name">
        My name is <br className="name-break" />
        Angel Cornejo and I'm a software developer.
      </h2>
      <nav>
        <div className="offsite-links">
          <a href="#">Resume</a>
          <a href="#">Github</a>
        </div>
        <div className="onsite-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  );
  return landing;
};

Landing.propTypes = {
  width: PropTypes.number,
};

export default Landing;
