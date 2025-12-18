import React from 'react';
import '../styles/BentoGrid.css';

function BentoGrid() {
  const bentoItems = [
    {
      id: 1,
      title: 'Frontend Developer',
      description: 'Building responsive and interactive UIs with React',
      size: 'large',
      icon: '⚛️',
      color: 'gradient-1',
    },
    {
      id: 2,
      title: 'JavaScript',
      description: 'ES6+, async/await, functional programming',
      size: 'small',
      icon: '✨',
      color: 'gradient-2',
    },
    {
      id: 3,
      title: 'React & Next.js',
      description: 'Component architecture, hooks, SSR',
      size: 'small',
      icon: '🚀',
      color: 'gradient-3',
    },
    {
      id: 4,
      title: 'Full Stack Development',
      description: 'MongoDB, Express, Node.js, React',
      size: 'medium',
      icon: '🔧',
      color: 'gradient-4',
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Modern interfaces with Figma & CSS',
      size: 'small',
      icon: '🎨',
      color: 'gradient-5',
    },
    {
      id: 6,
      title: 'Problem Solving',
      description: 'Algorithms, data structures, optimization',
      size: 'medium',
      icon: '🧠',
      color: 'gradient-6',
    },
  ];

  return (
    <section className="bento-section">
      <div className="bento-header">
        <h2>Skills & Expertise</h2>
        <p>What I bring to the table</p>
      </div>
      <div className="bento-grid">
        {bentoItems.map((item) => (
          <div
            key={item.id}
            className={`bento-item bento-${item.size} ${item.color}`}
          >
            <div className="bento-icon">{item.icon}</div>
            <h3 className="bento-title">{item.title}</h3>
            <p className="bento-description">{item.description}</p>
            <div className="bento-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BentoGrid;
