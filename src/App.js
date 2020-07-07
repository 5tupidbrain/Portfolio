import React from 'react';
import './assets/css/App.css';

import Social from './Components/Social'
import Nav from './Components/Nav'
import Intro from './Components/Intro'
import About from './Components/About'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Projects from './Components/Projects'

function App() {
  return (
    <div>
      <Nav />
      <Social />
      <Intro />
      <About />
      <Projects />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;
