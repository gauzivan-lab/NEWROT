import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Methodology() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-graphite relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
        <div className={`w-full md:w-1/2 lg:w-2/5 flex-shrink-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <img
            src="/images/methodology.jpg"
            alt="Майя Дадеева"
            className="w-full h-auto object-cover block"
          />
        </div>

        <div className={`flex-1 px-8 md:px-16 lg:px-24 py-12 md:py-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <blockquote className="relative border-l-4 border-ecru/30 pl-6 md:pl-8">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-ecru leading-relaxed italic">
              Живу так, как учу. В свои 58 лет я чувствую себя лучше, чем в 48. Это мой главный аргумент и источник вдохновения для учениц.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
