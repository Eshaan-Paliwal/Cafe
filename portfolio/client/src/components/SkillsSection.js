import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SkillsSection.css';

function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/api/profile/skills');
        setSkills(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching skills:', error);
        // Fallback data
        setSkills([
          { name: 'React JS', category: 'Frontend', proficiency: 'Advanced' },
          { name: 'JavaScript', category: 'Frontend', proficiency: 'Advanced' },
          { name: 'HTML & CSS', category: 'Frontend', proficiency: 'Expert' },
          { name: 'Express JS', category: 'Backend', proficiency: 'Intermediate' },
          { name: 'MongoDB', category: 'Database', proficiency: 'Intermediate' },
          { name: 'Python', category: 'Backend', proficiency: 'Beginner' },
          { name: 'Git & GitHub', category: 'Tools', proficiency: 'Advanced' },
          { name: 'Chakra UI', category: 'Frontend', proficiency: 'Intermediate' },
          { name: 'Tailwind CSS', category: 'Frontend', proficiency: 'Advanced' },
          { name: 'JSON Server', category: 'Tools', proficiency: 'Intermediate' },
          { name: 'Arduino', category: 'IoT', proficiency: 'Beginner' },
          { name: 'SQL', category: 'Database', proficiency: 'Beginner' },
        ]);
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  const categories = ['All', ...new Set(skills.map(s => s.category))];
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  const getProficiencyColor = (level) => {
    const colors = {
      'Beginner': '#FFB347',
      'Intermediate': '#87CEEB',
      'Advanced': '#98FB98',
      'Expert': '#DDA0DD'
    };
    return colors[level] || '#87CEEB';
  };

  if (loading) return <div>Loading skills...</div>;

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2>Technical Skills</h2>
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ borderLeftColor: getProficiencyColor(skill.proficiency) }}
            >
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span className="proficiency-badge">{skill.proficiency}</span>
              </div>
              <p className="skill-category">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
