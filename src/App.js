import React, { useState } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

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
        {currentTab === 'portfolio' && <Portfolio />}
        {currentTab === 'contact' && <Contact />}
      </main>
    </div>
  );

  return page;
};

export default App;
