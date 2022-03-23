import React from 'react';
import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import About from './components/About';
import Creator from './components/Creator';
import Footer from './components/Footer';
// import Nav from './components/Nav';
// import Join from './components/Join'

const App = () => {
  return (
    <React.Fragment>
      < Header />
      <Info />
      <About />
      <Creator />
      < Footer />
    </React.Fragment>
  )
}

export default App;
