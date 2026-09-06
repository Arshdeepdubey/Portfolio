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
        <div style={{ padding: 'clamp(12px, 3vw, 16px)', height: '100%', overflowY: 'auto' }}>
            <div style={{ marginBottom: 'clamp(14px, 3vw, 20px)', borderBottom: '2px dashed var(--border-dark)', paddingBottom: 'clamp(8px, 1.5vw, 12px)' }}>
                <h2 style={{ fontSize: 'clamp(14px, 4vw, 18px)', marginBottom: 'clamp(4px, 1vw, 6px)' }}>📰 LinkedIn Newsletters & Articles</h2>
                <p style={{ fontSize: 'clamp(10px, 2vw, 12px)', color: '#555' }}>
                    Technical deep dives, architectural blueprints, and engineering insights published on LinkedIn.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2vw, 16px)' }}>
                {articles.map(article => (
                    <article 
                        key={article.id}
                        style={{
                            background: '#ffffff',
                            border: '2px solid var(--border-dark)',
                            boxShadow: '4px 4px 0px var(--shadow-dark)',
                            padding: 'clamp(10px, 2.5vw, 14px)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'clamp(6px, 1.5vw, 8px)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'clamp(6px, 1vw, 10px)', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: 'clamp(9px, 1.8vw, 11px)', background: 'var(--sticky-green)', color: '#fff', padding: 'clamp(2px, 0.5vw, 6px)', fontWeight: 'bold', borderRadius: '2px', whiteSpace: 'nowrap' }}>
                                LinkedIn Article
                            </span>
                            <span style={{ fontSize: 'clamp(9px, 1.8vw, 11px)', color: '#666', fontWeight: 'bold' }}>{article.date}</span>
                        </div>

                        <h3 style={{ fontSize: 'clamp(12px, 3vw, 15px)', lineHeight: 1.3 }}>
                            <a 
                                href={article.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: 'var(--text-color)', textDecoration: 'underline' }}
                            >
                                {article.title} ↗
                            </a>
                        </h3>

                        <p style={{ fontSize: 'clamp(10px, 2vw, 12px)', lineHeight: 1.5, color: '#333' }}>
                            {article.description}
                        </p>

                        <div style={{ display: 'flex', gap: 'clamp(4px, 1vw, 6px)', flexWrap: 'wrap', marginTop: 'clamp(2px, 0.5vw, 4px)' }}>
                            {article.tags.map(tag => (
                                <span 
                                    key={tag} 
                                    style={{ 
                                        fontSize: 'clamp(8px, 1.5vw, 10px)', 
                                        border: '1px solid var(--border-dark)', 
                                        padding: 'clamp(1px, 0.5vw, 5px)', 
                                        background: '#f0f0f0',
                                        whiteSpace: 'nowrap' 
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