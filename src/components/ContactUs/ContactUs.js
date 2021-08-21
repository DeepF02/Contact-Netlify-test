import React from 'react';
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

import './ContactUs.css';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import contact_us from '../../assets/images/contactUs/contact_us.jpg';

const ContactUs = () => {
    return (
        <>
            <main className="d-flex flex-column vh-100">
                {/* <h1 className="text-center text-info title" id="contact_title">Contact Us</h1> */}
                <div className="row">
                    <div className="col-sm-8 offset-sm-3">
                        <div className="card my-3" id="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="card-title text-center" id="card-title">Lets get connected!</h2>
                                    <div className="card-text mt-3 mb-4 text-center">
                                        <small className="text-muted">Don't like forms? Send us an <a href="mailto: ieeevjtiofficial@gmail.com"
                                            className="text-success">email</a> instead.</small>
                                    </div>
                                    <img src={contact_us} className="img-fluid card-img-bottom" alt="ContactUs_image" id="unplash-img" />
                                </div>
                                <div className="col-md-6 mx-auto">
                                    <div className="card-body">
                                        
                                        <form name="contact-form" data-netlify="true" method="POST" id="contactForm" className="client-validation" noValidate>
                                            <input type="hidden" name="form-name" value="contact-form" />
                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label">Name</label>
                                                <input type="text" className="form-control bg-light" placeholder="Your Name*" name="contact[name]"
                                                    id="username" required />
                                                {/* <TextField name="name" required variant="outlined" label="Your Name" fullWidth /> */}
                                                <div className="valid-feedback">
                                                    Good to go!
                                                </div>
                                                <div className="invalid-feedback">
                                                    Please state your Name!!
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="userEmail" className="form-label">EmailID</label>
                                                <input type="email" className="form-control bg-light" placeholder="Your Email-ID*"
                                                    name="contact[email]" id="userEmail" required />
                                                {/* <TextField name="email" required variant="outlined" label="Your Email" fullWidth /> */}
                                                <div className="valid-feedback">
                                                    Good to go!
                                                </div>
                                                <div className="invalid-feedback">
                                                    Please provide your email-Id!!
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="year">Graduation Year</label>
                                                <div className="input-group">
                                                    <span className="input-group-text" id="price-label">20</span>
                                                    <input type="number" className="form-control bg-light" placeholder="ex 23'" aria-label="price"
                                                        aria-describedby="price-label" id="year" name="contact[year]" required />
                                                    {/* <TextField name="year" required variant="outlined" label="ex 23" fullWidth /> */}
                                                    <div className="valid-feedback">
                                                        Good to go!
                                                    </div>
                                                    <div className="invalid-feedback">
                                                        Please specify the year of graduation!!
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="message" className="form-label">Message for Us</label>
                                                <textarea type="text" className="form-control bg-light" name="contact[description]" id="message"
                                                    required></textarea>
                                                {/* <TextField name="message" required variant="outlined" label="Your Message" fullWidth multiline rows={6} /> */}
                                                <div className="valid-feedback">
                                                    Good to go!
                                                </div>
                                                <div className="invalid-feedback">
                                                    Please add some description!!
                                                </div>
                                            </div>
                                            <div className="mb-3 d-grid">
                                                <button type="submit" id="button" className="btn btn-info btn-large">Submit<span>
                                                    <i className="fa font-weight-bold fa-angle-double-right animate__animated animate__rubberBand"></i>
                                                </span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactUs;


