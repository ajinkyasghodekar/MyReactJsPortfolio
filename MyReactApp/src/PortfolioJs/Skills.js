// src/PortfolioJs/Skills.js
import React, { useState, useEffect } from 'react';
import '../PortfolioCss/Skills.css';
import axios  from 'axios';

function Skills(){
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
      .catch(error => {
        console.error('There was an error fetching the skills!', error);
        setErrorMessage('There was an error fetching the skills.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="skills" className="skills">
      <h4>Skills</h4>
      {loading && <p>Loading...</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className="skills-list">
        {skills.length > 0 ? (
          skills.map(skill => (
          <div key={skill.id} className="skill">
            <p>
              {skill.name}, 
            </p>
            {/* to be added */}
            {/* <p><b>Skill Category:</b> {skill.}</p> */}
          </div>
    ))
        ) : (
          !loading && <p>No skills found.</p>
        )}
      </div>
    </section>
  );
}

export default Skills;