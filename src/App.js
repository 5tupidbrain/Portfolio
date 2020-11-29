import React from 'react';
import { Link, Element} from 'react-scroll'

import './assets/css/App.css';
import logo from './assets/logo.png';

import Social from './Components/Social'
import Intro from './Components/Intro'
import About from './Components/About'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Projects from './Components/Projects'


function App() {
  return (
    <div>

      <header className="App-header">
        <div className='Nav-container'>
          <Link activeClass="active"
                to="intro"
                smooth={true}
                duration={500}
                className='logo'>
            <img alt='' src={logo}></img>
          </Link>
          <input className='menu-btn' type='checkbox'></input>
          <div className='sbar'>
            <span></span>
          </div>
          <ul className='Nav'>
            <li>
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={500} >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                smooth={true}
                duration={500} >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                duration={500} >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* <Nav /> */}
      <Social />
      
      <Element name='intro'>
        <Intro />
      </Element>

      <Element name='about'>
        <About />
      </Element>

      <Element name='projects'>
        <Projects />
      </Element>

      <Element name='contact'>
        <Contact />
      </Element>
      

      <Footer />
    </div>
  );
}

export default App;
