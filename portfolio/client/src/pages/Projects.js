import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GitHubProjects from '../components/GitHubProjects';
import '../styles/Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedTag, setSelectedTag] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
      setFilteredProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
    if (tag === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => 
        p.technologies && p.technologies.includes(tag)
      ));
    }
  };

  // Extract unique technologies
  const allTags = projects.reduce((tags, project) => {
    if (project.technologies) {
      project.technologies.forEach(tech => {
        if (!tags.includes(tech)) tags.push(tech);
      });
    }
    return tags;
  }, []);

  return (
    <div className="projects-page">
      <section className="projects-header">
        <h1>My Projects</h1>
        <p>Showcasing my work and contributions</p>
      </section>

      <section className="projects-section">
        <div className="projects-container">
          {/* Filter Tags */}
          <div className="filter-tags">
            <button
              className={`filter-btn ${selectedTag === 'All' ? 'active' : ''}`}
              onClick={() => handleTagFilter('All')}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`filter-btn ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => handleTagFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {loading ? (
              <p>Loading projects...</p>
            ) : filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div key={index} className="project-item">
                  <div className="project-image">
                    {project.imageUrl && <img src={project.imageUrl} alt={project.title} />}
                    {!project.imageUrl && <div className="project-placeholder"></div>}
                  </div>
                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <p className="description">{project.description}</p>
                    {project.technologies && (
                      <div className="tech-list">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tech">{tech}</span>
                        ))}
                      </div>
                    )}
                    <div className="project-links">
                      {project.projectUrl && (
                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn-link">
                          View Project
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-link github">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-projects">No projects found</p>
            )}
          </div>
        </div>

        {/* GitHub Activity */}
        <GitHubProjects />
      </section>
    </div>
  );
}

export default Projects;
