import { useState } from 'react';
import { Check, MessageCircle, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import FormCheckbox from '../components/FormCheckbox';
import PaymentNotice from '../components/PaymentNotice';

const plans = [
  {
    name: 'Базовый',
    price: '40 000',
    description: 'Формат для тех, кто хочет работать по продуманной системе и двигаться в поддерживающей атмосфере группы.',
    features: [
      'Полный доступ ко всем урокам, гайдам и практическим материалам',
      'Записи занятий для удобного просмотра',
      'Групповой чат с обсуждениями и ответами на вопросы',
      'Базовую «Карту молодости» — систему питания, привычек и ухода, основанную на современных знаниях о возрастных изменениях и ритмах женского организма',
    ],
    forWhom: [
      'вам важен понятный, логичный путь',
      'вам комфортно внедрять изменения в группе',
      'вам достаточно общего плана без индивидуальных разборов',
    ],
  },
  {
    name: 'Премиум',
    price: '55 000',
    popular: true,
    description: 'Формат для тех, кому важна точная настройка под свой организм и сопровождение специалиста.',
    features: [
      'Всё из Базового тарифа',
      'Персональную диагностику: анализ ваших показателей, факторов риска и особенностей',
      'Индивидуальные еженедельные консультации с Майей: разборы, корректировки, ответы на личные вопросы',
      'Персональную «Карту молодости» — систему питания, восстановления и привычек, адаптированную под ваш гормональный фон, ритмы, задачи и образ жизни',
    ],
    forWhom: [
      'вы хотите двигаться эффективнее и увереннее',
      'вам важно понимать, что работает именно для вас',
      'вы предпочитаете персональные решения, а не усреднённые рекомендации',
    ],
  },
];

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation();
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);

  return (
    <section id="pricing" className="py-28 md:py-36 bg-gradient-to-br from-sage-light/30 via-ecru to-sage-light/30 relative overflow-hidden grain-overlay">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-olive-mist to-taupe-warm rounded-full blur-3xl opacity-[0.08]" />
      <div className="absolute -left-16 md:-left-24 top-1/3 -translate-y-1/2 w-80 md:w-96 opacity-30 pointer-events-none">
        <img
          src="https://ucarecdn.com/092b4d44-085c-402e-8619-0f1554e9dd25/-/preview/1000x671/"
          alt=""
          className="w-full h-auto"
        />
      </div>

      <Container>
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-h2-mobile md:text-h2 font-serif font-semibold mb-8 text-graphite tracking-tight">
            Форматы участия и цены
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-olive-deep to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card
                hover
                className={`relative overflow-hidden h-full ${
                  plan.popular
                    ? 'ring-2 ring-olive-deep/40 shadow-premium transform md:scale-[1.03]'
                    : ''
                }`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-olive-deep via-olive-deep-hover to-olive-deep text-white px-6 py-2.5 rounded-full text-caption font-medium shadow-hover">
                        <Sparkles className="w-4 h-4" />
                        Рекомендуем
                      </span>
                    </div>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-olive-mist to-taupe-warm rounded-full blur-3xl opacity-[0.12]" />
                  </>
                )}

                <div className="text-center mb-8 relative">
                  <h3 className="text-h3 font-serif font-semibold mb-4 text-graphite">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-h2 font-serif font-semibold text-gradient">
                      {plan.price}
                    </span>
                    <span className="text-body-m text-slate">₽</span>
                  </div>
                  <p className="text-body-s text-slate leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-1 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                <div className="mb-6">
                  <h4 className="text-body-m font-medium text-graphite mb-4">Вы получаете:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 group/feature"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center mt-0.5 group-hover/feature:scale-110 transition-transform">
                          <Check className="w-3.5 h-3.5 text-success" />
                        </div>
                        <span className="text-body-s text-graphite leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-body-m font-medium text-graphite mb-4">Подойдёт, если:</h4>
                  <ul className="space-y-2">
                    {plan.forWhom.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2"
                      >
                        <span className="text-olive-deep mt-1">—</span>
                        <span className="text-body-s text-slate leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-6">
                  <FormCheckbox
                    id={`privacy-${plan.name}`}
                    type="privacy"
                    required
                    checked={privacyAccepted}
                    onChange={setPrivacyAccepted}
                  />
                  <FormCheckbox
                    id={`marketing-${plan.name}`}
                    type="marketing"
                    checked={marketingAccepted}
                    onChange={setMarketingAccepted}
                  />
                </div>

                <PaymentNotice />

                <Button
                  fullWidth
                  className="group mt-6"
                  disabled={!privacyAccepted}
                >
                  Оплатить участие
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Card>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-olive-mist/20 mb-6">
            <span className="text-body-m text-slate">Остались вопросы?</span>
            <Button
              variant="ghost"
              onClick={() => window.open('https://wa.me/', '_blank')}
              className="!py-2 !px-5"
            >
              <MessageCircle className="w-4 h-4 inline mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
