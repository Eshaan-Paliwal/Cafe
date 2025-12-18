import React, { useEffect, useState } from 'react';
import '../styles/GitHubActivity.css';

function GitHubActivity() {
  const [activityData, setActivityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalCommits: 0,
    longestStreak: 0,
    currentStreak: 0,
    contributionDays: 0,
  });

  const username = 'Eshaan-Paliwal'; // Replace with your GitHub username

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        setLoading(true);
        
        // Fetch user info for basic stats
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();

        // Fetch recent events to calculate activity
        const eventsResponse = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);
        if (!eventsResponse.ok) throw new Error('Failed to fetch events');
        const events = await eventsResponse.json();

        // Process events to calculate stats
        const eventsByDate = {};
        let totalCommits = 0;
        
        events.forEach((event) => {
          if (event.type === 'PushEvent') {
            const date = new Date(event.created_at).toISOString().split('T')[0];
            if (!eventsByDate[date]) {
              eventsByDate[date] = 0;
            }
            eventsByDate[date] += event.payload.commits?.length || 0;
            totalCommits += event.payload.commits?.length || 0;
          }
        });

        // Calculate streaks
        const sortedDates = Object.keys(eventsByDate).sort().reverse();
        let currentStreak = 0;
        let longestStreak = 0;
        let tempStreak = 0;
        const today = new Date();
        
        for (let i = 0; i < 365; i++) {
          const checkDate = new Date(today);
          checkDate.setDate(checkDate.getDate() - i);
          const dateStr = checkDate.toISOString().split('T')[0];
          
          if (eventsByDate[dateStr]) {
            tempStreak++;
            if (i === 0) currentStreak = tempStreak; // Only count if recent
          } else {
            if (tempStreak > longestStreak) {
              longestStreak = tempStreak;
            }
            if (i > 7) tempStreak = 0; // Reset if gap is more than a week
          }
        }

        setStats({
          totalCommits,
          longestStreak: Math.max(longestStreak, tempStreak),
          currentStreak: currentStreak > 1 ? currentStreak : 0,
          contributionDays: Object.keys(eventsByDate).length,
          publicRepos: userData.public_repos,
          followers: userData.followers,
        });

        // Generate heatmap data for last 52 weeks
        const heatmapData = generateHeatmapData(eventsByDate);
        setActivityData(heatmapData);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub activity:', err);
        setError('Failed to load GitHub activity. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, []);

  const generateHeatmapData = (eventsByDate) => {
    const weeks = [];
    const today = new Date();
    
    // Get the start of the week (Monday)
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - today.getDay() + 1 - 52 * 7);

    for (let week = 0; week < 53; week++) {
      const weekData = [];
      for (let day = 0; day < 7; day++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + week * 7 + day);
        const dateStr = date.toISOString().split('T')[0];
        const count = eventsByDate[dateStr] || 0;
        
        weekData.push({
          date: dateStr,
          count: count,
          level: count === 0 ? 0 : count < 2 ? 1 : count < 4 ? 2 : count < 6 ? 3 : 4,
        });
      }
      weeks.push(weekData);
    }
    
    return weeks;
  };

  const getActivityLevel = (count) => {
    if (count === 0) return 'none';
    if (count < 2) return 'low';
    if (count < 4) return 'medium';
    if (count < 6) return 'high';
    return 'very-high';
  };

  return (
    <div className="github-activity-container">
      <div className="activity-header">
        <h2>GitHub Activity</h2>
        <p className="activity-subtitle">Contribution graph from the past 52 weeks</p>
      </div>

      {loading && (
        <div className="activity-loading">
          <div className="spinner"></div>
          <p>Loading GitHub activity...</p>
        </div>
      )}

      {error && (
        <div className="activity-error">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && activityData && (
        <>
          {/* Stats Cards */}
          <div className="activity-stats">
            <div className="stat-card">
              <div className="stat-icon">🔥</div>
              <div className="stat-content">
                <div className="stat-label">Current Streak</div>
                <div className="stat-value">{stats.currentStreak} days</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-content">
                <div className="stat-label">Longest Streak</div>
                <div className="stat-value">{stats.longestStreak} days</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💾</div>
              <div className="stat-content">
                <div className="stat-label">Total Commits</div>
                <div className="stat-value">{stats.totalCommits}</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <div className="stat-label">Contribution Days</div>
                <div className="stat-value">{stats.contributionDays}</div>
              </div>
            </div>
          </div>

          {/* Heatmap */}
          <div className="heatmap-wrapper">
            <div className="heatmap-container">
              <div className="month-labels">
                <span></span>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>

              <div className="heatmap">
                <div className="day-labels">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                <div className="weeks-container">
                  {activityData.map((week, weekIndex) => (
                    <div key={weekIndex} className="week">
                      {week.map((day, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`day ${getActivityLevel(day.count)}`}
                          title={`${day.date}: ${day.count} contributions`}
                        >
                          <span className="tooltip">{day.date}: {day.count} contributions</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="legend">
              <span>Less</span>
              <div className="day level-none"></div>
              <div className="day level-low"></div>
              <div className="day level-medium"></div>
              <div className="day level-high"></div>
              <div className="day level-very-high"></div>
              <span>More</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="activity-footer">
            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Visit GitHub Profile
            </a>
            <p className="activity-note">Data updated from GitHub API. Shows public repository activity only.</p>
          </div>
        </>
      )}
    </div>
  );
}

export default GitHubActivity;
