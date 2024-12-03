import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 
import '../PortfolioStyle/WorkExperience.css';

function WorkExperience() {
  const [experiences, setExperiences] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://localhost:7083/api/WorkExperience')
      .then(response => {
        const { status, data } = response;
        if (status === 200 && data.isSuccess) {
          setExperiences(data.result || []);
          setErrorMessage('');
        } else {
          setErrorMessage(data.message || 'Failed to load work experience. Please try again.');
        }
      })
      .catch(() => {
        setExperiences(require('../fallbackData.json').workExperience); 
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="work-experience" className="container my-5">
    <h4 className="text-center mb-4">Work Experience</h4>
  
    {loading && <p className="text-center text-secondary">Loading...</p>}
    {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
  
    <div className="timeline position-relative">
      {experiences.length > 0 ? (
        experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`timeline-item d-flex flex-wrap align-items-start ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className="timeline-icon bg-primary text-white d-flex align-items-center justify-content-center">
              <i className="bi bi-circle-fill"></i>
            </div>
            <div className="timeline-content shadow-sm p-4 bg-white rounded">
              <h5 className="fw-bold">{experience.jobTitle}</h5>
              <p className="mb-1">
                <strong>{experience.company}</strong>{" "}
                <span className="text-muted">| {experience.location}</span>
              </p>
              <p className="mb-1">
                <strong>Duration:</strong> {experience.startDate} - {experience.endDate}
              </p>
              <p className="mb-3">{experience.description}</p>
              <p className="text-muted">
                <strong>Skills:</strong>{" "}
                {experience.skills ? experience.skills.join(", ") : "No skills listed"}
              </p>
            </div>
          </div>
        ))
      ) : (
        !loading && <p className="text-center text-warning">No work experience found.</p>
      )}
      <div className="timeline-line position-absolute bg-primary"></div>
    </div>
  </section>
  );
}

export default WorkExperience;
