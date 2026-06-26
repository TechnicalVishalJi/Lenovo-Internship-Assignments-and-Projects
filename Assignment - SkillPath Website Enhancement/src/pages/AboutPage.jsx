import React from 'react';
import { Target, Users, BookOpen } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="about-page animate-fade-in">
      <section className="about-hero section">
        <div className="container">
          <h1 className="text-center" style={{ marginBottom: '1.5rem' }}>About <span className="text-gradient">SkillPath</span></h1>
          <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
            SkillPath is a modern e-learning platform dedicated to teaching AI-driven Web and Product Development. 
            We believe in hands-on learning through capstone projects and reusable component architectures.
          </p>
        </div>
      </section>

      <section className="about-details section bg-light">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper"><Target size={32} className="feature-icon" /></div>
              <h3>Our Mission</h3>
              <p>To empower the next generation of developers with cutting-edge tools, comprehensive knowledge, and practical experience needed to thrive in the tech industry.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper"><BookOpen size={32} className="feature-icon" /></div>
              <h3>The Curriculum</h3>
              <p>We focus on React, Component Reusability, State Management, and Routing, ensuring our students are well-versed in modern frontend ecosystem requirements.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper"><Users size={32} className="feature-icon" /></div>
              <h3>Community Driven</h3>
              <p>Join a thriving community of learners and mentors. Collaborate on projects, share insights, and build your professional network as you learn.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
