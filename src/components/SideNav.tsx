import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Scissors, Images, Star, MessageSquare, Phone, Instagram, Facebook } from 'lucide-react';

const navItems = [
  { label: 'Home',      href: '#home',      icon: Home },
  { label: 'About',     href: '#about',     icon: User },
  { label: 'Services',  href: '#services',  icon: Scissors },
  { label: 'Portfolio', href: '#portfolio', icon: Images },
  { label: 'Reviews',   href: '#reviews',   icon: Star },
  { label: 'Feedback',  href: '#feedback',  icon: MessageSquare },
  { label: 'Contact',   href: '#contact',   icon: Phone },
];

const socialItems = [
  { label: 'Instagram', href: 'https://www.instagram.com/swarupa._.makeovers', icon: Instagram, external: true },
  {
    label: 'WhatsApp', href: 'https://wa.me/917842702300', external: true,
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.557 4.12 1.527 5.845L.057 23.5l5.797-1.517A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.655-.498-5.188-1.367l-.371-.22-3.844 1.007 1.025-3.737-.241-.385A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
  { label: 'Facebook', href: '#', external: false, icon: Facebook },
];

export default function SideNav() {
  const [active, setActive] = useState('home');
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Desktop left sidebar (lg+) ──────────────────────────── */}
      <aside className="fixed left-0 top-0 h-full z-40 hidden lg:flex flex-col items-center justify-between py-8 w-14 bg-black/60 backdrop-blur-md border-r border-white/5">
        <div className="flex flex-col items-center gap-1 mt-20">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = active === href.replace('#', '');
            return (
              <div
                key={label}
                className="relative flex items-center"
                onMouseEnter={() => setHovered(label)}
                onMouseLeave={() => setHovered(null)}
              >
                <a
                  href={href}
                  className={`relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 ${
                    isActive ? 'text-secondary' : 'text-gray-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="sidenav-active"
                      className="absolute inset-0 rounded-lg bg-secondary/10 border border-secondary/30"
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                </a>

                <AnimatePresence>
                  {hovered === label && (
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-12 pointer-events-none z-50"
                    >
                      <span className="bg-black/90 border border-white/10 text-white text-xs uppercase tracking-widest font-medium px-3 py-1.5 rounded whitespace-nowrap">
                        {label}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-3">
          {socialItems.map(({ label, href, icon: Icon, external }) => (
            <div
              key={label}
              className="relative flex items-center"
              onMouseEnter={() => setHovered(`s-${label}`)}
              onMouseLeave={() => setHovered(null)}
            >
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-secondary border border-transparent hover:border-secondary/30 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
              <AnimatePresence>
                {hovered === `s-${label}` && (
                  <motion.div
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-10 pointer-events-none z-50"
                  >
                    <span className="bg-black/90 border border-white/10 text-white text-xs uppercase tracking-widest font-medium px-3 py-1.5 rounded whitespace-nowrap">
                      {label}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </aside>

      {/* ── Mobile bottom icon bar (hidden on lg+) ──────────────── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        style={{ background: 'linear-gradient(to top, rgba(10,8,7,0.98), rgba(10,8,7,0.92))', backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(212,175,55,0.2)' }}
      >
        {/* Gold shimmer top line */}
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6) 30%, rgba(196,105,122,0.6) 50%, rgba(212,175,55,0.6) 70%, transparent)' }} />

        <div className="flex items-center justify-around px-1 py-2 safe-area-pb">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = active === href.replace('#', '');
            return (
              <a
                key={label}
                href={href}
                className="flex flex-col items-center gap-0.5 px-1 py-1 min-w-[40px] relative group"
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-active"
                    className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #c4697a, #d4af37)' }}
                  />
                )}
                <div className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'text-secondary'
                    : 'text-gray-500 group-active:text-white'
                }`}
                  style={isActive ? { background: 'rgba(212,175,55,0.12)' } : {}}
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={isActive ? 2 : 1.5} />
                </div>
                <span className={`text-[9px] uppercase tracking-wider font-medium leading-none transition-colors ${
                  isActive ? 'text-secondary' : 'text-gray-600'
                }`}>
                  {label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
