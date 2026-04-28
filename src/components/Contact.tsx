import { motion } from 'motion/react';
import { Mail, Phone, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-8 py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-12 tracking-tighter"
        >
          HÃY CÙNG TẠO NÊN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400 italic">SỰ KHÁC BIỆT</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-16">
          <a 
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center gap-4 p-5 md:p-6 glass-card hover:bg-white/10 transition-all group"
          >
            <div className="shrink-0 w-12 h-12 bg-brand-accent/20 rounded-full flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <Mail size={20} />
            </div>
            <div className="text-left overflow-hidden">
              <div className="text-[10px] uppercase tracking-widest opacity-50">Email</div>
              <div className="font-bold text-sm sm:text-base truncate">{PORTFOLIO_DATA.email}</div>
            </div>
          </a>
          
          <a 
            href={`https://zalo.me/${PORTFOLIO_DATA.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center gap-4 p-5 md:p-6 glass-card hover:bg-white/10 transition-all group"
          >
            <div className="shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Phone size={20} />
            </div>
            <div className="text-left overflow-hidden">
              <div className="text-[10px] uppercase tracking-widest opacity-50">Phone/Zalo</div>
              <div className="font-bold text-sm sm:text-base truncate">{PORTFOLIO_DATA.phone}</div>
            </div>
          </a>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto px-2"
        >
          <div className="relative">
            <input 
              type="text" 
              placeholder="Lời nhắn cho tôi..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 md:py-6 pl-6 pr-16 md:px-8 text-base md:text-lg focus:outline-none focus:border-brand-accent transition-colors"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-brand-accent text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <Send size={18} className="md:w-6 md:h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
