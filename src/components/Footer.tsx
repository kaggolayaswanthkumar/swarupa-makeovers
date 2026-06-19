import { Instagram, Facebook, Phone } from 'lucide-react';
const logoSrc = "/images/logo.png.png";

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(20,10%,6%) 0%, hsl(20,8%,4%) 100%)', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(196,105,122,0.06) 0%, transparent 60%)' }} />
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center mb-4">
              <img
                src={logoSrc}
                alt="Swarupa Makeovers"
                className="h-20 w-20 object-contain rounded-full"
                data-testid="img-footer-logo"
              />
            </a>
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs mx-auto md:mx-0 text-center md:text-left">
              Premium bridal and beauty transformation studio in Kalikiri, creating timeless elegance for every special moment.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</a>
              <a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</a>
              <a href="#portfolio" className="text-gray-400 hover:text-primary transition-colors text-sm">Portfolio</a>
              <a href="#reviews" className="text-gray-400 hover:text-primary transition-colors text-sm">Testimonials</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white text-sm uppercase tracking-widest mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/swarupa._.makeovers" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://wa.me/917842702300" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs tracking-wider">
            &copy; 2025 Swarupa Makeovers. All rights reserved.
          </p>
          <a href="#" className="text-gray-500 hover:text-gray-300 text-xs tracking-wider transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
