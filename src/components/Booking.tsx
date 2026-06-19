import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const services = [
  "Bridal Makeup",
  "Reception Makeup",
  "Engagement Makeup",
  "HD Makeup",
  "Party Makeup",
  "Hair Styling",
  "Saree Draping",
  "Fashion Makeup",
  "Photoshoot Makeup"
];

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Swarupa Makeovers! I would like to book an appointment.
    
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Message: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917842702300?text=${encodedText}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(20,8%,5%) 0%, hsl(24,8%,7%) 100%)' }}>
      <div className="gold-line absolute top-0 left-0 w-full" />
      <div className="absolute inset-0 border-y-2 border-secondary/20" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Book Your <span className="text-primary italic">Appointment</span>
            </h2>
            <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
              Ready to transform your look? Fill out the form or reach out directly on WhatsApp to check our availability and book your slot.
            </p>
            <a
              href="https://wa.me/917842702300"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white uppercase tracking-widest text-sm font-semibold hover:bg-[#128C7E] transition-colors rounded-sm"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background/40 backdrop-blur-xl border border-white/10 p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Service</label>
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-card text-gray-400">Select a Service</option>
                    {services.map(s => (
                      <option key={s} value={s} className="bg-card text-white">{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Event Date</label>
                  <input 
                    type="date" 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors"
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Message (Optional)</label>
                <textarea 
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us more about your event..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-colors mt-4"
              >
                Send Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
