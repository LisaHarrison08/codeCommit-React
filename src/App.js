import React from 'react';
import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import About from './components/About';

function App() {
  return (
    <React.Fragment>
      < Header />
      <Info />
      <About />
    </React.Fragment>
  )
}

export default App;
