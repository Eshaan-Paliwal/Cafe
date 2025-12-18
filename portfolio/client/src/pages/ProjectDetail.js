import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setAllProjects(response.data);
        if (id) {
          const selectedProject = response.data[parseInt(id)];
          setProject(selectedProject);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, [id]);

  if (loading) return <div className="project-detail loading">Loading...</div>;
  if (!project) return <div className="project-detail">Project not found</div>;

  const currentIndex = parseInt(id);
  const nextProject = currentIndex < allProjects.length - 1 ? currentIndex + 1 : 0;
  const prevProject = currentIndex > 0 ? currentIndex - 1 : allProjects.length - 1;

  return (
    <div className="project-detail">
      <div className="project-hero">
        <div className="project-hero-content">
          {project.imageUrl && (
            <div className="project-hero-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
          )}
          <div className="project-hero-text">
            <h1>{project.title}</h1>
            <p className="project-subtitle">Featured Project</p>
          </div>
        </div>
      </div>

      <div className="project-container">
        <section className="project-overview">
          <div className="overview-content">
            <div className="overview-section">
              <h2>Overview</h2>
              <p>{project.description}</p>
            </div>

            {project.technologies && project.technologies.length > 0 && (
              <div className="overview-section">
                <h3>Technologies Used</h3>
                <div className="tech-grid">
                  {project.technologies.map((tech, idx) => (
                    <div key={idx} className="tech-item">
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="project-sidebar">
            <div className="sidebar-card">
              <h3>Project Links</h3>
              <div className="link-group">
                {project.projectUrl && (
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Visit Project
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source
                  </a>
                )}
              </div>
            </div>

            {project.featured && (
              <div className="sidebar-card featured-badge">
                <span className="badge-icon">⭐</span>
                <span>Featured Project</span>
              </div>
            )}
          </aside>
        </section>

        <section className="project-navigation">
          <Link to={`/projects/${prevProject}`} className="nav-prev">
            <span>← Previous</span>
            <span className="project-name">{allProjects[prevProject]?.title}</span>
          </Link>
          <Link to="/projects" className="nav-back">Back to Projects</Link>
          <Link to={`/projects/${nextProject}`} className="nav-next">
            <span>Next →</span>
            <span className="project-name">{allProjects[nextProject]?.title}</span>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default ProjectDetail;
