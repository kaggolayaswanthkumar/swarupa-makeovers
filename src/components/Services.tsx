import { motion } from 'framer-motion';
import { Sparkles, Star, Heart, Camera, PartyPopper, Scissors, MoveVertical, Droplet, Aperture, Palette } from 'lucide-react';

const services = [
  { icon: Sparkles, title: "Bridal Makeup", desc: "Timeless bridal looks for your special day." },
  { icon: Star, title: "Reception Makeup", desc: "Glamorous post-wedding glow." },
  { icon: Heart, title: "Engagement Makeup", desc: "Radiant for your first appearance." },
  { icon: Camera, title: "HD Makeup", desc: "Camera-ready perfection." },
  { icon: PartyPopper, title: "Party Makeup", desc: "Stand out at every celebration." },
  { icon: Scissors, title: "Hair Styling", desc: "Complete transformation from root to tip." },
  { icon: MoveVertical, title: "Saree Draping", desc: "Elegant traditional draping." },
  { icon: Droplet, title: "Fashion Makeup", desc: "Editorial and runway-ready." },
  { icon: Aperture, title: "Photoshoot Makeup", desc: "Perfect for every frame." },
  { icon: Palette, title: "Resin Art", desc: "Customized resin art, name boards, keychains, trays, wall décor and personalized gifts." },

];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(24,8%,8%) 0%, hsl(20,8%,6%) 100%)' }}>
      <div className="gold-line absolute top-0 left-0 w-full" />
      {/* Corner glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(196,105,122,0.07) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Our <span className="text-primary italic">Services</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-px bg-secondary mx-auto"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glow-border p-5 md:p-8 border border-white/8 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(196,105,122,0.08) 0%, rgba(212,175,55,0.05) 100%)' }} />
              <service.icon className="w-7 h-7 md:w-10 md:h-10 text-secondary mb-3 md:mb-6 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <h3 className="text-base md:text-xl font-serif text-white mb-2 md:mb-3 tracking-wide">{service.title}</h3>
              <p className="text-gray-400 font-light text-xs md:text-sm hidden sm:block">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
