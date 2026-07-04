import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Container from '../components/Container';
import content from '../content.json';

const reviewImages = content.reviews.images;

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const { ref, isVisible } = useScrollAnimation();

  const next = () => {
    setCurrentIndex((prev) => (prev >= reviewImages.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? reviewImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoScrolling]);

  const handleManualNavigation = (action: () => void) => {
    setIsAutoScrolling(false);
    action();
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-sage-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-olive-mist rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-taupe-warm rounded-full blur-3xl opacity-10" />

      <Container className="relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-h2-mobile md:text-h2 font-serif font-semibold mb-6 text-graphite">
            {content.reviews.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-olive-deep to-transparent mx-auto mb-4" />
          <p className="text-body-l text-slate max-w-2xl mx-auto">
          </p>
        </div>

        <div className="hidden md:block">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{
                transform: `translateX(-${(currentIndex % reviewImages.length) * (100 / 3 + 2)}%)`,
              }}
            >
              {[...reviewImages, ...reviewImages, ...reviewImages].map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[calc(33.333%-16px)]"
                >
                  <div className="bg-white rounded-card-lg overflow-hidden shadow-soft hover:shadow-hover transition-shadow duration-300">
                    <img
                      src={image}
                      alt={`Отзыв ${(index % reviewImages.length) + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => handleManualNavigation(prev)}
              className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center hover:shadow-hover hover:scale-110 transition-all border border-olive-mist/20"
              aria-label="Предыдущий"
            >
              <ChevronLeft className="w-5 h-5 text-graphite" />
            </button>

            <div className="flex gap-2">
              {reviewImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoScrolling(false);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAutoScrolling(true), 10000);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex % reviewImages.length
                      ? 'bg-olive-deep w-8'
                      : 'bg-border w-2 hover:bg-olive-mist'
                  }`}
                  aria-label={`Слайд ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleManualNavigation(next)}
              className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center hover:shadow-hover hover:scale-110 transition-all border border-olive-mist/20"
              aria-label="Следующий"
            >
              <ChevronRight className="w-5 h-5 text-graphite" />
            </button>
          </div>
        </div>

        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviewImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-4"
                >
                  <div className="bg-white rounded-card-lg overflow-hidden shadow-soft">
                    <img
                      src={image}
                      alt={`Отзыв ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => handleManualNavigation(prev)}
              className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:shadow-hover border border-olive-mist/20"
              aria-label="Предыдущий"
            >
              <ChevronLeft className="w-4 h-4 text-graphite" />
            </button>

            <div className="flex gap-1.5">
              {reviewImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoScrolling(false);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAutoScrolling(true), 10000);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-olive-deep w-6'
                      : 'bg-border w-1.5'
                  }`}
                  aria-label={`Слайд ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleManualNavigation(next)}
              className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:shadow-hover border border-olive-mist/20"
              aria-label="Следующий"
            >
              <ChevronRight className="w-4 h-4 text-graphite" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
