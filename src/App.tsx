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
      {/* Global Particles Background - Last Layer */}
      <div className="app-particles-background">
        <Particles
          speed={0.5}
          particleCount={100}
          particleBaseSize={2}
          particleColors={["#dc2626", "#991b1b", "#7f1d1d"]}
          className="app-particles"
        />
      </div>

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
        
        <Process />
        {/* <OrbitingCirclesDemo /> */}

        <Contact />
      </main>
      
      <ReviewsMarquee />
      <Footer />
    </div>
  );
};

export default App;
