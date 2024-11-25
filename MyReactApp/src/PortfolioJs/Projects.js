import React, { useState, useEffect } from 'react';
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
      .catch(() => {
        setProjects(require('../fallbackData.json').projects); // Load fallback data
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="Projects container my-5">
      <h4 className="text-center mb-4">Projects</h4>
      {loading && <p className="text-center text-secondary">Loading...</p>}
      {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

      <div className="row">
        {projects.length > 0 ? (
          projects.map(project => (
            <div key={project.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text"><b>Description:</b> {project.description}</p>
                  <p className="card-text"><b>Author:</b> <a href={project.authorUrl} target="_blank" rel="noopener noreferrer">{project.author}</a></p>
                  <a href={project.descriptionUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="text-center">No projects found.</p>
        )}
      </div>
    </section>
  );
}

export default Project;
