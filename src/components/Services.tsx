import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'From Idea to Impact.',
      description: 'DevTribe is your AI consulting partner — from problem discovery to full-scale deployment. We build with OpenAI, Gemini, LLaMA, Sarvam AI, and more to meet your business goals.'
    },
    {
      title: 'Secure by Design.',
      description: 'Whether using open-source or proprietary LLMs, we embed enterprise-grade privacy, governance, and compliance — making you production-ready from day one.'
    },
    {
      title: 'Production Grade AI.',
      description: 'We go beyond prototypes — delivering full-stack AI systems like chatbots, vision AI, and recommendations that scale reliably across web, mobile, and cloud.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
