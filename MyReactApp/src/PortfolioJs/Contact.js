import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import {
    FaPhoneAlt,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaCheckCircle
} from 'react-icons/fa';
import '../PortfolioStyle/Contact.css';

const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

const initialFieldErrors = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

const validateForm = (formData) => {
    const errors = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    // Full name validation
    const letterCount = (name.match(/\p{L}/gu) || []).length;

    if (!name) {
        errors.name = 'Full name is required.';
    } else if (name.length < 2 || name.length > 100) {
        errors.name = 'Name must be between 2 and 100 characters.';
    } else if (
        !/^[\p{L}\p{M} .'-]+$/u.test(name) ||
        letterCount < 2
    ) {
        errors.name =
            'Enter a valid name using letters, spaces, apostrophes, dots, or hyphens.';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!email) {
        errors.email = 'Email address is required.';
    } else if (email.length > 254 || !emailPattern.test(email)) {
        errors.email = 'Enter a valid email address.';
    }

    // Subject validation
    if (!subject) {
        errors.subject = 'Subject is required.';
    } else if (subject.length < 5 || subject.length > 150) {
        errors.subject =
            'Subject must be between 5 and 150 characters.';
    } else if (!/[\p{L}\p{N}]/u.test(subject)) {
        errors.subject =
            'Subject must contain at least one letter or number.';
    }

    // Message validation
    if (!message) {
        errors.message = 'Message is required.';
    } else if (message.length < 10) {
        errors.message =
            'Message must contain at least 10 characters.';
    } else if (message.length > 5000) {
        errors.message =
            'Message cannot exceed 5,000 characters.';
    } else if (!/[\p{L}\p{N}]/u.test(message)) {
        errors.message =
            'Please enter a meaningful message.';
    }

    return errors;
};

function Contact() {
    const [formData, setFormData] = useState(initialFormData);
    const [fieldErrors, setFieldErrors] = useState(initialFieldErrors);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

        // Clear the edited field's error as the user corrects it.
        setFieldErrors((previous) => ({
            ...previous,
            [name]: ''
        }));

        setSuccessMessage('');
        setErrorMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        // Validate all fields before making an EmailJS request.
        const errors = validateForm(formData);
        setFieldErrors(errors);
        setSuccessMessage('');
        setErrorMessage('');

        const hasErrors = Object.values(errors).some(Boolean);

        if (hasErrors) {
            setErrorMessage(
                'Please correct the highlighted fields before sending your message.'
            );
            return;
        }

        setIsSubmitting(true);

        const emailParams = {
            from_name: formData.name.trim(),
            from_email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim()
        };

        try {
            const response = await emailjs.send(
                'service_a25nxu8',
                'template_84ddhan',
                emailParams,
                'aPqztrinho2ULxmAz'
            );

            if (response.status !== 200) {
                throw new Error(
                    `EmailJS returned status ${response.status}`
                );
            }

            setSuccessMessage(
                'Thank you for reaching out! Your message has been sent successfully.'
            );

            setFormData({ ...initialFormData });
            setFieldErrors({ ...initialFieldErrors });
        } catch (error) {
            console.error('EmailJS submission failed:', {
                status: error?.status,
                text: error?.text,
                message: error?.message
            });

            setErrorMessage(
                'Your message could not be sent. Please try again or email ajinkyasghodekar@gmail.com directly.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-background" aria-hidden="true">
                <span className="contact-glow contact-glow-one"></span>
                <span className="contact-glow contact-glow-two"></span>
            </div>

            <div className="container contact-container">
                <div className="contact-heading text-center">
                    <span className="contact-eyebrow">
                        LET'S CONNECT
                    </span>

                    <h2 className="contact-title">
                        Get In <span>Touch</span>
                    </h2>

                    <p className="contact-subtitle">
                        Have an opportunity, a project idea, or a question?
                        I’d love to hear from you.
                    </p>
                </div>

                <div className="contact-layout">
                    <aside className="contact-info">
                        <span className="contact-panel-label">
                            CONTACT INFORMATION
                        </span>

                        <h3>Let’s build something great together.</h3>

                        <p className="contact-info-description">
                            I’m open to discussing Senior .NET Full Stack
                            Developer opportunities, technical collaborations,
                            and interesting software projects.
                        </p>

                        <div className="contact-info-list">
                            <a
                                href="mailto:ajinkyasghodekar@gmail.com"
                                className="contact-info-item"
                            >
                                <span className="contact-info-icon">
                                    <FaEnvelope />
                                </span>
                                <span className="contact-info-text">
                                    <small>Email me</small>
                                    <strong>
                                        ajinkyasghodekar@gmail.com
                                    </strong>
                                </span>
                            </a>

                            <a
                                href="tel:+919860828060"
                                className="contact-info-item"
                            >
                                <span className="contact-info-icon">
                                    <FaPhoneAlt />
                                </span>
                                <span className="contact-info-text">
                                    <small>Call me</small>
                                    <strong>+91 9860828060</strong>
                                </span>
                            </a>

                            <a
                                href="https://wa.me/919860828060"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-info-item"
                            >
                                <span className="contact-info-icon whatsapp-icon">
                                    <FaWhatsapp />
                                </span>
                                <span className="contact-info-text">
                                    <small>Message me</small>
                                    <strong>Chat on WhatsApp</strong>
                                </span>
                            </a>

                            <div className="contact-info-item contact-location">
                                <span className="contact-info-icon">
                                    <FaMapMarkerAlt />
                                </span>
                                <span className="contact-info-text">
                                    <small>Location</small>
                                    <strong>Hyderabad, Telangana, India</strong>
                                </span>
                            </div>
                        </div>

                        <div className="contact-availability">
                            <span className="availability-dot"></span>
                            <span>
                                Open to meaningful career opportunities
                            </span>
                        </div>
                    </aside>

                    <div className="contact-form-panel">
                        <span className="contact-panel-label">
                            SEND A MESSAGE
                        </span>

                        <h3>Let’s talk.</h3>

                        <p className="contact-form-description">
                            Fill out the form below and I’ll get back to you.
                        </p>

                        {successMessage && (
                            <div
                                className="contact-alert contact-alert-success"
                                role="status"
                                aria-live="polite"
                            >
                                <FaCheckCircle />
                                <span>{successMessage}</span>
                            </div>
                        )}

                        {errorMessage && (
                            <div
                                className="contact-alert contact-alert-error"
                                role="alert"
                            >
                                {errorMessage}
                            </div>
                        )}

                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="contact-name">
                                        Full Name
                                    </label>

                                    <input
                                        id="contact-name"
                                        className={`form-control ${fieldErrors.name ? 'is-invalid' : ''
                                            }`}
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="name"
                                        maxLength={100}
                                        required
                                        aria-invalid={Boolean(fieldErrors.name)}
                                        aria-describedby={
                                            fieldErrors.name
                                                ? 'contact-name-error'
                                                : undefined
                                        }
                                    />

                                    {fieldErrors.name && (
                                        <small
                                            id="contact-name-error"
                                            className="contact-field-error"
                                        >
                                            {fieldErrors.name}
                                        </small>
                                    )}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="contact-email">
                                        Email Address
                                    </label>

                                    <input
                                        id="contact-email"
                                        className={`form-control ${fieldErrors.email ? 'is-invalid' : ''
                                            }`}
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        maxLength={254}
                                        required
                                        aria-invalid={Boolean(fieldErrors.email)}
                                        aria-describedby={
                                            fieldErrors.email
                                                ? 'contact-email-error'
                                                : undefined
                                        }
                                    />

                                    {fieldErrors.email && (
                                        <small
                                            id="contact-email-error"
                                            className="contact-field-error"
                                        >
                                            {fieldErrors.email}
                                        </small>
                                    )}
                                </div>
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-subject">
                                    Subject
                                </label>

                                <input
                                    id="contact-subject"
                                    className={`form-control ${fieldErrors.subject ? 'is-invalid' : ''
                                        }`}
                                    name="subject"
                                    type="text"
                                    placeholder="What would you like to discuss?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    maxLength={150}
                                    required
                                    aria-invalid={Boolean(fieldErrors.subject)}
                                    aria-describedby={
                                        fieldErrors.subject
                                            ? 'contact-subject-error'
                                            : undefined
                                    }
                                />

                                {fieldErrors.subject && (
                                    <small
                                        id="contact-subject-error"
                                        className="contact-field-error"
                                    >
                                        {fieldErrors.subject}
                                    </small>
                                )}
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-message">
                                    Message
                                </label>

                                <textarea
                                    id="contact-message"
                                    className={`form-control ${fieldErrors.message ? 'is-invalid' : ''
                                        }`}
                                    name="message"
                                    rows={5}
                                    placeholder="Tell me a little about your message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    maxLength={5000}
                                    required
                                    aria-invalid={Boolean(fieldErrors.message)}
                                    aria-describedby={
                                        fieldErrors.message
                                            ? 'contact-message-error'
                                            : undefined
                                    }
                                />

                                {fieldErrors.message && (
                                    <small
                                        id="contact-message-error"
                                        className="contact-field-error"
                                    >
                                        {fieldErrors.message}
                                    </small>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="contact-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span
                                            className="contact-spinner"
                                            aria-hidden="true"
                                        ></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <FaPaperPlane />
                                    </>
                                )}
                            </button>

                            <p className="contact-form-note">
                                Your message will be sent using my contact
                                form service.
                            </p>
                        </form>
                    </div>
                </div>

                <div className="contact-footer">
                    <span>
                        Thank you for visiting my portfolio.
                    </span>
                    <span className="contact-footer-accent">
                        Let’s create something impactful.
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Contact;

