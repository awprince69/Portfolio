import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Blog.css'

const Blog = () => {
    return (
        <section className='blog-container'>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='text-center mt-5 pt-5'>
                <h1>Coming Soon...</h1>
            </div>
        </section>
    );
};

export default Blog;