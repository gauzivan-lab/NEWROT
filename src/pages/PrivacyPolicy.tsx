import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Container from '../components/Container';

export default function PrivacyPolicy() {
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
                Политика конфиденциальности и обработки персональных данных
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
                    Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты персональных данных пользователей сайта <a href="https://mayadadeeva.ru" className="text-olive-deep hover:text-olive-deep-hover underline transition-colors">https://mayadadeeva.ru</a>.
                  </p>
                  <p>
                    Оператором персональных данных является: Дадеева Майя Алексеевна (самозанятая, НПД), ИНН 502601163127 (далее — Оператор).
                  </p>
                  <p>
                    Оператор осуществляет обработку персональных данных в соответствии с законодательством Российской Федерации.
                  </p>
                  <p>
                    Используя сайт и/или оставляя свои данные, пользователь выражает согласие с настоящей Политикой и дает согласие на обработку персональных данных.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  2. Перечень обрабатываемых персональных данных
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>Оператор может обрабатывать следующие категории персональных данных:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>имя, фамилия;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>номер телефона;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>адрес электронной почты;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>аккаунты в мессенджерах и социальных сетях;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>данные, передаваемые автоматически:</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 ml-12">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate/60 mt-2.5 flex-shrink-0" />
                      <span>IP-адрес;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate/60 mt-2.5 flex-shrink-0" />
                      <span>cookies;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate/60 mt-2.5 flex-shrink-0" />
                      <span>сведения о браузере, устройстве, операционной системе;</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>иные данные, добровольно предоставленные пользователем.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  3. Цели обработки персональных данных
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>Обработка персональных данных осуществляется в следующих целях:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>оказание консультационных и образовательных услуг;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>регистрация на программы, консультации, мероприятия;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>связь с пользователем (включая Telegram, WhatsApp, email);</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>направление информационных и рекламных материалов;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>обработка платежей;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>аналитика и улучшение качества сервиса;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>выполнение требований законодательства РФ.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  4. Правовые основания обработки
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>Обработка персональных данных осуществляется на основании:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>согласия субъекта персональных данных;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>исполнения договора;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>требований законодательства РФ.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  5. Действия с персональными данными
                </h2>
                <p className="text-body-m text-slate leading-relaxed">
                  Оператор осуществляет следующие действия с персональными данными: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (предоставление, доступ), обезличивание, блокирование, удаление и уничтожение.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  6. Хранение и локализация данных
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>
                    Первичная запись, систематизация, накопление и хранение персональных данных граждан Российской Федерации осуществляется с использованием баз данных, расположенных на территории Российской Федерации.
                  </p>
                  <p>
                    Срок хранения персональных данных — до достижения целей обработки либо до отзыва согласия пользователем.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  7. Передача третьим лицам
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>Оператор вправе передавать персональные данные третьим лицам в следующих случаях:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>использование сервисов коммуникации (Telegram, WhatsApp);</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>использование аналитических систем (например, Яндекс.Метрика);</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>использование платежных систем и банков;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>исполнение требований законодательства РФ;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>с согласия пользователя.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  8. Трансграничная передача данных
                </h2>
                <p className="text-body-m text-slate leading-relaxed">
                  Оператор может осуществлять трансграничную передачу персональных данных при использовании зарубежных сервисов, при условии обеспечения надлежащей защиты прав субъектов персональных данных.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  9. Меры защиты персональных данных
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных, включая:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>ограничение доступа к данным;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>использование защищенных каналов передачи данных;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>предотвращение несанкционированного доступа;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>регулярное обновление программного обеспечения.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  10. Права пользователя
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>Пользователь имеет право:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>получать информацию об обработке его персональных данных;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>требовать уточнения, блокировки или удаления данных;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive-deep mt-2.5 flex-shrink-0" />
                      <span>отозвать согласие на обработку персональных данных.</span>
                    </li>
                  </ul>
                  <p className="mt-4">
                    Отзыв согласия осуществляется путем направления запроса на email: <a href="mailto:m_a_y_a@mail.ru" className="text-olive-deep hover:text-olive-deep-hover underline transition-colors">m_a_y_a@mail.ru</a> с темой «Отзыв согласия на обработку персональных данных».
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  11. Cookies и аналитика
                </h2>
                <div className="space-y-3 text-body-m text-slate leading-relaxed">
                  <p>
                    Сайт использует cookies и аналитические сервисы для улучшения работы сайта <a href="https://mayadadeeva.ru" className="text-olive-deep hover:text-olive-deep-hover underline transition-colors">https://mayadadeeva.ru</a>.
                  </p>
                  <p>
                    Продолжая использование сайта, пользователь соглашается с использованием cookies.
                  </p>
                </div>
              </section>

              <section className="bg-gradient-to-br from-sage-light to-ecru rounded-card p-6 border border-olive-mist/20">
                <h2 className="text-h3 font-serif font-semibold text-graphite mb-4">
                  12. Контакты оператора
                </h2>
                <div className="space-y-2 text-body-m text-slate leading-relaxed">
                  <p>Дадеева Майя Алексеевна</p>
                  <p><span className="font-semibold text-graphite">ИНН:</span> 502601163127</p>
                  <p><span className="font-semibold text-graphite">Email:</span> <a href="mailto:m_a_y_a@mail.ru" className="text-olive-deep hover:text-olive-deep-hover underline transition-colors">m_a_y_a@mail.ru</a></p>
                  <p><span className="font-semibold text-graphite">Телефон:</span> +79031866548</p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
