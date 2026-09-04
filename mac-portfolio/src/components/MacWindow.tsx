import React from 'react';

interface MacWindowProps {
  title: string;
  onClose: () => void;
  onMinimize: () => void;
  children: React.ReactNode;
  zIndex?: number;
}

export default function MacWindow({ title, onClose, onMinimize, children, zIndex = 100 }: MacWindowProps) {
  return (
    <div 
      className="os-window" 
      style={{ 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        zIndex,
        height: '550px'
      }}
    >
      <div style={{ background: 'white', borderBottom: '2px solid #2a2a2a', padding: '8px', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
          {/* Close Button (Red) */}
          <button 
            onClick={onClose} 
            style={{ width: '14px', height: '14px', border: '2px solid black', background: '#ff5f56', cursor: 'pointer', borderRadius: '50%' }}
            title="Close"
          ></button>
          {/* Minimize Button (Yellow) */}
          <button 
            onClick={onMinimize}
            style={{ width: '14px', height: '14px', border: '2px solid black', background: '#ffbd2e', cursor: 'pointer', borderRadius: '50%' }}
            title="Minimize"
          ></button>
        </div>
        
        <span style={{ fontWeight: 'bold', fontSize: '14px', flex: 2, textAlign: 'center' }}>{title}</span>
        
        <div style={{ flex: 1 }}></div>
      </div>
      
      <div style={{ padding: '20px', overflowY: 'auto', flex: 1, backgroundColor: '#faf9f6' }}>
        {children}
      </div>
    </div>
  );
}