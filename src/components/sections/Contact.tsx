import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      content: t.contact.addressLine1,
      subcontent: t.contact.addressLine2,
    },
    {
      icon: Phone,
      title: t.contact.phone,
      content: t.contact.phoneNumber,
      subcontent: t.contact.phoneSubtext,
    },
    {
      icon: Mail,
      title: t.contact.email,
      content: t.contact.emailAddress,
      subcontent: t.contact.emailSubtext,
    },
    {
      icon: Clock,
      title: t.contact.hours,
      content: t.contact.hoursWeekday,
      subcontent: t.contact.hoursSunday,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-rose-50/30">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full mb-4">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{info.title}</h3>
                    <p className="text-gray-700 font-medium">{info.content}</p>
                    <p className="text-sm text-gray-500 mt-1">{info.subcontent}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.8179347438847!2d21.077039276934598!3d52.16528057197641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192d5b3289740d%3A0x3e7b34f0aa5fd7f3!2sStudio%20Natalii!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Natalii Location"
            ></iframe>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.contact.cta.title}</h3>
          <p className="text-lg mb-6">{t.contact.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${t.contact.phoneNumber}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-rose-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              {t.contact.cta.callNow}
            </a>
            <a
              href={`mailto:${t.contact.emailAddress}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Mail className="mr-2" size={20} />
              {t.contact.cta.emailUs}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}