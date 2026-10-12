
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../PortfolioStyle/Education.css';

function Education() {
    const [education, setEducation] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchEducation = async () => {
            try {
                const response = await axios.get(
                    'https://localhost:7083/api/Education'
                );

                const { status, data } = response;

                if (status === 200 && data?.isSuccess) {
                    if (isMounted) {
                        setEducation(data.result || []);
                        setErrorMessage('');
                    }
                } else {
                    throw new Error(
                        data?.message || 'Unable to load education details.'
                    );
                }
            } catch (error) {
                // Use local fallback data when the API is unavailable.
                try {
                    const fallbackData =
                        require('../fallbackData.json').education || [];

                    if (isMounted) {
                        setEducation(fallbackData);
                        setErrorMessage(
                            fallbackData.length
                                ? ''
                                : 'Education details are currently unavailable.'
                        );
                    }
                } catch {
                    if (isMounted) {
                        setEducation([]);
                        setErrorMessage(
                            'Unable to load education details. Please try again later.'
                        );
                    }
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchEducation();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section
            id="education"
            className="education-section position-relative"
            aria-labelledby="education-title"
        >
            <div className="education-bg" aria-hidden="true" />

            <div className="container education-container">
                <div className="education-heading text-center">
                    <span className="education-eyebrow">
                        MY ACADEMIC BACKGROUND
                    </span>

                    <h2 id="education-title">
                        Education <span className="education-accent">.</span>
                    </h2>

                    <p>
                        The academic foundation behind my technical journey
                        and continued learning.
                    </p>
                </div>

                {loading && (
                    <div className="education-status" role="status">
                        <span className="education-loader" />
                        Loading education details...
                    </div>
                )}

                {!loading && errorMessage && (
                    <p className="education-message" role="status">
                        {errorMessage}
                    </p>
                )}

                {!loading && education.length > 0 && (
                    <div className="education-timeline">
                        {education.map((edu, index) => (
                            <article
                                className="education-card"
                                key={edu.id ?? `${edu.educationType}-${index}`}
                            >
                                <div className="education-marker">
                                    <span className="education-marker-inner" />
                                </div>

                                <div className="education-card-content">
                                    <span className="education-number">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <h3>
                                        {edu.educationType}
                                    </h3>

                                    {edu.branch && (
                                        <p className="education-branch">
                                            {edu.branch}
                                        </p>
                                    )}

                                    {edu.university && (
                                        <p className="education-detail">
                                            <span>University / Institution</span>
                                            {edu.university}
                                        </p>
                                    )}

                                    {edu.passOutYear && (
                                        <div className="education-year">
                                            <span className="education-year-dot" />
                                            Graduated in {edu.passOutYear}
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {!loading && !errorMessage && education.length === 0 && (
                    <p className="education-message">
                        No education details found.
                    </p>
                )}
            </div>
        </section>
    );
}

export default Education;
