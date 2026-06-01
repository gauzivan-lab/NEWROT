import { MessageCircle, Send, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Disclaimer from '../components/Disclaimer';

export default function Footer() {
  return (
    <footer className="py-16 bg-graphite text-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="https://ucarecdn.com/40affe55-2180-4e84-baf0-2e1a1e1599ae/-/preview/1000x1000/"
              alt="Maya Dadeeva"
              className="h-20 w-auto mb-4"
            />
            <p className="text-body-m text-white/70 mb-4">
              Научно обоснованная система питания, привычек и мышления для женщин 40+
            </p>
            <div className="text-body-s text-white/50 space-y-1">
              <p>Дадеева Майя Алексеевна</p>
              <p>ИНН: 502601163127</p>
              <p>Email: m_a_y_a@mail.ru</p>
            </div>
          </div>

          <div>
            <h4 className="text-body-l font-medium mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/79031866548"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body-m text-white/70 hover:text-white transition-smooth"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://t.me/mayadadeyeva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body-m text-white/70 hover:text-white transition-smooth"
              >
                <Send className="w-5 h-5" />
                Telegram
              </a>
              <a
                href="tel:+79031866548"
                className="flex items-center gap-3 text-body-m text-white/70 hover:text-white transition-smooth"
              >
                <Phone className="w-5 h-5" />
                +7 903 186-65-48
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-body-l font-medium mb-4">Юридическая информация</h4>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-body-m text-white/70 hover:text-white transition-smooth">
                Политика конфиденциальности
              </Link>
              <Link to="/public-offer" className="block text-body-m text-white/70 hover:text-white transition-smooth">
                Публичная оферта
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <Disclaimer variant="footer" />
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-caption text-white/50">
            © 2025 Живи на 5.0+. Все права защищены.
          </p>
        </div>
      </Container>
    </footer>
  );
}
