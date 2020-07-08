import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className='intro-pg'></div>
                <div className='Container-1 Container'>
                    <div className='Cont'>
                        <h4>Hi, my name is</h4>
                        <h1>Saransh Hardaha.</h1>
                        <h2>I'm a Web_developer,</h2>
                        <p> based in India,
                            I focuses on writting clean,
                            elegent and efficient code 
                        </p>

                        <a
                            href="mailto:hellosaranshh@gmail.com"
                            className='mail-button'>
                            Get In Touch
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App