import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-8 pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-accent/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium uppercase tracking-widest flex items-center gap-2">
            <Sparkles size={12} className="text-brand-accent" />
            {PORTFOLIO_DATA.role}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold leading-[1] md:leading-[0.85] tracking-tighter mb-8"
        >
          <span className="text-white/10 block mb-2 text-2xl md:text-5xl">PORTFOLIO</span>
          <span className="text-brand-accent block sm:inline leading-none tracking-tight whitespace-nowrap text-[clamp(24px,6.5vw,96px)] md:text-8xl lg:text-9xl">
            {PORTFOLIO_DATA.name.toUpperCase()}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-base md:text-xl text-brand-primary/60 leading-relaxed mb-10"
        >
          {PORTFOLIO_DATA.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
            Xem dự án <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-secondary w-full sm:w-auto text-center">
            Liên hệ ngay
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Scroll</span>
      </motion.div>
    </section>
  );
}
