import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="App">
                <div className='Container-3 Container'>
                    <div className='ccard'>
                        <div className='contact'>
                            <h2>What's Next?</h2>
                            <h5>Get In Touch</h5>
                            <p>Got an interesting project to work on?
                                <br/>
                                I can help you with it, Let's talk.</p>

                            <div className='mailtxt'>
                                <p>Email:
                                    <a href="mailto:hellosaranshh@gmail.com" >hellosaransh@gmail.com</a>
                                </p>
                            </div>
                            <a
                                href="mailto:hellosaranshh@gmail.com"
                                className='mail-button c-btn'>
                                Say Hello
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact