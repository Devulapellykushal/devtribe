import React from 'react';
import './Hero.css';
import { ShimmerButton } from './magicui/shimmer-button';
import DarkVeil from './DarkVeil';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      {/* DarkVeil Background */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1 
      }}>
        <DarkVeil 
          hueShift={235}
          noiseIntensity={0.05}
          scanlineIntensity={0}
          speed={0.4}
          scanlineFrequency={3}
          warpAmount={0.15}
          resolutionScale={1}
        />
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Bold. <span className="highlight">Brand</span> Brilliant.
          </h1>
          
          <h2 className="hero-subtitle">
            Turning your vision into powerful digital reality!
          </h2>
          
          <p className="hero-description">
            Scalvion transforms ideas into scalable digital products with sleek design, 
            clean code, and smart marketing.
          </p>
          
          <ShimmerButton className="shadow-2xl large">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
              Book a Discovery Call
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
