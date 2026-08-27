import { useState, useRef } from 'react';
import MacWindow from './components/MacWindow';
import ResumeContent from './components/ResumeContent';
import PortfolioContent from './components/PortfolioContent';
import NewsletterContent from './components/NewsletterContent';
import HighlightsContent from './components/HighlightsContent';
import { AppleIcon, SearchIcon, FolderIcon, UserIcon, DocumentIcon, StarIcon } from './components/Icons';

type WindowKey = 'portfolio' | 'resume' | 'newsletters' | 'highlights';

export default function App() {
    const [openWindows, setOpenWindows] = useState<WindowKey[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    // Cache buster ?v=2 forces browser to reload the new audio-enabled video file
    const videoSrc = `${cleanBaseUrl}intro_video.mp4?v=2`;

    const toggleWindow = (win: WindowKey) => {
        setOpenWindows(prev => 
            prev.includes(win) ? prev.filter(w => w !== win) : [...prev, win]
        );
    };

    const toggleAudio = () => {
        const video = videoRef.current;
        if (!video) return;

        const nextState = !isMuted;
        video.muted = nextState;
        video.volume = 1.0;
        setIsMuted(nextState);

        if (!nextState) {
            video.play().catch(err => console.error("Audio playback error:", err));
        }
    };

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const query = searchQuery.toLowerCase();
            if (query.includes('resume') && !openWindows.includes('resume')) toggleWindow('resume');
            else if ((query.includes('portfolio') || query.includes('projects')) && !openWindows.includes('portfolio')) toggleWindow('portfolio');
            else if (query.includes('newsletter') && !openWindows.includes('newsletters')) toggleWindow('newsletters');
            else if (query.includes('highlight') && !openWindows.includes('highlights')) toggleWindow('highlights');
            setSearchQuery(''); 
        }
    };

    return (
        <div className="desktop-environment">
            <header className="mac-top-bar">
                <div className="topbar-left">
                    <AppleIcon />
                </div>
                
                <div className="topbar-center">
                    <div className="spotlight-search">
                        <SearchIcon />
                        <input 
                            type="text" 
                            placeholder="Spotlight Search (e.g. resume, portfolio)" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                    </div>
                </div>
                
                <div className="topbar-right"></div>
            </header>

            <main className="desktop-workspace">
                <div className="desktop-content-area">
                    
                    <div className="left-column">
                        <div className="sticky-note">
                            <div className="sticky-pin"></div>
                            <h2 style={{ textDecoration: 'underline', marginBottom: '15px', fontSize: '18px' }}>Instruction</h2>
                            
                            <div style={{ marginBottom: '12px', lineHeight: '1.4', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <div style={{ width: '18px', height: '18px', background: 'white', border: '1px solid black', borderRadius: '4px', padding: '2px', flexShrink: 0 }}>
                                    <FolderIcon />
                                </div>
                                <p style={{ fontSize: '13px' }}>Click <strong>Portfolio</strong> to check on my latest work.</p>
                            </div>

                            <div style={{ lineHeight: '1.4', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <div style={{ width: '18px', height: '18px', background: 'white', border: '1px solid black', borderRadius: '4px', padding: '2px', flexShrink: 0 }}>
                                    <UserIcon />
                                </div>
                                <p style={{ fontSize: '13px' }}>Click <strong>Resume</strong> to check my history.</p>
                            </div>
                        </div>

                        <div className="retro-video-container">
                            <div className="video-title-bar">
                                <span className="video-title-text">intro_video.mp4</span>
                                <button 
                                    className="sound-toggle-btn"
                                    onClick={toggleAudio}
                                    title="Toggle Audio"
                                >
                                    {isMuted ? '🔇 Unmute Sound' : '🔊 Sound On'}
                                </button>
                            </div>
                            <video 
                                ref={videoRef}
                                src={videoSrc}
                                autoPlay 
                                loop 
                                muted={isMuted}
                                controls
                                playsInline
                                className="desktop-video"
                            >
                                Your browser does not support the video tag.
                            </video>
                            <p style={{ fontSize: '11px', marginTop: '8px', fontStyle: 'italic', textAlign: 'center', color: '#555', lineHeight: '1.3' }}>
                                👾 <strong>Fun Fact:</strong> If I look like a 90s retro arcade NPC, don't worry—it's 100% custom pixel rendering, not a GPU driver crash!
                            </p>
                        </div>
                    </div>

                    <div className="embedded-about">
                        <h1>hello.</h1>
                        <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>I am Arshdeep Dubey.</p>
                        <p>
                            Welcome to my interactive workspace. Use the folders on the right or the Spotlight Search above to explore my technical artifacts and professional history.
                        </p>
                        
                        <div style={{ marginTop: '15px', background: 'var(--window-bg)', padding: '14px', border: '2px solid var(--border-dark)', boxShadow: '4px 4px 0px var(--shadow-dark)' }}>
                            <p style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '14px' }}>🚀 Here are some top impacts I had:</p>
                            <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.6' }}>
                                <li style={{ marginBottom: '6px' }}>
                                    Engineered 20+ reusable enterprise ETL templates, boosting engineering productivity by <strong>45%</strong>.
                                </li>
                                <li style={{ marginBottom: '6px' }}>
                                    Implemented strict GitOps workflows and decoupled microservices, cutting deployment overhead by <strong>30%</strong> and incident MTTR by <strong>40%</strong>.
                                </li>
                                <li style={{ marginBottom: '6px' }}>
                                    Earned the <strong>Fidelity On-the-Spot Award (Feb 2025)</strong> for executing complex cloud migrations and secrets/S3 CI/CD automation ahead of schedule.
                                </li>
                            </ul>
                            
                        </div>
                        
                    </div>

                </div>

                <div className="icon-grid">
                    <button className="desktop-icon-btn" onClick={() => toggleWindow('portfolio')}>
                        <div className="icon-graphic"><FolderIcon /></div>
                        <span className="icon-label">Portfolio</span>
                    </button>

                    <button className="desktop-icon-btn" onClick={() => toggleWindow('resume')}>
                        <div className="icon-graphic"><UserIcon /></div>
                        <span className="icon-label">Resume</span>
                    </button>

                    <button className="desktop-icon-btn" onClick={() => toggleWindow('newsletters')}>
                        <div className="icon-graphic"><DocumentIcon /></div>
                        <span className="icon-label">Newsletters</span>
                    </button>

                    <button className="desktop-icon-btn" onClick={() => toggleWindow('highlights')}>
                        <div className="icon-graphic"><StarIcon /></div>
                        <span className="icon-label">Highlights</span>
                    </button>
                </div>

                {openWindows.includes('portfolio') && (
                    <MacWindow title="Portfolio_Latest_Work.exe" onClose={() => toggleWindow('portfolio')} zIndex={101}>
                        <PortfolioContent />
                    </MacWindow>
                )}

                {openWindows.includes('resume') && (
                    <MacWindow title="Resume_2026.pdf" onClose={() => toggleWindow('resume')} zIndex={102}>
                        <ResumeContent />
                    </MacWindow>
                )}

                {openWindows.includes('newsletters') && (
                    <MacWindow title="Newsletters.txt" onClose={() => toggleWindow('newsletters')} zIndex={103}>
                        <NewsletterContent />
                    </MacWindow>
                )}

                {openWindows.includes('highlights') && (
                    <MacWindow title="Yearly_Highlights.log" onClose={() => toggleWindow('highlights')} zIndex={104}>
                         <HighlightsContent />
                    </MacWindow>
                )}
            </main>

            <footer className="mac-bottom-bar">
                <span className="contact-info">+91 7635055774 • Jamshedpur, Jharkhand, India</span>
                <div className="dev-links">
                    <a href="mailto:arshdeepdubey.ad@gmail.com" target="_blank" rel="noreferrer">Email</a>
                    <a href="https://github.com/Arshdeepdubey" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/dubey-arshdeep" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://leetcode.com/u/zorojuro_conqueror/" target="_blank" rel="noreferrer">LeetCode</a>
                    <a href="https://arshdeepdubey.github.io/Portfolio/" target="_blank" rel="noreferrer">Portfolio</a>
                </div>
            </footer>
        </div>
    );
}