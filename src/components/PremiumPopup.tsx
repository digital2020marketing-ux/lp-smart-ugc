import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export function PremiumPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    if (hasTriggered) return;

    const triggerPopup = () => {
      setIsOpen(true);
      setHasTriggered(true);
    };

    // Fallback: Trigger after 10 seconds if not already triggered
    const fallbackTimer = setTimeout(triggerPopup, 10000);

    // 1. Exit Intent (Mouse leaves top of viewport)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    // 2. Scroll depth (6%) & 3. Fast scroll mobile
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll depth (0 to 1)
      const scrollDepth = scrollHeight > 0 ? currentScrollY / scrollHeight : 0;

      if (scrollDepth > 0.06) {
        triggerPopup();
        return;
      }

      // Fast scroll mobile
      const currentTime = Date.now();
      const timeDiff = currentTime - lastScrollTime.current;
      const scrollDiff = currentScrollY - lastScrollY.current;

      if (window.innerWidth < 768 && timeDiff > 0 && timeDiff < 100) {
        const speed = Math.abs(scrollDiff / timeDiff);
        // Speed > 5px per ms is considered fast swipe
        if (speed > 5) {
          triggerPopup();
          return;
        }
      }

      lastScrollY.current = currentScrollY;
      lastScrollTime.current = currentTime;
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(fallbackTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTriggered]);

  // Countdown logic to July 23, 2026, 14:00 WIB
  const targetDate = new Date('2026-07-23T14:00:00+07:00').getTime();
  const [timeLeft, setTimeLeft] = useState(Math.max(0, targetDate - Date.now()));

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setTimeLeft(Math.max(0, targetDate - Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-[480px] relative overflow-hidden my-auto"
          >
            {/* Close button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Glowing effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-amber-100/50 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="p-6 md:p-8 relative z-0 text-center mt-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[0.75rem] font-black tracking-widest uppercase border border-emerald-200 bg-emerald-50 text-emerald-800 mb-4 shadow-xs">
                🚀 Promo Launch Terbatas
              </div>
              
              <h3 className="text-[1.4rem] md:text-[1.8rem] font-heading font-black text-slate-900 leading-tight mb-3">
                Klaim Diskon Promo Launch <br />
                <span className="text-amber-600">Cuma Rp 99.000 (Lifetime)</span>
              </h3>
              
              <p className="text-slate-600 text-[0.9rem] md:text-[0.95rem] mb-6 font-medium">
                Penjualan resmi DIBUKA! Hasilkan puluhan iklan UGC & Commercial tanpa biaya bulanan. Kesempatan diskon ini hanya berlaku periode launching.
              </p>

              <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-4 mb-6">
                <div className="text-[0.75rem] font-black text-indigo-900 uppercase tracking-wider mb-3">Harga Spesial Rp 99.000 Berakhir Pada:</div>
                <div className="flex justify-center gap-2 md:gap-3">
                  {[
                    { label: 'HARI', value: days },
                    { label: 'JAM', value: hours },
                    { label: 'MENIT', value: minutes },
                    { label: 'DETIK', value: seconds }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="bg-white border border-indigo-200 text-indigo-950 rounded-lg w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-xl md:text-2xl font-black tabular-nums shadow-xs">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <span className="text-[0.65rem] md:text-[0.7rem] text-slate-600 font-extrabold mt-1.5">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="#harga" 
                onClick={() => setIsOpen(false)}
                className="w-full relative overflow-hidden bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950 font-black py-3.5 md:py-4 px-6 rounded-xl text-[0.95rem] md:text-[1.05rem] shadow-md hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group border border-amber-400 uppercase"
              >
                <div className="absolute inset-0 bg-white/30 -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                YA, SAYA MAU LIFETIME CUMA RP 99.000
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <p className="text-[0.75rem] text-slate-500 font-semibold mt-4">
                *Sekali bayar · Bebas biaya bulanan selamanya · Akses Langsung
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
