import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();

  const galleryImages = [
    {
      src: '/assets/gallery-interior-1.jpg',
      alt: 'Studio Interior',
      category: t.gallery.categories.interior,
    },
    {
      src: '/assets/service-manicure.jpg',
      alt: 'Manicure Service',
      category: t.gallery.categories.services,
    },
    {
      src: '/assets/service-facial.jpg',
      alt: 'Facial Treatment',
      category: t.gallery.categories.services,
    },
    {
      src: '/assets/service-hair.jpg',
      alt: 'Hair Styling',
      category: t.gallery.categories.services,
    },
    {
      src: '/assets/service-massage.jpg',
      alt: 'Massage Therapy',
      category: t.gallery.categories.services,
    },
    {
      src: '/assets/hero-banner-salon-spa.jpg',
      alt: 'Spa Room',
      category: t.gallery.categories.interior,
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-rose-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-semibold mb-1">{image.category}</p>
                  <p className="text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}