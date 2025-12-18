import React, { useState, useEffect } from 'react';
import '../styles/GitHubProjects.css';

function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          'https://api.github.com/users/Eshaan-Paliwal/repos',
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await response.json();

        // Filter: only repositories with description and not forks
        const filteredRepos = data
          .filter((repo) => repo.description && !repo.fork)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

        setRepos(filteredRepos);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching repos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  // Language color mapping
  const languageColors = {
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    React: '#61dafb',
    'C++': '#00599c',
    Java: '#b07219',
    TypeScript: '#2b7489',
    HTML: '#e34c26',
    CSS: '#563d7c',
    PHP: '#777bb4',
    Go: '#00add8',
    Rust: '#ce422b',
    Ruby: '#cc342d',
    default: '#858585',
  };

  const getLanguageColor = (language) => {
    return languageColors[language] || languageColors.default;
  };

  // Generate placeholder image URL using GitHub avatar or a color-based placeholder
  const getProjectImage = (repoName, language) => {
    const colors = ['667eea', '764ba2', 'f093fb', '4facfe', 'fa709a', 'fee140'];
    const colorIndex = repoName.charCodeAt(0) % colors.length;
    const bgColor = colors[colorIndex];
    
    // Use placeholder image with repo name
    return `https://via.placeholder.com/400x300/${bgColor}/FFFFFF?text=${encodeURIComponent(
      repoName
    )}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="github-projects-container">
        <div className="loading-spinner-wrapper">
          <div className="loading-spinner"></div>
          <p className="loading-text">Fetching your GitHub projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="github-projects-container">
        <div className="error-message-github">
          <h3>Unable to Load Projects</h3>
          <p>{error}</p>
          <p>Please try again later or visit your GitHub profile directly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="github-projects-container">
      <div className="github-projects-header">
        <h2>GitHub Projects</h2>
        <p>My latest open-source work and experiments</p>
      </div>

      {repos.length === 0 ? (
        <div className="no-projects-message">
          <p>No public repositories found with descriptions.</p>
        </div>
      ) : (
        <div className="projects-grid-github">
          {repos.map((repo) => (
            <div key={repo.id} className="project-card-github">
              <div className="project-image-wrapper">
                <img
                  src={getProjectImage(repo.name, repo.language)}
                  alt={repo.name}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23667eea' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3E${repo.name}%3C/text%3E%3C/svg%3E`;
                  }}
                />
                <div className="project-overlay">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-button"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{repo.name}</h3>
                <p className="project-description">{repo.description}</p>

                <div className="project-meta">
                  <div className="stars-forks">
                    {repo.stargazers_count > 0 && (
                      <span className="stat">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.147.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.714 1.952a.75.75 0 01-1.088-.79l.72-4.192L.818 6.374a.75.75 0 01.416-1.28l4.146-.611L7.327.668A.75.75 0 018 .25z"></path>
                        </svg>
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="stat">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm6-2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm6-2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm1.5 3a.75.75 0 100-1.5.75.75 0 000 1.5zM5 12a.75.75 0 100-1.5.75.75 0 000 1.5zm6 0a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                        </svg>
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                  <span className="update-date">Updated {formatDate(repo.pushed_at)}</span>
                </div>

                {repo.language && (
                  <div className="languages">
                    <span
                      className="language-tag"
                      style={{ borderLeftColor: getLanguageColor(repo.language) }}
                    >
                      {repo.language}
                    </span>
                  </div>
                )}

                <div className="project-footer">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GitHubProjects;
