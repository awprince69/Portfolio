import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Resume.css'
import prince from '../../images/prince.jpg'
import TypewriterComponent from 'typewriter-effect'
import hat from '../../images/mortarboard.png'
import Skills from './Skills/Skills';

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
                <div className='col-md-4 d-flex justify-content-center '>
                    <div className='shadow offset-md-4 bio-container intro-container text-center'>
                        <h4 style={{ padding: ' 10px 6px' }}>Hello<br />
                            <TypewriterComponent
                                options={{
                                    strings: ['Everyon'],
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
                        <a href="https://drive.google.com/file/d/1GC5_VsOkW2Mm1IvPhK2dimhKUNe9wxkR/view?usp=sharing" target='_blank'><button className='resume-button mb-3'>Download Resume</button></a>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='shadow resume-nav'>
                        <Navbar></Navbar>
                    </div>
                    <div className='mt-5'>
                        <div>
                            <h3 ><span style={{ borderBottom: '3px solid gray' }}>About Me</span>
                            </h3>
                            <p>I see myself as a committed person. To seek after a difficult vocation in a cutthroat world where energy, trustworthiness, challenging works, and enthusiasm will uphold me to develop myself. i want to contribute my insight and ability for proficient advancement in the pertinent field. As a programmer, I love taking challenges and love being a part of the solutions. My passion is to keep myself updated with all the latest technologies and tools.</p>
                        </div>
                        <div>
                            <h3 style={{ borderBottom: '3px solid gray', width: '200px' }}>
                                Education <img src={hat} alt="" width='60' />
                            </h3>
                            <h5>Software Engineering</h5>
                            <h5><small>Yunnan University,china</small></h5>
                            <h5><small>Time: Sept 2018-Present</small></h5>
                        </div>
                        <div>
                            <h1 style={{ borderBottom: '3px solid gray',width:'200px'}} >
                                My Skills
                            </h1>
                            <div className='d-flex justify-content-around'>
                                {
                                    SkillList.map(skill=><Skills skill={skill}></Skills>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;