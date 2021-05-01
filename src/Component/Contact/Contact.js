import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import ContactForm from './ContactForm/ContactForm';
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact-container'>
            <Navbar></Navbar>
            <div>
                <ContactForm></ContactForm>
            </div>
        </section>
    );
};

export default Contact;