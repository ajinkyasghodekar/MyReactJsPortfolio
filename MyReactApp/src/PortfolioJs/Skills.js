import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://localhost:7083/api/Skills')
      .then((response) => {
        const { status, data } = response;

        if (status === 200 && data.isSuccess) {
          setSkills(data.result || []);
          setErrorMessage('');
        } else {
          setErrorMessage(data.message || 'Failed to load skills. Please try again.');
        }
      })
      .catch((error) => {
        console.error('There was an error fetching the skills!', error);
        setErrorMessage('There was an error fetching the skills.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="skills" className="skills py-5 bg-light">
      <div className="container">
        <h4 className="text-center mb-4">Skills</h4>
        {loading && <p className="text-center">Loading...</p>}
        {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
        <div className="row">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <div key={skill.id} className="col-md-4 mb-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{skill.name}</h5>
                    {skill.category && (
                      <p className="card-text">
                        <strong>Category:</strong> {skill.category}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            !loading && <p className="text-center">No skills found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
