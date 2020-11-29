import React from 'react';
import logo from '../assets/logo.png';


class About extends React.Component {
    render() {
        return (
            <div className="App">
                <div className='Container-2 Container'>
                    <div className='acard'>
                        <div className='left-fl'>

                            <div className='about'>
                                <h2>About Me</h2>
                                <p>I'm an person with high attention to detail ! and enjoy creating things that live on the internet,
                                whether that be websites, applications,
                                or anything in between. My goal is to always build
                                products that provide pixel-perfect, performant
                            experiences.</p>
                            </div>

                            <div className='skills'>
                                <h2>Skills</h2>
                                <p>The main area of my expertise
                                is front end development
                                (client side of the web).
                            </p>
                                <div className='skills-list'>
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>Javascript</li>
                                    </ul>
                                    <ul>
                                        <li>ReactJS</li>
                                        <li>NodeJS</li>
                                        <li>ExpressJS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='right-fl'>
                            <img className='alogo' alt='' src={logo}></img>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default About