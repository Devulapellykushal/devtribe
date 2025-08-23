import './App.css';
import CardNav from './components/CardNav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ReviewsMarquee from './components/magicui/ReviwewsMarquee';
import Particles from './components/Particles';
import Process from './components/Process';
import Services from './components/Services';
import { useTheme } from './contexts/ThemeContext';

// Logo import - you can replace this with your actual logo
const logo = "⚡"; // Lightning bolt icon for DevTribe

const App = () => {
  const { theme } = useTheme();

  const navItems = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div className={`App theme-${theme}`}>
      <CardNav
        logo={logo}
        logoAlt="DevTribe Logo"
        items={navItems}
        baseColor="rgba(0, 0, 0, 0.8)"
        menuColor="#ffffff"
        buttonBgColor="#dc2626"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      
      <main>
        <Hero />
        <Services />
        
        {/* Particles Background - After Hero and Services */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0, // Lower z-index to avoid conflicts
          pointerEvents: 'none',
        }}>
          <Particles
            particleCount={150}
            particleSpread={8}
            speed={0.05}
            particleColors={["#dc2626", "#991b1b", "#ffffff"]}
            moveParticlesOnHover={true}
            particleHoverFactor={2}
            alphaParticles={true}
            particleBaseSize={80}
            sizeRandomness={0.5}
            cameraDistance={15}
            disableRotation={false}
            className="app-particles"
          />
        </div>
        
        <Process />
        <Contact />
      </main>
      
      <ReviewsMarquee />
      <Footer />
    </div>
  );
};

export default App;
