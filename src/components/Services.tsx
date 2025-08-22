import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Web Design',
      description: 'Beautiful, responsive websites that convert visitors into customers.',
      features: ['UI/UX Design', 'Responsive Layout', 'Brand Integration']
    },
    {
      icon: '💻',
      title: 'Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['Frontend & Backend', 'API Integration', 'Performance Optimization']
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Development', 'Cross-platform', 'App Store Optimization']
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to grow your online presence and reach.',
      features: ['SEO Optimization', 'Content Strategy', 'Social Media Management']
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive digital solutions to elevate your business
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
