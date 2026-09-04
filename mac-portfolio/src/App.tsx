import { useState, useRef } from 'react';
import MacWindow from './components/MacWindow';
import ResumeContent from './components/ResumeContent';
import PortfolioContent from './components/PortfolioContent';
import NewsletterContent from './components/NewsletterContent';
import HighlightsContent from './components/HighlightsContent';
import { AppleIcon, SearchIcon, FolderIcon, UserIcon, DocumentIcon, StarIcon } from './components/Icons';

type WindowKey = 'portfolio' | 'resume' | 'newsletters' | 'highlights';

interface FolderEntry {
    key: WindowKey;
    label: string;
    icon: React.ReactNode;
}

export default function App() {
    const [openWindows, setOpenWindows] = useState<WindowKey[]>([]);
    const [minimizedWindows, setMinimizedWindows] = useState<WindowKey[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchError, setSearchError] = useState<string | null>(null);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const errorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // FIX: Ensure the video path works correctly on GitHub Pages
    const baseUrl = import.meta.env.BASE_URL;
    // If base is '/Portfolio/', this becomes '/Portfolio/intro_video.mp4?v=6'
    const videoSrc = `${baseUrl}intro_video.mp4?v=6`; 

    const folders: FolderEntry[] = [
        { key: 'portfolio', label: 'Portfolio', icon: <FolderIcon /> },
        { key: 'resume', label: 'Resume', icon: <UserIcon /> },
        { key: 'newsletters', label: 'Newsletters', icon: <DocumentIcon /> },
        { key: 'highlights', label: 'Highlights', icon: <StarIcon /> },
    ];

    // While browsing (empty query) show every folder; while typing, filter live
    // using a case-insensitive partial regex so the user can narrow the list.
    const visibleFolders = searchQuery.trim()
        ? folders.filter((f) => {
              try {
                  return new RegExp(searchQuery.trim(), 'i').test(f.label);
              } catch {
                  // Invalid regex input (e.g. dangling bracket) - fall back to plain substring match
                  return f.label.toLowerCase().includes(searchQuery.trim().toLowerCase());
              }
          })
        : folders;

    const showSearchError = () => {
        setSearchError('Folder does not exist');
        if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
        errorTimeoutRef.current = setTimeout(() => setSearchError(null), 2000);
    };

    const openFolder = (key: WindowKey) => {
        if (!openWindows.includes(key)) toggleWindow(key);
        setMinimizedWindows(prev => prev.filter(windowKey => windowKey !== key));
        setSearchQuery('');
        setIsSearchOpen(false);
    };

    const closeWindow = (key: WindowKey) => {
        setOpenWindows(prev => prev.filter(windowKey => windowKey !== key));
        setMinimizedWindows(prev => prev.filter(windowKey => windowKey !== key));
    };

    const minimizeWindow = (key: WindowKey) => {
        setMinimizedWindows(prev => prev.includes(key) ? prev : [...prev, key]);
    };

    const restoreWindow = (key: WindowKey) => {
        setMinimizedWindows(prev => prev.filter(windowKey => windowKey !== key));
    };

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
        if (e.key !== 'Enter') return;

        const query = searchQuery.trim();
        if (!query) return;

        // Exact folder-name match (case-insensitive). "projects" still maps
        // to the Portfolio folder as a convenience alias.
        const exactMatch = folders.find((f) => new RegExp(`^${f.label}$`, 'i').test(query));
        const aliasMatch = /^projects$/i.test(query) ? folders.find((f) => f.key === 'portfolio') : undefined;
        const match = exactMatch ?? aliasMatch;

        if (match) {
            openFolder(match.key);
        } else {
            showSearchError();
        }
    };

    return (
        <div className="desktop-environment">
            <header className="mac-top-bar">
                <div className="topbar-left">
                    <AppleIcon />
                </div>
                
                <div className="topbar-center">
                    <div className="spotlight-search-wrapper">
                        <div className="spotlight-search">
                            <SearchIcon />
                            <input
                                type="text"
                                placeholder="Spotlight Search (e.g. resume, portfolio)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearch}
                                onFocus={() => setIsSearchOpen(true)}
                                onBlur={() => setTimeout(() => setIsSearchOpen(false), 150)}
                            />
                        </div>

                        {isSearchOpen && (
                            <ul className="spotlight-dropdown" role="listbox">
                                {visibleFolders.length > 0 ? (
                                    visibleFolders.map((f) => (
                                        <li key={f.key}>
                                            <button
                                                type="button"
                                                className="spotlight-dropdown-item"
                                                onMouseDown={(e) => e.preventDefault()} // keep focus so onBlur doesn't fire first
                                                onClick={() => openFolder(f.key)}
                                            >
                                                <span className="spotlight-dropdown-icon">{f.icon}</span>
                                                {f.label}
                                            </button>
                                        </li>
                                    ))
                                ) : (
                                    <li className="spotlight-dropdown-empty">No matching folders</li>
                                )}
                            </ul>
                        )}

                        {searchError && <div className="spotlight-error-toast">{searchError}</div>}
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
                            Welcome to my interactive space. Use the folders on the right or the Spotlight Search above to explore my technical artifacts and professional history.
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
                    <button className="desktop-icon-btn" onClick={() => openWindows.includes('portfolio') && minimizedWindows.includes('portfolio') ? restoreWindow('portfolio') : toggleWindow('portfolio')}>
                        <div className="icon-graphic"><FolderIcon /></div>
                        <span className="icon-label">Portfolio</span>
                    </button>

                    <button className="desktop-icon-btn" onClick={() => openWindows.includes('resume') && minimizedWindows.includes('resume') ? restoreWindow('resume') : toggleWindow('resume')}>
                        <div className="icon-graphic"><UserIcon /></div>
                        <span className="icon-label">Resume</span>
                    </button>

                    <button className="desktop-icon-btn" onClick={() => openWindows.includes('newsletters') && minimizedWindows.includes('newsletters') ? restoreWindow('newsletters') : toggleWindow('newsletters')}>
                        <div className="icon-graphic"><DocumentIcon /></div>
                        <span className="icon-label">Newsletters</span>
                    </button>

                    <button className="desktop-icon-btn" onClick={() => openWindows.includes('highlights') && minimizedWindows.includes('highlights') ? restoreWindow('highlights') : toggleWindow('highlights')}>
                        <div className="icon-graphic"><StarIcon /></div>
                        <span className="icon-label">Highlights</span>
                    </button>
                </div>

                {openWindows.includes('portfolio') && !minimizedWindows.includes('portfolio') && (
                    <MacWindow title="Portfolio_Latest_Work.exe" onClose={() => closeWindow('portfolio')} onMinimize={() => minimizeWindow('portfolio')} zIndex={101}>
                        <PortfolioContent />
                    </MacWindow>
                )}

                {openWindows.includes('resume') && !minimizedWindows.includes('resume') && (
                    <MacWindow title="Resume_2026.pdf" onClose={() => closeWindow('resume')} onMinimize={() => minimizeWindow('resume')} zIndex={102}>
                        <ResumeContent />
                    </MacWindow>
                )}

                {openWindows.includes('newsletters') && !minimizedWindows.includes('newsletters') && (
                    <MacWindow title="Newsletters.txt" onClose={() => closeWindow('newsletters')} onMinimize={() => minimizeWindow('newsletters')} zIndex={103}>
                        <NewsletterContent />
                    </MacWindow>
                )}

                {openWindows.includes('highlights') && !minimizedWindows.includes('highlights') && (
                    <MacWindow title="Yearly_Highlights.log" onClose={() => closeWindow('highlights')} onMinimize={() => minimizeWindow('highlights')} zIndex={104}>
                         <HighlightsContent />
                    </MacWindow>
                )}

                {minimizedWindows.length > 0 && (
                    <div className="window-dock" aria-label="Minimized windows">
                        {minimizedWindows.map(key => {
                            const folder = folders.find(entry => entry.key === key);
                            if (!folder) return null;

                            return (
                                <button
                                    key={key}
                                    type="button"
                                    className="window-dock-item"
                                    onClick={() => restoreWindow(key)}
                                    title={`Restore ${folder.label}`}
                                >
                                    <span className="window-dock-icon">{folder.icon}</span>
                                    <span>{folder.label}</span>
                                </button>
                            );
                        })}
                    </div>
                )}
            </main>

            <footer className="mac-bottom-bar">
                <span className="contact-info">+91 7635055774  • arshdeepdubey.ad@gmail.com • Jamshedpur, IN</span>
                <div className="dev-links">
                    <a href="https://github.com/Arshdeepdubey" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/dubey-arshdeep" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://leetcode.com/u/zorojuro_conqueror/" target="_blank" rel="noreferrer">LeetCode</a>
                </div>
            </footer>
        </div>
    );
}
