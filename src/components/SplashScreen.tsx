import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [lettersVisible, setLettersVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [logoVisible, setLogoVisible] = useState(false);

  const tagline = 'Место, где вы создаёте свою вторую — красивую и ресурсную — половину жизни.';

  useEffect(() => {
    const timer1 = setTimeout(() => setLettersVisible(true), 300);
    const timer2 = setTimeout(() => setTaglineVisible(true), 2800);
    const timer3 = setTimeout(() => setLogoVisible(true), 5500);
    const timer4 = setTimeout(onComplete, 9000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  useEffect(() => {
    if (!taglineVisible) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= tagline.length) {
        setDisplayedText(tagline.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, [taglineVisible]);

  const name = 'MAYA DADEEVA';
  const letters = name.split('');

  const getRandomTransform = (index: number) => {
    const directions = [
      { x: -100, y: -100, rotate: -180 },
      { x: 100, y: -100, rotate: 180 },
      { x: -100, y: 100, rotate: -180 },
      { x: 100, y: 100, rotate: 180 },
      { x: -150, y: 0, rotate: -360 },
      { x: 150, y: 0, rotate: 360 },
    ];
    return directions[index % directions.length];
  };

  return (
    <div className="fixed inset-0 bg-graphite z-50 flex items-center justify-center overflow-hidden">
      <button
        onClick={onComplete}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-ecru/60 hover:text-ecru transition-colors duration-300 text-sm tracking-wider font-sans"
      >
        Пропустить →
      </button>
      <div className="text-center px-4">
        <div className="mb-12 flex justify-center gap-1 md:gap-2 flex-wrap">
          {letters.map((letter, index) => {
            const transform = getRandomTransform(index);
            return (
              <span
                key={index}
                className={`inline-block text-4xl md:text-7xl font-serif font-bold text-ecru transition-all duration-1000 ease-out ${
                  lettersVisible
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 80}ms`,
                  transform: lettersVisible
                    ? 'translate(0, 0) rotate(0deg)'
                    : `translate(${transform.x}px, ${transform.y}px) rotate(${transform.rotate}deg)`,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            );
          })}
        </div>

        <div className="min-h-[60px] md:min-h-[80px]">
          {taglineVisible && (
            <p className="text-xl md:text-3xl font-sans text-ecru">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              logoVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          >
            <Leaf className="w-20 h-20 md:w-28 md:h-28 text-olive" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </div>
  );
}
