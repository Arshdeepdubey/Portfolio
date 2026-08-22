import React from 'react';

export default function HighlightsContent() {
  return (
    <div style={{ fontFamily: 'Courier New, Courier, monospace', color: '#1a1a1a' }}>
      <h2 style={{ borderBottom: '2px solid #2a2a2a', paddingBottom: '4px', marginBottom: '20px' }}>Yearly Highlights</h2>
      
      <div style={{ position: 'relative', borderLeft: '2px dashed #2a2a2a', marginLeft: '10px', paddingLeft: '20px' }}>
        
        <div style={{ marginBottom: '25px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-27px', top: '0', width: '12px', height: '12px', background: '#1dd760', border: '2px solid #2a2a2a', borderRadius: '50%' }}></div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>2026</h3>
          <ul style={{ fontSize: '13px', marginTop: '8px', lineHeight: '1.6', marginLeft: '15px', listStyleType: 'square' }}>
            <li>Completed Minor in AI from IIT Ropar.</li>
            <li>Standardized custom JSON logging schemas across 12 cloud microservices to boost observability.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '25px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-27px', top: '0', width: '12px', height: '12px', background: '#ffbd2e', border: '2px solid #2a2a2a', borderRadius: '50%' }}></div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>2025</h3>
          <ul style={{ fontSize: '13px', marginTop: '8px', lineHeight: '1.6', marginLeft: '15px', listStyleType: 'square' }}>
            <li>Won the On-the-Spot Award (Feb 2025) for outstanding business KPI deliveries ahead of schedule.</li>
            <li>Solely engineered automated secret creation pipelines in Terraform and AWS Secrets Manager.</li>
          </ul>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-27px', top: '0', width: '12px', height: '12px', background: '#ff5f56', border: '2px solid #2a2a2a', borderRadius: '50%' }}></div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>2024</h3>
          <ul style={{ fontSize: '13px', marginTop: '8px', lineHeight: '1.6', marginLeft: '15px', listStyleType: 'square' }}>
            <li>Architected and deployed 20+ enterprise-wide ETL pipeline templates using SnapLogic.</li>
            <li>Developed full-stack travel booking platform from scratch.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}