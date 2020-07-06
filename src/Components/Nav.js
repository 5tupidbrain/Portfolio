import React from 'react';
import logo from '../assets/logo.png';


class Nav extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div className='Nav-container'>
                    <img alt='' src={logo}></img>
                    <ul className='Nav'>
                        <li>
                            <span>01.</span>
                            <a href='#home'>About</a>
                        </li>
                        <li>
                            <span>02.</span>
                            <a href='#home'>Projects</a>
                        </li>
                        <li>
                            <span>03.</span>
                            <a href='#home'>Contact</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Nav