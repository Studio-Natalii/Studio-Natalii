import { Card, CardContent } from '@/components/ui/card';
import { Heart, Award, Users, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: t.about.features.passion.title,
      description: t.about.features.passion.description,
    },
    {
      icon: Award,
      title: t.about.features.expert.title,
      description: t.about.features.expert.description,
    },
    {
      icon: Users,
      title: t.about.features.client.title,
      description: t.about.features.client.description,
    },
    {
      icon: Star,
      title: t.about.features.star.title,
      description: t.about.features.star.description,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t.about.paragraph1}
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t.about.paragraph2}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.about.paragraph3}
            </p>
          </div>

          <div className="relative">
            <img
              src="/assets/gallery-interior-1.jpg"
              alt="Studio Natalii Interior"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold">5.0</div>
              <div className="text-sm">★★★★★</div>
              <div className="text-sm mt-1">{t.about.rating}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-rose-50/30">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full mb-4">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}