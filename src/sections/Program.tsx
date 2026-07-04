import { useScrollAnimation, scrollClass } from '../hooks/useScrollAnimation';
import Container from '../components/Container';
import { Infinity } from 'lucide-react';
import content from '../content.json';

const { heading, features, weeks } = content.program;

function ProgramWeek({ week, index }: { week: typeof weeks[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`card-premium flex flex-col h-full ${scrollClass(isVisible, 'scale')}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={week.image}
          alt={`Неделя ${index + 1}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/40 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-olive-deep to-olive-deep-hover text-white rounded-full text-caption font-medium shadow-soft">
          Неделя {index + 1}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-serif font-semibold mb-3 text-graphite leading-tight">
          {week.title}
        </h3>

        <ul className="space-y-2 mb-4 flex-1">
          {week.items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2 flex-shrink-0" />
              <span className="text-sm text-slate leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <div className="relative bg-gradient-to-br from-sage-light to-ecru rounded-xl p-3 border border-olive-mist/20 overflow-hidden mt-auto">
          <div className="absolute top-0 right-0 w-24 h-24 bg-olive-mist rounded-full blur-2xl opacity-10" />
          <p className="text-sm text-graphite italic relative">
            Ощущение недели: <span className="font-semibold text-olive-deep">«{week.feeling}»</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Program() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="program" className="py-24 md:py-32 bg-ecru relative overflow-hidden grain-overlay">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-taupe-warm rounded-full blur-3xl opacity-5" />

      <Container>
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-h2-mobile md:text-h2 font-serif font-semibold mb-6 text-graphite">
            {heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-olive-deep to-transparent mx-auto mb-8" />

          <div className="max-w-3xl mx-auto mt-8 grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-card p-6 border border-olive-mist/20 hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-olive-deep to-olive-deep-hover flex items-center justify-center mb-4 mx-auto md:mx-0">
                <span className="text-white text-xl font-semibold">6</span>
              </div>
              <p className="text-body-m text-slate leading-relaxed text-center md:text-left">
                {features[0]}
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-card p-6 border border-olive-mist/20 hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-olive-deep to-olive-deep-hover flex items-center justify-center mb-4 mx-auto md:mx-0">
                <span className="text-white text-2xl">✦</span>
              </div>
              <p className="text-body-m text-slate leading-relaxed text-center md:text-left">
                {features[1]}
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-card p-6 border border-olive-mist/20 hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-olive-deep to-olive-deep-hover flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Infinity className="w-6 h-6 text-white" />
              </div>
              <p className="text-body-m text-slate leading-relaxed text-center md:text-left">
                {features[2]}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weeks.map((week, index) => (
            <ProgramWeek key={week.title} week={week} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
