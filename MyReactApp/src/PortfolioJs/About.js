
import React from 'react';
import AjinkyaImageBase64 from '../PortfolioJs/AjinkyaImageBase64';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../PortfolioStyle/About.css';

const expertise = [
    'C# & .NET',
    'ASP.NET Core',
    'REST APIs',
    'React.js',
    'Microsoft Azure',
    'Azure DevOps & CI/CD',
    'SQL Server',
    'Python & PowerShell',
    'AI / NLP / NER',
    'DLP Policy',
];

function About() {
    const preventImageContextMenu = (event) => {
        event.preventDefault();
    };

    return (
        <section
            id="about"
            className="about-section position-relative"
            aria-labelledby="about-title"
        >
            <div className="about-bg" aria-hidden="true" />

            <div className="container position-relative about-container">
                {/* Section heading */}
                <header className="about-heading text-center">
                    <span className="about-eyebrow">
                        GET TO KNOW ME
                    </span>

                    <h2 id="about-title" className="about-title">
                        About <span>Me</span>
                    </h2>

                    <p className="about-heading-desc">
                        A little about my journey, expertise, and approach
                        to software engineering.
                    </p>
                </header>

                <div className="row align-items-center g-5 about-content">
                    {/* Profile image */}
                    <div className="col-12 col-lg-5">
                        <div className="about-profile-column">
                            <div className="profile-wrapper">
                                <div
                                    className="profile-glow"
                                    aria-hidden="true"
                                />

                                <img
                                    src={AjinkyaImageBase64}
                                    alt="Ajinkya Ghodekar, Senior .NET Full Stack Developer"
                                    className="profile-img-innovative"
                                    draggable={false}
                                    onContextMenu={preventImageContextMenu}
                                    loading="lazy"
                                    decoding="async"
                                />

                                <span
                                    className="ring ring-1"
                                    aria-hidden="true"
                                />

                                <span
                                    className="ring ring-2"
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="about-profile-caption">
                                <span
                                    className="about-caption-dot"
                                    aria-hidden="true"
                                />
                                Engineering scalable digital solutions
                            </div>
                        </div>
                    </div>

                    {/* Professional introduction */}
                    <div className="col-12 col-lg-7">
                        <div className="about-details">
                            <h3 className="about-greeting">
                                Hello, I'm Ajinkya Ghodekar.
                            </h3>

                            <h4 className="about-role">
                                Senior .NET Full Stack Developer
                            </h4>

                            <p className="about-text">
                                I'm a software engineer focused on building
                                scalable, maintainable, and reliable enterprise
                                applications. My core expertise includes C#,
                                .NET, ASP.NET Core, REST APIs, React.js, and
                                SQL Server.
                            </p>

                            <p className="about-text">
                                At Centific, I work with .NET and React
                                applications, Azure services, Azure DevOps
                                YAML pipelines, and CI/CD automation. My work
                                also includes automation using Python and
                                PowerShell, along with AI/NLP workflows and
                                Named Entity Recognition (NER) evaluation.
                            </p>

                            <p className="about-text">
                                Previously at Kellton Tech Solutions, I
                                contributed to enterprise application
                                development, backend APIs, database
                                optimization, and maintainable business
                                workflows in collaboration with
                                cross-functional teams.
                            </p>

                            {/* Key strengths */}
                            <div className="about-focus">
                                <h5>What I bring to a team</h5>

                                <ul>
                                    <li>
                                        Maintainable backend APIs and
                                        full-stack application development
                                    </li>
                                    <li>
                                        Azure cloud deployments and CI/CD
                                        automation
                                    </li>
                                    <li>
                                        Database optimization, code quality,
                                        and application reliability
                                    </li>
                                </ul>
                            </div>

                            {/* Technical expertise */}
                            <div className="about-expertise">
                                <h5>Technical expertise</h5>

                                <div className="about-tech-list">
                                    {expertise.map((skill) => (
                                        <span
                                            className="about-tech-chip"
                                            key={skill}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="about-actions">
                                <a
                                    href="#work-experience"
                                    className="about-btn about-btn-primary"
                                >
                                    Explore My Experience
                                    <span aria-hidden="true">→</span>
                                </a>

                                <a
                                    href="#contact"
                                    className="about-btn about-btn-secondary"
                                >
                                    Let's Connect
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
