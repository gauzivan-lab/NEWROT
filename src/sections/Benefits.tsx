import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Container from '../components/Container';

const benefits = [
  {
    title: 'Энергия и ясность',
    subtitle: 'Каждое утро без усталости, лёгкое пробуждение и ровное настроение',
  },
  {
    title: 'Минус отёки и 2–5 кг',
    subtitle: 'Если есть лишний вес — он уходит мягко и без стресса',
  },
  {
    title: 'Осознанная система питания',
    subtitle: 'Вы точно знаете, что и зачем едите — без запретов и крайностей',
  },
  {
    title: 'Новый ритм жизни',
    subtitle: 'Здоровые привычки становятся естественной частью дня',
  },
  {
    title: 'Спокойствие и уверенность',
    subtitle: 'Гармония с телом, эмоциями и возрастом',
  },
  {
    title: 'Вторая молодость',
    subtitle: 'Чувство обновления, легкости и уверенности в отражении',
  },
];

export default function Benefits() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-ecru via-ivory to-ecru/50 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-taupe-warm/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-sage-light/10 rounded-full blur-3xl" />

      <Container>
        <div
          ref={ref}
          className={`text-center mb-12 md:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-h2-mobile md:text-h2 lg:text-5xl font-serif font-semibold mb-4 text-graphite tracking-tight">
            Что изменится после программы
          </h2>
          <p className="text-body md:text-lg text-slate max-w-3xl mx-auto mt-6 leading-relaxed tracking-wide">
            Шесть состояний, которые вы почувствуете после программы «Живи на 5.0+. Питание, привычки, мышление для второй молодости»
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group h-full bg-white/60 backdrop-blur-sm rounded-3xl p-10 md:p-12 hover:shadow-xl hover:bg-white/80 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden border border-gold-light/30">
                <div className="absolute inset-0 bg-gradient-to-br from-olive-mist/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-graphite mb-3 leading-tight tracking-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-body text-slate leading-relaxed tracking-wide">
                    {benefit.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
