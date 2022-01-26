import React from 'react';
import './styles/App.scss';

const App = () => {
  let page = '';

  page = (
    <main>
      <div className="landing">
        <h2 className="hi">Hi.</h2>
        <h2 className="my-name">
          My name is <br className="name-break" />
          Angel Cornejo and I'm a software developer.
        </h2>
      </div>
    </main>
  );

  return page;
};

export default App;
