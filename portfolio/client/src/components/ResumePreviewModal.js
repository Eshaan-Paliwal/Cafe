import React, { useState } from 'react';
import '../styles/ResumePreviewModal.css';

function ResumePreviewModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

  // Update with your actual resume PDF URL
  const resumeUrl = '/resume.pdf';

  const handleZoomIn = () => {
    if (scale < 2) {
      setScale(scale + 0.2);
    }
  };

  const handleZoomOut = () => {
    if (scale > 0.8) {
      setScale(scale - 0.2);
    }
  };

  const handleResetZoom = () => {
    setScale(1);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button className="resume-preview-button" onClick={() => setIsOpen(true)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="12" y1="12" x2="18" y2="12"></line>
          <line x1="12" y1="16" x2="18" y2="16"></line>
          <line x1="12" y1="20" x2="16" y2="20"></line>
        </svg>
        <span>View Resume</span>
      </button>

      {isOpen && (
        <div className="resume-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="resume-modal-header">
              <h2>Resume Preview</h2>
              <button
                className="close-button"
                onClick={() => setIsOpen(false)}
                title="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Toolbar */}
            <div className="resume-modal-toolbar">
              <div className="toolbar-left">
                <button
                  className="zoom-button"
                  onClick={handleZoomOut}
                  disabled={scale <= 0.8}
                  title="Zoom out"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </button>
                <span className="zoom-level">{Math.round(scale * 100)}%</span>
                <button
                  className="zoom-button"
                  onClick={handleZoomIn}
                  disabled={scale >= 2}
                  title="Zoom in"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                  </svg>
                </button>
                <button
                  className="reset-button"
                  onClick={handleResetZoom}
                  title="Reset zoom"
                >
                  Reset
                </button>
              </div>
              <button
                className="download-button"
                onClick={handleDownload}
                title="Download resume"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download</span>
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="resume-modal-viewer">
              <div className="pdf-container" style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
                <iframe
                  src={`${resumeUrl}#toolbar=0`}
                  className="pdf-iframe"
                  title="Resume Preview"
                ></iframe>
              </div>
            </div>

            {/* Footer */}
            <div className="resume-modal-footer">
              <p>Scroll to view more • Use zoom controls to adjust size • Download for offline viewing</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ResumePreviewModal;
