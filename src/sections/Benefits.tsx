import { useScrollAnimation, scrollClass } from '../hooks/useScrollAnimation';
import Container from '../components/Container';

const benefits = [
  {
    number: '01',
    title: 'Энергия и ясность',
    subtitle: 'Каждое утро без усталости, лёгкое пробуждение и ровное настроение весь день',
    icon: '✦',
  },
  {
    number: '02',
    title: 'Минус отёки и 2–5 кг',
    subtitle: 'Если есть лишний вес — он уходит мягко и без стресса, без диет и запретов',
    icon: '✦',
  },
  {
    number: '03',
    title: 'Осознанная система питания',
    subtitle: 'Вы точно знаете, что и зачем едите — без крайностей и чувства вины',
    icon: '✦',
  },
  {
    number: '04',
    title: 'Новый ритм жизни',
    subtitle: 'Здоровые привычки становятся естественной частью дня — без усилий',
    icon: '✦',
  },
  {
    number: '05',
    title: 'Спокойствие и уверенность',
    subtitle: 'Гармония с телом, эмоциями и возрастом. Вы принимаете себя такой, какая вы есть',
    icon: '✦',
  },
  {
    number: '06',
    title: 'Вторая молодость',
    subtitle: 'Чувство обновления, лёгкости и уверенности — внутри и в отражении',
    icon: '✦',
  },
];

export default function Benefits() {
  const heading = useScrollAnimation(0.1);
  const grid    = useScrollAnimation(0.05);

  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-ecru via-ivory to-ecru/60 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-taupe-warm/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-sage-light/8 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        {/* Header */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 md:mb-20 ${scrollClass(heading.isVisible, 'up')}`}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-olive-deep/50 mb-4 font-medium">
            Результаты
          </p>
          <h2 className="text-h2-mobile md:text-h2 lg:text-5xl font-serif font-semibold mb-5 text-graphite tracking-tight">
            Что изменится после программы
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-olive-deep/30 to-transparent mx-auto mb-6" />
          <p className="text-body md:text-lg text-slate max-w-2xl mx-auto leading-relaxed">
            Шесть состояний, которые вы почувствуете уже в процессе курса
          </p>
        </div>

        {/* Grid */}
        <div
          ref={grid.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`card-premium group h-full ${scrollClass(grid.isVisible, 'up')}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="p-8 md:p-10 flex flex-col h-full">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="font-serif font-semibold text-4xl leading-none select-none"
                    style={{ color: 'rgba(92,107,71,0.12)' }}
                  >
                    {benefit.number}
                  </span>
                  <span className="text-olive-deep/40 text-lg group-hover:text-olive-deep/70 transition-colors duration-300">
                    {benefit.icon}
                  </span>
                </div>

                {/* Accent line */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-olive-deep/50 to-olive-mist/30
                                mb-5 group-hover:w-14 transition-all duration-500 rounded-full" />

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-graphite mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-body text-slate leading-relaxed flex-1">
                  {benefit.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
