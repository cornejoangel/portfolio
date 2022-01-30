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
        <ul className="offsite-links">
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
        {width >= 768 && (
          <div className="onsite-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </nav>
    </div>
  );
  return landing;
};

Landing.propTypes = {
  width: PropTypes.number,
};

export default Landing;
