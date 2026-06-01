import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Container from '../components/Container';

const items = [
  {
    text: 'Упадок сил: хочется вернуть энергию',
  },
  {
    text: 'Вес/отёки держатся, диеты не работают',
  },
  {
    text: 'Симптомы менопаузы мешают жить активно',
  },
  {
    text: 'Страх «стать невидимой»',
  },
  {
    text: 'Страх «не успеть» прожить ярко и счастливо вторую половину жизни',
  },
  {
    text: 'Нужна ясность и система: питание, сон, режим, мышление',
  },
  {
    text: 'Мозг устаёт быстрее, внимание рассеивается',
  },
];

export default function ForWhom() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="for-whom" ref={ref} className="py-24 md:py-32 bg-graphite relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://ucarecdn.com/653bd7b2-ad1f-4d48-8469-3cfed613b53a/-/preview/1200x750/)' }}
      />
      <div className="absolute inset-0 bg-graphite/85 backdrop-blur-sm" />

      <Container className="relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-h2-mobile md:text-h2 font-serif font-semibold mb-6 text-ecru">
            Для кого программа
          </h2>
          <p className="text-body-l text-ecru/70 max-w-2xl mx-auto">
           Дело не только в возрасте. Главное в привычках, которые формируют вашу энергию и качество жизни.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group h-full bg-ecru/95 backdrop-blur-sm rounded-2xl p-6 hover:bg-ecru transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-ecru/20 hover:border-olive-mist/30">
                <div className="flex items-start gap-3">
                  <svg className="flex-shrink-0 w-5 h-5 text-graphite mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[15px] leading-relaxed text-graphite/90 font-light">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
