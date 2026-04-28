import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-8 py-24 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 md:mb-16"
        >
          <div className="w-12 h-12 bg-brand-accent/20 rounded-xl flex items-center justify-center">
            <Briefcase className="text-brand-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Kinh nghiệm</h2>
        </motion.div>
        
        <div className="space-y-12">
          {PORTFOLIO_DATA.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-6 md:pl-8 border-l border-white/10"
            >
              <div className="absolute top-0 left-[-5px] w-[9px] h-[9px] bg-brand-accent rounded-full" />
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                <span className="text-xs md:text-sm font-bold text-brand-accent uppercase tracking-widest bg-brand-accent/10 px-2 py-1 rounded w-fit">{exp.period}</span>
              </div>
              <div className="text-base md:text-lg font-medium text-brand-primary/80 mb-2">{exp.company}</div>
              <p className="text-brand-primary/60 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
