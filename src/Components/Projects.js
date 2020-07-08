import React from 'react';
import zrlo from '../assets/zrlo.png';


class Projects extends React.Component {
    render() {
        return (
            <div className="App">
                <div className='Container-4 Container'>
                    <div className='proj'>

                        <div className='projects' >
                            <h2>Some Things I've Built</h2>
                        </div>
                        <div className='p-grid'>

                            <div className='pcard'>
                                <a href='https://zrlo.herokuapp.com'>
                                    <img src={zrlo} alt='' ></img>
                                </a>
                                <div className='proj-card'>
                                    <h4>Project #1</h4>
                                    <a href='https://zrlo.herokuapp.com'>Zrlo</a>
                                    <p>A minimal,clean and basic url shortner,
                                        where you throw long url and it will
                                        generate a tiny url <span role="img" aria-label="l-bolt">⚡</span>.
                                    </p>
                                    <ul>
                                        <li>React.js</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Projects