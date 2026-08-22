import React from 'react';

export default function NewsletterContent() {
  const newsletters = [
    {
      date: 'August 2026',
      title: 'Architecting for Resilience: Lessons from 20+ ETL Pipelines',
      excerpt: 'How we structured reusable SnapLogic templates to minimize enterprise downtime and ensure high availability across financial microservices...'
    },
    {
      date: 'May 2026',
      title: 'The GitOps Transition',
      excerpt: 'Decoupling code and infrastructure with ArgoCD, Helm, and Jenkins to dramatically reduce deployment overhead...'
    },
  ];

  return (
    <div style={{ fontFamily: 'Courier New, Courier, monospace', color: '#1a1a1a' }}>
      <h2 style={{ borderBottom: '2px solid #2a2a2a', paddingBottom: '4px', marginBottom: '20px' }}>My Newsletters</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {newsletters.map((post, idx) => (
          <article key={idx} style={{ border: '2px solid #2a2a2a', padding: '15px', background: '#fff', boxShadow: '4px 4px 0px #2a2a2a' }}>
            <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#666', marginBottom: '5px' }}>{post.date}</p>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>{post.title}</h3>
            <p style={{ fontSize: '13px', lineHeight: '1.5' }}>{post.excerpt}</p>
            <button style={{ marginTop: '10px', background: 'transparent', border: 'none', textDecoration: 'underline', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'inherit' }}>
              Read More →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}