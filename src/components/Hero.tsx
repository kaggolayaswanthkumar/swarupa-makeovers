import { motion } from 'framer-motion';

const sparkles = [
  { size: 4,  left: '10%', top: '80%', dur: '9s',  delay: '0s'   },
  { size: 3,  left: '20%', top: '90%', dur: '12s', delay: '1.5s' },
  { size: 5,  left: '33%', top: '85%', dur: '8s',  delay: '0.8s' },
  { size: 3,  left: '50%', top: '92%', dur: '11s', delay: '2.2s' },
  { size: 6,  left: '65%', top: '88%', dur: '10s', delay: '0.4s' },
  { size: 4,  left: '78%', top: '82%', dur: '13s', delay: '1.8s' },
  { size: 3,  left: '90%', top: '78%', dur: '9s',  delay: '0.2s' },
  { size: 5,  left: '7%',  top: '70%', dur: '14s', delay: '3s'   },
  { size: 3,  left: '43%', top: '75%', dur: '7s',  delay: '1.2s' },
  { size: 4,  left: '85%', top: '65%', dur: '11s', delay: '2.5s' },
  { size: 6,  left: '25%', top: '60%', dur: '16s', delay: '0.6s' },
  { size: 3,  left: '57%', top: '70%', dur: '9s',  delay: '3.5s' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">

      {/* ── Hero background image ──────────────────────────────── */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero.png)' }}
      />

      {/* ── Rich layered gradient overlay ─────────────────────── */}
      <div className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(180deg,
              rgba(14,12,11,0.65) 0%,
              rgba(14,12,11,0.35) 35%,
              rgba(14,12,11,0.55) 65%,
              rgba(14,12,11,0.95) 100%
            ),
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(196,105,122,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 20% 70%, rgba(212,175,55,0.08) 0%, transparent 60%)
          `
        }}
      />

      {/* ── Bokeh glow orbs ───────────────────────────────────── */}
      <div className="bokeh z-10 w-96 h-96 opacity-20"
        style={{ top: '15%', left: '5%',  background: 'radial-gradient(circle, #c4697a, transparent)', '--dur':'16s', '--tx':'40px', '--ty':'-30px' } as React.CSSProperties} />
      <div className="bokeh z-10 w-80 h-80 opacity-15"
        style={{ top: '60%', right: '8%', background: 'radial-gradient(circle, #d4af37, transparent)', '--dur':'20s', '--tx':'-35px', '--ty':'25px'  } as React.CSSProperties} />
      <div className="bokeh z-10 w-64 h-64 opacity-10"
        style={{ top: '30%', right: '20%',background: 'radial-gradient(circle, #c4697a, transparent)', '--dur':'13s', '--tx':'20px', '--ty':'-40px' } as React.CSSProperties} />
      <div className="bokeh z-10 w-72 h-72 opacity-12"
        style={{ bottom:'10%', left:'30%', background: 'radial-gradient(circle, #d4af37, transparent)', '--dur':'18s', '--tx':'-25px', '--ty':'15px'  } as React.CSSProperties} />

      {/* ── Floating sparkle particles ─────────────────────────── */}
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="sparkle z-10"
          style={{
            width:  s.size,
            height: s.size,
            left:   s.left,
            top:    s.top,
            '--dur':   s.dur,
            '--delay': s.delay,
          } as React.CSSProperties}
        />
      ))}

      {/* ── Diagonal gold accent lines ─────────────────────────── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 60px,
              rgba(212,175,55,0.6) 60px,
              rgba(212,175,55,0.6) 61px
            )`
          }}
        />
      </div>

      {/* ── Top ornamental border ──────────────────────────────── */}
      <div className="absolute top-0 left-0 w-full h-px z-20"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #d4af37 30%, #c4697a 50%, #d4af37 70%, transparent 100%)' }} />

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="relative z-20 container mx-auto px-6 text-center pt-20 lg:pl-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-12 bg-secondary/60" />
            <span className="text-secondary tracking-[0.25em] uppercase text-xs font-semibold">Premium Bridal &amp; Film Makeup Studio</span>
            <span className="h-px w-12 bg-secondary/60" />
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 md:mb-6 leading-tight">
            Where Beauty
            <br />
            <span className="text-shimmer italic">Meets Artistry</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed mb-10 px-2">
            From bridal elegance to screen-ready transformations,<br className="hidden md:block" /> creating timeless beauty for every special moment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-0">
            <a
              href="https://wa.me/917842702300"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-4 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto overflow-hidden group"
              style={{ background: 'linear-gradient(135deg, #c4697a, #b05668)', color: '#fff' }}
            >
              <span className="relative z-10">Book on WhatsApp</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #d4af37, #b8950e)' }} />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto transition-all duration-300 hover:bg-secondary hover:text-black"
              style={{ border: '1px solid rgba(212,175,55,0.6)', color: '#d4af37' }}
            >
              View Portfolio
            </a>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-12 md:mt-16"
          >
            {[
              { value: '6+',    label: 'Years Experience' },
              { value: '500+',  label: 'Brides Styled' },
              { value: '50+',   label: 'Film Projects' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl md:text-3xl font-serif text-shimmer">{value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ───────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <motion.div
          className="w-px h-16"
          style={{ background: 'linear-gradient(to bottom, #d4af37, transparent)' }}
          animate={{ scaleY: [0, 1, 0], y: [0, 0, 64] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* ── Bottom gradient fade ───────────────────────────────── */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, hsl(20, 8%, 5%))' }} />
    </section>
  );
}
