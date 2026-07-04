import Container from '../components/Container';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import content from '../content.json';

export default function Author() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.2);
  const { author } = content;

  return (
    <section className="py-24 md:py-32 bg-ecru">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div
              ref={imageRef}
              className={`md:col-span-2 transition-all duration-1000 ${
                imageVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="relative aspect-[3/4] rounded-card-lg overflow-hidden shadow-soft">
                <img
                  src={author.image}
                  alt="Майя Дадеева"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            <div
              ref={textRef}
              className={`md:col-span-3 transition-all duration-1000 delay-200 ${
                textVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-12'
              }`}
            >
              <h2 className="text-h2-mobile md:text-h2 font-serif font-semibold mb-4 text-graphite">
                {author.heading}
              </h2>

              <p className="text-body-l text-olive-deep mb-6 italic">
                {author.subtitle}
              </p>

              <div className="space-y-4 mb-6">
                <p className="text-body-m text-graphite leading-relaxed">
                  {author.quote}
                </p>
              </div>

              <ul className="space-y-3">
                {author.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                    <span className="text-body-m text-slate">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
