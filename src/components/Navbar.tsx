import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Dự án', href: '#projects' },
    { name: 'Kinh nghiệm', href: '#experience' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-6 bg-brand-dark/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="text-xl font-bold tracking-tighter uppercase">
        ziva<span className="text-brand-accent">.</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-brand-accent transition-colors">
            {link.name}
          </a>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        <a href="#contact" className="hidden sm:flex btn-primary py-2 px-4 text-xs uppercase tracking-widest items-center gap-2">
          <span>Liên hệ</span>
          <Send size={12} />
        </a>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-brand-primary/80"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[83px] bg-brand-dark z-50 md:hidden flex flex-col p-8 space-y-8 border-t border-white/5"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold tracking-tight hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary w-full text-center py-4 text-sm font-bold uppercase tracking-widest"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
