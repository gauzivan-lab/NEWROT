import Button from '../components/Button';
import Container from '../components/Container';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FinalCTA() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.2);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-12 md:py-16 bg-sage-light relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://ucarecdn.com/653bd7b2-ad1f-4d48-8469-3cfed613b53a/-/preview/1200x750/"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/70 via-graphite/60 to-graphite/40" />
      </div>

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={textRef}
            className={`text-left transition-all duration-1000 ${
              textVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="text-h2-mobile md:text-h2 font-serif font-semibold mb-8 text-ecru leading-tight">
              <span className="relative inline-block">
                Управлять
                <span
                  className={`absolute bottom-1 left-0 h-0.5 bg-olive-deep transition-all duration-700 delay-500 ${
                    textVisible ? 'w-full' : 'w-0'
                  }`}
                />
              </span>{' '}
              возрастом легче, чем кажется
            </h2>

            <p className="text-body-xl text-ecru/90 mb-12 leading-relaxed">
              Через 6 недель у вас будет ясная система питания и привычек, лёгкость в теле и энергия для жизни. Это инвестиция в десятки лет активной, красивой и счастливой жизни.
            </p>

            <Button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-olive-deep hover:bg-olive-deep/90 text-lg px-10 py-4"
            >
              Присоединиться к программе
            </Button>
          </div>

          <div
            ref={imageRef}
            className={`hidden md:flex justify-end items-end transition-all duration-1000 delay-200 ${
              imageVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <img
              src="https://ucarecdn.com/1486dda0-a411-441f-b7cf-715ab16aa4d4/-/preview/571x1000/"
              alt="Майя"
              className="w-full max-w-md h-auto object-contain drop-shadow-2xl translate-y-32 scale-95"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
