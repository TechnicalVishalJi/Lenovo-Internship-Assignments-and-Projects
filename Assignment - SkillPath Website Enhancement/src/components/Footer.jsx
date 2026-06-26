import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Globe, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="navbar-brand" style={{ color: 'white', marginBottom: '1rem' }}>
              <BookOpen /> SkillPath
            </div>
            <p style={{ color: '#cbd5e1', maxWidth: '300px' }}>
              Empowering your career through AI-driven education and modern web development skills.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='white'} onMouseOut={e => e.currentTarget.style.color='#cbd5e1'}><Globe /></a>
              <a href="#" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='white'} onMouseOut={e => e.currentTarget.style.color='#cbd5e1'}><Mail /></a>
              <a href="#" style={{ color: '#cbd5e1', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='white'} onMouseOut={e => e.currentTarget.style.color='#cbd5e1'}><MessageCircle /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SkillPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
