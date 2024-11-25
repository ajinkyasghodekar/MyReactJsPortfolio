import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Project() {
  const [projects, setProjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://localhost:7083/api/Projects')
      .then((response) => {
        const { status, data } = response;

        if (status === 200 && data.isSuccess) {
          setProjects(data.result || []);
          setErrorMessage('');
        } else {
          setErrorMessage(data.message || 'Failed to load projects. Please try again.');
        }
      })
      .catch((error) => {
        console.error('There was an error fetching the projects!', error);
        setErrorMessage('There was an error fetching the projects.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="Projects py-5 bg-light">
      <div className="container">
        <h4 className="text-center mb-4">Projects</h4>
        {loading && <p className="text-center">Loading...</p>}
        {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
        <div className="row">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">
                      <strong>Description:</strong> {project.description}
                    </p>
                    <p>
                      <strong>Author:</strong> {project.author}
                    </p>
                    {project.authorUrl && (
                      <p>
                        <strong>Author URL:</strong>{' '}
                        <a
                          href={project.authorUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.authorUrl}
                        </a>
                      </p>
                    )}
                    {project.descriptionUrl && (
                      <p>
                        <strong>Details:</strong>{' '}
                        <a
                          href={project.descriptionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.descriptionUrl}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            !loading && <p className="text-center">No projects found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Project;
