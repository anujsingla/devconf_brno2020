import React from 'react';
import './App.css';
import Footer from './Footer';
// @ts-ignore
import logo from '../images/edit.png';
// const logo = require('../images/edit.png');

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={logo} height={200} width={200} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;