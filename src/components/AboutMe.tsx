import { motion } from 'motion/react';
import { User, Cake, Heart, MapPin, Mail, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';
import { useRef, useEffect, useState } from 'react';

export default function AboutMe() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  const updateWidth = () => {
    if (scrollRef.current && constraintsRef.current) {
      setDragWidth(scrollRef.current.scrollWidth - constraintsRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  if (!PORTFOLIO_DATA.aboutMe) return null;

  const { fullName, nickname, dob, hobbies, education, email, phone, images } = PORTFOLIO_DATA.aboutMe;

  return (
    <section id="about" className="px-6 md:px-8 py-24 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12 md:mb-16"
        >
          <div className="w-12 h-12 bg-brand-accent/20 rounded-xl flex items-center justify-center text-brand-accent">
            <User size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Về Tôi</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-brand-primary/40 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <User size={14} className="text-brand-accent" /> Họ và tên
                </h3>
                <p className="text-2xl font-bold">{fullName} <span className="text-brand-accent italic ml-2">({nickname})</span></p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-brand-primary/40 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Cake size={14} className="text-brand-accent" /> Ngày sinh
                  </h3>
                  <p className="text-lg font-medium">{dob}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2 border-b border-white/5">
                {email && (
                  <div className="group cursor-pointer">
                    <h3 className="text-brand-primary/40 text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2 transition-colors group-hover:text-brand-accent">
                      <Mail size={14} className="text-brand-accent" /> Email
                    </h3>
                    <p className="text-sm font-medium break-all transition-colors group-hover:text-brand-accent">
                      {email}
                    </p>
                  </div>
                )}
                {phone && (
                  <div className="group cursor-pointer">
                    <h3 className="text-brand-primary/40 text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2 transition-colors group-hover:text-brand-accent">
                      <Phone size={14} className="text-brand-accent" /> Phone
                    </h3>
                    <p className="text-lg font-bold transition-colors group-hover:text-brand-accent">
                      {phone}
                    </p>
                  </div>
                )}
              </div>

              {education && education.length > 0 && (
                <div>
                  <h3 className="text-brand-primary/40 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <MapPin size={14} className="text-brand-accent" /> Học vấn
                  </h3>
                  <ul className="space-y-2">
                    {education.map((item, idx) => (
                      <li key={idx} className="text-sm font-medium leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="text-brand-primary/40 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Heart size={14} className="text-brand-accent" /> Sở thích
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {hobbies.map((hobby) => (
                    <span 
                      key={hobby}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium hover:bg-brand-accent/20 transition-colors"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full relative"
          >
            <div className="relative group overflow-hidden" ref={constraintsRef}>
              <div className="overflow-hidden cursor-grab active:cursor-grabbing rounded-3xl">
                <motion.div 
                  drag="x"
                  dragConstraints={{ right: 0, left: -dragWidth }}
                  ref={scrollRef}
                  className="flex gap-4"
                  style={{ width: 'max-content' }}
                >
                  {(images || []).map((img, i) => (
                    <div key={i} className="w-[240px] md:w-[300px] aspect-[3/4] shrink-0 rounded-2xl overflow-hidden glass-card p-2 border-white/10">
                      <img 
                        src={img} 
                        alt={`Ziva ${i}`} 
                        className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                        onLoad={updateWidth}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
              
              <div className="mt-6 flex items-center justify-between px-2 text-brand-primary/40">
                <span className="text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
                   <div className="w-8 h-[1px] bg-brand-primary/20" />
                   ← Kéo để xem thêm
                </span>
                <span className="text-[10px] items-center gap-2 flex">
                  <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
                  {images?.length || 0} Hình ảnh
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Quote/Personal Tagline */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-24 text-center"
        >
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-brand-primary/80 leading-relaxed px-4">
                "Tôi tin rằng Marketing không chỉ là dữ liệu, <br className="hidden md:block" />
                mà còn là sự thấu hiểu con người và đam mê trong từng chuyển động."
            </p>
        </motion.div>
      </div>
    </section>
  );
}
