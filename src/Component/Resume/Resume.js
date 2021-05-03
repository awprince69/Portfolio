import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Resume.css'
import prince from '../../images/prince.jpg'
import TypewriterComponent from 'typewriter-effect'
import hat from '../../images/mortarboard.png'
import Skills from './Skills/Skills';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Resume = () => {
    const SkillList = [
        {
            title: 'Comfortable',
            lang1: 'JavaScript',
            lang2: 'ES6',
            lang3: 'HTML5',
            lang4: 'CSS3',
            lang5: 'Bootstrap',
            lang6: 'React.js',
            lang7: 'REST API',
            lang8: 'WordPress',
            lang9: 'Node.js',
        },
        {
            title: 'Familiar',
            lang1: 'Python',
            lang2: 'TensorFlow',
            lang3: 'Mongodb',
            lang4: 'Material UI',
            lang5: 'MySQL',
            lang6: 'SASS',
            lang7: 'NumPy',
            lang8: 'C',
            lang9: 'Redux',
        },
        {
            title: 'Tools',
            lang1: 'Git',
            lang2: 'VSCode',
            lang3: 'Jupyter Notebook',
            lang4: 'Sublime Text',
            lang5: 'Netlify',
            lang6: 'Heroku',
            lang7: 'Linux',
            lang8: 'Firebase',
            lang9: 'Linux',
        },
    ]
    return (
        <section className='resume-container' >
            <div className='row '>
                <div className='col-md-4  justify-content-center '>
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
                        <a href="https://drive.google.com/file/d/1GC5_VsOkW2Mm1IvPhK2dimhKUNe9wxkR/view?usp=sharing" target='_blank' rel="noreferrer"><button className='resume-button mb-3 mt-3 pt-1'>Download Resume</button></a>
                    </div>
                    {/* <div>
                        <h4 className='mt-4' style={{ borderBottom: '3px solid gray', width: '120px' }}>
                            Education
                                 <img src={hat} alt="" width='60' />
                        </h4>
                        <h5>Software Engineering</h5>
                        <h5><small>Yunnan University,china</small></h5>
                        <h5><small>Time: Sept 2018-Present</small></h5>
                    </div> */}
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
                    <div className='d-flex justify-content-between'>
                        {/* <div>
                            <h4 className='' style={{ borderBottom: '3px solid gray', width: '120px' }}>
                                Education
                                  <img src={hat} alt="" width='60'/>
                            </h4>
                            <h5>Software Engineering</h5>
                            <h5><small>Yunnan University,china</small></h5>
                            <h5><small>Time: Sept 2018-Present</small></h5>
                        </div> */}
                        {/* <div>
                            <h4 className='mt-4' style={{ borderBottom: '3px solid gray', width: '120px' }}>
                                Education
                                 <img src={hat} alt="" width='60'/>
                            </h4>
                            <h5>Software Engineering</h5>
                            <h5><small>Yunnan University,china</small></h5>
                            <h5><small>Time: Sept 2018-Present</small></h5>
                        </div> */}
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