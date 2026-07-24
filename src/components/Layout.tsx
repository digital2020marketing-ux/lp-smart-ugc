import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [timeLeft, setTimeLeft] = useState(7 * 3600 + 42 * 60);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 7 * 3600 + 59 * 60 + 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-[20px] border-b border-slate-200 shadow-xs">
      <nav className="px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between max-w-[1200px] mx-auto">
        
        {/* Logo */}
        <div className="flex items-center gap-3 mr-2">
          <a href="#" className="flex flex-col text-left focus:outline-none group">
            <div className="font-heading font-black text-[1.15rem] sm:text-[1.25rem] text-slate-900 whitespace-nowrap leading-tight tracking-tight group-hover:text-indigo-600 transition-colors">
              SMART-<span className="text-[#6366F1]">UGC</span>
            </div>
            {/* Mobile Countdown under logo */}
            <div className="flex sm:hidden items-center gap-1.5 mt-0.5">
               <span className="text-amber-700 text-[0.65rem] font-black uppercase tracking-wider animate-pulse">⚡ Promo Launch</span>
               <span className="text-slate-400 text-[0.65rem]">•</span>
               <div className="text-slate-800 font-extrabold tabular-nums text-[0.75rem]">
                 {String(h).padStart(2, '0')}:{String(m).padStart(2, '0')}:{String(s).padStart(2, '0')}
               </div>
            </div>
          </a>
        </div>

        {/* Navigation Links for Sales Page */}
        <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-bold text-slate-700">
          <a href="#fitur" className="hover:text-indigo-600 transition-colors">Fitur Utama</a>
          <a href="#workflow" className="hover:text-indigo-600 transition-colors">Cara Kerja</a>
          <a href="#perbandingan" className="hover:text-indigo-600 transition-colors">Keunggulan</a>
          <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a>
        </div>

        {/* Desktop Countdown & CTA */}
        <div className="flex items-center gap-2 sm:gap-3 text-[0.85rem] font-semibold">
          <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
            <span className="text-amber-700 text-xs font-black uppercase tracking-wider animate-pulse">⚡ Flash Sale</span>
            <div className="text-slate-900 font-black tabular-nums text-xs">
              {String(h).padStart(2, '0')}:{String(m).padStart(2, '0')}:{String(s).padStart(2, '0')}
            </div>
          </div>
          <a href="#harga" className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-black px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[0.75rem] sm:text-[0.85rem] font-black shadow-md hover:-translate-y-0.5 transition-all whitespace-nowrap uppercase">
            <span>Ambil Promo Rp 99rb</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 py-4 flex flex-col gap-3 font-extrabold text-slate-800 text-sm shadow-lg animate-in slide-in-from-top-2">
          <a 
            href="#fitur" 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-1.5 hover:text-indigo-600 border-b border-slate-100"
          >
            Fitur Utama
          </a>
          <a 
            href="#workflow" 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-1.5 hover:text-indigo-600 border-b border-slate-100"
          >
            Cara Kerja
          </a>
          <a 
            href="#perbandingan" 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-1.5 hover:text-indigo-600 border-b border-slate-100"
          >
            Keunggulan
          </a>
          <a 
            href="#faq" 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-1.5 hover:text-indigo-600 border-b border-slate-100"
          >
            FAQ
          </a>
          <a 
            href="#harga" 
            onClick={() => setMobileMenuOpen(false)} 
            className="py-2 text-amber-700 font-black uppercase text-xs flex items-center justify-between"
          >
            <span>🚀 Ambil Promo Rp99.000</span>
            <span>→</span>
          </a>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 px-6 text-center text-slate-500 text-[0.85rem]">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-heading font-black text-lg mb-3 text-slate-900">
          SMART-<span className="text-[#6366F1]">UGC</span>
        </div>
        <div className="flex gap-6 justify-center flex-wrap mb-4 font-medium">
          <a href="#fitur" className="text-slate-600 hover:text-slate-900 transition-colors">Fitur Utama</a>
          <a href="#workflow" className="text-slate-600 hover:text-slate-900 transition-colors">Cara Kerja</a>
          <a href="#perbandingan" className="text-slate-600 hover:text-slate-900 transition-colors">Keunggulan</a>
          <a href="#harga" className="text-slate-600 hover:text-slate-900 transition-colors">Harga Promo</a>
          <a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors">FAQ</a>
        </div>
        <div className="text-[0.85rem] text-slate-400">© 2026 SMART-UGC · All Rights Reserved</div>
      </div>
    </footer>
  );
}


