import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import { Trans, useTranslation } from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation()
  // i18n.changeLanguage('ar')
  // i18n.resolvedLanguage
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>i18n.changeLanguage('en')} >english</button>
        <button onClick={()=>i18n.changeLanguage('ar')} >arabic</button>
        <img src={logo} className="App-logo" alt="logo" />
        <Trans>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        </Trans>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("key")}
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
