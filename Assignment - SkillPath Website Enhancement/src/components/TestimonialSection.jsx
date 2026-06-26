import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Frontend Developer',
      content: 'SkillPath completely transformed my understanding of modern web development. The capstone projects gave me the confidence to build real-world applications.'
    },
    {
      id: 2,
      name: 'Sarah Lee',
      role: 'UX Designer',
      content: 'The AI-driven approach to learning is phenomenal. I loved how the curriculum adapted to my pace, making complex concepts easy to grasp.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Full Stack Engineer',
      content: 'The React Router and reusable components modules were exactly what I needed to land my first tech job. Highly recommended!'
    }
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Students Say</h2>
          <p>Join thousands of successful developers who started their journey with us.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
