import React, { useState } from 'react';

const BouncingText = ({ text, className }) => {
  // Convert the text to an array of letters
  const letters = text.split('');
  
  // State to track hovered letter index
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // State to track clicked letters
  const [clickedLetters, setClickedLetters] = useState({});
  
  // Function to handle letter click
  const handleLetterClick = (index) => {
    // Update clicked letters state to trigger animation
    setClickedLetters(prev => ({
      ...prev,
      [index]: true
    }));
    
    // Reset the clicked state after animation completes
    setTimeout(() => {
      setClickedLetters(prev => ({
        ...prev,
        [index]: false
      }));
    }, 1000);
  };
  
  return (
    <div className={`bouncing-text ${className || ''}`}>
      {letters.map((letter, index) => {
        // Determine if this letter should have the neighbor effect
        // (letters adjacent to the hovered letter)
        const isNeighbor = 
          hoveredIndex !== null && 
          Math.abs(index - hoveredIndex) === 1;
        
        // Determine if this letter is currently clicked
        const isClicked = clickedLetters[index];
        
        // Use non-breaking space for spaces to maintain correct spacing
        return letter === ' ' ? (
          <span key={index} className="space">&nbsp;</span>
        ) : (
          <span 
            key={index} 
            className={`bounce-letter ${isNeighbor ? 'neighbor' : ''} ${isClicked ? 'clicked' : ''}`}
            style={{ 
              animationDelay: `${index * 0.1}s`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleLetterClick(index)}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default BouncingText;
