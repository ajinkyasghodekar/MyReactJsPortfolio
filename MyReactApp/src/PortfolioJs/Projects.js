// src/PortfolioJs/Project.js
import React, { useState, useEffect } from 'react';
import '../PortfolioCss/Projects.css';
import axios from 'axios';

function Project() {
  const [projects, setProjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://localhost:7083/api/Projects')
      .then(response => {
        const { status, data } = response;

        if (status === 200 && data.isSuccess) {
          setProjects(data.result || []);
          setErrorMessage('');
        } else {
          setErrorMessage(data.message || 'Failed to load projects. Please try again.');
        }
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
        setErrorMessage('There was an error fetching the projects.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="Projects">
      <h2>Projects</h2>
      {loading && <p>Loading...</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className="project-list">
        {projects.length > 0 ? (
          projects.map(project => (
          <div key={project.id} className="project">
            <h3>{project.name}</h3>
            <p><b>Project Descripion:</b> {project.description}</p>
            <p><b>Project Autor:</b> {project.author}</p>
            <p><b>Project Author Url:</b> {project.authorUrl}</p>
            <p><b>Project Description Url:</b> {project.descriptionUrl}</p>
          </div>
    ))
        ) : (
          !loading && <p>No projects found.</p>
        )}
      </div>
    </section>
  );
}

export default Project;
