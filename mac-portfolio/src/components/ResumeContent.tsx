// 1. Import the image directly so Vite resolves the path dynamically
import profilePhoto from '../assets/profile-photo.jpg';

export default function ResumeContent() {
  return (
    <div style={{ fontFamily: 'Courier New, Courier, monospace', color: '#1a1a1a', fontSize: 'clamp(11px, 2.2vw, 14px)', lineHeight: 1.5 }}>
      <div style={{ display: 'flex', gap: 'clamp(12px, 3vw, 20px)', marginBottom: 'clamp(20px, 5vw, 30px)', alignItems: 'center', flexWrap: 'wrap' }}>
        {/* 2. Use the imported variable as the src */}
        <img 
          src={profilePhoto} 
          alt="Arshdeep Dubey" 
          style={{ width: 'clamp(80px, 15vw, 100px)', height: 'clamp(80px, 15vw, 100px)', borderRadius: '8px', border: '2px solid #2a2a2a', boxShadow: '4px 4px 0px #2a2a2a', objectFit: 'cover', flexShrink: 0 }} 
        />
        <div>
          <h1 style={{ fontSize: 'clamp(18px, 5vw, 24px)', fontWeight: 'bold', marginBottom: 'clamp(4px, 1vw, 5px)' }}>Arshdeep Dubey</h1>
          <p style={{ fontWeight: 'bold', fontSize: 'clamp(12px, 2.5vw, 14px)' }}>Software Engineer II</p>
          <p style={{ fontSize: 'clamp(11px, 2vw, 14px)', marginTop: 'clamp(4px, 1vw, 5px)' }}>Jamshedpur, Jharkhand, India</p>
        </div>
      </div>

      <div style={{ marginBottom: 'clamp(14px, 3vw, 20px)' }}>
        <h2 style={{ borderBottom: '2px solid #2a2a2a', paddingBottom: 'clamp(2px, 1vw, 4px)', marginBottom: 'clamp(8px, 1.5vw, 10px)', fontSize: 'clamp(13px, 3vw, 16px)' }}>Summary</h2>
        <p style={{ fontSize: 'clamp(11px, 2.2vw, 14px)', lineHeight: 1.6 }}>
          Ex-Software Engineer at Fidelity. Experienced in migrating workloads to Amazon EKS and engineering 20+ SnapLogic ETL pipelines to minimize downtime. Managed end-to-end migrations to Cloud Nexus and built CI/CD pipelines using Terraform and Jenkins. Strong foundation in System Design, DSA, and Artificial Intelligence.
        </p>
      </div>

      <div style={{ marginBottom: 'clamp(14px, 3vw, 20px)' }}>
        <h2 style={{ borderBottom: '2px solid #2a2a2a', paddingBottom: 'clamp(2px, 1vw, 4px)', marginBottom: 'clamp(8px, 1.5vw, 10px)', fontSize: 'clamp(13px, 3vw, 16px)' }}>Experience</h2>
        
        <div style={{ marginBottom: 'clamp(12px, 2vw, 15px)' }}>
          <h3 style={{ fontSize: 'clamp(12px, 2.5vw, 16px)', fontWeight: 'bold' }}>Fidelity International</h3>
          <p style={{ fontSize: 'clamp(11px, 2.2vw, 14px)', fontWeight: 'bold', marginBottom: 'clamp(4px, 1vw, 5px)' }}>Software Engineer II (Oct 2025 - Jul 2026)</p>
          <ul style={{ fontSize: 'clamp(10px, 2vw, 13px)', marginLeft: 'clamp(14px, 3vw, 20px)', lineHeight: 1.5 }}>
             <li>Engineered automated secret creation pipeline using Terraform, AWS Secrets Manager, and Jenkins.</li>
             <li>Established GitOps workflow utilizing Java, Spring Boot, Docker, ArgoCD, and Helm.</li>
             <li>Implemented custom JSON logging across microservices to a centralized Kibana dashboard.</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 style={{ borderBottom: '2px solid #2a2a2a', paddingBottom: 'clamp(2px, 1vw, 4px)', marginBottom: 'clamp(8px, 1.5vw, 10px)', fontSize: 'clamp(13px, 3vw, 16px)' }}>Education</h2>
        <p style={{ fontSize: 'clamp(11px, 2.2vw, 14px)', fontWeight: 'bold' }}>Minor in AI - IIT Ropar</p>
        <p style={{ fontSize: 'clamp(10px, 2vw, 13px)', marginBottom: 'clamp(8px, 1.5vw, 10px)' }}>Sept 2024 - Feb 2026</p>
        <p style={{ fontSize: 'clamp(11px, 2.2vw, 14px)', fontWeight: 'bold' }}>B.Tech Computer Software Engineering - SOA University</p>
        <p style={{ fontSize: 'clamp(10px, 2vw, 13px)' }}>Aug 2019 - Aug 2023</p>
      </div>
    </div>
  );
}