import React from 'react';
// 1. Import the image directly so Vite resolves the path dynamically
import profilePhoto from '../assets/profile-photo.jpg';

export default function ResumeContent() {
  return (
    <div style={{ fontFamily: 'Courier New, Courier, monospace', color: '#1a1a1a' }}>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'center' }}>
        {/* 2. Use the imported variable as the src */}
        <img 
          src={profilePhoto} 
          alt="Arshdeep Dubey" 
          style={{ width: '100px', height: '100px', borderRadius: '8px', border: '2px solid #2a2a2a', boxShadow: '4px 4px 0px #2a2a2a', objectFit: 'cover' }} 
        />
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>Arshdeep Dubey</h1>
          <p style={{ fontWeight: 'bold' }}>Software Engineer II</p>
          <p style={{ fontSize: '14px', marginTop: '5px' }}>Jamshedpur, Jharkhand, India</p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ borderBottom: '2px solid #2a2a2a', paddingBottom: '4px', marginBottom: '10px' }}>Summary</h2>
        <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
          Ex-Software Engineer at Fidelity. Experienced in migrating workloads to Amazon EKS and engineering 20+ SnapLogic ETL pipelines to minimize downtime. Managed end-to-end migrations to Cloud Nexus and built CI/CD pipelines using Terraform and Jenkins. Strong foundation in System Design, DSA, and Artificial Intelligence.
        </p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ borderBottom: '2px solid #2a2a2a', paddingBottom: '4px', marginBottom: '10px' }}>Experience</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Fidelity International</h3>
          <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>Software Engineer II (Oct 2025 - Jul 2026)</p>
          <ul style={{ fontSize: '13px', marginLeft: '20px', lineHeight: '1.5' }}>
             <li>Engineered automated secret creation pipeline using Terraform, AWS Secrets Manager, and Jenkins.</li>
             <li>Established GitOps workflow utilizing Java, Spring Boot, Docker, ArgoCD, and Helm.</li>
             <li>Implemented custom JSON logging across microservices to a centralized Kibana dashboard.</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 style={{ borderBottom: '2px solid #2a2a2a', paddingBottom: '4px', marginBottom: '10px' }}>Education</h2>
        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Minor in AI - IIT Ropar</p>
        <p style={{ fontSize: '13px', marginBottom: '10px' }}>Sept 2024 - Feb 2026</p>
        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>B.Tech Computer Software Engineering - SOA University</p>
        <p style={{ fontSize: '13px' }}>Aug 2019 - Aug 2023</p>
      </div>
    </div>
  );
}