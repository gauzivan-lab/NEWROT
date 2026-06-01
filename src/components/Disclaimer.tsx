interface DisclaimerProps {
  variant?: 'inline' | 'footer';
}

export default function Disclaimer({ variant = 'inline' }: DisclaimerProps) {
  const baseClasses = "text-caption italic leading-relaxed";
  const variantClasses = variant === 'footer'
    ? "text-slate/60 text-center"
    : "text-slate/70 bg-sage-light/30 p-4 rounded-lg border border-olive-mist/20";

  return (
    <p className={`${baseClasses} ${variantClasses}`}>
      Информация на сайте носит информационный характер и не является медицинской услугой. Не заменяет консультацию врача.
    </p>
  );
}
