import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a full-stack developer passionate about building amazing web applications.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <ProjectCard />
      </section>
    </div>
  );
}

export default Home;
