import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, CheckCircle2 } from 'lucide-react';

const services = [
  "Bridal Makeup",
  "Reception Makeup",
  "Engagement Makeup",
  "HD Makeup",
  "Party Makeup",
  "Hair Styling",
  "Saree Draping",
  "Fashion Makeup",
  "Photoshoot Makeup",
  "Other",
];

const ratingLabels: Record<number, string> = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Great",
  5: "Excellent",
};

export default function Feedback() {
  const [form, setForm] = useState({
    name: '',
    service: '',
    review: '',
  });
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      setError('Please select a star rating before submitting.');
      return;
    }
    setError('');

    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    const text = `*Swarupa Makeovers — Client Feedback*

Name: ${form.name}
Service: ${form.service}
Rating: ${stars} (${rating}/5 — ${ratingLabels[rating]})

Review:
${form.review}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/917842702300?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: '', service: '', review: '' });
    setRating(0);
    setHovered(0);
    setSubmitted(false);
    setError('');
  };

  const activeRating = hovered || rating;

  return (
    <section id="feedback" className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, hsl(24,8%,8%) 0%, hsl(20,10%,9%) 50%, hsl(24,8%,8%) 100%)' }}>
      <div className="gold-line absolute top-0 left-0 w-full" />
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary tracking-[0.3em] uppercase text-xs font-semibold block mb-4"
          >
            Share Your Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Leave Your <span className="text-primary italic">Feedback</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '60px' }}
            viewport={{ once: true }}
            className="h-px bg-secondary mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mt-6 font-light max-w-xl mx-auto"
          >
            Your experience means the world to us. Share how we made you feel — your words inspire every transformation.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-background/50 backdrop-blur-xl border border-white/10 p-12 text-center flex flex-col items-center gap-6"
                data-testid="feedback-success"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-secondary" />
                </motion.div>
                <h3 className="text-2xl font-serif text-white">Thank You!</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Your feedback has been sent to us on WhatsApp. We truly appreciate you taking the time to share your experience with Swarupa Makeovers.
                </p>
                <div className="flex gap-1 text-secondary">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className={`w-5 h-5 ${s <= rating ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <button
                  onClick={handleReset}
                  className="mt-4 px-8 py-3 border border-primary/50 text-primary text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="button-feedback-reset"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="bg-background/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 flex flex-col gap-8"
                data-testid="form-feedback"
              >
                {/* Star Rating */}
                <div className="text-center">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-5">
                    How would you rate your experience?
                  </label>
                  <div className="flex justify-center gap-3">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(0)}
                        className="transition-transform hover:scale-125 focus:outline-none"
                        data-testid={`button-star-${star}`}
                        aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                      >
                        <Star
                          className={`w-9 h-9 transition-colors duration-150 ${
                            star <= activeRating
                              ? 'text-secondary fill-secondary'
                              : 'text-white/20'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {activeRating > 0 && (
                    <motion.p
                      key={activeRating}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-secondary text-sm uppercase tracking-widest mt-3 font-semibold"
                    >
                      {ratingLabels[activeRating]}
                    </motion.p>
                  )}
                  {error && (
                    <p className="text-red-400 text-xs mt-2" data-testid="feedback-error">{error}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
                      data-testid="input-feedback-name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Service Taken</label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                      data-testid="select-feedback-service"
                    >
                      <option value="" disabled className="bg-card text-gray-400">Select a Service</option>
                      {services.map(s => (
                        <option key={s} value={s} className="bg-card text-white">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Your Review</label>
                  <textarea
                    name="review"
                    required
                    rows={4}
                    value={form.review}
                    onChange={handleChange}
                    placeholder="Tell us about your experience — what did you love most?"
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-white/20"
                    data-testid="textarea-feedback-review"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3 mt-2"
                  data-testid="button-feedback-submit"
                >
                  <Send className="w-4 h-4" />
                  Send Feedback
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
