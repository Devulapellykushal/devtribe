import React, { useState } from 'react';
import './Header.css';
import ShinyText from './ShinyText';
import { ShimmerButton } from './magicui/shimmer-button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">⚡</div>
          <div className="logo-text">
            <ShinyText 
              text="Dev" 
              speed={4} 
              className="logo-text-dev navbar-brand" 
            />
            <ShinyText 
              text="Tribe" 
              speed={4} 
              className="logo-text-tribe navbar-brand" 
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <ShinyText 
                text="Pricing" 
                speed={3} 
                className="nav-link navbar-link" 
              />
            </li>
            <li>
              <ShinyText 
                text="Services" 
                speed={3} 
                className="nav-link navbar-link" 
              />
            </li>
            <li>
              <ShinyText 
                text="Process" 
                speed={3} 
                className="nav-link navbar-link" 
              />
            </li>
            <li>
              <ShinyText 
                text="Testimonials" 
                speed={3} 
                className="nav-link navbar-link" 
              />
            </li>
          </ul>
        </nav>

        {/* Desktop Book Call Button */}
        <div className="header-cta desktop-only">
          <ShimmerButton className="small shadow-2xl">
            <span className="button-content">
              Book Call
            </span>
          </ShimmerButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
