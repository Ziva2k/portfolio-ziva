/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import BackToTop from './components/BackToTop';
import { PORTFOLIO_DATA } from './constants';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <AboutMe />
        
        <Skills />
        
        {/* Projects Section */}
        <section id="projects" className="px-6 md:px-8 py-10 md:py-24">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 md:mb-20"
            >
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
                Dự án <span className="text-brand-accent italic">tiêu biểu</span>
              </h2>
              <p className="text-brand-primary/60 max-w-md uppercase tracking-widest text-xs font-bold">
                Những chiến dịch mang lại giá trị thực tế và kết quả đo lường được.
              </p>
            </motion.div>
            
            <div className="space-y-0">
              {PORTFOLIO_DATA.projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        <Experience />
        
        <Contact />
      </main>
      
      <Footer />
      
      {/* Agentic UX Component */}
      <AIAssistant />
      
      {/* Mobile Floating Contact Button */}
      <a 
        href="#contact" 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-11/12 z-40 md:hidden btn-primary shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/10"
      >
        Liên hệ ngay
      </a>

      {/* Back To Top Button */}
      <BackToTop />

      {/* Global Background Noise Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

