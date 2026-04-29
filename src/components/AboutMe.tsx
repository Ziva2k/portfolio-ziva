import { motion } from 'motion/react';
import { User, Cake, Heart, MapPin, Mail, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';
import { useRef, useEffect, useState, useCallback } from 'react';

export default function AboutMe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = PORTFOLIO_DATA.aboutMe?.images || [];

  const scrollToSlide = useCallback((index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const child = container.children[index] as HTMLElement;
    if (!child) return;

    const scrollLeft = child.offsetLeft - container.offsetWidth / 2 + child.offsetWidth / 2;
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (!images || images.length === 0) return;
    if (isPaused) return;

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      scrollToSlide(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [images, isPaused, activeIndex, scrollToSlide]);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;

    let minDistance = Infinity;
    let closestIndex = activeIndex;

    Array.from(container.children).forEach((child, index) => {
      const childElement = child as HTMLElement;
      const childCenter = childElement.offsetLeft + childElement.offsetWidth / 2;
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      const distance = Math.abs(childCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  if (!PORTFOLIO_DATA.aboutMe) return null;

  const { fullName, nickname, dob, hobbies, education, email, phone } = PORTFOLIO_DATA.aboutMe;

  return (
    <section id="about" className="px-6 md:px-8 py-10 md:py-24 bg-white/[0.01]">
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
                <h3 className="text-brand-primary/60 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <User size={14} className="text-brand-accent" /> Họ và tên
                </h3>
                <p className="text-2xl font-bold">{fullName} <span className="text-brand-accent italic ml-2">({nickname})</span></p>
              </div>

              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-brand-primary/60 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Cake size={14} className="text-brand-accent" /> Ngày sinh
                  </h3>
                  <p className="text-sm md:text-base font-medium">{dob}</p>
                </div>

                {phone && (
                  <div className="group cursor-pointer">
                    <h3 className="text-brand-primary/60 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 transition-colors group-hover:text-brand-accent">
                      <Phone size={14} className="text-brand-accent" /> Phone
                    </h3>
                    <p className="text-sm md:text-base font-bold transition-colors group-hover:text-brand-accent">
                      {phone}
                    </p>
                  </div>
                )}

                {email && (
                  <div className="group cursor-pointer col-span-2 md:col-span-1">
                    <h3 className="text-brand-primary/60 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 transition-colors group-hover:text-brand-accent">
                      <Mail size={14} className="text-brand-accent" /> Email
                    </h3>
                    <p className="text-sm font-medium break-all transition-colors group-hover:text-brand-accent">
                      {email}
                    </p>
                  </div>
                )}

                {education && education.length > 0 && (
                  <div className="col-span-2 md:col-span-1">
                    <h3 className="text-brand-primary/60 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      <MapPin size={14} className="text-brand-accent" /> Học vấn
                    </h3>
                    <ul className="space-y-1">
                      {education.map((item, idx) => (
                        <li key={idx} className="text-sm font-medium leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-brand-primary/60 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
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
            <div
              className="relative group w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <div
                ref={carouselRef}
                onScroll={handleScroll}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0 relative"
              >
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="group/item w-[85vw] md:w-[300px] snap-center shrink-0 aspect-[3/4] rounded-2xl overflow-hidden glass-card p-2 border-white/10 cursor-pointer"
                    onTouchStart={() => { }}
                  >
                    <div className="w-full h-full rounded-xl overflow-hidden relative">
                      <img
                        src={img}
                        alt={`Ziva ${i}`}
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out brightness-[0.6] grayscale-[20%] group-hover/item:brightness-100 group-hover/item:grayscale-0 group-hover/item:scale-105 group-active/item:brightness-100 group-active/item:grayscale-0 group-active/item:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between px-2 text-brand-primary/60">
                <span className="text-[10px] uppercase font-bold tracking-widest flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-brand-primary/20" />
                  ← Vuốt để xem thêm
                </span>
                <div className="flex gap-1.5 items-center">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSlide(idx)}
                      className={`rounded-full transition-all duration-300 ${idx === activeIndex
                        ? 'w-4 h-1.5 bg-brand-accent'
                        : 'w-1.5 h-1.5 bg-brand-primary/20 hover:bg-brand-primary/40'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
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
