import { Check, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Container from '../components/Container';

const comparisonData = [
  {
    maya: 'Персонально даже в группе',
    typical: 'Одинаковый подход ко всем',
  },
  {
    maya: 'Комплексный подход: питание, сон, движение, гормоны, мышление',
    typical: 'Фокус только на питании',
  },
  {
    maya: 'Постепенные изменения без жёстких ограничений',
    typical: 'Диеты, запреты и контроль',
  },
  {
    maya: 'Устойчивые привычки на долгосрок',
    typical: 'Временный эффект и быстрый откат',
  },
  {
    maya: 'Доказательность + внедрение привычек + индивидуальная настройка',
    typical: 'Игнорирование стресса, гормонов и особенностей тела',
  },
];

export default function WhyItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-olive-deep via-[#7A7F6A] to-olive-deep">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.05),transparent_50%)]" />

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sage-light/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-olive-mist/5 rounded-full blur-3xl" />

      <Container>
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-h2-mobile md:text-h2 font-serif font-semibold text-ecru mb-6 leading-tight">
            Почему мой подход работает
          </h2>
        </div>

        <div
          className={`max-w-6xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-ecru/15 backdrop-blur-md bg-gradient-to-br from-white/8 to-white/3">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 relative">
              <div className="p-8 md:p-10 bg-gradient-to-br from-white/10 to-white/5 border-b md:border-b-0 md:border-r border-ecru/15">
                <h3 className="text-h3 font-serif font-semibold text-ecru/95 leading-tight">
                  Подход Майи
                </h3>
              </div>
              <div className="p-8 md:p-10 bg-gradient-to-br from-black/5 to-transparent">
                <h3 className="text-h3 font-serif font-semibold text-ecru/70 leading-tight">
                  Типовые курсы
                </h3>
              </div>
            </div>

            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 border-t border-ecru/10 transition-all duration-500 hover:bg-white/5 group ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-ecru/10 bg-gradient-to-br from-white/5 to-transparent group-hover:from-white/8 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 flex items-center justify-center mt-0.5 shadow-lg ring-1 ring-emerald-400/20">
                      <Check className="w-4 h-4 text-emerald-200" strokeWidth={3} />
                    </div>
                    <p className="text-[15px] md:text-[17px] leading-relaxed text-ecru/90 font-light tracking-wide">
                      {row.maya}
                    </p>
                  </div>
                </div>
                <div className="p-6 md:p-10 bg-gradient-to-br from-black/3 to-transparent group-hover:from-black/5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-rose-400/20 to-rose-600/20 flex items-center justify-center mt-0.5 shadow-lg ring-1 ring-rose-400/15">
                      <X className="w-4 h-4 text-rose-300/80" strokeWidth={3} />
                    </div>
                    <p className="text-[15px] md:text-[17px] leading-relaxed text-ecru/65 font-light tracking-wide">
                      {row.typical}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
