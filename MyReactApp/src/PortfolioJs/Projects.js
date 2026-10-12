
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../PortfolioStyle/Project.css';

function Project() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let isMounted = true;

        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    'https://localhost:7083/api/Projects'
                );

                if (
                    response.status === 200 &&
                    response.data?.isSuccess
                ) {
                    if (isMounted) {
                        setProjects(response.data.result || []);
                    }
                } else {
                    throw new Error('Unable to load projects.');
                }
            } catch {
                try {
                    const fallbackProjects =
                        require('../fallbackData.json').projects || [];

                    if (isMounted) {
                        setProjects(fallbackProjects);

                        if (fallbackProjects.length === 0) {
                            setErrorMessage(
                                'Projects are currently unavailable.'
                            );
                        }
                    }
                } catch {
                    if (isMounted) {
                        setProjects([]);
                        setErrorMessage(
                            'Unable to load projects. Please try again later.'
                        );
                    }
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchProjects();

        return () => {
            isMounted = false;
        };
    }, []);

    const getImageUrl = (imageUrl) => {
        if (!imageUrl) return null;

        // Preserve absolute image URLs and support existing local images.
        if (/^(https?:\/\/|\/)/i.test(imageUrl)) {
            return imageUrl;
        }

        return `/images/${imageUrl}`;
    };

    return (
        <section
            id="projects"
            className="projects-section position-relative"
            aria-labelledby="projects-title"
        >
            <div className="projects-bg" aria-hidden="true" />

            <div className="container projects-container">
                <header className="projects-heading text-center">
                    <span className="projects-eyebrow">
                        SELECTED WORK
                    </span>

                    <h2 id="projects-title">
                        Featured <span>Projects.</span>
                    </h2>

                    <p>
                        A selection of applications and engineering work
                        showcasing my approach to full-stack development,
                        APIs, cloud technologies, and automation.
                    </p>
                </header>

                {loading && (
                    <p className="projects-status" role="status">
                        Loading projects...
                    </p>
                )}

                {!loading && errorMessage && (
                    <p className="projects-status" role="status">
                        {errorMessage}
                    </p>
                )}

                {!loading && !errorMessage && projects.length > 0 && (
                    <div className="projects-grid">
                        {projects.map((project, index) => {
                            const imageUrl = getImageUrl(project.imageUrl);

                            return (
                                <article
                                    key={project.id ?? project.name ?? index}
                                    className="project-card"
                                    style={{
                                        animationDelay: `${index * 0.08}s`
                                    }}
                                >
                                    <div className="project-image-wrap">
                                        {imageUrl ? (
                                            <img
                                                src={imageUrl}
                                                alt={`${project.name} project preview`}
                                                className="project-image"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div
                                                className="project-image-placeholder"
                                                aria-label="Project preview unavailable"
                                            >
                                                <span>
                                                    {project.name?.charAt(0) || 'P'}
                                                </span>
                                            </div>
                                        )}

                                        <span className="project-image-label">
                                            PROJECT {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <div className="project-card-body">
                                        <h3 className="project-title">
                                            {project.name}
                                        </h3>

                                        <p className="project-description">
                                            {project.description}
                                        </p>

                                        {project.techStack?.length > 0 && (
                                            <div
                                                className="project-tech"
                                                aria-label="Technologies used"
                                            >
                                                {project.techStack.map(
                                                    (tech, techIndex) => (
                                                        <span key={`${tech}-${techIndex}`}>
                                                            {tech}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        )}

                                        {(project.codeUrl || project.liveLinkUrl) && (
                                            <div className="project-actions">
                                                {project.codeUrl && (
                                                    <a
                                                        href={project.codeUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-btn project-btn-code"
                                                        aria-label={`View source code for ${project.name}`}
                                                    >
                                                        View Code
                                                        <span aria-hidden="true">↗</span>
                                                    </a>
                                                )}

                                                {project.liveLinkUrl && (
                                                    <a
                                                        href={project.liveLinkUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-btn project-btn-live"
                                                        aria-label={`View live demo of ${project.name}`}
                                                    >
                                                        Live Demo
                                                        <span aria-hidden="true">↗</span>
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}

                {!loading && !errorMessage && projects.length === 0 && (
                    <p className="projects-status">
                        No projects are available at the moment.
                    </p>
                )}

                <div className="projects-footer">
                    <p>
                        Interested in my work or have a project in mind?
                    </p>

                    <a href="#contact" className="projects-contact-link">
                        Let's Connect <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Project;
