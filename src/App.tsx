import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './contexts/ThemeContext';
import ReviewsMarquee from './components/magicui/ReviwewsMarquee';
import Process from './components/Process';


function App() {
  const { theme } = useTheme();

  return (
    <div className={`App theme-${theme}`}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      
      <ReviewsMarquee />
      <Footer />
    </div>
  );
}

export default App;
