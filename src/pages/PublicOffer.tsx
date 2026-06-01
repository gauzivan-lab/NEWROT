import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Container from '../components/Container';

export default function PublicOffer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-ecru">
      <section className="py-24 md:py-32 relative overflow-hidden grain-overlay">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage-light rounded-full blur-3xl opacity-20" />

        <Container>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-body-m text-slate hover:text-olive-deep transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Вернуться на главную
          </Link>

          <div
            ref={ref}
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <h1 className="text-h1-mobile md:text-h1 font-serif font-semibold mb-6 text-graphite">
                Публичная оферта на оказание услуг
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-olive-deep to-transparent mx-auto" />
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-card-lg p-8 md:p-12 shadow-soft border border-olive-mist/20 space-y-10">
              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  1. Общие положения
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>
                    Настоящий документ является публичной офертой.
                  </p>
                  <p>
                    Акцепт оферты осуществляется путем оплаты услуг и означает полное согласие Заказчика с условиями.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  2. Предмет договора
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>
                    Исполнитель оказывает консультационные и образовательные услуги (коучинг, программы, курсы).
                  </p>
                  <p>
                    Формат услуг: онлайн (видеосвязь, мессенджеры, обучающие платформы).
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  3. Порядок оказания услуг
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>
                    Услуги оказываются в сроки и в формате, указанном на сайте или в описании программы.
                  </p>
                  <p>
                    Момент оказания услуги определяется:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>для консультации — момент проведения сессии;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>для онлайн-курса — момент предоставления доступа к материалам;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>для сопровождения — момент начала оказания поддержки.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  4. Стоимость и оплата
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>оплата осуществляется на условиях 100% предоплаты;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>способы оплаты указываются на сайте;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>после оплаты направляется чек в соответствии с законодательством РФ;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>услуги не облагаются НДС.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  5. Условия возврата
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>Заказчик вправе отказаться от услуг:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>до начала оказания — с возвратом 100% суммы;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>после начала — с возвратом за вычетом фактически оказанных услуг.</span>
                    </li>
                  </ul>
                  <p className="mt-4">Фактически оказанными услугами считаются:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>проведенные консультации;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>предоставленный доступ к материалам;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>период оказанного сопровождения.</span>
                    </li>
                  </ul>
                  <p className="mt-4">
                    Возврат осуществляется в течение 10 календарных дней.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  6. Ответственность сторон
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>
                    Исполнитель не гарантирует достижение конкретного результата.
                  </p>
                  <p>
                    Результат зависит от действий Заказчика.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  7. Дисклеймер
                </h2>
                <p className="text-body-m text-slate leading-relaxed">
                  Услуги не являются медицинскими, не направлены на диагностику и лечение заболеваний и не заменяют консультацию врача.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  8. Интеллектуальная собственность
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>
                    Все материалы являются интеллектуальной собственностью Исполнителя.
                  </p>
                  <p>Запрещено:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>копирование;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>распространение;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>передача третьим лицам.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  9. Персональные данные
                </h2>
                <p className="text-body-m text-slate leading-relaxed">
                  Оставляя данные и оплачивая услуги, Заказчик дает согласие на обработку персональных данных в соответствии с Политикой конфиденциальности.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  10. Форс-мажор
                </h2>
                <p className="text-body-m text-slate leading-relaxed">
                  Стороны освобождаются от ответственности при наступлении обстоятельств непреодолимой силы.
                </p>
              </section>

              <section className="bg-gradient-to-br from-sage-light to-ecru rounded-card p-6 border border-olive-mist/20">
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  11. Реквизиты
                </h2>
                <div className="space-y-2 text-body-m text-slate leading-relaxed">
                  <p>Дадеева Майя Алексеевна</p>
                  <p><span className="font-semibold text-graphite">ИНН:</span> 502601163127</p>
                  <div className="mt-4 pt-4 border-t border-olive-mist/20">
                    <p><span className="font-semibold text-graphite">Банк:</span> АО «ТБанк»</p>
                    <p><span className="font-semibold text-graphite">Счет:</span> 40817810600007090443</p>
                    <p><span className="font-semibold text-graphite">БИК:</span> 044525974</p>
                    <p><span className="font-semibold text-graphite">Корр. счет:</span> 30101810145250000974</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  12. Заключительные положения
                </h2>
                <p className="text-body-m text-slate leading-relaxed">
                  Оферта действует бессрочно и может быть изменена Исполнителем.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
