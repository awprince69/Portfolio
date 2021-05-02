import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OverviewProjects.module.css'
import login from '../../../images/login.png'
import amana from '../../../images/amanaLog.png'
import trip from '../../../images/tripAdvisor.png'
import TypewriterComponent from 'typewriter-effect';

const OverviewProjects = () => {
    return (
        <section className={styles.overViewContainer}>
            <h1 className='text-white text-center'><TypewriterComponent
                    options={{
                        strings: ['Projects Overview'],
                        autoStart: true,
                        loop: true,
                    }} />
            </h1>
            <div className={styles.overView}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={`${styles.face} ${styles.face1}`}>
                            <div className={styles.content}>
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" alt="" />
                                <h3>Happy Events</h3>
                            </div>
                        </div>
                        <div className={`${styles.face} ${styles.face2}`}>
                            <div className={styles.content}>
                                <p>Happy Events is the Event Management Platform. Admin can add admin, add services, manage all services.</p>
                                <Link to="/projects">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={`${styles.face} ${styles.face1}`}>
                            <div className={styles.content}>
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" alt="" />
                                <h3>Amana Express</h3>
                            </div>
                        </div>
                        <div className={`${styles.face} ${styles.face2}`}>
                            <div className={styles.content}>
                                <p>A single page Groceries Store app where people can select item and checkout the cart with their information</p>
                                <Link to="/projects">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={`${styles.face} ${styles.face1}`}>
                            <div className={styles.content}>
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" alt="" />
                                <h3>Trip Advisor</h3>
                            </div>
                        </div>
                        <div className={`${styles.face} ${styles.face2}`}>
                            <div className={styles.content}>
                                <p>Trip Advisor is the platform of Riding app. People can select their pick up and drop destination</p>
                                <Link to="/projects">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewProjects;