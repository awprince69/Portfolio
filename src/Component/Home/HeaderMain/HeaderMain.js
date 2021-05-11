import React from 'react';
import { Link } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';
import photo from '../../../images/prince.jpg'
import './HeaderMain.css'
import ScrollDown from './ScrollDown/ScrollDown';

const HeaderMain = () => {
    
    return (
        <section >
            <div className='container d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-4 col-md-6 profile-photo'>
                        <img src={photo} alt="" />
                    </div>
                    <div className='col-sm-12 col-lg-7 col-md-6 mt-3 pt-1'>
                        <p style={{ fontSize: '20px' }}>Hi,I am</p>
                        <h1>ABDUL WADUD PRINCE</h1>
                        <h6 className='type-writer'>
                            <TypewriterComponent
                                options={{
                                    strings: ['Web Developer ', 'Programmer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h6>
                        <p>I see myself as a committed person. To seek after a difficult vocation in a cutthroat world
                        where energy, trustworthiness, challenging works, and enthusiasm will uphold me to develop myself. i want to contribute my insight and ability for proficient advancement in the pertinent field. As a  programmer, I love taking challenges and love being a part of the solutions. My passion is to keep myself updated with all the latest technologies and tools.
                    </p>
                        <div className='pt-2'>
                            <a href="https://drive.google.com/file/d/1qMjPY3eQ6xDwLD6hiXX5Jva5p_5VwCEm/view?usp=sharing" target='_blank' rel="noreferrer"><button className='home-button'>Download Resume</button></a>
                            <Link to='/contact' className='btn btn-outline-info' style={{ borderRadius: '20px' }}>Get In Touch</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ScrollDown></ScrollDown>
            </div>

        </section>
    );
};

export default HeaderMain;