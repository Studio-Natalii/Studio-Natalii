import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.manicure.title,
      description: t.services.manicure.description,
      price: t.services.manicure.price,
      image: '/assets/service-manicure.jpg',
    },
    {
      title: t.services.facial.title,
      description: t.services.facial.description,
      price: t.services.facial.price,
      image: '/assets/service-facial.jpg',
    },
    {
      title: t.services.hair.title,
      description: t.services.hair.description,
      price: t.services.hair.price,
      image: '/assets/service-hair.jpg',
    },
    {
      title: t.services.massage.title,
      description: t.services.massage.description,
      price: t.services.massage.price,
      image: '/assets/service-massage.jpg',
    },
    {
      title: t.services.makeup.title,
      description: t.services.makeup.description,
      price: t.services.makeup.price,
      image: '/assets/service-facial.jpg',
    },
    {
      title: t.services.waxing.title,
      description: t.services.waxing.description,
      price: t.services.waxing.price,
      image: '/assets/service-manicure.jpg',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-rose-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="text-rose-500 mr-2" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}