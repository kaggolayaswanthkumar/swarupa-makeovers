import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import SideNav from '@/components/SideNav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Feedback from '@/components/Feedback';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-16 lg:pb-0">
      <LoadingScreen />
      <Navbar />
      <SideNav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Feedback />
      <Booking />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
