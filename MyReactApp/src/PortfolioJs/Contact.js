import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://localhost:7083/api/ContactMe', formData)
      .then(response => {
        const { status, data } = response;

        if (status === 200 && data.isSuccess) {
          setSuccessMessage(data.message || 'Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setErrorMessage('');
        } else {
          setErrorMessage(data.message || 'Failed to send the message. Please try again.');
        }
      })
      .catch(error => {
        console.error('There was an error sending the message!', error);
        setErrorMessage('There was an error sending the message.');
      });
  };
  
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h4 className="text-center mb-4">Contact</h4>
        {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label"></label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label"></label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label"></label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Enter your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
