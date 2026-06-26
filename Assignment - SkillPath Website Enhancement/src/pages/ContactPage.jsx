import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validation: Check if all fields are filled
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill out all fields before submitting.');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 500);
  };

  return (
    <div className="contact-page animate-fade-in">
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Have questions about our programs? We're here to help.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p style={{ marginBottom: '2rem' }}>Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="info-item">
                <div className="info-icon"><Mail className="icon-primary" /></div>
                <div>
                  <h4>Email</h4>
                  <p>support@skillpath.edu</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Phone className="icon-primary" /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 1234567890</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><MapPin className="icon-primary" /></div>
                <div>
                  <h4>Location</h4>
                  <p>123 Tech Avenue,Kolkata, West Bengal</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container card">
              {success && (
                <div className="alert alert-success animate-fade-in">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {error && (
                <div className="alert alert-error animate-fade-in">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">
                  Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
