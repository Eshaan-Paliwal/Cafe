import React, { useState, useEffect } from 'react';

const SparklyText = ({ text, className }) => {
  const [sparkles, setSparkles] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  // Create random sparkle positions when hovered
  useEffect(() => {
    if (!isHovered) {
      setSparkles([]);
      return;
    }

    // Generate random sparkles
    const newSparkles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: Math.random() * 1 + 0.5,
      rotation: Math.random() * 360,
    }));

    setSparkles(newSparkles);

    // Clean up sparkles on unmount
    return () => {
      setSparkles([]);
    };
  }, [isHovered]);

  return (
    <div 
      className={`sparkly-text-container ${className || ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sparkles overlay */}
      <div className="sparkles-container">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
      </div>
      
      {/* Text with 3D effect */}
      <div className="cafe-name-3d">
        <span className="cafe-name-shadow">{text}</span>
        <span className="cafe-name-main">{text}</span>
        <span className="cafe-name-highlight">{text}</span>
      </div>
    </div>
  );
};

// Sparkle SVG component
const Sparkle = ({ size, left, top, delay, duration, rotation }) => {
  return (
    <svg
      className="sparkle"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        transform: `rotate(${rotation}deg)`,
      }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SparklyText;