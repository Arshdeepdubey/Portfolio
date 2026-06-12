import { useState, useEffect } from 'react';

type OpenMenuKey = 'apple' | 'navigation' | 'view' | null;

export default function App() {
    const [systemTime, setSystemTime] = useState<string>('');
    const [openMenu, setOpenMenu] = useState<OpenMenuKey>(null);

    // Synchronize Top Right System Clock
    useEffect(() => {
        const syncClock = () => {
            const date = new Date();
            setSystemTime(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        syncClock();
        const intervalId = setInterval(syncClock, 1000);
        return () => clearInterval(intervalId);
    }, []);

    // Close dropdown menus when clicking anywhere else on the desktop environment
    useEffect(() => {
        const dismissMenu = () => setOpenMenu(null);
        document.addEventListener('click', dismissMenu);
        return () => document.removeEventListener('click', dismissMenu);
    }, []);

    const toggleMenuState = (menuKey: OpenMenuKey, event: React.MouseEvent) => {
        event.stopPropagation(); // Stop document-level dismissal loop
        setOpenMenu(prev => (prev === menuKey ? null : menuKey));
    };

    // Airtight execution handler that halts bubbling to parent triggers
    const handleActionClick = (event: React.MouseEvent, action: () => void) => {
        event.stopPropagation();
        action();
        setOpenMenu(null); // Cleanly close menu after action completes
    };

    const navigateToSection = (elementId: string) => {
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="desktop-environment">

            {/* ================= STATE CONTROLLED MACINTOSH SYSTEM NAVBAR ================= */}
            <nav className="mac-os-navbar">
                <div className="nav-dropdown-group">

                    {/* Apple Dropdown */}
                    <div className={`menu-trigger ${openMenu === 'apple' ? 'active' : ''}`} onClick={(e) => toggleMenuState('apple', e)}>
                        <span></span>
                        <div className={`dropdown-menu-list ${openMenu === 'apple' ? 'show' : ''}`}>
              <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => navigateToSection('home-section'))}>
                About System Architecture
              </span>
                            <div className="dropdown-rule"></div>
                            <span className="dropdown-action-item" onClick={(e) => e.stopPropagation()}>
                OS Mode: State Monitored
              </span>
                        </div>
                    </div>

                    {/* Navigation Dropdown */}
                    <div className={`menu-trigger ${openMenu === 'navigation' ? 'active' : ''}`} onClick={(e) => toggleMenuState('navigation', e)}>
                        <span><b>Navigation</b></span>
                        <div className={`dropdown-menu-list ${openMenu === 'navigation' ? 'show' : ''}`}>
                            <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => navigateToSection('home-section'))}>1. Home Node</span>
                            <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => navigateToSection('about-section'))}>2. About Narrative</span>
                            <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => navigateToSection('experience-section'))}>3. Experience Log</span>
                            <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => navigateToSection('projects-section'))}>4. Technical Artifacts</span>
                            <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => navigateToSection('education-section'))}>5. Academic History</span>
                            <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => navigateToSection('contact-section'))}>6. Link Communications</span>
                        </div>
                    </div>

                    {/* View Dropdown - BUBBLE FIX IMPLEMENTED */}
                    <div className={`menu-trigger ${openMenu === 'view' ? 'active' : ''}`} onClick={(e) => toggleMenuState('view', e)}>
                        <span>View</span>
                        <div className={`dropdown-menu-list ${openMenu === 'view' ? 'show' : ''}`}>
              <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
              })}>
                Reset View to Top
              </span>
                        </div>
                    </div>
                </div>

                {/* Live Active Clock Node */}
                <div style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: 'bold' }}>
                    {systemTime}
                </div>
            </nav>

            {/* ================= CENTRAL MASTER MAIN INFRASTRUCTURE SHELL ================= */}
            <main className="portfolio-mainframe">
                <div className="mac-os-window-shell">

                    <div className="window-header-strip">
                        <div className="window-control-box"></div>
                        <span className="window-title-banner">Arshdeep_Dubey_Portfolio_Workstation.app</span>
                        <div className="window-control-box" style={{ marginLeft: 'auto', marginRight: '4px' }}></div>
                    </div>

                    <div className="window-scrollable-body">

                        {/* 1. HERO SECTION */}
                        <section id="home-section" className="portfolio-section-block" style={{ paddingTop: '10px' }}>
                            <div className="hero-intro-box">
                                <h1 className="hero-greeting">I'm Arshdeep Dubey</h1>
                                <p className="hero-subtitle">Software Engineer II @ Fidelity International</p>
                                <div className="status-badge">STATUS: IMMEDIATE JOINER</div>
                            </div>
                        </section>

                        {/* 2. ABOUT NARRATIVE SECTION */}
                        <section id="about-section" className="portfolio-section-block">
                            <h2 className="section-caption-header">About Me</h2>
                            <p className="paragraph-content">
                                I am a systems developer driven by a keen curiosity for clean enterprise architecture and robust automation paradigms.
                                With an extensive background across distributed backend engineering, cloud pipeline orchestration, and system optimization,
                                I focus on refactoring complex structural solutions into maintainable, highly available microservices frameworks.
                            </p>
                            <p className="paragraph-content">
                                My technical philosophy emphasizes eliminating manual overhead—specializing in the creation of scalable database structures,
                                reusable automated pipelines, and comprehensive JSON logging matrices to support clear production debugging loops.
                                I am currently based in Gurugram, India, targeting high-impact backend, cloud-native engineering challenges.
                            </p>

                            <div style={{ marginTop: '20px' }}>
                                <p style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '8px' }}>Core Runtime Skill Matrix:</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div>
                                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Languages: </span>
                                        {['C', 'HTML', 'Java', 'JavaScript', 'Python', 'PL/SQL', 'SQL', 'TypeScript'].map(lang => (
                                            <span key={lang} className="badge-tag" style={{ marginRight: '4px' }}>{lang}</span>
                                        ))}
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Tools & Frameworks: </span>
                                        {['Argo CD', 'AWS', 'Git', 'GitHub', 'GitHub Actions', 'Harbor', 'Helm', 'Jenkins', 'Nexus', 'Snap Logic'].map(tool => (
                                            <span key={tool} className="badge-tag" style={{ marginRight: '4px' }}>{tool}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. EXPERIENCE TRACKS SECTION */}
                        <section id="experience-section" className="portfolio-section-block">
                            <h2 className="section-caption-header">Professional History</h2>
                            <div className="timeline-card-wrapper">

                                <div className="timeline-card">
                                    <div className="card-top-row">
                                        <span>Fidelity International, Gurgaon (On-site)</span>
                                        <span>2023 – Present</span>
                                    </div>
                                    <div className="card-sub-row">Software Engineer II</div>
                                    <ul className="custom-bullet-points">
                                        <li>Decoupled legacy monolithic Spring Boot applications by refactoring WAR deployments into distributed, cloud-native JAR microservices, centralizing business logic and version control in a unified repository architecture.</li>
                                        <li>Engineered reusable Jenkins pipelines to automate the secure generation and lifecycle rotation of migrated on-premise database schema passwords into AWS Secrets Manager utilizing cross-account IAM Role ARNs.</li>
                                        <li>Triaged high-severity production incidents for mission-critical enterprise integrations, conducting root-cause analysis (RCA) and collaborating with cross-functional stakeholders to align engineering fixes with complex domain workflows.</li>
                                    </ul>
                                </div>

                                <div className="timeline-card">
                                    <div className="card-top-row">
                                        <span>Fidelity International, Gurgaon (On-site)</span>
                                        <span>2022 – 2023</span>
                                    </div>
                                    <div className="card-sub-row">Software Engineer I</div>
                                    <ul className="custom-bullet-points">
                                        <li>Implemented structured JSON logging across Java microservices to stream application logs into ELK Dashboard for automated health tracking and production debugging.</li>
                                        <li>Designed end-to-end SnapLogic integration pipelines utilizing Mapper and Execute Snaps to orchestrate data transfers between APIs, SQL databases, and internal file-managed services.</li>
                                        <li>Developed custom Java integration connectors implementing OAuth 2.0 flows to ingest API payloads, execute schema validation, and serialize structured data into Oracle relational databases.</li>
                                    </ul>
                                </div>

                                <div className="timeline-card">
                                    <div className="card-top-row">
                                        <span>Samsung PRISM, Bangalore (Hybrid)</span>
                                        <span>2021 – 2022</span>
                                    </div>
                                    <div className="card-sub-row">Research Intern</div>
                                    <ul className="custom-bullet-points">
                                        <li>Developed optimized noise reduction filter based on image/video streaming using OpenCV, Python, and C++.</li>
                                    </ul>
                                </div>

                            </div>
                        </section>

                        {/* 4. TECHNICAL ARTIFACTS SECTION */}
                        <section id="projects-section" className="portfolio-section-block">
                            <h2 className="section-caption-header">Latest Applications</h2>
                            <div className="projects-showcase-grid">

                                <div className="project-module-box">
                                    <div>
                                        <h3 style={{ fontSize: '14px', fontWeight: 'bold' }}>Semantic Sentiment Recommendation</h3>
                                        <p style={{ fontSize: '11px', marginTop: '6px', color: '#222222' }}>
                                            Built using a Microsoft LLM model trained on Kaggle datasets, utilizing advanced search and refinement techniques to recommend anime based on user sentiment.
                                        </p>
                                    </div>
                                    <div className="project-tag-line">
                                        <span className="badge-tag">LLM</span>
                                        <span className="badge-tag">Python</span>
                                        <span className="badge-tag">Semantic Search</span>
                                    </div>
                                </div>

                                <div className="project-module-box">
                                    <div>
                                        <h3 style={{ fontSize: '14px', fontWeight: 'bold' }}>Site Connectivity Checker</h3>
                                        <p style={{ fontSize: '11px', marginTop: '6px', color: '#222222' }}>
                                            Python-based utility for logging and monitoring the liveliness and readiness of consumer-facing web platforms.
                                        </p>
                                    </div>
                                    <div className="project-tag-line">
                                        <span className="badge-tag">Python</span>
                                        <span className="badge-tag">Automation</span>
                                        <span className="badge-tag">Monitoring</span>
                                    </div>
                                </div>

                                <div className="project-module-box">
                                    <div>
                                        <h3 style={{ fontSize: '14px', fontWeight: 'bold' }}>Relax Staying Microservice</h3>
                                        <p style={{ fontSize: '11px', marginTop: '6px', color: '#222222' }}>
                                            SpringBoot microservice, Thymeleaf, and MongoDB enabling users to browse and book hotel accommodations by geographic location.
                                        </p>
                                    </div>
                                    <div className="project-tag-line">
                                        <span className="badge-tag">SpringBoot</span>
                                        <span className="badge-tag">MongoDB</span>
                                        <span className="badge-tag">Thymeleaf</span>
                                    </div>
                                </div>

                                <div className="project-module-box">
                                    <div>
                                        <h3 style={{ fontSize: '14px', fontWeight: 'bold' }}>aws-iac-functions</h3>
                                        <p style={{ fontSize: '11px', marginTop: '6px', color: '#222222' }}>
                                            Infrastructure maintenance repository showcasing practical utilization of AWS offerings including DynamoDB, S3, Lambda, VPC, and CloudWatch.
                                        </p>
                                    </div>
                                    <div className="project-tag-line">
                                        <span className="badge-tag">AWS</span>
                                        <span className="badge-tag">Infrastructure-as-Code</span>
                                        <span className="badge-tag">Serverless</span>
                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* 5. ACADEMIC HISTORIES SECTION */}
                        <section id="education-section" className="portfolio-section-block">
                            <h2 className="section-caption-header">Education</h2>
                            <div className="timeline-card-wrapper">

                                <div className="timeline-card">
                                    <div className="card-top-row">
                                        <span>IIT Ropar | Masai</span>
                                        <span>2024 – 2026</span>
                                    </div>
                                    <div className="card-sub-row">Major in AI (specialization in Deep Learning, Vector Embedding and Prompt Engineering)</div>
                                    <p style={{ fontSize: '12px', marginTop: '4px' }}><b>CGPA Score:</b> 4.7</p>
                                </div>

                                <div className="timeline-card">
                                    <div className="card-top-row">
                                        <span>ITER Siksha 'O' Anusandhan University, Bhubaneswar</span>
                                        <span>2019 – 2023</span>
                                    </div>
                                    <div className="card-sub-row">B.Tech in Computer Science</div>
                                    <p style={{ fontSize: '12px', marginTop: '4px' }}><b>CGPA Score:</b> 8.73</p>
                                </div>

                            </div>
                        </section>

                        {/* 6. COMMUNICATIONS SECTION */}
                        <section id="contact-section" className="portfolio-section-block" style={{ textAlign: 'center' }}>
                            <h2 className="section-caption-header" style={{ borderLeft: 'none', paddingLeft: 0 }}>Let's Get in Touch</h2>
                            <p className="paragraph-content" style={{ textAlign: 'center', marginBottom: '25px' }}>
                                My inbox is always open. Connect with me through any of my official engineering vector nodes:
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '10px' }}>
                                <a href="mailto:1941012662.arshdeep@gmail.com" className="status-badge" style={{ textDecoration: 'none' }}>
                                    📬 EMAIL PIPELINE
                                </a>
                                <a href="https://linkedin.com/in/dubey-arshdeep" target="_blank" rel="noreferrer" className="status-badge" style={{ textDecoration: 'none', background: '#ffffff', color: '#000000', border: '1px solid #000000' }}>
                                    🔗 LINKEDIN
                                </a>
                                <a href="https://github.com/Arshdeepdubey" target="_blank" rel="noreferrer" className="status-badge" style={{ textDecoration: 'none', background: '#ffffff', color: '#000000', border: '1px solid #000000' }}>
                                    🐙 GITHUB
                                </a>
                                <a href="https://x.com/Arshdeep_dubey" target="_blank" rel="noreferrer" className="status-badge" style={{ textDecoration: 'none', background: '#ffffff', color: '#000000', border: '1px solid #000000' }}>
                                    🐦 TWITTER / X
                                </a>
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    );
}