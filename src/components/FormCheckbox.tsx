import { Link } from 'react-router-dom';

interface FormCheckboxProps {
  id: string;
  required?: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
  type: 'privacy' | 'marketing';
}

export default function FormCheckbox({ id, required = false, checked, onChange, type }: FormCheckboxProps) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group">
      <input
        type="checkbox"
        id={id}
        required={required}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 mt-0.5 rounded border-2 border-slate/30 text-olive-deep focus:ring-2 focus:ring-olive-deep/20 transition-colors cursor-pointer"
      />
      <span className="text-body-s text-slate leading-relaxed flex-1">
        {type === 'privacy' ? (
          <>
            Я согласен с{' '}
            <Link
              to="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-olive-deep hover:text-olive-deep-hover underline transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Политикой конфиденциальности
            </Link>
            {required && <span className="text-red-500 ml-1">*</span>}
          </>
        ) : (
          'Я согласен получать информационные и рекламные материалы'
        )}
      </span>
    </label>
  );
}
