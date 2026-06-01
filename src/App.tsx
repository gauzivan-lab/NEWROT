import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './sections/Hero';
import ForWhom from './sections/ForWhom';
import Benefits from './sections/Benefits';
import WhyItWorks from './sections/WhyItWorks';
import Program from './sections/Program';
import Pricing from './sections/Pricing';
import Methodology from './sections/Methodology';
import Author from './sections/Author';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';
import SplashScreen from './components/SplashScreen';
import CookieBanner from './components/CookieBanner';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashComplete, setSplashComplete] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);

      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSplashComplete = () => {
    setSplashComplete(true);
    setTimeout(() => setShowSplash(false), 500);
  };

  return (
    <>
      {showSplash && (
        <div
          className={`transition-opacity duration-500 ${
            splashComplete ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <SplashScreen onComplete={handleSplashComplete} />
        </div>
      )}

      <div className="min-h-screen bg-ecru overflow-x-hidden w-full">
        <div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-olive-deep via-olive-deep-hover to-olive-deep z-[60] origin-left transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
        <Header />
        <Hero />
        <ForWhom />
        <Benefits />
        <WhyItWorks />
        <Program />
        <Pricing />
        <Author />
        <Methodology />
        <Reviews />
        <FAQ />
        <FinalCTA />
        <Footer />

        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 w-14 h-14 rounded-full bg-olive-deep text-white shadow-[0_8px_24px_-6px_rgba(107,112,92,0.5)] flex items-center justify-center transition-all duration-500 z-50 hover:scale-110 hover:shadow-[0_12px_32px_-8px_rgba(107,112,92,0.6)] active:scale-95 ${
            showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}
          aria-label="Наверх"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <CookieBanner />
      </div>
    </>
  );
}

export default App;
