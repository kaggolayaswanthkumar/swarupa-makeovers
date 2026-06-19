import { motion } from 'framer-motion';
import { ShieldCheck, Award, Smile, Shield, Clock, Users } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: "Premium Products", desc: "We use only top-tier, international makeup brands." },
  { icon: Award, title: "Certified Artist", desc: "Professionally trained and certified beauty experts." },
  { icon: Smile, title: "Customized Looks", desc: "Tailored specifically to your features and preferences." },
  { icon: Shield, title: "Hygienic Practices", desc: "Strict sanitization protocols for all tools and brushes." },
  { icon: Clock, title: "On-Time Service", desc: "Punctual and efficient, ensuring you're ready on schedule." },
  { icon: Users, title: "Professional Team", desc: "A dedicated team to handle large bridal parties seamlessly." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, hsl(24,8%,8%) 0%, hsl(20,10%,9%) 50%, hsl(24,8%,8%) 100%)' }}>
      <div className="gold-line absolute top-0 left-0 w-full" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(196,105,122,0.1) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Why Choose <span className="text-primary italic">Us</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-px bg-secondary mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary bg-primary/5">
                <feature.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
