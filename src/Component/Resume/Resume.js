import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Resume.css'
import prince from '../../images/prince.jpg'
import TypewriterComponent from 'typewriter-effect'
const Resume = () => {
    return (
        <section className='resume-container' >
            <div className='row '>
                <div className='col-md-4 d-flex justify-content-center '>
                    <div className='shadow offset-md-4 bio-container intro-container text-center'>
                        <h4 style={{ padding: ' 10px 6px' }}>Hello<br />
                            <TypewriterComponent
                                options={{
                                    strings: ['Everyone', "I'm Prince"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h4>
                        <img src={prince} alt="" />
                        <div className='mt-2'>
                            <p>Name:Abdul Wadud Prince</p>
                            <p>Birthday: 30 October</p>
                            <p>Job: Seeking</p>
                            <p>Email: awprince.ynu@gmail.com</p>
                            <p>LinkedIn: henryrooney85</p>
                        </div>
                        <button className='resume-button mb-3'>Download Resume</button>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='shadow resume-nav'>
                        <Navbar></Navbar>
                    </div>
                    <div className='mt-5'>
                        About
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;