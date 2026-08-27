interface Project {
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

export default function PortfolioContent() {
  const projects: Project[] = [
    {
      title: 'MoodMatch',
      desc: 'Production-ready, AI-powered anime recommendation engine combining facial emotion detection, 3-model ensemble intelligence, and multi-turn conversational AI.',
      tags: ['Python', 'Docker', 'FAISS', 'LLM'],
      link: 'https://github.com/Arshdeepdubey/MoodMatch'
    },
    {
      title: 'its-your-own-finance-buddy-chandler',
      desc: 'Modular microservices platform implementing global error handling, dynamic environment configurations, and API fault-tolerance mechanisms.',
      tags: ['Java', 'Spring Boot', 'Microservices'],
      link: 'https://github.com/Arshdeepdubey/its-your-own-finance-buddy-chandler'
    },
    {
      title: 'active-vulnerability-plugin',
      desc: 'Real-time GitHub Copilot CLI security plugin that fetches critical vulnerabilities from GitHub database with automated CI/CD pipelines.',
      tags: ['Node.js', 'GitHub Actions', 'MCP'],
      link: 'https://github.com/Arshdeepdubey/active-vulnerability-plugin'
    },
    {
      title: 'config-of-our-finance-buddy-chandler',
      desc: 'Centralized configuration and service-discovery management modules. Optimized multi-tier deployment settings.',
      tags: ['Python', 'PyTorch', 'Computer Vision'],
      link: 'https://github.com/Arshdeepdubey/config-of-our-finance-buddy-chandler'
    },
    {
      title: 'microsoft-graph-sendMail',
      desc: 'Production-ready Node.js email notification service featuring Microsoft Graph API, OAuth 2.0, and automated CI/CD pipelines.',
      tags: ['Microsoft Graph API', 'OAuth2', 'CI/CD'],
      link: 'https://github.com/Arshdeepdubey/microsoft-graph-sendMail'
    }
  ];

  return (
    <div style={{ fontFamily: 'Courier New, Courier, monospace', color: '#1a1a1a', padding: '16px', height: '100%', overflowY: 'auto' }}>
      <h2 style={{ borderBottom: '2px solid #2a2a2a', paddingBottom: '4px', marginBottom: '20px' }}>Technical Artifacts</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {projects.map((proj, idx) => (
          <div key={idx} style={{ border: '2px solid #2a2a2a', padding: '15px', background: '#fff', boxShadow: '4px 4px 0px #2a2a2a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px', lineHeight: '1.3' }}>
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#1a1a1a', textDecoration: 'underline' }}
                >
                  {proj.title} ↗
                </a>
              </h3>
              <p style={{ fontSize: '13px', lineHeight: '1.4', marginBottom: '15px' }}>{proj.desc}</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {proj.tags.map(tag => (
                <span key={tag} style={{ border: '1px solid #2a2a2a', background: '#eee', fontSize: '11px', padding: '2px 6px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}