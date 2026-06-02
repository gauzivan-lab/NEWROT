import { useScrollAnimation, scrollClass } from '../hooks/useScrollAnimation';
import Container from '../components/Container';

const items = [
  {
    icon: '⚡',
    title: 'Упадок сил',
    text: 'Хочется вернуть утреннюю энергию и перестать чувствовать себя уставшей к обеду',
  },
  {
    icon: '⚖️',
    title: 'Вес и отёки',
    text: 'Лишние килограммы держатся, диеты не работают, тело перестало слушаться',
  },
  {
    icon: '🌿',
    title: 'Менопауза',
    text: 'Симптомы мешают жить активно — нужно понять как поддержать тело в этот период',
  },
  {
    icon: '✨',
    title: 'Страх «стать невидимой»',
    text: 'Ощущение, что лучшие годы позади и общество перестаёт тебя замечать',
  },
  {
    icon: '⏳',
    title: 'Страх «не успеть»',
    text: 'Тревога не прожить ярко и счастливо вторую половину жизни так, как хочется',
  },
  {
    icon: '🧠',
    title: 'Туман в голове',
    text: 'Мозг устаёт быстрее, внимание рассеивается, трудно сосредоточиться и запоминать',
  },
  {
    icon: '🗂',
    title: 'Нет системы',
    text: 'Нужна ясность и работающая структура: питание, сон, режим, мышление — всё вместе',
  },
];

export default function ForWhom() {
  const title = useScrollAnimation(0.1);
  const grid  = useScrollAnimation(0.05);

  return (
    <section
      id="for-whom"
      className="py-24 md:py-36 relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://ucarecdn.com/53c672f7-0b36-434e-a20f-b24ab514ff0d/-/preview/1000x666/)' }}
      />
      {/* Лёгкий overlay для читаемости текста */}
      <div className="absolute inset-0 bg-ecru/30" />

      <Container className="relative z-10">

        {/* Header */}
        <div
          ref={title.ref}
          className={`text-center mb-14 md:mb-18 ${scrollClass(title.isVisible, 'up')}`}
        >
          <h2 className="text-h2-mobile md:text-h2 font-serif font-semibold text-graphite mb-5 leading-tight">
            Для кого эта программа
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-olive-deep/40 to-transparent mx-auto mb-5" />
          <p className="text-body-l text-graphite/65 max-w-xl mx-auto leading-relaxed">
            Дело не только в возрасте — главное в привычках, которые формируют вашу энергию и качество жизни.
          </p>
        </div>

        {/* Cards grid */}
        <div ref={grid.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`group h-full ${scrollClass(grid.isVisible, 'up')}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className="h-full flex flex-col gap-4 p-6 rounded-2xl transition-all duration-400 cursor-default"
                style={{
                  background: 'rgba(245, 240, 232, 0.72)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(196, 184, 154, 0.4)',
                  boxShadow: '0 4px 24px rgba(92, 107, 71, 0.08), 0 1px 4px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(92, 107, 71, 0.15), 0 4px 12px rgba(0,0,0,0.06)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(245, 240, 232, 0.88)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(92, 107, 71, 0.08), 0 1px 4px rgba(0,0,0,0.04)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(245, 240, 232, 0.72)';
                }}
              >
                {/* Icon + number */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl leading-none">{item.icon}</span>
                  <span className="font-serif text-4xl font-semibold leading-none select-none text-olive-deep/10">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Accent line */}
                <div
                  className="w-8 h-px transition-all duration-500 group-hover:w-14"
                  style={{ background: 'linear-gradient(to right, rgba(92,107,71,0.5), transparent)' }}
                />

                {/* Text */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-semibold text-graphite leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-graphite/60 leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div
            className={`group h-full ${scrollClass(grid.isVisible, 'scale')}`}
            style={{ transitionDelay: `${items.length * 80}ms` }}
          >
            <div
              className="h-full flex flex-col gap-3 p-6 rounded-2xl justify-center items-center text-center min-h-[180px] transition-all duration-400"
              style={{
                background: 'linear-gradient(135deg, rgba(92,107,71,0.85) 0%, rgba(70,82,54,0.9) 100%)',
                border: '1px solid rgba(138,158,110,0.4)',
                boxShadow: '0 8px 32px rgba(92, 107, 71, 0.25)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(92, 107, 71, 0.35)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(92, 107, 71, 0.25)';
              }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
                style={{ background: 'rgba(255,255,255,0.15)' }}>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm text-white/75 leading-relaxed font-light">
                Узнаёте себя хотя бы в одном пункте?
              </p>
              <p className="text-base font-semibold text-white">
                Эта программа — для вас
              </p>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
