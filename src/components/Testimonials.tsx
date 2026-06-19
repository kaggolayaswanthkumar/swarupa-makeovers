import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Star } from 'lucide-react';
import { useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: "Swarupa made me feel like an absolute queen on my wedding day. The bridal makeup was flawless!",
    name: "Priya R.",
    event: "Bridal Makeup"
  },
  {
    quote: "I'm so happy I chose Swarupa Makeovers for my reception. Everyone was asking who did my makeup!",
    name: "Divya K.",
    event: "Reception Makeup"
  },
  {
    quote: "Professional, punctual, and absolutely talented. My engagement look was exactly what I dreamed of.",
    name: "Sneha M.",
    event: "Engagement Makeup"
  },
  {
    quote: "The HD makeup looked stunning in every single photo. Worth every penny!",
    name: "Ananya T.",
    event: "Photoshoot Makeup"
  },
  {
    quote: "From saree draping to hair styling — she does it all beautifully. Truly a one-stop beauty destination.",
    name: "Kavitha N.",
    event: "Full Bridal Package"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      scrollNext();
    }, 4000);
    return () => clearInterval(autoplay);
  }, [emblaApi, scrollNext]);

  return (
    <section id="reviews" className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(20,8%,5%) 0%, hsl(24,8%,7%) 100%)' }}>
      <div className="gold-line absolute top-0 left-0 w-full" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 60%, rgba(196,105,122,0.07) 0%, transparent 70%)' }} />
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            What Our <span className="text-primary italic">Brides Say</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-px bg-secondary mx-auto"
          />
        </div>

        <div className="max-w-4xl mx-auto" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                <div className="bg-card border border-white/5 p-6 md:p-12 text-center flex flex-col items-center">
                  <div className="flex gap-1 mb-6 text-secondary">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-gray-300 font-light italic leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                  <div className="mt-auto">
                    <h4 className="text-white font-serif text-lg">{t.name}</h4>
                    <span className="text-primary text-xs uppercase tracking-widest">{t.event}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
