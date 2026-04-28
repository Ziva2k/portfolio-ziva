import { PORTFOLIO_DATA } from '../constants';

export default function Footer() {
  return (
    <footer className="px-8 py-12 border-t border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter uppercase">
          ziva<span className="text-brand-accent">.</span>
        </div>
        
        <div className="text-sm opacity-40">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold opacity-60">
          <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
