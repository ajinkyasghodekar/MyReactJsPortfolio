import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../PortfolioStyle/Project.css';

function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7083/api/Projects')
            .then(res => {
                if (res.status === 200 && res.data.isSuccess) {
                    setProjects(res.data.result || []);
                }
            })
            .catch(() => {
                setProjects(require('../fallbackData.json').projects);
            });
    }, []);

    return (
        <section id="projects" className="container position-relative">
            <div className="projects-bg"></div>

            <h4 className="text-center">
                Projects
            </h4>


            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-saas-card">
                        <img
                            src={`/images/${project.imageUrl}`}
                            alt={project.name}
                            className="project-saas-img"
                        />

                        <div className="project-saas-body">
                            <h5 className="project-saas-title">
                                {project.name}
                            </h5>

                            <p className="project-saas-desc">
                                {project.description}
                            </p>

                            <div className="project-saas-tech">
                                {project.techStack?.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>

                            <div className="project-saas-actions">
                                {project.codeUrl && (
                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-btn btn-code"
                                    >
                                        Code
                                    </a>
                                )}

                                {project.liveLinkUrl && (
                                    <a
                                        href={project.liveLinkUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-btn btn-live"
                                    >
                                        Live Link
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
