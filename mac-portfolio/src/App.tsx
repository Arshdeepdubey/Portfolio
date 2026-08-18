import { useState, useEffect } from 'react';

type OpenMenuKey = 'apple' | 'navigation' | 'view' | null;

interface JournalEntry {
    id: string;
    date: string;
    title: string;
    category: string;
    content: string;
    tags?: string[];
}

export default function App() {
    const [systemTime, setSystemTime] = useState<string>('');
    const [openMenu, setOpenMenu] = useState<OpenMenuKey>(null);

    // Game state parameters
    const [isBooted, setIsBooted] = useState<boolean>(false);
    const [isHold, setIsHold] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(300); // 5 Minutes in seconds
    const [isEating, setIsEating] = useState<boolean>(false);

    // Learning Journal state
    const [journalEntries] = useState<JournalEntry[]>([
        {
            id: 'j1',
            date: '2026-08-15',
            title: 'ELK Stack Deep Dive: Distributed Logging at Scale',
            category: 'DevOps',
            content: 'Explored implementing centralized logging across 12+ microservices using Elasticsearch, Logstash, and Kibana. Key insight: structuring JSON logs with trace IDs dramatically improves debugging latency in production incidents.',
            tags: ['Observability', 'ELK', 'Microservices']
        },
        {
            id: 'j2',
            date: '2026-08-12',
            title: 'Terraform State Management Best Practices',
            category: 'Cloud',
            content: 'Implementing remote state backends with locking mechanisms prevents race conditions in team environments. S3 + DynamoDB is production-ready but requires careful IAM role configuration for cross-account deployments.',
            tags: ['Terraform', 'IaC', 'AWS']
        },
        {
            id: 'j3',
            date: '2026-08-10',
            title: 'Zero-Trust Security Model Implementation',
            category: 'Security',
            content: 'Learned how to architect Zero-Trust security using IRSA (IAM Roles for Service Accounts) in Kubernetes, CyberArk certificate rotation, and AWS Secrets Manager lifecycle management. Never trust, always verify.',
            tags: ['Security', 'Kubernetes', 'IAM']
        },
        {
            id: 'j4',
            date: '2026-08-08',
            title: 'Building Production-Grade ETL Pipelines with SnapLogic',
            category: 'Integration',
            content: 'SnapLogic Mapper snaps provide powerful data transformation without custom code. Critical lesson: parameterize connectors for reusability—20+ pipelines now leverage 10 shared templates, reducing deployment time by 50%.',
            tags: ['ETL', 'SnapLogic', 'Data Integration']
        },
        {
            id: 'j5',
            date: '2026-08-05',
            title: 'OAuth 2.0 & Microsoft Graph API Integration Patterns',
            category: 'Integration',
            content: 'Successfully integrated Microsoft Graph API with OAuth 2.0 device flow for enterprise messaging. Key takeaway: always cache access tokens and implement exponential backoff for rate-limited endpoints.',
            tags: ['OAuth2', 'Microsoft Graph', 'Authentication']
        },
        {
            id: 'j6',
            date: '2026-08-02',
            title: 'Spring Boot Microservices: From Monolith to Distributed',
            category: 'Architecture',
            content: 'Refactored legacy monolithic WAR deployments into cloud-native JAR-based microservices. Challenges: transactional consistency, distributed tracing, and handling cascading failures. Solution: eventually-consistent event-driven architecture with circuit breakers.',
            tags: ['Spring Boot', 'Microservices', 'Architecture']
        },
        {
            id: 'j7',
            date: '2026-07-30',
            title: 'Real-Time Data Processing: Stream vs Batch Trade-offs',
            category: 'AI',
            content: 'Studying event streaming architectures for real-time analytics. Kafka for streaming, S3 for batch. Data latency vs consistency trade-offs matter when choosing between them for enterprise pipelines.',
            tags: ['Kafka', 'Streaming', 'Data Architecture']
        },
        {
            id: 'j8',
            date: '2026-07-28',
            title: 'Debugging Production Incidents with Root Cause Analysis',
            category: 'DevOps',
            content: 'Framework for effective RCA: timeline reconstruction → hypothesis testing → preventive measures. Structured logging and distributed tracing are non-negotiable for modern systems. Every incident is a learning opportunity.',
            tags: ['RCA', 'Debugging', 'Operations']
        }
    ]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

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

    // 5 Minute Count Down Game Execution Controller Loop
    useEffect(() => {
        if (!isBooted || isHold || isEating) return;

        if (timeLeft <= 0) {
            setIsEating(true);
            return;
        }

        const counterId = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(counterId);
    }, [isBooted, isHold, timeLeft, isEating]);

    // AUTOMATIC TIMEOUT BOOTBACK RESET: Kicks recruiter to welcome slide when animation finishes
    useEffect(() => {
        if (isEating) {
            const resetDelayId = setTimeout(() => {
                setIsBooted(false);   // Drops content and returns back to the original page
                setIsEating(false);   // Disables active eraser stage
                setIsHold(false);     // Clears previous pause blocks
                setTimeLeft(300);     // Fully reloads countdown clock parameters
            }, 4500);               // Match 4.5s CSS wipe duration

            return () => clearTimeout(resetDelayId);
        }
    }, [isEating]);

    // Native DOM listener bypasses click resolution if target lives inside a menu block
    useEffect(() => {
        const dismissMenu = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.closest('.menu-trigger')) {
                return;
            }
            setOpenMenu(null);
        };
        document.addEventListener('click', dismissMenu);
        return () => document.removeEventListener('click', dismissMenu);
    }, []);

    const toggleMenuState = (menuKey: OpenMenuKey, event: React.MouseEvent) => {
        event.stopPropagation();
        setOpenMenu(prev => (prev === menuKey ? null : menuKey));
    };

    const handleActionClick = (event: React.MouseEvent, action: () => void) => {
        event.stopPropagation();
        action();
        setOpenMenu(null);
    };

    // Safe launcher to unlock screens cleanly
    const runPortfolioSystem = () => {
        setIsEating(false);
        setTimeLeft(300);
        setIsBooted(true);
    };

    const navigateToSection = (elementId: string) => {
        if (!isBooted) {
            runPortfolioSystem();
            setTimeout(() => {
                document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Convert numbers to double-digit structural displays (e.g., 04:59)
    const formatTimeDisplay = (totalSeconds: number) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className="desktop-environment">

            {/* ================= MACINTOSH CONTROLLED SYSTEM NAVBAR ================= */}
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
                Subsystem: Ms. Pac-Man Core Active
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
                            <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => navigateToSection('certifications-section'))}>6. Awards & Certifications</span>
                            <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => navigateToSection('learning-journal-section'))}>7. Learning Journal</span>
                            <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => navigateToSection('contact-section'))}>8. Link Communications</span>
                        </div>
                    </div>

                    {/* View Dropdown */}
                    <div className={`menu-trigger ${openMenu === 'view' ? 'active' : ''}`} onClick={(e) => toggleMenuState('view', e)}>
                        <span>View</span>
                        <div className={`dropdown-menu-list ${openMenu === 'view' ? 'show' : ''}`}>
              <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => runPortfolioSystem())}>
                Unlock & Reveal Full Portfolio
              </span>
                            <span className="dropdown-action-item" onClick={(e) => handleActionClick(e, () => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
                            })}>
                Reset Scroll View to Top
              </span>
                        </div>
                    </div>
                </div>

                {/* Live Clock Display */}
                <div style={{ marginLeft: 'auto', fontSize: '12px', fontWeight: 'bold' }}>
                    {systemTime}
                </div>
            </nav>

            {/* ================= WORKSTATION DESKTOP MACHINE INNER BODY ================= */}
            <main className="portfolio-mainframe">
                <div className="mac-os-window-shell">

                    {/* Header Layout Bars */}
                    <div className="window-header-strip">
                        <div className="window-control-box" onClick={() => setIsBooted(false)} style={{cursor: 'pointer'}} title="Reset Workspace"></div>
                        <span className="window-title-banner">Arshdeep_Dubey_Arcade_Workstation.app</span>
                        <div className="window-control-box" style={{ marginLeft: 'auto', marginRight: '4px' }}></div>
                    </div>

                    {/* INTERACTION MATRIX MANAGER */}
                    {!isBooted ? (
                        /* INITIAL ARCADE MODE DISPLAY OVERLAY */
                        <div className="arcade-boot-overlay">
                            <div className="arcade-title-neon">MS. PAC-MAN</div>
                            <div className="arcade-subtitle">Portfolio Protection Subsystem v1.02</div>
                            <p style={{ fontSize: '12px', color: '#dddddd', maxWidth: '500px', lineHeight: '1.6', marginBottom: '24px' }}>
                                Attention Recruiter: Once initialized, you have exactly 5 minutes to read through my systems resume before Ms. Pac-Man clears the visual frame. Use the "HOLD" toggle button to stop her!
                            </p>
                            <button className="arcade-insert-coin-btn" onClick={runPortfolioSystem}>
                                🕹️ CLICK TO VIEW PORTFOLIO
                            </button>
                            <div style={{ color: '#ff007f', fontSize: '11px', fontWeight: 'bold', animation: 'blink-text 1s infinite alternate' }}>
                                READY TO INITIALIZE ENGINE RUNTIMES
                            </div>
                        </div>
                    ) : (
                        /* FULL PORTFOLIO CONTAINER LOGIC WITH RE-INJECTED ERASE STAGES */
                        <>
                            {/* Floating Game Control Dashboard Block */}
                            <div className="pacman-dashboard-widget">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '16px' }}>ᗧ</span>
                                    <span>MS. PAC-MAN STATUS: {isHold ? "⏸️ INJECTED HOLD STATE" : "🏃 CHOMPING ENGINE RUNNING"}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '13px', background: '#000000', color: '#fffb15', padding: '2px 8px' }}>
                    ERASE COUNTDOWN: {formatTimeDisplay(timeLeft)}
                  </span>
                                    <button
                                        className={`hold-toggle-button ${isHold ? 'active-hold' : ''}`}
                                        onClick={() => setIsHold(!isHold)}
                                    >
                                        {isHold ? "▶️ RESUME COUNTDOWN" : "⏸️ CLICK TO HOLD TEXT"}
                                    </button>
                                </div>
                            </div>

                            <div className="window-scrollable-body">

                                {/* ACTIVE CHOMP WIPER OVERLAY: Runs right on top of content to eat it blank */}
                                {isEating && (
                                    <div className="active-eating-stage-overlay">
                                        <div className="eating-black-blanket"></div>
                                        <div className="pacman-live-chomper">ᗧ••••</div>
                                    </div>
                                )}

                                {/* 1. HERO SECTION */}
                                <section id="home-section" className="portfolio-section-block" style={{ paddingTop: '10px' }}>
                                    <div className="hero-intro-box">
                                        <h1 className="hero-greeting">I'm Arshdeep Dubey</h1>
                                        <p className="hero-subtitle">Software Engineer II @ Fidelity International</p>
                                        <div className="status-badge">STATUS: IMMEDIATE JOINER</div>
                                    </div>
                                </section>

                                {/* 2. ABOUT SECTION */}
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
                                                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Programming & Scripting: </span>
                                                {['Python', 'Java', 'Bash/Shell', 'SQL (Oracle)', 'HTML/CSS', 'JavaScript (Node.js)'].map(lang => (
                                                    <span key={lang} className="badge-tag" style={{ marginRight: '4px' }}>{lang}</span>
                                                ))}
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Cloud Infrastructure & DevOps: </span>
                                                {['AWS (S3/IAM/EC2/EKS)', 'Terraform', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'Harbor', 'Jenkins', 'GitOps'].map(tool => (
                                                    <span key={tool} className="badge-tag" style={{ marginRight: '4px' }}>{tool}</span>
                                                ))}
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Frameworks & Integration: </span>
                                                {['SnapLogic', 'REST APIs', 'ELK Stack (Kibana)', 'MongoDB', 'Maven', 'Spring Boot', 'Git'].map(fw => (
                                                    <span key={fw} className="badge-tag" style={{ marginRight: '4px' }}>{fw}</span>
                                                ))}
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>IT Operations & Support: </span>
                                                {['Incident Management', 'Root Cause Analysis (RCA)', 'Tier-1/2 Support', 'SLA Adherence'].map(ops => (
                                                    <span key={ops} className="badge-tag" style={{ marginRight: '4px' }}>{ops}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* 3. EXPERIENCE SECTION */}
                                <section id="experience-section" className="portfolio-section-block">
                                    <h2 className="section-caption-header">Professional History</h2>
                                    <div className="timeline-card-wrapper">

                                        <div className="timeline-card">
                                            <div className="card-top-row">
                                                <span>Fidelity International, Gurugram (On-site)</span>
                                                <span>October 2025 – July 2026</span>
                                            </div>
                                            <div className="card-sub-row">Software Engineer II</div>
                                            <ul className="custom-bullet-points">
                                                <li><b>Owned</b> the cross-cutting ELK Observability Epic across <b>12 cloud microservices</b>; standardized custom JSON logging schemas and Kibana dashboards, boosting log traceability by <b>30%</b> and reducing production incident MTTR by <b>40%</b>.</li>
                                                <li><b>Engineered</b> an automated secret creation pipeline in Terraform, AWS Secrets Manager, and Jenkins while establishing GitOps workflows with Helm, ArgoCD, and Docker to decouple code/config, cutting deployment overhead by <b>40%</b>.</li>
                                                <li><b>Architected</b> enterprise ODS Data Lifecycle Pipelines using Java, SnapLogic, and Terraform to automate data archival and retrieval across AWS RDS, S3, and Glacier, optimizing cloud storage costs while enforcing strict compliance SLAs.</li>
                                            </ul>
                                        </div>

                                        <div className="timeline-card">
                                            <div className="card-top-row">
                                                <span>Fidelity International, Gurugram (On-site)</span>
                                                <span>August 2024 – October 2025</span>
                                            </div>
                                            <div className="card-sub-row">Software Engineer</div>
                                            <ul className="custom-bullet-points">
                                                <li><b>Solely engineered</b> and deployed <b>20+ production ETL pipelines</b> in SnapLogic for cloud migration, authoring <b>10+ reusable templates</b> adopted portfolio-wide that enhanced engineering team productivity by <b>50%</b>.</li>
                                                <li><b>Developed</b> high-throughput Java/Spring Boot data connectors (REST-to-S3, DB-to-S3) processing over <b>10,000 million records daily</b>, while managing production deployments and on-call rotations to consistently maintain strict SLA targets.</li>
                                                <li><b>Implemented</b> Zero-Trust cloud security modules in Terraform, automating secret lifecycle management in AWS Secrets Manager, CyberArk certificate renewals, and cross-account IRSA roles for EKS workloads.</li>
                                            </ul>
                                        </div>

                                        <div className="timeline-card">
                                            <div className="card-top-row">
                                                <span>Fidelity International, Gurugram (On-site)</span>
                                                <span>August 2023 – August 2024</span>
                                            </div>
                                            <div className="card-sub-row">Associate Software Engineer</div>
                                            <ul className="custom-bullet-points">
                                                <li><b>Developed</b> a full-stack travel booking platform from scratch using Spring Boot, Maven, Thymeleaf, and MongoDB, and contributed to a Node.js NFT minting bot for automated, decentralized voucher distribution.</li>
                                                <li><b>Integrated</b> Microsoft Graph API with OAuth 2.0 and SMTP authentication to engineer an automated organizational messaging engine, eliminating <b>2–3 days</b> of auth integration boilerplate and maintaining high platform uptime.</li>
                                            </ul>
                                        </div>

                                        <div className="timeline-card">
                                            <div className="card-top-row">
                                                <span>Samsung R&D Institute India, Bangalore</span>
                                                <span>June 2021 – January 2022</span>
                                            </div>
                                            <div className="card-sub-row">Computer Vision Research Intern</div>
                                            <ul className="custom-bullet-points">
                                                <li><b>Developed</b> real-time noise reduction pipelines for live image and video streams using Python and OpenCV, applying spatial filtering techniques to enhance frame clarity for low-latency automated detection systems.</li>
                                            </ul>
                                        </div>

                                    </div>
                                </section>

                                {/* 4. PROJECTS SECTION */}
                                <section id="projects-section" className="portfolio-section-block">
                                    <h2 className="section-caption-header">Latest Applications</h2>
                                    <div className="projects-showcase-grid">

                                        <div className="project-module-box">
                                            <div>
                                                <h3 style={{ fontSize: '14px', fontWeight: 'bold' }}>its-your-own-finance-buddy-chandler</h3>
                                                <p style={{ fontSize: '11px', marginTop: '6px', color: '#222222' }}>
                                                    Designed a modular microservices platform implementing global error handling, dynamic environment configurations, and API fault-tolerance mechanisms. Streamlined inter-service communication workflows to ensure reliable payload delivery across distributed endpoints.
                                                </p>
                                            </div>
                                            <div className="project-tag-line">
                                                <span className="badge-tag">Java</span>
                                                <span className="badge-tag">Spring Boot</span>
                                                <span className="badge-tag">Microservices</span>
                                                <a href="https://github.com/Arshdeepdubey/its-your-own-finance-buddy-chandler" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', marginLeft: '4px' }}>
                                                    <span className="badge-tag" style={{ background: '#fff', color: '#000', border: '1px solid #000', cursor: 'pointer' }}>GitHub</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="project-module-box">
                                            <div>
                                                <h3 style={{ fontSize: '14px', fontWeight: 'bold' }}>config-of-our-finance-buddy-chandler</h3>
                                                <p style={{ fontSize: '11px', marginTop: '6px', color: '#222222' }}>
                                                    Built centralized configuration and service-discovery management modules. Optimized multi-tier deployment settings and environment variable pipelines to improve system start-up efficiency.
                                                </p>
                                            </div>
                                            <div className="project-tag-line">
                                                <span className="badge-tag">Python</span>
                                                <span className="badge-tag">PyTorch</span>
                                                <span className="badge-tag">Computer Vision</span>
                                                <a href="https://github.com/Arshdeepdubey/config-of-our-finance-buddy-chandler" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', marginLeft: '4px' }}>
                                                    <span className="badge-tag" style={{ background: '#fff', color: '#000', border: '1px solid #000', cursor: 'pointer' }}>GitHub</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="project-module-box">
                                            <div>
                                                <h3 style={{ fontSize: '14px', fontWeight: 'bold' }}>MoodMatch</h3>
                                                <p style={{ fontSize: '11px', marginTop: '6px', color: '#222222' }}>
                                                    Production-ready, AI-powered anime recommendation engine combining facial emotion detection, 3-model ensemble intelligence, multi-turn conversational AI, and context-aware ranking—serving 1,000+ concurrent users with &lt;250ms response time across Docker, local, and cloud deployments.
                                                </p>
                                            </div>
                                            <div className="project-tag-line">
                                                <span className="badge-tag">Python</span>
                                                <span className="badge-tag">Docker</span>
                                                <span className="badge-tag">FAISS</span>
                                                <span className="badge-tag">LLM</span>
                                                <a href="https://github.com/Arshdeepdubey/MoodMatch" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', marginLeft: '4px' }}>
                                                    <span className="badge-tag" style={{ background: '#fff', color: '#000', border: '1px solid #000', cursor: 'pointer' }}>GitHub</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="project-module-box">
                                            <div>
                                                <h3 style={{ fontSize: '14px', fontWeight: 'bold' }}>active-vulnerability-plugin</h3>
                                                <p style={{ fontSize: '11px', marginTop: '6px', color: '#222222' }}>
                                                    Built Active Vulnerability Hunter—a real-time GitHub Copilot CLI security plugin that fetches critical vulnerabilities from GitHub's database—and established production infrastructure with automated testing, linting, and CI/CD pipelines for secure, efficient vulnerability tracking.
                                                </p>
                                            </div>
                                            <div className="project-tag-line">
                                                <span className="badge-tag">GitHub Copilot CLI</span>
                                                <span className="badge-tag">Node.js</span>
                                                <span className="badge-tag">GitHub Actions</span>
                                                <span className="badge-tag">MCP</span>
                                                <a href="https://github.com/Arshdeepdubey/active-vulnerability-plugin" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', marginLeft: '4px' }}>
                                                    <span className="badge-tag" style={{ background: '#fff', color: '#000', border: '1px solid #000', cursor: 'pointer' }}>GitHub</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="project-module-box">
                                            <div>
                                                <h3 style={{ fontSize: '14px', fontWeight: 'bold' }}>microsoft-graph-sendMail</h3>
                                                <p style={{ fontSize: '11px', marginTop: '6px', color: '#222222' }}>
                                                    Engineered a production-ready Node.js email notification service featuring Microsoft Graph API, OAuth 2.0, and automated CI/CD pipelines; created a reusable drop-in template that reduced auth integration boilerplate by 2–3 days.
                                                </p>
                                            </div>
                                            <div className="project-tag-line">
                                                <span className="badge-tag">Microsoft Graph API</span>
                                                <span className="badge-tag">JavaScript</span>
                                                <span className="badge-tag">OAuth2</span>
                                                <span className="badge-tag">CI/CD</span>
                                                <a href="https://github.com/Arshdeepdubey/microsoft-graph-sendMail" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', marginLeft: '4px' }}>
                                                    <span className="badge-tag" style={{ background: '#fff', color: '#000', border: '1px solid #000', cursor: 'pointer' }}>GitHub</span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </section>

                                {/* 5. EDUCATION SECTION */}
                                <section id="education-section" className="portfolio-section-block">
                                    <h2 className="section-caption-header">Education</h2>
                                    <div className="timeline-card-wrapper">

                                        <div className="timeline-card">
                                            <div className="card-top-row">
                                                <span>IIT Ropar | Masai</span>
                                                <span>September 2024 – February 2026</span>
                                            </div>
                                            <div className="card-sub-row">Major in Artificial Intelligence</div>
                                            <p style={{ fontSize: '12px', marginTop: '4px' }}><b>Specialization:</b> Deep Learning, Vector Embedding, Prompt Engineering</p>
                                            <p style={{ fontSize: '12px', marginTop: '4px' }}><b>CGPA Score:</b> 4.7</p>
                                        </div>

                                        <div className="timeline-card">
                                            <div className="card-top-row">
                                                <span>ITER Siksha 'O' Anusandhan University, Bhubaneswar</span>
                                                <span>August 2019 – August 2023</span>
                                            </div>
                                            <div className="card-sub-row">B. Tech in Computer Science & Engineering</div>
                                            <p style={{ fontSize: '12px', marginTop: '4px' }}><b>CGPA Score:</b> 8.73</p>
                                        </div>

                                    </div>
                                </section>

                                {/* 6. CERTIFICATIONS SECTION */}
                                <section id="certifications-section" className="portfolio-section-block">
                                    <h2 className="section-caption-header">Awards & Certifications</h2>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <div>
                                            <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>Scripting Badges:</p>
                                            <ul className="custom-bullet-points">
                                                <li>HackerRank Java (Basic)</li>
                                                <li>HackerRank Problem Solving (Basic)</li>
                                                <li>Practical GitHub Actions</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>Cloud & DevOps:</p>
                                            <ul className="custom-bullet-points">
                                                <li>HashiCorp Certified Terraform Associate</li>
                                                <li>LFS169: Intro to GitOps</li>
                                                <li>KodeKloud Kubernetes (Level 1)</li>
                                                <li>LFS158: Intro to Kubernetes</li>
                                                <li>LFS167: Intro to Jenkins</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>Security & AI:</p>
                                            <ul className="custom-bullet-points">
                                                <li>Cybersecurity Awareness Terminology</li>
                                                <li>Google AI Professional Certificate</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* 7. LEARNING JOURNAL SECTION */}
                                <section id="learning-journal-section" className="portfolio-section-block">
                                    <h2 className="section-caption-header">Learning Journal & Insights</h2>
                                    
                                    {/* Search and Filter Controls */}
                                    <div style={{ marginBottom: '20px' }}>
                                        <div style={{ marginBottom: '12px' }}>
                                            <input
                                                type="text"
                                                placeholder="Search journal entries..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                style={{
                                                    width: '100%',
                                                    padding: '8px 12px',
                                                    fontSize: '12px',
                                                    border: '1px solid #000',
                                                    fontFamily: "'Monaco', 'Courier New', monospace",
                                                    boxSizing: 'border-box'
                                                }}
                                            />
                                        </div>
                                        
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                            {['All', 'DevOps', 'Cloud', 'Security', 'Integration', 'Architecture', 'AI'].map(category => (
                                                <button
                                                    key={category}
                                                    onClick={() => setSelectedCategory(category)}
                                                    style={{
                                                        padding: '6px 12px',
                                                        fontSize: '11px',
                                                        fontWeight: selectedCategory === category ? 'bold' : 'normal',
                                                        border: selectedCategory === category ? '2px solid #000' : '1px solid #000',
                                                        background: selectedCategory === category ? '#000' : '#fff',
                                                        color: selectedCategory === category ? '#fff' : '#000',
                                                        cursor: 'pointer',
                                                        fontFamily: "'Monaco', 'Courier New', monospace",
                                                        transition: 'all 0.2s'
                                                    }}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Journal Entries Grid */}
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px', marginTop: '16px' }}>
                                        {journalEntries
                                            .filter(entry => {
                                                const matchesSearch = entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                                                      entry.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                                                      entry.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
                                                const matchesCategory = selectedCategory === 'All' || entry.category === selectedCategory;
                                                return matchesSearch && matchesCategory;
                                            })
                                            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                                            .map(entry => (
                                                <div key={entry.id} style={{
                                                    border: '1px solid #000',
                                                    padding: '12px',
                                                    background: '#fff',
                                                    fontFamily: "'Monaco', 'Courier New', monospace",
                                                    fontSize: '11px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '8px'
                                                }}>
                                                    <div>
                                                        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: 'bold', lineHeight: '1.4' }}>
                                                            {entry.title}
                                                        </h4>
                                                    </div>
                                                    
                                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                        <span style={{ fontSize: '10px', color: '#666' }}>{new Date(entry.date).toLocaleDateString()}</span>
                                                        <span className="badge-tag" style={{ marginRight: 0 }}>{entry.category}</span>
                                                    </div>
                                                    
                                                    <p style={{ margin: '8px 0 0 0', lineHeight: '1.5', color: '#222' }}>
                                                        {entry.content}
                                                    </p>
                                                    
                                                    {entry.tags && entry.tags.length > 0 && (
                                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
                                                            {entry.tags.map(tag => (
                                                                <span key={tag} style={{
                                                                    fontSize: '9px',
                                                                    padding: '2px 6px',
                                                                    border: '1px solid #ccc',
                                                                    background: '#f9f9f9'
                                                                }}>
                                                                    #{tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                    </div>
                                    
                                    {journalEntries.filter(entry => {
                                        const matchesSearch = entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                                              entry.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                                              entry.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
                                        const matchesCategory = selectedCategory === 'All' || entry.category === selectedCategory;
                                        return matchesSearch && matchesCategory;
                                    }).length === 0 && (
                                        <div style={{ textAlign: 'center', padding: '20px', fontSize: '12px', color: '#666' }}>
                                            No entries found. Try a different search or category filter.
                                        </div>
                                    )}
                                </section>

                                {/* 8. CONTACT SECTION */}
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
                        </>
                    )}

                </div>
            </main>
        </div>
    );
}