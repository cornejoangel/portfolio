import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Navbar.scss';
import resume from '../docs/angel-cornejo-resume.pdf';

const Navbar = (props) => {
  const { currentTab, changeTab } = props;
  console.log(currentTab);

  return (
    <nav>
      <div className="angel">Angel Cornejo</div>
      <ul>
        <li className={currentTab === 'portfolio' ? 'selected' : ''}>
          <button type="button" onClick={(e) => changeTab(e, 'portfolio')}>
            Portfolio
          </button>
        </li>
        <li className={currentTab === 'contact' ? 'selected' : ''}>
          <button type="button" onClick={(e) => changeTab(e, 'contact')}>
            Contact
          </button>
        </li>
        <li>
          <a href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  currentTab: PropTypes.string,
  changeTab: PropTypes.func,
};

export default Navbar;
