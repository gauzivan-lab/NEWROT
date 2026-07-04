import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Button from '../components/Button';
import Container from '../components/Container';
import Disclaimer from '../components/Disclaimer';
import content from '../content.json';

export default function Hero() {
  const parallaxOffset = useParallax(0.3);
  const { ref, isVisible } = useScrollAnimation();
  const { hero } = content;
  const titleParts = hero.title.split('5.0+');

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-ecru via-sage-light/50 to-ecru overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-olive-mist to-taupe-warm rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-tr from-taupe-warm to-olive-mist rounded-full blur-3xl opacity-40" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-ecru/90 to-transparent z-10" />

      <Container className="relative z-10 py-12 md:py-16">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-md rounded-full mb-8 fade-in-up border border-olive-mist/30 shadow-soft">
              <Sparkles className="w-4 h-4 text-olive-deep" />
              <span className="text-caption text-graphite font-medium tracking-wide">{hero.badge}</span>
            </div>

            <h1 className="text-h1-mobile md:text-h1 lg:text-[68px] lg:leading-[1.1] font-serif font-semibold mb-8 text-graphite fade-in-up tracking-tight" style={{ animationDelay: '0.1s' }}>
              {titleParts.length === 2 ? (
                <>
                  {titleParts[0]}<span className="text-gradient">5.0+</span>{titleParts[1]}
                </>
              ) : (
                hero.title
              )}
            </h1>

            <p className="text-body-l md:text-xl text-slate mb-12 leading-relaxed fade-in-up max-w-xl" style={{ animationDelay: '0.2s' }}>
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-16 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="group shadow-hover"
              >
                {hero.buttonText}
                <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </div>

            <div className="fade-in-up space-y-7" style={{ animationDelay: '0.4s' }}>
              <p className="text-body-l text-slate leading-relaxed max-w-lg">
                {hero.footerText}
              </p>
              <Disclaimer />
            </div>
          </div>

          <div className={`order-1 lg:order-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative -mx-6 md:mx-0 md:max-w-md lg:max-w-none lg:ml-auto lg:mr-0 lg:w-[120%]">
              <div className="absolute -inset-6 bg-gradient-to-br from-olive-mist/30 to-taupe-warm/30 rounded-3xl blur-3xl hidden md:block opacity-60" />
              <div className="relative aspect-[2/3] max-h-[580px] md:rounded-3xl overflow-hidden md:shadow-premium md:border-[6px] md:border-white/70">
                <img
                  src={hero.image}
                  alt="Майя Дадеева"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/15 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 border-2 border-graphite/40 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-graphite/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
