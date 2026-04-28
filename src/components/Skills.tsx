import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-8 py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 md:mb-20"
        >
          <div className="w-12 h-12 bg-brand-accent/20 rounded-xl flex items-center justify-center">
            <Zap className="text-brand-accent" size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-left">Kỹ năng & Chuyên môn</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col h-full"
            >
              <h3 className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span 
                    key={skill}
                    className="text-sm text-brand-primary/80 bg-white/5 px-3 py-1 rounded-md hover:bg-brand-accent/10 hover:text-brand-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Call to Assistant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass-card border-brand-accent/20 bg-brand-accent/5 text-center"
        >
          <p className="text-brand-primary/60 text-sm mb-4 italic">
            "Bạn muốn biết tôi đã áp dụng các kỹ năng này vào các Case Study cụ thể như thế nào?"
          </p>
          <div className="flex justify-center">
             <button 
                onClick={() => {
                  // This is a bit of a hack to trigger the AI Assistant from outside
                  const event = new CustomEvent('open-ai-chat', { detail: 'Hãy kể cho tôi nghe về cách bạn sử dụng Facebook Ads và TikTok Shop để tối ưu doanh thu.' });
                  window.dispatchEvent(event);
                }}
                className="text-xs font-bold uppercase tracking-widest text-brand-accent hover:underline flex items-center gap-2"
              >
                Hỏi Trợ lý ảo của tôi <Zap size={12} />
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
