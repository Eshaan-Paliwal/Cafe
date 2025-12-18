import React from 'react';
import ProjectCard from '../components/ProjectCard';
import BentoGrid from '../components/BentoGrid';
import ResumePreviewModal from '../components/ResumePreviewModal';
import GitHubActivity from '../components/GitHubActivity';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a full-stack developer passionate about building amazing web applications.</p>
          <div className="hero-buttons">
            <button className="cta-button">Get Started</button>
            <ResumePreviewModal />
          </div>
        </div>
      </section>

      <AboutSection />

      <BentoGrid />

      <SkillsSection />

      <ExperienceSection />

      <EducationSection />

      <GitHubActivity />

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <ProjectCard />
      </section>
    </div>
  );
}

export default Home;
