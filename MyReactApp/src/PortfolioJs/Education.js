import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../PortfolioStyle/Education.css';

function Education() {
    const [education, setEducation] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://localhost:7083/api/Education')
            .then(response => {
                const { status, data } = response;
                if (status === 200 && data.isSuccess) {
                    setEducation(data.result || []);
                    setErrorMessage('');
                } else {
                    setErrorMessage(data.message || 'Failed to load education details. Please try again.');
                }
            })
            .catch(() => {
                setEducation(require('../fallbackData.json').education);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <section id="education" className="container">

            {/* AI Background Glow */}
            <div className="education-bg"></div>

            <h4 className="text-center">Education</h4>

            {loading && (
                <p className="text-center text-secondary">Loading education details...</p>
            )}
            {errorMessage && (
                <p className="text-center text-danger">{errorMessage}</p>
            )}

            <div className="timeline">
                {education.length > 0 ? (
                    education.map((edu) => (
                        <div key={edu.id} className="timeline-item">
                            <h5>{edu.educationType} - {edu.branch}</h5>
                            <p><b>University:</b> {edu.university}</p>
                            <p><b>Pass Out Year:</b> {edu.passOutYear}</p>
                        </div>
                    ))
                ) : (
                    !loading && (
                        <p className="text-center text-warning">No education details found.</p>
                    )
                )}
            </div>
        </section>
    );
}

export default Education;
