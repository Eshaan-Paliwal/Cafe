import React, { useState } from 'react';
import '../styles/CopyEmailButton.css';

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = 'eshaan@example.com'; // Replace with your actual email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      alert('Failed to copy email');
    });
  };

  return (
    <div className="copy-email-container">
      <div className="email-display">
        <span className="email-text">{email}</span>
        <button
          className={`copy-button ${copied ? 'copied' : ''}`}
          onClick={handleCopyEmail}
          title="Copy email to clipboard"
        >
          <span className="copy-icon">
            {copied ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="copy-text">Copied!</span>
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
                <span className="copy-text">Copy</span>
              </>
            )}
          </span>
        </button>
      </div>
      {copied && <div className="copy-toast">Email copied to clipboard!</div>}
    </div>
  );
}

export default CopyEmailButton;
