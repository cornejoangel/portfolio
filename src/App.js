import React, { useState } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';

const App = () => {
  const [currentTab, setCurrentTab] = useState('portfolio');

  const changeTab = (e, name) => {
    setCurrentTab(name);
  };
  let page = '';

  page = (
    <div className="app">
      <Navbar currentTab={currentTab} changeTab={changeTab} />
      <main>
        <div className="blurb">Software Developer</div>
      </main>
    </div>
  );

  return page;
};

export default App;
