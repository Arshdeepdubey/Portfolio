import React from 'react';

interface Article {
    id: string;
    title: string;
    description: string;
    date: string;
    link: string;
    tags: string[];
}

const articles: Article[] = [
    {
        id: '1',
        title: 'Architecting a Robust CI/CD Blueprint for Applications & Releases',
        description: 'A deep dive into building production-grade CI/CD pipelines, GitOps best practices, automated testing gates, and secret management strategies for enterprise release workflows.',
        date: '2025 / 2026',
        link: 'https://www.linkedin.com/pulse/architecting-robust-cicd-blueprint-applications-releases-dubey-hciwc/',
        tags: ['CI/CD', 'GitOps', 'DevOps', 'Cloud Architecture']
    },
    {
        id: '2',
        title: 'Leveling Up: Core AI Fundamentals Every Professional Should Know',
        description: 'A practical breakdown of fundamental Artificial Intelligence concepts, demystifying ML model architectures, prompt engineering, and key considerations for technical professionals.',
        date: '2025 / 2026',
        link: 'https://www.linkedin.com/pulse/leveling-up-core-ai-fundamentals-every-professional-should-dubey-wrc7c/',
        tags: ['Artificial Intelligence', 'Machine Learning', 'AI Fundamentals']
    }
];

export default function NewsletterContent() {
    return (
        <div style={{ padding: '16px', height: '100%', overflowY: 'auto' }}>
            <div style={{ marginBottom: '20px', borderBottom: '2px dashed var(--border-dark)', paddingBottom: '12px' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '6px' }}>📰 LinkedIn Newsletters & Articles</h2>
                <p style={{ fontSize: '12px', color: '#555' }}>
                    Technical deep dives, architectural blueprints, and engineering insights published on LinkedIn.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {articles.map(article => (
                    <article 
                        key={article.id}
                        style={{
                            background: '#ffffff',
                            border: '2px solid var(--border-dark)',
                            boxShadow: '4px 4px 0px var(--shadow-dark)',
                            padding: '14px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '11px', background: 'var(--sticky-green)', color: '#fff', padding: '2px 6px', fontWeight: 'bold', borderRadius: '2px' }}>
                                LinkedIn Article
                            </span>
                            <span style={{ fontSize: '11px', color: '#666', fontWeight: 'bold' }}>{article.date}</span>
                        </div>

                        <h3 style={{ fontSize: '15px', lineHeight: '1.3' }}>
                            <a 
                                href={article.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: 'var(--text-color)', textDecoration: 'underline' }}
                            >
                                {article.title} ↗
                            </a>
                        </h3>

                        <p style={{ fontSize: '12px', lineHeight: '1.5', color: '#333' }}>
                            {article.description}
                        </p>

                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '4px' }}>
                            {article.tags.map(tag => (
                                <span 
                                    key={tag} 
                                    style={{ 
                                        fontSize: '10px', 
                                        border: '1px solid var(--border-dark)', 
                                        padding: '1px 5px', 
                                        background: '#f0f0f0' 
                                    }}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}