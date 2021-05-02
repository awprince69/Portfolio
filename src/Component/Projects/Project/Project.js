import React from 'react';
import './Project.css'

const Project = ({ project }) => {
    const { title, description, tech, icon1, icon2, img, link, site } = project;
    return (
        <section className=' d-flex justify-content-center'>
            <div className='row'>
                <div className='pro-details col-sm-12 col-lg-6 col-md-6 mt-3 pt-1 mb-4 shadow'>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <h6> Technology: <small>{tech}</small></h6>
                    <div className='card-footer bg-transparent'>
                        <a href={link} target='_blank' rel="noreferrer" className="btn"><img src={icon1} alt="" width='40' /></a>
                        <a href={site} rel="noreferrer" className="btn"><img src={icon2} alt="" width='30' /></a>

                    </div>
                </div>
                <div className='col-sm-12 mt-3 col-lg-5 col-md-6 '>
                    <img src={img} alt="" width='130%' />
                </div>
            </div>

        </section>
    );
};

export default Project;