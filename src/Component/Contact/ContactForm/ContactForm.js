import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import './ContactForm.css'
import email from '../../../images/at.png'
import linked from '../../../images/linkedin.png'
import git from '../../../images/github.png'

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data,e) => {
        e.preventDefault();
     
        emailjs.sendForm('service_pp0982q', 'template_i0rqaka', e.target, 'user_LouAlYBHGizOq2JBMLNPr')
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
            e.target.reset()
    };
    return (
        <div >
            <Col  md="6" className="mx-auto shadow  my-3  p-3 px-4 formStyle"
                >
                <h2 className="text-center text-white mb-4 ">Send Message</h2>
                {/* <p className="text-center text-white">Email me: awprince.ynu@gmail.com </p> */}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="name">
                        <Form.Control type="text" name="user_name" {...register("user_name", ({ required: true }))} placeholder="Your Name" />
                        {errors.name && <span>This field is required</span>}

                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Control name="user_email" {...register("user_email", ({ required: true }))} type="email" placeholder="Your Email" />
                        {errors.email && <span>This field is required</span>}
                    </Form.Group>

                    <Form.Group controlId="message">
                        <Form.Control name="message" {...register("message", ({ required: true }))} as="textarea" rows="4" placeholder="Your Message" />
                        {errors.message && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Button variant="dark" type="submit" block>
                            Send
                        </Button>
                    </Form.Group>
                    <div className='text-center' >
                        <a style={{textDecoration:'none'}} href="https://www.linkedin.com/in/abdulwadudprince/" target='_blank' rel="noreferrer"><img src={linked} alt="" width='30'/></a>
                        <a style={{textDecoration:'none'}} href="awprince.ynu@gmail.com" target='_blank' rel="noreferrer"> <img src={email} alt="" width='35'/></a> 
                        <a style={{textDecoration:'none'}} href="https://github.com/awprince69" target='_blank' rel="noreferrer"> <img src={git} alt="" width='30'/></a>  
                    </div>
                </Form>
            </Col>
        </div >
    );
};

export default ContactForm;