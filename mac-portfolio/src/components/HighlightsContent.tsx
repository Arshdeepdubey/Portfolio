export default function HighlightsContent() {
  return (
    <div style={{ fontFamily: 'Courier New, Courier, monospace', color: '#1a1a1a', padding: 'clamp(12px, 3vw, 16px)', lineHeight: 1.5 }}>
      <h2 style={{ borderBottom: '2px solid #2a2a2a', paddingBottom: 'clamp(2px, 1vw, 4px)', marginBottom: 'clamp(14px, 3vw, 20px)', fontSize: 'clamp(14px, 4vw, 18px)' }}>Yearly Highlights</h2>
      
      <div style={{ position: 'relative', borderLeft: '2px dashed #2a2a2a', marginLeft: 'clamp(6px, 1.5vw, 10px)', paddingLeft: 'clamp(14px, 2.5vw, 20px)' }}>
        
        <div style={{ marginBottom: 'clamp(18px, 4vw, 25px)', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 'clamp(-19px, -3vw, -27px)', top: '0', width: 'clamp(10px, 2vw, 12px)', height: 'clamp(10px, 2vw, 12px)', background: '#1dd760', border: '2px solid #2a2a2a', borderRadius: '50%' }}></div>
          <h3 style={{ fontSize: 'clamp(12px, 3vw, 16px)', fontWeight: 'bold' }}>2026</h3>
          <ul style={{ fontSize: 'clamp(10px, 2.2vw, 13px)', marginTop: 'clamp(6px, 1.5vw, 8px)', lineHeight: 1.6, marginLeft: 'clamp(12px, 2vw, 15px)', listStyleType: 'square' }}>
            <li>Completed Minor in AI from IIT Ropar.</li>
            <li>Standardized custom JSON logging schemas across 12 cloud microservices to boost observability.</li>
          </ul>
        </div>

        <div style={{ marginBottom: 'clamp(18px, 4vw, 25px)', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 'clamp(-19px, -3vw, -27px)', top: '0', width: 'clamp(10px, 2vw, 12px)', height: 'clamp(10px, 2vw, 12px)', background: '#ffbd2e', border: '2px solid #2a2a2a', borderRadius: '50%' }}></div>
          <h3 style={{ fontSize: 'clamp(12px, 3vw, 16px)', fontWeight: 'bold' }}>2025</h3>
          <ul style={{ fontSize: 'clamp(10px, 2.2vw, 13px)', marginTop: 'clamp(6px, 1.5vw, 8px)', lineHeight: 1.6, marginLeft: 'clamp(12px, 2vw, 15px)', listStyleType: 'square' }}>
            <li>Won the On-the-Spot Award (Feb 2025) for outstanding business KPI deliveries ahead of schedule.</li>
            <li>Solely engineered automated secret creation pipelines in Terraform and AWS Secrets Manager.</li>
          </ul>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 'clamp(-19px, -3vw, -27px)', top: '0', width: 'clamp(10px, 2vw, 12px)', height: 'clamp(10px, 2vw, 12px)', background: '#ff5f56', border: '2px solid #2a2a2a', borderRadius: '50%' }}></div>
          <h3 style={{ fontSize: 'clamp(12px, 3vw, 16px)', fontWeight: 'bold' }}>2024</h3>
          <ul style={{ fontSize: 'clamp(10px, 2.2vw, 13px)', marginTop: 'clamp(6px, 1.5vw, 8px)', lineHeight: 1.6, marginLeft: 'clamp(12px, 2vw, 15px)', listStyleType: 'square' }}>
            <li>Architected and deployed 20+ enterprise-wide ETL pipeline templates using SnapLogic.</li>
            <li>Developed full-stack travel booking platform from scratch.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}