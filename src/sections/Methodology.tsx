import { useScrollAnimation } from '../hooks/useScrollAnimation';
import content from '../content.json';

export default function Methodology() {
  const { ref, isVisible } = useScrollAnimation();
  const { quote, image } = content.methodology;

  return (
    <section ref={ref} className="bg-graphite relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
        <div className={`w-full md:w-1/2 lg:w-2/5 flex-shrink-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <img
            src={image}
            alt="Майя Дадеева"
            className="w-full h-auto object-cover block"
          />
        </div>

        <div className={`flex-1 px-8 md:px-16 lg:px-24 py-12 md:py-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <blockquote className="relative border-l-4 border-ecru/30 pl-6 md:pl-8">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-ecru leading-relaxed italic">
              {quote}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
