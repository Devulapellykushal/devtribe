import React from 'react';
import './Hero.css';
import { ShimmerButton } from './magicui/shimmer-button';
import LightRays from './LightRays';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      {/* LightRays Effect - Only for Hero Section */}
      <div className="hero-light-rays-container">
        <LightRays
          raysOrigin="top-center"
          raysColor="#dc2626"
          raysSpeed={1.2}
          lightSpread={0.8}
          rayLength={1.0}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.03}
          className="hero-light-rays"
        />
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Ignite <span className="highlight-gold">Bold</span>. Define <span className="highlight">Brilliant</span>.
          </h1>
          
          <h2 className="hero-subtitle">
            Transforming ambition into digital excellence.
          </h2>
          
          <p className="hero-description">
            DevTribe crafts visionary ideas into scalable products with precision design, 
            flawless code, and growth-driven strategy.
          </p>
          
          <ShimmerButton className="shadow-2xl large">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
              Let's Talk →
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
