import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Landing.scss';

const Landing = (props) => {
  const { width } = props;
  let landing = '';
  landing = (
    <div className="landing">
      <h2 className="hi">Hi.</h2>
      <h2 className="my-name">
        My name is Angel Cornejo and I'm a software developer.
      </h2>
      <nav className="landing-links">
        <a href="#">Resume</a>
        <a href="#" className="github-link">
          Github
        </a>
      </nav>
    </div>
  );
  return landing;
};

Landing.propTypes = {
  width: PropTypes.number,
};

export default Landing;
