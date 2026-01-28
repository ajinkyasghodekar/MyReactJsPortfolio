import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../PortfolioStyle/WorkExperience.css';

function WorkExperience() {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://localhost:7083/api/WorkExperience')
            .then(res => {
                if (res.data?.isSuccess) {
                    setExperiences(res.data.result || []);
                }
            })
            .catch(() => {
                setExperiences(require('../fallbackData.json').workExperience);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <section id="work-experience" className="container position-relative">

            {/* Background Glow */}
            <div className="work-bg"></div>

            <h4>Work Experience</h4>

            {loading && (
                <p className="text-center text-secondary">Loading experience...</p>
            )}

            <div className="timeline">
                {experiences.map(exp => (
                    <div
                        key={exp.id}
                        className={`timeline-item ${exp.endDate === "Present" ? "current" : ""}`}
                    >
                        <h5>{exp.jobTitle}</h5>

                        <p className="company">
                            {exp.company} - {exp.location}
                        </p>

                        <p className="text-muted">
                            {exp.startDate} - {exp.endDate}
                        </p>

                        <p>{exp.description}</p>

                        <div className="tech-stack">
                            {exp.skills?.map((skill, index) => (
                                <span key={index} className="tech-pill">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WorkExperience;
