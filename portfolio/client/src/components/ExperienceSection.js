import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ExperienceSection.css';

function ExperienceSection() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get('/api/profile/experience');
        setExperience(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching experience:', error);
        // Fallback data from resume
        setExperience([
          {
            title: 'MP Police Leave Management System',
            company: 'Sistec Innovation Hackathon',
            description: 'Worked on a comprehensive leave management system for MP Police department in a team environment',
            startDate: new Date('2024-04-09'),
            endDate: new Date('2024-04-10'),
            current: false,
            technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB']
          },
          {
            title: 'Café & Movie Website Frontend',
            company: 'Skills Varzs 1.0 - Prestige College',
            description: 'Built frontend for café website in first round and movie website in second round of the hackathon',
            startDate: new Date('2025-05-17'),
            endDate: new Date('2025-05-18'),
            current: false,
            technologies: ['React JS']
          },
          {
            title: 'Sign Recognition System',
            company: 'Coditive 3.0 - Bansal Institute',
            description: 'Developed a sign recognition system with team using machine learning and web technologies',
            startDate: new Date('2025-04-29'),
            endDate: new Date('2025-04-30'),
            current: false,
            technologies: ['Python', 'HTML']
          },
          {
            title: 'Smart Parking Management System',
            company: 'Skitech Innothon - SKITM Indore',
            description: 'IoT-based smart parking management system for efficient parking space allocation',
            startDate: new Date('2025-05-09'),
            endDate: new Date('2025-05-11'),
            current: false,
            technologies: ['React JS', 'JSON Server', 'Arduino']
          }
        ]);
        setLoading(false);
      }
    };
    fetchExperience();
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  if (loading) return <div>Loading experience...</div>;

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2>Experience & Hackathons</h2>
        
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="timeline-marker"></div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="date-range">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </span>
                </div>
                
                <p className="description">{exp.description}</p>
                
                <div className="technologies">
                  {exp.technologies && exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
