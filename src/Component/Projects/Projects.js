import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Projects.css'
import happy from '../../images/happyEvents.png'
import express from '../../images/amanaEpxress.png'
import trip from '../../images/tripAdvisor.png'
import git from '../../images/github.png'
import link from '../../images/link.png'
import Project from './Project/Project';

const Projects = () => {
    const projectData = [
        {
            title: 'Happy Events',
            description: 'Happy Events is the Event Management Platform. Admin can add admin, add services, manage all services. Customers can buy their desire event management services and give us reviews. ',
            icon1: git,
            icon2: link,
            img: happy,
            tech: 'React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Stripe.js',
            link: 'https://github.com/awprince69/HappyEvents',
            site:'https://happyevents-d337e.web.app/'
        },
        {
            title: 'Amana Express',
            description: 'A single page Groceries Store app where people can select item and checkout the cart with their information ',
            icon1: git,
            icon2:link,
            img: express,
            tech: 'React.js, Node.js, Express.js, MongoDB, Firebase Authentication',
            link: 'https://github.com/awprince69/AmanaExpress-Client',
            site:'https://amanaexpress-c342c.web.app/home'
        },
        {
            title: 'Trip-Advisor',
            description: 'A single-page Riding app. People can select their pick up and drop destination',
            icon1: git,
            icon2: link,
            img: trip,
            tech: 'React.js, Firebase Authentication,Google Map',
            link:'https://github.com/awprince69/Trip-Advisor',
            site:'https://trip-advisor-37d3a.web.app/'
        }
    ]
    return (
        <section className='projects-container'>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='container'>
                <div className='pro-head'>
                    Projects
                </div>
                <div className='box-container mt-3'>
                    {
                        projectData.map(project=> <Project key={project.title} project={project}></Project>)
                    }
                </div>
                <div className='pro-head'>
                    Projects
                </div>
            </div>
        </section>
    );
};

export default Projects;