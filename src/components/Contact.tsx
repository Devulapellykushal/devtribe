import React, { useState } from 'react';
import './Contact.css';
import DarkVeil from './DarkVeil';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact" id="contact">
      {/* DarkVeil Background */}
      <div className="contact-darkveil-container">
        <DarkVeil />
      </div>
      
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Let's Build Something Amazing</h2>
          <p className="contact-subtitle">
            Ready to transform your vision into digital reality? Get in touch with us today.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>hello@devtribe.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <h3>Business Hours</h3>
                <p>Mon - Fri: 9AM - 6PM PST</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;