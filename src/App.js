import React, { useState } from 'react';
import './styles/App.scss';
import resume from './docs/angel-cornejo-resume.pdf';

const App = () => {
  const [currentTab, setCurrentTab] = useState('portfolio');

  const changeTab = (e, name) => {
    setCurrentTab(name);
  };

  let page = '';

  page = (
    <div className="app">
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
      <main>
        <div className="blurb">Software Developer</div>
      </main>
    </div>
  );

  return page;
};

export default App;
