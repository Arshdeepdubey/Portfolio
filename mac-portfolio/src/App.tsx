import { useState } from 'react';

export default function App() {
  const [isWindowOpen, setIsWindowOpen] = useState(true);

  return (
      <div className="desktop">
        {/* 1. Global Apple Menu Bar */}
        <div className="menu-bar">
          <span className="menu-item"></span>
          <span className="menu-item"><b>File</b></span>
          <span className="menu-item">Edit</span>
          <span className="menu-item">Special</span>
        </div>

        {/* 2. Desktop Icons */}
        <div style={{ position: 'absolute', right: 20, top: 40, textAlign: 'center', cursor: 'pointer' }}
             onDoubleClick={() => setIsWindowOpen(true)}>
          <div style={{ fontSize: '32px' }}>📁</div>
          <div style={{ fontSize: '12px', color: '#000', backgroundColor: '#fff', padding: '1px 3px' }}>Projects</div>
        </div>

        {/* 3. Macintosh Style Window Component */}
        {isWindowOpen && (
            <div className="window" style={{ width: '400px', position: 'absolute', top: '100px', left: '100px' }}>
              <div className="title-bar">
                <button className="close-btn" aria-label="Close" onClick={() => setIsWindowOpen(false)}></button>
                <h1 className="title">Portfolio_OS.txt</h1>
              </div>
              <div className="window-pane">
                <p>Welcome to my Senior Portfolio.</p>
                <hr />
                <p><b>Bio:</b> Frontend Engineer specializing in high-performance web systems.</p>
                <p><b>Tech Stack:</b> React, TypeScript, Git, GitHub Actions.</p>
              </div>
            </div>
        )}
      </div>
  );
}