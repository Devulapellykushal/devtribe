import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'From Idea to Impact.',
      description: 'DevTribe is your all-in-one freelance partner — from concept to deployment. We build complete solutions including mobile apps, websites, AI applications, and AI startups. Full-stack development with frontend, backend, and database integration.'
    },
    {
      title: 'Secure by Design.',
      description: 'Enterprise-grade development with AI integrations, chatbots, RAG systems, computer vision, and LLM implementations. We embed privacy, governance, and compliance — making you production-ready from day one.'
    },
    {
      title: 'Production Grade AI.',
      description: 'We go beyond prototypes — delivering full-stack AI systems, agentic workflows, and intelligent applications that scale reliably. Plus, we handle your professional presence with LinkedIn optimization and resume development.'
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
