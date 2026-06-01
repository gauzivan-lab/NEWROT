import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '../components/Container';

const faqs = [
  {
    question: 'Есть ли противопоказания?',
    answer: 'Программа не подойдёт при острых воспалительных процессах ЖКТ и диагностированных расстройствах пищевого поведения. При желчнокаменной болезни, удалённом желчном, аутоиммунном тиреоидите — возможна мягкая адаптация; программа поддерживает организм.',
  },
  {
    question: 'Это программа для похудения?',
    answer: 'Нет. Здесь нет диет и подсчёта калорий. Уходит лишнее: отёки, токсины и 2–5 кг при их наличии. Если худеть не нужно — вес стабилизируется, сохраняется энергия и лёгкость.',
  },
  {
    question: 'Смогу ли я совмещать программу с работой?',
    answer: 'Да. Видео 15–30 мин, простые практики и быстрые рецепты. Всё встроено в обычный ритм, без стресса.',
  },
  {
    question: 'Нужно ли сдавать анализы?',
    answer: 'Нет. По желанию — для более точной персонализации и сравнения «до/после».',
  },
  {
    question: 'Что за стиль питания?',
    answer: 'Три недели без сахара, кофеина, глютена и лактозы. Вкусная растительная база + немного животного белка. Это мягкая «перепрошивка», а не жёсткие запреты.',
  },
  {
    question: 'А если не хватит силы воли?',
    answer: 'Внедряем шаг за шагом, мягко и естественно. Есть поддержка группы и обратная связь.',
  },
  {
    question: 'Что если пропущу встречу или задание?',
    answer: 'Будут записи. Можно идти в удобном темпе и возвращаться после пауз.',
  },
  {
    question: 'Что останется после программы?',
    answer: 'После программы у вас остаётся не просто набор материалов, а полностью собранная система, которая работает без меня: ваша персональная «Карта молодости», питание под ваш образ жизни, 100+ рецептов, чек-листы, рабочие техники восстановления и движения. Но главное, умение поддерживать себя каждый день так, чтобы энергия, лёгкость и качество жизни устойчиво улучшались в долгосроке, а не только на время курса.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-ecru">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-h2-mobile md:text-h2 font-serif font-semibold mb-6 text-graphite">
            Частые вопросы
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-card-lg shadow-soft overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-sage-light/30 transition-smooth"
              >
                <span className="text-body-l font-medium text-graphite">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-light flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-olive-deep" />
                  ) : (
                    <Plus className="w-5 h-5 text-olive-deep" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 border-t border-border pt-4">
                  <p className="text-body-m text-slate leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
