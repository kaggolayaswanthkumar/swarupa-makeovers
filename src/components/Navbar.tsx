import { useState, useEffect } from 'react';
import logoSrc from '@assets/logo.png_1781155484210.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:pl-20 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img
            src={logoSrc}
            alt="Swarupa Makeovers"
            className="h-12 w-12 object-contain rounded-full"
            data-testid="img-navbar-logo"
          />
        </a>

        {/* Book Now — always visible, top-right */}
        <a
          href="#booking"
          className="px-5 py-2 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-white hover:text-black"
          style={{ background: 'linear-gradient(135deg, #c4697a, #b05668)', color: '#fff' }}
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
