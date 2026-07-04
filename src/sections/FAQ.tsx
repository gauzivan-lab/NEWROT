import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Container from '../components/Container';
import content from '../content.json';

const { heading, items: faqs } = content.faq;

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
            {heading}
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
