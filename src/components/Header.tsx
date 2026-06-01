import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './Container';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Главная', id: 'hero' },
    { label: 'Программы', id: 'program' },
    { label: 'Для кого', id: 'for-whom' },
    { label: 'Отзывы', id: 'reviews' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-xl shadow-soft border-b border-sage-light/30'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-20 md:h-24">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center hover:opacity-80 transition-smooth"
            >
              <img
                src="https://ucarecdn.com/40affe55-2180-4e84-baf0-2e1a1e1599ae/-/preview/1000x1000/"
                alt="Maya Dadeeva"
                className="h-20 md:h-28 w-auto"
              />
            </button>

            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-body-m font-medium text-slate hover:text-olive-deep transition-smooth relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-olive-deep to-taupe-warm transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              ))}
            </nav>

            <button
              onClick={() => scrollToSection('pricing')}
              className="hidden md:inline-flex px-7 py-3.5 bg-olive-deep text-white rounded-full hover:bg-olive-deep-hover transition-smooth-long hover:shadow-hover hover:-translate-y-0.5 text-body-m font-medium shadow-soft active:scale-95"
            >
              Записаться
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-graphite hover:text-olive-deep transition-smooth"
              aria-label="Меню"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fade-in">
          <div
            className="absolute inset-0 bg-graphite/60 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="absolute top-20 left-0 right-0 bg-white/98 backdrop-blur-xl shadow-premium rounded-b-card-lg mx-4 p-8 border-x border-b border-sage-light/30 animate-slide-up">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-body-l font-medium text-slate hover:text-olive-deep transition-smooth text-left py-4 px-4 rounded-lg hover:bg-sage-light/30 active:scale-98"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('pricing')}
                className="mt-6 w-full px-7 py-4 bg-olive-deep text-white rounded-full hover:bg-olive-deep-hover transition-smooth-long shadow-soft active:scale-95 text-body-m font-medium"
              >
                Записаться
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
