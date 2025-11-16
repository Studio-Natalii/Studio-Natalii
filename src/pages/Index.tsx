import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';
import Booking from '@/components/sections/Booking';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Booking />
      <Footer />
    </div>
  );
}