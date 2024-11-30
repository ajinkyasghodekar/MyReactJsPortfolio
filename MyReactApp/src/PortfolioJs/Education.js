import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../PortfolioStyle/Education.css'

function Education() {
  const [education, setEducation] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://localhost:7083/api/Education')
      .then(response => {
        const { status, data } = response;

        if (status === 200 && data.isSuccess) {
          setEducation(data.result || []);
          setErrorMessage('');
        } else {
          setErrorMessage(data.message || 'Failed to load education details. Please try again.');
        }
      })
      .catch(() => {
        setEducation(require('../fallbackData.json').education); // Load fallback data
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="education" className="container my-5">
      <h4 className="text-center mb-4">Education</h4>

      {loading && <p className="text-center text-secondary">Loading...</p>}
      {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

      <div className="row">
        {education.length > 0 ? (
          education.map(edu => (
            <div key={edu.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-lg h-100 hover-shadow ">
                <div className="card-body">
                  <h5 className="card-title text-success">{edu.educationType} - {edu.branch}</h5>
                  <p className="card-text"><b>University:</b> {edu.university}</p>
                  <p className="card-text"><b>Pass Out Year:</b> {edu.passOutYear}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="text-center text-warning">No education details found.</p>
        )}
      </div>
    </section>
  );
}

export default Education;
