import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import './ContactForm.css'

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
            <Col  md="6" className="mx-auto shadow-lg  my-3  p-3 px-4 formStyle"
                // style={{ backgroundColor: "#172a50" }}
                >
                <h2 className="text-center mb-4 ">Get In Touch</h2>

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
                        <Button variant="outline-info" type="submit" block>
                            Send
                        </Button>
                    </Form.Group>
                    {/* <p class="font-italic">
                        Sending to <u><a href=""></a></u>
                    </p> */}
                </Form>
            </Col>
        </div >
    );
};

export default ContactForm;