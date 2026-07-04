import { useScrollAnimation, scrollClass } from '../hooks/useScrollAnimation';
import Container from '../components/Container';
import content from '../content.json';

const { label, heading, subheading, items: benefits } = content.benefits;

export default function Benefits() {
  const headingAnim = useScrollAnimation(0.1);
  const grid    = useScrollAnimation(0.05);

  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-ecru via-ivory to-ecru/60 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-taupe-warm/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-sage-light/8 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        {/* Header */}
        <div
          ref={headingAnim.ref}
          className={`text-center mb-16 md:mb-20 ${scrollClass(headingAnim.isVisible, 'up')}`}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-olive-deep/50 mb-4 font-medium">
            {label}
          </p>
          <h2 className="text-h2-mobile md:text-h2 lg:text-5xl font-serif font-semibold mb-5 text-graphite tracking-tight">
            {heading}
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-olive-deep/30 to-transparent mx-auto mb-6" />
          <p className="text-body md:text-lg text-slate max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Grid */}
        <div
          ref={grid.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`card-premium group h-full ${scrollClass(grid.isVisible, 'up')}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="p-8 md:p-10 flex flex-col h-full">
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="font-serif font-semibold text-4xl leading-none select-none"
                    style={{ color: 'rgba(92,107,71,0.12)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-olive-deep/40 text-lg group-hover:text-olive-deep/70 transition-colors duration-300">
                    ✦
                  </span>
                </div>

                {/* Accent line */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-olive-deep/50 to-olive-mist/30
                                mb-5 group-hover:w-14 transition-all duration-500 rounded-full" />

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-graphite mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-body text-slate leading-relaxed flex-1">
                  {benefit.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
