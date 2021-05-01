import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='d-flex'>
            <div>
                <Link className="navbar-brand" to="/">
                    <div className="logo-symbol">P</div>
                </Link>
            </div>
            <div className='ml-auto mt-3'>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav" style={{fontSize:'18px'}}>
                                <Link className="nav-link active mr-5 " aria-current="page" to="/home">Home</Link>
                                <Link className="nav-link active mr-5 " to="/resume">Resume</Link>
                                <Link className="nav-link active mr-5 " to="/projects">Projects </Link>
                                <Link className="nav-link active mr-5 " to="/contact">Contact</Link>
                                <Link className="nav-link active mr-5 " to="blogs">Blogs</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;