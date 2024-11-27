import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; 

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '' });
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
          setSuccessMessage(data.message || 'Message sent successfully !!!');
          setFormData({ name: '', email: '', message: '', subject: '' });
          setErrorMessage('');
        } else {
          setErrorMessage(data.message || 'Failed to send the message. Please try again.');
        }
      })
      .catch(error => {
        console.error('There was an error sending the message.', error);
        setErrorMessage('There was an error sending the message.');
      });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h4 className="text-center mb-4">Contact</h4>
        <p className="text-center text-muted fs-5 mb-4">
          <b>"Give me an opportunity, and I’ll not only meet your expectations but surpass them with excellence."</b>
        </p>

        <div className="card mx-auto shadow-lg" style={{ maxWidth: '800px' }}>
          <div className="card-body">

            <div className="row mb-4 text-center">
              <div className="col-md-4">
                <h6><FaPhoneAlt size={30} className="mb-2" /></h6>
                <p>
                  <a href="tel:+91 9860828060" className="text-decoration-none text-dark">+91 9860828060</a>
                </p>
              </div>
              <div className="col-md-4">
                <h6><FaWhatsapp size={30} className="mb-2" /></h6>
                <p>
                  <a href="https://wa.me/9860828060" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                    WhatsApp Me
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <h6><FaEnvelope size={30} className="mb-2" /></h6>
                <p>
                  <a href="mailto:ajinkyasghodekar@gmail.com" className="text-decoration-none text-dark">ajinkyasghodekar@gmail.com</a>
                </p>
              </div>
            </div>

            <h5 className="text-center my-4">Or :</h5>

            {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <input
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary w-auto py-2">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
