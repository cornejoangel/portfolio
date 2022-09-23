import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdMenu, MdOutlineClose } from 'react-icons/md';
import '../styles/Navbar.scss';
import resume from '../docs/angel-cornejo-resume.pdf';

const Navbar = (props) => {
  const { currentTab, changeTab } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = <MdMenu className="icon menu-icon" />;
  const close = <MdOutlineClose className="icon close-icon" />;

  return (
    <nav>
      <div className="angel">Angel Cornejo</div>
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? close : menu}
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
