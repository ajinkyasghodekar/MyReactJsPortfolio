import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import '../PortfolioStyle/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://localhost:7083/api/ContactMe', formData)
            .then(res => {
                if (res.status === 200 && res.data.isSuccess) {
                    setSuccessMessage('Message sent successfully!');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setErrorMessage('');
                }
            })
            .catch(() => {
                emailjs.send(
                    'service_s2jj46l',
                    'template_7y2f2ue',
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                    },
                    'SZsaYd_j4rJOU9mFL'
                )
                    .then(() => {
                        setSuccessMessage('Message sent successfully!');
                        setFormData({ name: '', email: '', subject: '', message: '' });
                        setErrorMessage('');
                    })
                    .catch(() => {
                        setErrorMessage('Something went wrong. Please try again later.');
                    });
            });
    };

    return (
        <section id="contact" className="container position-relative">
            <div className="contact-bg"></div>

            <div className="container">
                <h4 className="text-center">Contact</h4>

                <p className="text-center text-muted fs-5 mb-5">
                    <b>
                        "Give me an opportunity, and I’ll not only meet expectations
                        but exceed them with excellence."
                    </b>
                </p>

                <div className="contact-card mx-auto" style={{ maxWidth: "850px" }}>
                    {/* Contact Info */}
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <div className="contact-box">
                                <div className="contact-icon">
                                    <FaPhoneAlt />
                                </div>
                                <a href="tel:+919860828060" className="text-decoration-none text-dark">
                                    +91 9860828060
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-box">
                                <div className="contact-icon">
                                    <FaWhatsapp />
                                </div>
                                <a
                                    href="https://wa.me/919860828060"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none text-dark"
                                >
                                    WhatsApp Me
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-box">
                                <div className="contact-icon">
                                    <FaEnvelope />
                                </div>
                                <a
                                    href="mailto:ajinkyasghodekar@gmail.com"
                                    className="text-decoration-none text-dark"
                                >
                                    ajinkyasghodekar@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <h5 className="text-center my-4">Or drop a message</h5>

                    {successMessage && (
                        <div className="alert alert-success text-center">{successMessage}</div>
                    )}
                    {errorMessage && (
                        <div className="alert alert-danger text-center">{errorMessage}</div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <input
                            className="form-control mb-3"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            className="form-control mb-4"
                            name="message"
                            rows="5"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <div className="text-center">
                            <button type="submit" className="contact-btn">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
