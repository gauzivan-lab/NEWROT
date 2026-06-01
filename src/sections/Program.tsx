import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Container from '../components/Container';
import { Infinity } from 'lucide-react';

const weeks = [
  {
    number: 1,
    title: 'Переосмысление восприятия тела и возраста',
    items: [
      'Определяем вашу точку отсчёта: энергия, сон, пищеварение, вес, стресс.',
      'Формируем личные цели и внутреннюю мотивацию.',
      'Разбор установок «это возраст», «уже поздно», «ничего не изменить».',
      'Новый взгляд: старение — это программа, которую можно перенастроить.',
    ],
    feeling: 'Возраст — ресурс, а не ограничение',
    image: 'https://ucarecdn.com/3ae3cac7-b301-40c5-a7b1-540136ed753c/-/preview/571x1000/',
  },
  {
    number: 2,
    title: 'Антивозрастное питание без диет и стресса',
    items: [
      'Продукты, которые замедляют возрастные изменения и те, что их усиливают.',
      '«Тарелка молодости»: без подсчёта калорий и ограничений.',
      'Лёгкие замены, комфортный вкус и реалистичные решения для каждого дня.',
      'Персональный план питания под ваш ритм и образ жизни.',
    ],
    feeling: 'Еда даёт энергию, а не отнимает её',
    image: 'https://ucarecdn.com/4e881f0c-8d45-4f1f-ac5e-f3a25a56d994/-/preview/571x1000/',
  },
  {
    number: 3,
    title: 'Усвоение и нутриенты: как извлекать максимум пользы из питания',
    items: [
      'Оцениваем работу пищеварения и ключевые «узкие места».',
      '«Еда как лекарство»: функциональные продукты, которые могут заменить добавки и травы.',
      'Разбираем добавки: что действительно работает и когда они нужны.',
    ],
    feeling: 'Я понимаю, как усиливать пользу от питания',
    image: 'https://ucarecdn.com/eeddf4a4-81dc-451d-9614-ca78a26f2c8b/-/preview/571x1000/',
  },
  {
    number: 4,
    title: 'Движение и уход за телом',
    items: [
      'Age-фитнес в 40+: что действительно полезно для гормонов, суставов и энергии.',
      'Телесные практики 15 минут в день: энергия, лимфа, гибкость, подвижность.',
      'Домашний уход за лицом: компактные ритуалы с максимальным эффектом.',
    ],
    feeling: 'Я знаю, как сделать тело союзником и чувствовать его поддержку каждый день',
    image: 'https://ucarecdn.com/a5d787f6-4a4d-4ebb-991b-aa6000be70dc/-/preview/571x1000/',
  },
  {
    number: 5,
    title: 'Эмоции, стресс и гормоны',
    items: [
      'Как стресс обнуляет пользу даже самого правильного питания и ускоряет старение.',
      'Простые техники восстановления, которые работают в реальной жизни.',
      'Основы гормонального здоровья после 40+: что действительно важно.',
      'Сон как инструмент восстановления, молодости и энергии.',
    ],
    feeling: 'Я держу стресс под контролем и знаю, как управлять своим состоянием в любое время',
    image: 'https://ucarecdn.com/5f5cddd4-4a28-40ca-8959-e05bbd8f8cb9/-/scale_crop/300x300/',
  },
  {
    number: 6,
    title: 'Сборка своей системы',
    items: [
      'Сводим воедино питание, сон, движение и ритуалы в единую работающую систему.',
      'Персональная «Карта молодости»: ваши ориентиры и приоритеты.',
      'Как закрепить результат надолго и избежать откатов.',
    ],
    feeling: 'Моя система собрана. Я знаю, что делать, чтобы чувствовать себя хорошо каждый день в любом возрасте',
    image: 'https://ucarecdn.com/f5c2852b-c54e-4dc9-b2fa-179101a96c22/-/preview/571x1000/',
  },
];

function ProgramWeek({ week, index }: { week: typeof weeks[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isEven = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isEven ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-8 md:gap-12 items-center`}
    >
      <div
        className={`w-full md:w-5/12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'translate-x-20' : '-translate-x-20'}`
        }`}
      >
        <div className="relative aspect-[4/5] rounded-card-lg overflow-hidden shadow-soft group max-w-sm mx-auto">
          <img
            src={week.image}
            alt={`Неделя ${week.number}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      <div
        className={`w-full md:w-1/2 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-20' : 'translate-x-20'}`
        }`}
      >
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-olive-deep to-olive-deep-hover text-white rounded-full text-caption font-medium shadow-soft">
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
              {week.number}
            </span>
            Неделя {week.number}
          </span>
        </div>

        <h3 className="text-h3 font-serif font-semibold mb-6 text-graphite leading-tight">
          {week.title}
        </h3>

        <ul className="space-y-4 mb-8">
          {week.items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start gap-3 group/item">
              <span className="w-2 h-2 rounded-full bg-olive-deep mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
              <span className="text-body-m text-slate leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <div className="relative bg-gradient-to-br from-sage-light to-ecru rounded-card-lg p-6 border border-olive-mist/20 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-olive-mist rounded-full blur-2xl opacity-10" />
          <p className="text-body-m text-graphite italic relative">
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
            Программа курса
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-olive-deep to-transparent mx-auto mb-8" />

          <div className="max-w-3xl mx-auto mt-8 grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/40 backdrop-blur-sm rounded-card p-6 border border-olive-mist/20 hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-olive-deep to-olive-deep-hover flex items-center justify-center mb-4 mx-auto md:mx-0">
                <span className="text-white text-xl font-semibold">6</span>
              </div>
              <p className="text-body-m text-slate leading-relaxed text-center md:text-left">
                недель перенастройки тела и привычек
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-card p-6 border border-olive-mist/20 hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-olive-deep to-olive-deep-hover flex items-center justify-center mb-4 mx-auto md:mx-0">
                <span className="text-white text-2xl">✦</span>
              </div>
              <p className="text-body-m text-slate leading-relaxed text-center md:text-left">
                Полный набор инструментов питания, ухода и восстановления
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-card p-6 border border-olive-mist/20 hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-olive-deep to-olive-deep-hover flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Infinity className="w-6 h-6 text-white" />
              </div>
              <p className="text-body-m text-slate leading-relaxed text-center md:text-left">
                Знания и привычки, которые продолжают работать и после завершения программы
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {weeks.map((week, index) => (
            <ProgramWeek key={week.number} week={week} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
