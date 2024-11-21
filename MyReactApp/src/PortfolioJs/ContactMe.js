// src/PortfolioJs/ContactMe.js
import React, { useState } from 'react';
import '../PortfolioCss/ContactMe.css';
import axios from 'axios';

function ContactMe() {
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
    <section id="contact" className="Contact">
      <h4>Contact Me</h4>
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <textarea
            type="textarea"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
      <div className="Contact-footer">
        <p>&copy; 2024. All rights reserved.</p>
      </div>
    </section>
  );
}

export default ContactMe;
