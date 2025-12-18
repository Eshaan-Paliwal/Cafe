import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/EducationSection.css';

function EducationSection() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get('/api/profile/education');
        setEducation(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching education:', error);
        // Fallback data from resume
        setEducation([
          {
            school: 'Sage University Bhopal',
            degree: 'B.Tech',
            field: 'Full Stack Development',
            startDate: new Date('2022-09'),
            endDate: new Date('2027-06'),
            gpa: '8.0+',
            details: 'Pursuing degree in Full Stack Development'
          },
          {
            school: 'Kendriya Vidyalaya No. 2',
            degree: 'XII (CBSE)',
            field: 'Science',
            startDate: new Date('2021-06'),
            endDate: new Date('2023-03'),
            gpa: '76%',
            details: 'CPE ITARSI'
          },
          {
            school: 'Kendriya Vidyalaya No. 2',
            degree: 'X (CBSE)',
            field: 'General',
            startDate: new Date('2019-06'),
            endDate: new Date('2021-03'),
            gpa: '88%',
            details: 'CPE ITARSI'
          }
        ]);
        setLoading(false);
      }
    };
    fetchEducation();
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  if (loading) return <div>Loading education...</div>;

  return (
    <section className="education-section">
      <div className="education-container">
        <h2>Education</h2>
        
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              
              <div className="education-info">
                <h3>{edu.degree} in {edu.field}</h3>
                <p className="school">{edu.school}</p>
                <p className="duration">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </p>
                {edu.gpa && <p className="gpa">GPA/Score: {edu.gpa}</p>}
                {edu.details && <p className="details">{edu.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
