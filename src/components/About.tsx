import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { value: 500, label: 'Happy Clients', suffix: '+' },
  { value: 300, label: 'Bridal Makeovers', suffix: '+' },
  { value: 6, label: 'Years Experience', suffix: '+' },
  { value: 100, label: 'Client Satisfaction', suffix: '%' },
];

function CountUp({ target, duration = 2 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, hsl(20,8%,5%) 0%, hsl(24,10%,7%) 50%, hsl(20,8%,5%) 100%)' }}>
      {/* Top gold rule */}
      <div className="gold-line absolute top-0 left-0 w-full" />
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(196,105,122,0.08) 0%, transparent 70%)' }} />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] translate-x-1/3 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)' }} />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] sm:aspect-[3/4] relative z-10">
              <img 
                src="/images/ about.png" 
                alt="Swarupa Makeovers Artist at Work" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative frame — hidden on mobile to prevent horizontal scroll */}
            <div className="hidden sm:block absolute -inset-4 border border-secondary/30 z-0 translate-x-4 translate-y-4" />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              The Art of <span className="text-primary italic">Transformation</span>
            </h2>
            <p className="text-gray-300 font-light leading-relaxed mb-6 text-lg">
              Welcome to Swarupa Makeovers, Kalikiri's premier destination for luxury bridal and beauty transformations. With over 6 years of professional experience, we specialize in bringing out your most radiant, confident self.
            </p>
            <p className="text-gray-300 font-light leading-relaxed mb-4 text-lg">
              Whether you're walking down the aisle, stepping in front of a camera, or attending a special celebration, our personalized approach ensures a flawless, long-lasting look that honors your unique features.
            </p>
            <p className="text-gray-300 font-light leading-relaxed mb-12 text-lg">
              Beyond bridal work, our artistry extends to the silver screen — with experience in <span className="text-secondary font-medium">movies and television serials</span>, we bring a professional, camera-ready touch to every look we create.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-serif text-secondary mb-2 flex items-center justify-center sm:justify-start">
                    <CountUp target={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      {/* Bottom gold rule */}
      <div className="gold-line absolute bottom-0 left-0 w-full" />
    </section>
  );
}
