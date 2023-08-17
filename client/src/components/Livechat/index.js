import React, { useState } from 'react';
import './Livechat.css';

const Livechat = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChatbox = () => {
    setIsMinimized(!isMinimized);
  }
  return (
    <div className="livechat-container">
      <div className="livechat-bar">
        <button onClick={toggleChatbox}>O</button>
        <span>Live Chat Window</span>
      </div>
      <div className={`chatbox-container ${isMinimized ? 'minimized' : ''}`}>

      </div>
    </div>
  );
};

export default Livechat;