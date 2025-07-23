import React, { useEffect, useState } from 'react';

const LoadingAnimation = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        // Increment progress 
        const newProgress = prev + (Math.random() * 5 + 2);
        // Prevent it from going over 100
        return Math.min(newProgress, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Effect to handle when progress is complete
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        // Call callback after animation has completed
        setTimeout(() => {
          if (onLoadComplete) onLoadComplete();
        }, 500);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [progress, onLoadComplete]);

  if (!isVisible) return null;

  // Create coffee cup animation elements
  const steamElements = Array.from({ length: 6 }).map((_, i) => (
    <div 
      key={i} 
      className="steam" 
      style={{ 
        animationDelay: `${i * 0.2}s`, 
        left: `${10 + i * 15}px` 
      }} 
    />
  ));

  return (
    <div className={`loading-overlay ${progress >= 100 ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="coffee-cup">
          <div className="coffee-body">
            <div className="coffee-liquid" style={{ height: `${progress}%` }}>
              <div className="coffee-bubbles">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="bubble" 
                    style={{ 
                      left: `${Math.random() * 80}%`, 
                      animationDuration: `${1 + Math.random() * 2}s`,
                      animationDelay: `${Math.random() * 2}s`
                    }} 
                  />
                ))}
              </div>
            </div>
            <div className="coffee-steam-container">
              {steamElements}
            </div>
          </div>
          <div className="coffee-handle"></div>
        </div>
        <h2 className="loading-text">Brewing your experience...</h2>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">{Math.floor(progress)}%</p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
