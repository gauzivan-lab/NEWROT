import { Shield } from 'lucide-react';

export default function PaymentNotice() {
  return (
    <div className="flex items-start gap-3 bg-sage-light/30 p-4 rounded-lg border border-olive-mist/20">
      <Shield className="w-5 h-5 text-olive-deep flex-shrink-0 mt-0.5" />
      <p className="text-body-s text-slate leading-relaxed">
        Оплата проходит через защищённый сервис ЮKassa. После оплаты вы получите электронный чек.
      </p>
    </div>
  );
}
