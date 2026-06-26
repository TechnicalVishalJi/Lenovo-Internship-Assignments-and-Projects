import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="container cta-container">
        <div className="cta-content">
          <h2>Ready to Take the Next Step?</h2>
          <p>Enroll today and get immediate access to our AI-driven web development courses.</p>
        </div>
        <div className="cta-action">
          <Link to="/contact" className="btn btn-primary btn-lg">Get Started Now</Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
