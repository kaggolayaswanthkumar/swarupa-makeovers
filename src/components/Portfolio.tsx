import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['All', 'Bridal', 'Reception', 'Party', 'Fashion', 'Resin Arts'];

const portfolioItems = [
  { id: 1, src: '/images/portfolio-1.png', category: 'Bridal', title: 'Traditional Bridal Look' },
  { id: 2, src: '/images/portfolio-2.png', category: 'Reception', title: 'Glamorous Reception' },
  { id: 3, src: '/images/portfolio-3.png', category: 'Bridal', title: 'Engagement Soft Glow' },
  { id: 4, src: '/images/portfolio-4.png', category: 'Party', title: 'Evening Party Glam' },
  { id: 5, src: '/images/portfolio-5.png', category: 'Fashion', title: 'HD Flawless Skin' },
  { id: 6, src: '/images/portfolio-6.png', category: 'Fashion', title: 'Editorial Dramatic' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex].id);
  };

  const handlePrev = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex].id);
  };

  const activeImage = portfolioItems.find(i => i.id === selectedImage);

  return (
    <section id="portfolio" style={{ background: 'linear-gradient(160deg, hsl(24,8%,8%) 0%, hsl(20,8%,6%) 100%)' }} className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Our <span className="text-primary italic">Work</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-px bg-secondary mx-auto mb-10"
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 min-h-[44px] text-xs md:text-sm uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'border-primary bg-primary/10 text-white' 
                    : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-card"
                onClick={() => setSelectedImage(item.id)}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-secondary text-xs uppercase tracking-[0.2em] mb-2">{item.category}</span>
                  <h3 className="text-white font-serif text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-2 md:p-8"
          >
            {/* Close */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button 
              onClick={handlePrev}
              className="absolute left-2 md:left-8 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img 
              src={activeImage.src} 
              alt={activeImage.title} 
              className="max-h-[80vh] max-w-[calc(100vw-6rem)] object-contain"
            />

            {/* Next */}
            <button 
              onClick={handleNext}
              className="absolute right-2 md:right-8 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
