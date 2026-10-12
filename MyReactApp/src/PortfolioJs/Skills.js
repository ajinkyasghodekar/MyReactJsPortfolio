
import React, { useEffect, useState } from 'react';
import '../PortfolioStyle/Skills.css';

const API_URL = 'https://localhost:7083/api/Skills';

const fallbackSkills = [
    {
        id: 1,
        name: 'Backend Development',
        description: 'Building APIs and maintainable enterprise applications.',
        skills: [
            'C#',
            '.NET',
            'ASP.NET Core',
            'ASP.NET MVC',
            'REST APIs',
            'Entity Framework Core',
            'LINQ',
        ],
    },
    {
        id: 2,
        name: 'Frontend Development',
        description: 'Creating responsive, component-based user interfaces.',
        skills: [
            'React.js',
            'JavaScript',
            'HTML5',
            'CSS3',
            'Bootstrap',
        ],
    },
    {
        id: 3,
        name: 'Cloud & DevOps',
        description: 'Deploying applications and automating delivery pipelines.',
        skills: [
            'Microsoft Azure',
            'Azure App Service',
            'Azure Key Vault',
            'Azure SQL',
            'Azure DevOps',
            'YAML CI/CD',
        ],
    },
    {
        id: 4,
        name: 'Database & Testing',
        description: 'Working with data, API validation, and application quality.',
        skills: [
            'SQL Server',
            'Oracle Database',
            'Query Optimization',
            'Unit Testing',
            'Swagger',
            'Postman',
        ],
    },
    {
        id: 5,
        name: 'Architecture & Engineering',
        description: 'Applying sound design and engineering practices.',
        skills: [
            'Microservices',
            'Clean Architecture',
            'SOLID Principles',
            'Design Patterns',
            'Code Reviews',
            'Performance Optimization',
        ],
    },
    {
        id: 6,
        name: 'Automation & AI',
        description: 'Supporting automation and NLP-related workflows.',
        skills: [
            'Python',
            'PowerShell',
            'NLP',
            "DLP Policy",
            'Named Entity Recognition (NER)',
            'Model Evaluation',
        ],
    },
];

const Skills = () => {
    const [skillsData, setSkillsData] = useState(fallbackSkills);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchSkills = async () => {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error('Unable to load skills from the API.');
                }

                const result = await response.json();

                // Support APIs that return either an array or { data: [...] }.
                const apiSkills = Array.isArray(result)
                    ? result
                    : result?.data;

                if (isMounted && Array.isArray(apiSkills) && apiSkills.length > 0) {
                    const normalizedSkills = normalizeSkills(apiSkills);

                    if (normalizedSkills.length > 0) {
                        setSkillsData(normalizedSkills);
                    }
                }
            } catch (error) {
                // Fallback skills remain available if the API is offline.
                console.warn('Using fallback skills data:', error.message);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchSkills();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section
            id="skills"
            className="skills-section"
            aria-labelledby="skills-title"
        >
            <div className="skills-bg" aria-hidden="true" />

            <div className="container skills-container">
                <header className="skills-heading text-center">
                    <span className="skills-eyebrow">
                        TECHNICAL EXPERTISE
                    </span>

                    <h2 id="skills-title">
                        Skills &amp; <span>Technologies</span>
                    </h2>

                    <p>
                        The technologies and engineering practices I use to
                        build reliable, scalable, and maintainable applications.
                    </p>
                </header>

                {loading && (
                    <p className="skills-status" role="status">
                        Loading skills…
                    </p>
                )}

                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <article
                            className="skills-card"
                            key={category.id ?? category.name}
                            style={{ animationDelay: `${index * 70}ms` }}
                        >
                            <div className="skills-card-top">
                                <span className="skills-card-number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <span
                                    className="skills-card-indicator"
                                    aria-hidden="true"
                                />
                            </div>

                            <h3>{category.name}</h3>

                            {category.description && (
                                <p className="skills-card-description">
                                    {category.description}
                                </p>
                            )}

                            <div
                                className="skills-tags"
                                aria-label={`${category.name} skills`}
                            >
                                {(category.skills ?? []).map((skill) => (
                                    <span className="skills-tag" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

/**
 * Accept grouped skills directly, or convert a flat list of { id, name }
 * objects into professional categories.
 */
function normalizeSkills(items) {
    const first = items[0];

    if (Array.isArray(first?.skills)) {
        return items.filter(
            (item) =>
                typeof item.name === 'string' &&
                Array.isArray(item.skills) &&
                item.skills.length > 0
        );
    }

    const names = items
        .map((item) => item.name)
        .filter((name) => typeof name === 'string' && name.trim());

    if (names.length === 0) {
        return [];
    }

    const groups = [
        {
            id: 1,
            name: 'Backend Development',
            description: 'Building APIs and maintainable enterprise applications.',
            matches: [
                'C#', '.NET', '.NET Core', 'ASP.NET MVC', 'ASP.NET Core',
                'EF Core and LINQ', 'Entity Framework Core', 'LINQ', 'REST APIs',
            ],
        },
        {
            id: 2,
            name: 'Frontend Development',
            description: 'Creating responsive, component-based user interfaces.',
            matches: ['React Js', 'React.js', 'ReactJS', 'HTML, CSS', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        },
        {
            id: 3,
            name: 'Cloud & DevOps',
            description: 'Deploying applications and automating delivery pipelines.',
            matches: [
                'MicroSoft Azure', 'Microsoft Azure', 'Azure DevOps',
                'Azure App Service', 'Azure Key Vault', 'Azure SQL',
                'CI/CD', 'Jenkins', 'Docker', 'Kubernetes', 'GitHub',
            ],
        },
        {
            id: 4,
            name: 'Database & Testing',
            description: 'Working with data, API validation, and application quality.',
            matches: [
                'MS SQL', 'SQL Server', 'Oracle Database',
                'Unit Testing', 'Swagger', 'Postman', 'Query Optimization',
            ],
        },
        {
            id: 5,
            name: 'Architecture & Engineering',
            description: 'Applying sound design and engineering practices.',
            matches: [
                'Microservices', 'Clean Architecture', 'SOLID Principles',
                'Design Patterns', 'Code Reviews', 'Performance Optimization',
                'Agile Methodologies', 'Problem Solving',
            ],
        },
        {
            id: 6,
            name: 'Automation & AI',
            description: 'Supporting automation and NLP-related workflows.',
            matches: [
                'Python', 'PowerShell', 'NLP', "DLP Policy",
                'Named Entity Recognition (NER)', 'NER', 'Model Evaluation',
            ],
        },
    ];

    const used = new Set();

    const grouped = groups
        .map((group) => {
            const matchedSkills = names.filter((name) => {
                const match = group.matches.some(
                    (item) => item.toLowerCase() === name.toLowerCase()
                );

                if (match) {
                    used.add(name.toLowerCase());
                }

                return match;
            });

            return {
                id: group.id,
                name: group.name,
                description: group.description,
                skills: [...new Set(matchedSkills)],
            };
        })
        .filter((group) => group.skills.length > 0);

    // Preserve any API skills that do not match a predefined category.
    const ungrouped = names.filter(
        (name) => !used.has(name.toLowerCase())
    );

    if (ungrouped.length > 0) {
        grouped.push({
            id: 7,
            name: 'Additional Skills',
            description: 'Other tools and technologies in my skill set.',
            skills: [...new Set(ungrouped)],
        });
    }

    return grouped;
}

export default Skills;
