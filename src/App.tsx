import React from 'react';
import './App.css';
// @ts-ignore
import logo from '../images/edit.png';
import LoadImage from './LoadImage';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Webpack examples
        </p>
        <LoadImage />
      </header>
      <Footer />
    </div>
  );
}

export default App;