import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-graphite/95 backdrop-blur-sm border-t border-olive-mist/20 shadow-lg animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-body-m text-ecru leading-relaxed flex-1">
          Мы используем cookies для улучшения работы сайта. Продолжая использование, вы соглашаетесь с этим.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleAccept}
            className="px-8 py-3 bg-olive-deep text-white rounded-full font-medium hover:bg-olive-deep-hover transition-all duration-300 shadow-soft hover:shadow-glow"
          >
            ОК
          </button>
          <button
            onClick={handleAccept}
            className="p-3 text-ecru hover:text-white transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
