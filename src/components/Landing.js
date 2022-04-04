import React from 'react';
import '../styles/Landing.scss';
import resume from '../docs/angel-cornejo-resume.pdf';

const Landing = () => {
  let landing = '';
  landing = (
    <div className="landing">
      <h2 className="hi">Hi.</h2>
      <h2 className="my-name">
        My name is Angel Cornejo and I'm a software developer.
      </h2>
      <nav className="landing-links">
        <a href={resume} target="_blank" rel="noreferrer">
          Resume
        </a>
        <a
          href="https://github.com/cornejoangel"
          target="_blank"
          className="github-link"
          rel="noreferrer"
        >
          Github
        </a>
      </nav>
    </div>
  );
  return landing;
};

export default Landing;
