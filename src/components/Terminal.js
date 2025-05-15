// src/components/Terminal.js
import React, { useState, useRef, useEffect } from 'react';

const commands = {
  help: `
Available commands:
- help
- about
- education
- experience
- skills
- projects
- contact
- clear
  `,
  about: "Hi, I'm Arshdeep Dubey, a Programmer at Fidelity International with a passion for AI and software development.",
  education: "B.Tech from ITER SOA University\nMinor in AI by IIT Ropar",
  experience: "Programmer at Fidelity International",
  skills: "Languages: Java, Python, JavaScript\nFrameworks: React, Node.js\nTools: Git, Docker",
  projects: "1. AI Chatbot\n2. Portfolio Terminal\n3. Web Scraper",
  contact: "Email: arshdeep.dubey@example.com\nLinkedIn: linkedin.com/in/arshdeep-dubey-55766a1b0",
};

function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [history]);

  const handleCommand = async (cmd) => {
    const normalized = cmd.trim().toLowerCase();
  
    if (normalized === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }
  
    if (commands[normalized]) {
      setHistory([...history, { command: cmd, output: commands[normalized] }]);
    } else if (normalized.startsWith('send-message')) {
      const msg = cmd.replace('send-message', '').trim();
      try {
        const res = await fetch('http://localhost:5000/api/message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: 'visitor', message: msg }),
        });
        const data = await res.json();
        setHistory([...history, { command: cmd, output: data.status }]);
      } catch (err) {
        setHistory([...history, { command: cmd, output: 'Failed to send message.' }]);
      }
    } else {
      // Fallback to backend
      try {
        const res = await fetch(`http://localhost:5000/api/command/${normalized}`);
        const data = await res.json();
        setHistory([...history, { command: cmd, output: data.response }]);
      } catch (err) {
        setHistory([...history, { command: cmd, output: 'Error contacting backend.' }]);
      }
    }
  
    setInput('');
  };    

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="terminal" onClick={() => inputRef.current.focus()}>
      {history.map((item, index) => (
        <div key={index}>
          <div className="prompt">$ {item.command}</div>
          <pre className="output">{item.output}</pre>
        </div>
      ))}
      <div className="input-line">
        <span className="prompt">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input"
          autoFocus
        />
      </div>
    </div>
  );
}

export default Terminal;
