import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://localhost:7083/api/Skills')
      .then(response => {
        const { status, data } = response;

        if (status === 200 && data.isSuccess) {
          setSkills(data.result || []);
          setErrorMessage('');
        } else {
          setErrorMessage(data.message || 'Failed to load skills. Please try again.');
        }
      })
      .catch(() => {
        setSkills(require('../fallbackData.json').skills); // Load fallback data
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="skills" className="Skills container my-5">
      <h4 className="text-center mb-4">Skills</h4>
      {loading && <p className="text-center text-secondary">Loading...</p>}
      {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

      <div className="row">
        {skills.length > 0 ? (
          skills.map(skill => (
            <div key={skill.id} className="col-md-4 col-sm-6 mb-3">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <p className="card-text">{skill.name}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="text-center">No skills found.</p>
        )}
      </div>
    </section>
  );
}

export default Skills;
