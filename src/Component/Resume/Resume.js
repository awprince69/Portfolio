import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Resume.css'
import prince from '../../images/prince.jpg'
import TypewriterComponent from 'typewriter-effect'
import Skills from './Skills/Skills';

const Resume = () => {
    return (
        <section className='resume-container' >
            <div className='row '>
                <div className='col-md-4 d-flex justify-content-center '>
                    <div className='shadow offset-md-4 bio-container intro-container '>
                        <h4 className='text-center' style={{ padding: ' 10px 6px' }}>Hello<br />
                            <TypewriterComponent
                                options={{
                                    strings: ['Everyone'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h4>
                        <img src={prince} alt="" />
                        <div className='mt-3  mx-2 bio-text'>
                            <p>Name: Abdul Wadud Prince</p>
                            <p>Profession: Student</p>
                            <p>Phone: +8615508895493</p>
                            <p>Email: awprince.ynu@gmail.com</p>
                        </div>
                        <a href="https://drive.google.com/file/d/1c0ym_R40SL3u7-ARr4jc_t83-3yKG9-l/view?usp=sharing" target='_blank' rel="noreferrer"><button className='resume-button mb-3 mt-3'>Download Resume</button></a>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='shadow resume-nav'>
                        <Navbar></Navbar>
                    </div>
                    <div className='mt-4'>
                        <div>
                            <h4 ><span style={{ borderBottom: '3px solid gray' }}>About Me</span>
                            </h4>
                            <p style={{ textAlign: 'justify' }}>I see myself as a committed person. To seek after a difficult vocation in a cutthroat world where energy, trustworthiness, challenging works, and enthusiasm will uphold me to develop myself. i want to contribute my insight and ability for proficient advancement in the pertinent field. As a programmer, I love taking challenges and love being a part of the solutions. My passion is to keep myself updated with all the latest technologies and tools.</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h4 style={{ borderBottom: '3px solid gray', width: '120px' }} >
                            My Skills
                            </h4>
                        <div className='skills-container'>
                            <Skills></Skills>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;