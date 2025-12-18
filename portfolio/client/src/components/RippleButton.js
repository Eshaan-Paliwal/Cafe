import React from 'react';
import '../styles/RippleButton.css';

function RippleButton({ children, onClick, className, ...props }) {
  const handleClick = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);

    if (onClick) onClick(e);
  };

  return (
    <button
      className={`ripple-button ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span className="ripple-content">{children}</span>
    </button>
  );
}

export default RippleButton;
