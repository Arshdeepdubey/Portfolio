import React from 'react';

export default function PortfolioContent() {
  const projects = [
    {
      title: 'MoodMatch',
      desc: 'Production-ready, AI-powered anime recommendation engine combining facial emotion detection, 3-model ensemble intelligence, and multi-turn conversational AI.',
      tags: ['Python', 'Docker', 'FAISS', 'LLM']
    },
    {
      title: 'its-your-own-finance-buddy-chandler',
      desc: 'Modular microservices platform implementing global error handling, dynamic environment configurations, and API fault-tolerance mechanisms.',
      tags: ['Java', 'Spring Boot', 'Microservices']
    },
    {
      title: 'active-vulnerability-plugin',
      desc: 'Real-time GitHub Copilot CLI security plugin that fetches critical vulnerabilities from GitHub database with automated CI/CD pipelines.',
      tags: ['Node.js', 'GitHub Actions', 'MCP']
    },
    {
      title: 'config-of-our-finance-buddy-chandler',
      desc: 'Centralized configuration and service-discovery management modules. Optimized multi-tier deployment settings.',
      tags: ['Python', 'PyTorch', 'Computer Vision']
    },
    {
      title: 'microsoft-graph-sendMail',
      desc: 'Production-ready Node.js email notification service featuring Microsoft Graph API, OAuth 2.0, and automated CI/CD pipelines.',
      tags: ['Microsoft Graph API', 'OAuth2', 'CI/CD']
    }
  ];

  return (
    <div style={{ fontFamily: 'Courier New, Courier, monospace', color: '#1a1a1a' }}>
      <h2 style={{ borderBottom: '2px solid #2a2a2a', paddingBottom: '4px', marginBottom: '20px' }}>Technical Artifacts</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {projects.map((proj, idx) => (
          <div key={idx} style={{ border: '2px solid #2a2a2a', padding: '15px', background: '#fff', boxShadow: '4px 4px 0px #2a2a2a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '8px' }}>{proj.title}</h3>
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