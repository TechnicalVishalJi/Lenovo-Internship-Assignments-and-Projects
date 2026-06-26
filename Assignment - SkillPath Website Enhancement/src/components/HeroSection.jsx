import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <h1 className="hero-title">
            Master the Future of <br/>
            <span className="text-gradient">Web Development</span>
          </h1>
          <p className="hero-subtitle">
            Join SkillPath to learn AI-driven web and product development through hands-on capstone projects and expert guidance. Start your journey today and build real-world applications.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Explore Courses <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-placeholder">
            <div className="glass-panel">
              <div className="code-line"></div>
              <div className="code-line short"></div>
              <div className="code-line long"></div>
              <div className="code-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
