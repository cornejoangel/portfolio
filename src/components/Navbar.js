import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Navbar.scss';
import resume from '../docs/angel-cornejo-resume.pdf';

const Navbar = (props) => {
  const { currentTab, changeTab } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="angel">Angel Cornejo</div>
      <button
        type="button"
        className="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        menu
      </button>
      <ul className={menuOpen ? 'open' : ''}>
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
