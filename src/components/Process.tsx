import React, { useEffect, useRef, useState } from 'react';
import Particles from './Particles';
import './Process.css';

const Process: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timelineProgress, setTimelineProgress] = useState(false);
  const [step1Visible, setStep1Visible] = useState(false);
  const [step2Visible, setStep2Visible] = useState(false);
  const [step3Visible, setStep3Visible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  
  const processRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
      setScrollDirection(direction);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Animate timeline progress
            setTimeout(() => setTimelineProgress(true), 200);
            
            // Animate steps with delays based on scroll direction
            if (scrollDirection === 'down') {
              // Downward scroll: animate from top to bottom
              setTimeout(() => setStep1Visible(true), 600);
              setTimeout(() => setStep2Visible(true), 1000);
              setTimeout(() => setStep3Visible(true), 1400);
            } else {
              // Upward scroll: animate from bottom to top
              setTimeout(() => setStep3Visible(true), 600);
              setTimeout(() => setStep3Visible(true), 1000);
              setTimeout(() => setStep1Visible(true), 1400);
            }
          } else {
            // Reset animations when section goes out of view
            setIsVisible(false);
            setTimelineProgress(false);
            setStep1Visible(false);
            setStep2Visible(false);
            setStep3Visible(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, [scrollDirection]);

  return (
    <section className="process" id="process" ref={processRef}>
      {/* Particles Background */}
      <div className="particles-background">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="process-particles"
        />
      </div>
      
      <div className="process-container">
        {/* Heading */}
        <div className={`process-heading ${isVisible ? 'animate' : ''}`}>
          <h2 className="process-title">
            <span className="process-title-our">Our</span>
            <span className="process-title-process">Process</span>
          </h2>
          <p className="process-subtitle">
            From idea to impact — we handle it all.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container" ref={timelineRef}>
          {/* Central Timeline Line */}
          <div className="timeline-line">
            <div className={`timeline-progress ${timelineProgress ? 'animate' : ''}`}></div>
          </div>

          {/* Step 01: Book a Free Call */}
          <div className={`timeline-step step-1 ${step1Visible ? 'animate' : ''} ${scrollDirection === 'up' && step1Visible ? 'upward' : ''}`} ref={step1Ref}>
            <div className={`step-node ${step1Visible ? 'animate' : ''}`}>
              <span className="step-number">01</span>
            </div>
            <div className={`step-card step-left ${step1Visible ? 'animate' : ''} ${scrollDirection === 'up' && step1Visible ? 'upward' : ''}`}>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">Book a Free Call</h3>
                <p className="step-description">
                  We understand your needs, goals, and timeline.
                </p>
              </div>
            </div>
          </div>

          {/* Step 02: Define Your Roadmap */}
          <div className={`timeline-step step-2 ${step2Visible ? 'animate' : ''} ${scrollDirection === 'up' && step2Visible ? 'upward' : ''}`} ref={step2Ref}>
            <div className={`step-node ${step2Visible ? 'animate' : ''}`}>
              <span className="step-number">02</span>
            </div>
            <div className={`step-card step-right ${step2Visible ? 'animate' : ''} ${scrollDirection === 'up' && step2Visible ? 'upward' : ''}`}>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">Define Your Roadmap</h3>
                <p className="step-description">
                  We send a custom project plan and quote.
                </p>
              </div>
            </div>
          </div>

          {/* Step 03: Design + Build */}
          <div className={`timeline-step step-3 ${step3Visible ? 'animate' : ''} ${scrollDirection === 'up' && step2Visible ? 'upward' : ''}`} ref={step3Ref}>
            <div className={`step-node ${step3Visible ? 'animate' : ''}`}>
              <span className="step-number">03</span>
            </div>
            <div className={`step-card step-left ${step3Visible ? 'animate' : ''} ${scrollDirection === 'up' && step3Visible ? 'upward' : ''}`}>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">Design + Build</h3>
                <p className="step-description">
                  We bring your vision to life with precision and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
