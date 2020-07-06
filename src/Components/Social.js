import React from 'react';

import insta from '../assets/icons/insta.svg';
import github from '../assets/icons/github.svg';
import lin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';


class Social extends React.Component {
    render() {
        return (
            <div>
                <div className='left-side tmenu'>
                    <ul>
                        <li><a className='github' href='https://github.com/5tupidbrain'>
                            <img src={github} alt=''></img>
                        </a></li>
                        <li><a className='insta' href='https://github.com/5tupidbrain'>
                            <img src={insta} alt=''></img>

                        </a></li>
                        <li><a className='lin' href='https://github.com/5tupidbrain'>
                            <img src={lin} alt=''></img>

                        </a></li>
                        <li className='last-i twitter'><a href='https://github.com/5tupidbrain'>
                            <img src={twitter} alt=''></img>

                        </a></li>
                    </ul>
                </div>
                <div className='right-side tmenu'>
                    <a href="mailto:hellosaransh@gmail.com">hellosaransh@gmail.com</a>
                </div>
            </div>
        )
    }
}

export default Social