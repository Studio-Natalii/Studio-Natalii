import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Studio Natalii
            </h3>
            <p className="text-gray-400 mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/studionatalii/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-rose-400 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-rose-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-rose-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-rose-400 transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-rose-400 transition-colors">
                  {t.nav.bookNow}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactInfo}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-rose-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  {t.contact.addressLine1}<br />
                  {t.contact.addressLine2}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-rose-400 mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-400">{t.contact.phoneNumber}</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-rose-400 mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-400">{t.contact.emailAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Studio Natalii. {t.footer.copyright}</p>
          <p className="mt-2 text-sm">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}