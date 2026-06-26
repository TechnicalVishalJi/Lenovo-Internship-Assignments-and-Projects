import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="not-found-page container section animate-fade-in">
      <div className="not-found-content">
        <AlertTriangle size={80} className="icon-warning" />
        <h1 className="error-code">404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>
          <Home size={18} style={{ marginRight: '0.5rem' }} />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
