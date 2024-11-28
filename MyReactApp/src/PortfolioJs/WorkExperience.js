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

      <div className="row">
        {experiences.length > 0 ? (
          experiences.map((experience) => (
            <div key={experience.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-lg h-100 work-experience-card">
                <div className="card-body">
                  <h5 className="card-title">{experience.jobTitle}</h5>
                  <p className="card-text"><strong>Company:</strong> {experience.company}</p>
                  <p className="card-text"><strong>Duration:</strong> {experience.startDate} - {experience.endDate}</p>
                  <p className="card-text"><strong>Description:</strong> {experience.description}</p>
                  <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Company</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="text-center text-warning">No work experience found.</p>
        )}
      </div>
    </section>
  );
}

export default WorkExperience;
