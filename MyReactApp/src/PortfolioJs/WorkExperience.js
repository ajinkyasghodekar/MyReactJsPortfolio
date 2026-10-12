
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../PortfolioStyle/WorkExperience.css';

function WorkExperience() {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let isMounted = true;

        const fetchExperiences = async () => {
            try {
                const response = await axios.get(
                    'https://localhost:7083/api/WorkExperience'
                );

                if (
                    response.status === 200 &&
                    response.data?.isSuccess
                ) {
                    if (isMounted) {
                        setExperiences(response.data.result || []);
                    }
                } else {
                    throw new Error('Unable to load work experience.');
                }
            } catch {
                try {
                    const fallback =
                        require('../fallbackData.json').workExperience || [];

                    if (isMounted) {
                        setExperiences(fallback);

                        if (fallback.length === 0) {
                            setErrorMessage(
                                'Work experience details are currently unavailable.'
                            );
                        }
                    }
                } catch {
                    if (isMounted) {
                        setExperiences([]);
                        setErrorMessage(
                            'Unable to load work experience details.'
                        );
                    }
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchExperiences();

        return () => {
            isMounted = false;
        };
    }, []);

    // Show the most recent role first.
    const sortedExperiences = [...experiences].sort((a, b) => {
        const getDate = (value) => {
            if (!value) return 0;

            if (String(value).trim().toLowerCase() === 'present') {
                return Infinity;
            }

            const parsed = Date.parse(value);
            return Number.isNaN(parsed) ? 0 : parsed;
        };

        return getDate(b.startDate) - getDate(a.startDate);
    });

    const isCurrentRole = (endDate) =>
        String(endDate || '').trim().toLowerCase() === 'present';

    return (
        <section
            id="work-experience"
            className="experience-section position-relative"
            aria-labelledby="experience-title"
        >
            <div className="experience-bg" aria-hidden="true" />

            <div className="container experience-container">
                <header className="experience-heading text-center">
                    <span className="experience-eyebrow">
                        MY PROFESSIONAL JOURNEY
                    </span>

                    <h2 id="experience-title">
                        Work <span>Experience.</span>
                    </h2>

                    <p>
                        My professional journey building applications,
                        delivering backend solutions, and working with
                        cloud and full-stack technologies.
                    </p>
                </header>

                {loading && (
                    <p className="experience-status" role="status">
                        Loading work experience...
                    </p>
                )}

                {!loading && errorMessage && (
                    <p className="experience-status" role="status">
                        {errorMessage}
                    </p>
                )}

                {!loading &&
                    !errorMessage &&
                    sortedExperiences.length > 0 && (
                        <div className="experience-timeline">
                            {sortedExperiences.map((exp, index) => {
                                const current = isCurrentRole(exp.endDate);

                                return (
                                    <article
                                        key={
                                            exp.id ??
                                            `${exp.company}-${index}`
                                        }
                                        className={`experience-item ${current ? 'experience-current' : ''
                                            }`}
                                        style={{
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                    >
                                        <div
                                            className="experience-marker"
                                            aria-hidden="true"
                                        >
                                            <span />
                                        </div>

                                        <div className="experience-card">
                                            <div className="experience-card-header">
                                                <div className="experience-role-info">
                                                    <span className="experience-number">
                                                        EXPERIENCE{' '}
                                                        {String(index + 1).padStart(
                                                            2,
                                                            '0'
                                                        )}
                                                    </span>

                                                    <h3>{exp.jobTitle}</h3>

                                                    <p className="experience-company">
                                                        {exp.company}
                                                    </p>
                                                </div>

                                                {current && (
                                                    <span className="experience-current-badge">
                                                        Current Role
                                                    </span>
                                                )}
                                            </div>

                                            {/* Location on left, dates on right */}
                                            <div className="experience-meta">
                                                {exp.location && (
                                                    <span className="experience-location">
                                                        <span aria-hidden="true">
                                                            ⌖
                                                        </span>
                                                        {exp.location}
                                                    </span>
                                                )}

                                                {exp.startDate && (
                                                    <span className="experience-dates">
                                                        {exp.startDate} –{' '}
                                                        {exp.endDate || 'Present'}
                                                    </span>
                                                )}
                                            </div>

                                            {exp.description && (
                                                <p className="experience-description">
                                                    {exp.description}
                                                </p>
                                            )}

                                            {exp.skills?.length > 0 && (
                                                <div className="experience-skills">
                                                    {exp.skills.map(
                                                        (skill, skillIndex) => (
                                                            <span
                                                                key={`${skill}-${skillIndex}`}
                                                                className="experience-skill"
                                                            >
                                                                {skill}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}

                {!loading &&
                    !errorMessage &&
                    sortedExperiences.length === 0 && (
                        <p className="experience-status">
                            No work experience details found.
                        </p>
                    )}
            </div>
        </section>
    );
}

export default WorkExperience;
