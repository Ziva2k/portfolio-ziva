import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative grid md:grid-cols-2 gap-8 items-center py-16 border-b border-white/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      
      <div className="flex flex-col justify-center">
        <div className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
          {project.category}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-brand-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-brand-primary/60 mb-8 leading-relaxed">
          {project.description}
        </p>
        
        <div className="space-y-3 mb-8">
          {project.results.map((result, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle2 size={16} className="text-brand-accent" />
              {result}
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
