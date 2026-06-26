import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialSection from '../components/TestimonialSection';
import CTABanner from '../components/CTABanner';
import { LayoutTemplate, Brain, Code, Rocket } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: LayoutTemplate,
      title: 'Reusable Components',
      description: 'Learn how to build scalable applications using modular, reusable React components.'
    },
    {
      icon: Brain,
      title: 'AI-Driven Learning',
      description: 'Experience an adaptive curriculum that personalizes your journey through modern web dev.'
    },
    {
      icon: Code,
      title: 'Capstone Projects',
      description: 'Build portfolio-ready applications from scratch, demonstrating your real-world skills.'
    },
    {
      icon: Rocket,
      title: 'Career Ready',
      description: 'Acquire the necessary tools and knowledge to launch your career in tech.'
    }
  ];

  return (
    <div className="landing-page">
      <HeroSection />
      
      <section className="features section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose SkillPath?</h2>
            <p>Our platform is designed to give you the competitive edge in web development.</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />
      <CTABanner />
    </div>
  );
};

export default LandingPage;
