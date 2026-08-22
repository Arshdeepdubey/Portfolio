import { useState } from 'react';
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

    const toggleWindow = (win: WindowKey) => {
        setOpenWindows(prev => 
            prev.includes(win) ? prev.filter(w => w !== win) : [...prev, win]
        );
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
                            placeholder="Spotlight Search" 
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
                    <div className="sticky-note">
                        <div className="sticky-pin"></div>
                        <h2 style={{ textDecoration: 'underline', marginBottom: '20px', fontSize: '20px' }}>Instruction</h2>
                        
                        <div style={{ marginBottom: '15px', lineHeight: '1.5', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <div style={{ width: '20px', height: '20px', background: 'white', border: '1px solid black', borderRadius: '4px', padding: '2px', flexShrink: 0 }}>
                                <FolderIcon />
                            </div>
                            <p style={{ fontSize: '14px' }}>Click <strong>Portfolio</strong> to check on my latest work.</p>
                        </div>

                        <div style={{ lineHeight: '1.5', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <div style={{ width: '20px', height: '20px', background: 'white', border: '1px solid black', borderRadius: '4px', padding: '2px', flexShrink: 0 }}>
                                <UserIcon />
                            </div>
                            <p style={{ fontSize: '14px' }}>Click <strong>Resume</strong> to check my history.</p>
                        </div>
                    </div>

                    <div className="embedded-about">
                        <h1>hello.</h1>
                        <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>I am Arshdeep Dubey.</p>
                        <p>
                            Systems Developer, Ex-Software Engineer II, and AI enthusiast. I specialize in building resilient microservices and automating cloud infrastructure deployment. 
                        </p>
                        <p style={{ marginTop: '15px', background: 'var(--window-bg)', padding: '12px', border: '2px solid var(--border-dark)', boxShadow: '4px 4px 0px var(--shadow-dark)' }}>
                            🚀 <strong>Impact Highlight:</strong> During my tenure at Fidelity, I received an <strong>On-the-Spot award (Feb 2025)</strong> for outstanding business KPI deliveries ahead of schedule. I successfully built 20+ reusable ETL pipeline templates enterprise-wide and solely managed complex cloud migrations, architecting robust CI/CD pipelines for secrets automation and secure S3 bucket archival.
                        </p>
                        <p style={{ color: '#666', borderTop: '2px dashed #ccc', paddingTop: '15px', marginTop: '15px' }}>
                            Welcome to my interactive workspace. Use the folders on the right or the Spotlight Search above to explore my technical artifacts and professional history.
                        </p>
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

                {/* Centralized Windows */}
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
        </div>
    );
}