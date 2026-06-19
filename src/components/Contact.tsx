import { MapPin, Phone, Instagram, Clock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, hsl(24,8%,8%) 0%, hsl(20,8%,6%) 100%)' }}>
      <div className="gold-line absolute top-0 left-0 w-full" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)' }} />
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 md:mb-10">
              Get in <span className="text-primary italic">Touch</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-white/10 rounded-sm bg-card text-secondary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-gray-400 font-light">Kalikiri, Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-white/10 rounded-sm bg-card text-secondary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest mb-1">WhatsApp</h4>
                  <a href="https://wa.me/917842702300" className="text-gray-400 hover:text-primary transition-colors font-light">+91 78427 02300</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-white/10 rounded-sm bg-card text-secondary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest mb-1">Email</h4>
                  <a href="mailto:swarupamakeovers@gmail.com" className="text-gray-400 hover:text-primary transition-colors font-light break-all">swarupamakeovers@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-white/10 rounded-sm bg-card text-secondary">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest mb-1">Instagram</h4>
                  <a href="https://www.instagram.com/swarupa._.makeovers" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors font-light">@swarupa._.makeovers</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 border border-white/10 rounded-sm bg-card text-secondary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest mb-1">Business Hours</h4>
                  <p className="text-gray-400 font-light">Mon-Sat: 9:00 AM - 7:00 PM<br/>Sun: By Appointment</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-full min-h-[300px] border border-white/10 bg-card flex items-center justify-center p-2"
          >
            {/* Placeholder for Google Maps */}
            <div className="w-full h-full bg-background flex flex-col items-center justify-center text-center p-6">
              <MapPin className="w-10 h-10 text-white/20 mb-4" />
              <p className="text-gray-500 text-sm uppercase tracking-widest">Map Integration</p>
              <p className="text-gray-600 text-xs mt-2">Kalikiri, AP</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
