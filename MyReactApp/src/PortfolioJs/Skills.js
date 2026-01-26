import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../PortfolioStyle/Skills.css';

const skillLevels = {
    "C#": 90,
    ".NET": 92,
    ".NET Core": 70,
    "ASP.NET MVC": 70,
    "EF Core and LINQ": 70,
    "MS SQL": 70,
    "React Js": 70,
    "HTML, CSS": 70,
    "JavaScript": 88,
    "GitHub": 70,
    "MicroSoft Azure": 70,
    "Agile Methodologies": 80,
    "REST APIs": 80,
    "Unit Testing": 75,
    "Docker": 65,
    "Kubernetes": 60,
    "CI/CD": 70,
    "Jenkins": 65
};

function Skills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7083/api/Skills')
            .then(res => {
                if (res.status === 200 && res.data.isSuccess) {
                    setSkills(res.data.result || []);
                }
            })
            .catch(() => {
                setSkills(require('../fallbackData.json').skills);
            });
    }, []);

    return (
        <section id="skills" className="container position-relative">

            {/* AI Background Glow */}
            <div className="skills-bg"></div>

            <h4 className="text-center">Skills</h4>

            <div className="skills-grid">
                {skills.map((skill, index) => {
                    const level = skillLevels[skill.name] || 70;

                    return (
                        <div
                            key={skill.id}
                            className="skill-tile"
                            style={{ animationDelay: `${index * 0.08}s` }}
                        >
                            <div className="skill-title-row">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percent">{level}%</span>
                            </div>

                            <div className="skill-bar">
                                <div
                                    className="skill-progress"
                                    style={{ width: `${level}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;
