import { MessageCircle, Send, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Disclaimer from '../components/Disclaimer';
import content from '../content.json';

export default function Footer() {
  const { site, contacts, footer } = content;

  return (
    <footer className="py-16 bg-graphite text-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src={site.logo}
              alt="Maya Dadeeva"
              className="h-20 w-auto mb-4"
            />
            <p className="text-body-m text-white/70 mb-4">
              {footer.tagline}
            </p>
            <div className="text-body-s text-white/50 space-y-1">
              <p>{footer.legalName}</p>
              <p>ИНН: {footer.inn}</p>
              <p>Email: {contacts.email}</p>
            </div>
          </div>

          <div>
            <h4 className="text-body-l font-medium mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href={contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body-m text-white/70 hover:text-white transition-smooth"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body-m text-white/70 hover:text-white transition-smooth"
              >
                <Send className="w-5 h-5" />
                Telegram
              </a>
              <a
                href={contacts.phoneHref}
                className="flex items-center gap-3 text-body-m text-white/70 hover:text-white transition-smooth"
              >
                <Phone className="w-5 h-5" />
                {contacts.phone}
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
            {footer.copyrightText}
          </p>
        </div>
      </Container>
    </footer>
  );
}
