import { ScrollReveal } from './ScrollReveal';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function HowItWorks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const videoIds = [
    "Z-ONIcYzM6M",
    "5J5xU9p0q50",
    "Y_yZGURkbuY",
    "__Itet9eBLQ",
    "HyfDpwx1GTI",
    "i-5hoUPE1Rc",
    "2nifL5BgEmM",
    "gC-OhSoQ6t0"
  ];

  return (
    <section className="py-[100px] bg-[#0A0A0F] overflow-hidden">
      <ScrollReveal>
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <div className="text-[0.8rem] font-bold tracking-widest uppercase text-[#7C6EFF] mb-3">NGGAK PAKE RIBET</div>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.2]">
              Cuma <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C6EFF] to-[#A855F7]">3 Langkah Gampang</span>
            </h2>
            <p className="text-[#8888AA] text-[1.1rem] mt-5 leading-[1.6]">
              Sistem AI kita yang ngerjain 9 tahap produksi ribet di belakang layar. Tugas kamu cuma masukin bahan, biar AI yang atur jadi prompt video siap pakai.
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <ScrollReveal className="relative z-10">
              <div className="group flex flex-col h-full bg-gradient-to-b from-[#12121A]/80 to-[#0C0C12]/90 border border-white/[0.04] hover:border-[#7C6EFF]/30 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(124,110,255,0.05)]">
                {/* Minimalist Step Label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[0.75rem] font-bold tracking-widest text-[#7C6EFF] bg-[#7C6EFF]/10 px-2.5 py-1 rounded-full">
                    01 / STEP
                  </span>
                  <div className="h-[1px] flex-grow ml-4 bg-white/[0.05] group-hover:bg-[#7C6EFF]/20 transition-colors duration-300"></div>
                </div>

                <h3 className="font-heading text-white font-bold text-[1.15rem] mb-4 text-left">
                  Masukin Info Singkat
                </h3>
                
                {/* ELEGANT 1:1 IMAGE FRAME */}
                <div className="mb-5 w-full aspect-square rounded-xl overflow-hidden border border-white/[0.06] bg-[#08080C] relative shrink-0 flex items-center justify-center shadow-inner transition-all duration-300 group-hover:border-[#7C6EFF]/20">
                  <img
                    src="https://dopfs.com/wp-content/uploads/2026/07/ugc-step-2.png"
                    alt="Masukin Info Singkat"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                </div>

                <p className="text-[#8888AA] text-[0.85rem] leading-[1.6] text-left mt-auto">
                  Upload foto produk & tulis deskripsi singkat. Praktis dan instan!
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="relative z-10" delay={0.1}>
              <div className="group flex flex-col h-full bg-gradient-to-b from-[#12121A]/80 to-[#0C0C12]/90 border border-white/[0.04] hover:border-[#7C6EFF]/30 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(124,110,255,0.05)]">
                {/* Minimalist Step Label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[0.75rem] font-bold tracking-widest text-[#7C6EFF] bg-[#7C6EFF]/10 px-2.5 py-1 rounded-full">
                    02 / STEP
                  </span>
                  <div className="h-[1px] flex-grow ml-4 bg-white/[0.05] group-hover:bg-[#7C6EFF]/20 transition-colors duration-300"></div>
                </div>

                <h3 className="font-heading text-white font-bold text-[1.15rem] mb-4 text-left">
                  Sutradara AI Action
                </h3>
                
                {/* ELEGANT 1:1 IMAGE FRAME */}
                <div className="mb-5 w-full aspect-square rounded-xl overflow-hidden border border-white/[0.06] bg-[#08080C] relative shrink-0 flex items-center justify-center shadow-inner transition-all duration-300 group-hover:border-[#7C6EFF]/20">
                  <img
                    src="https://dopfs.com/wp-content/uploads/2026/07/ugc-step-1.png"
                    alt="Sutradara AI Action"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                </div>

                <p className="text-[#8888AA] text-[0.85rem] leading-[1.6] text-left mt-auto">
                  AI otomatis meracik script, transisi, & angle kamera yang super konsisten.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="relative z-10" delay={0.2}>
              <div className="group flex flex-col h-full bg-gradient-to-b from-[#12121A]/80 to-[#0C0C12]/90 border border-white/[0.04] hover:border-[#7C6EFF]/30 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(124,110,255,0.05)]">
                {/* Minimalist Step Label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[0.75rem] font-bold tracking-widest text-[#7C6EFF] bg-[#7C6EFF]/10 px-2.5 py-1 rounded-full">
                    03 / STEP
                  </span>
                  <div className="h-[1px] flex-grow ml-4 bg-white/[0.05] group-hover:bg-[#7C6EFF]/20 transition-colors duration-300"></div>
                </div>

                <h3 className="font-heading text-white font-bold text-[1.15rem] mb-4 text-left">
                  Copas & Render
                </h3>
                
                {/* ELEGANT 1:1 IMAGE FRAME */}
                <div className="mb-5 w-full aspect-square rounded-xl overflow-hidden border border-white/[0.06] bg-[#08080C] relative shrink-0 flex items-center justify-center shadow-inner transition-all duration-300 group-hover:border-[#7C6EFF]/20">
                  <img
                    src="https://dopfs.com/wp-content/uploads/2026/07/ugc-step-3.png"
                    alt="Copas & Render"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                </div>

                <p className="text-[#8888AA] text-[0.85rem] leading-[1.6] text-left mt-auto">
                  Copy-paste prompt detail ke AI Video Generator favoritmu. Selesai!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="text-center max-w-[800px] mx-auto mb-10 px-6">
          <h3 className="font-heading text-[1.5rem] font-bold text-white leading-[1.2]">
            Dan Ini <span className="text-[#F5C842]">Hasil Akhirnya...</span>
          </h3>
        </div>

        {/* MOCKUP YOUTUBE SHORTS SLIDER */}
        <style>
          {`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        </style>
        <div className="mb-10 w-full relative max-w-[1400px] mx-auto px-12 group">
          <button 
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#7C6EFF]/80 backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar py-4"
          >
            {videoIds.map((id, idx) => (
              <div key={`v1-${idx}`} className="shrink-0 w-[240px] md:w-[260px] aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(124,110,255,0.15)] bg-[#1E1E2A] border border-white/10 relative snap-center">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Demo Video ${idx + 1}`}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white md:opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#7C6EFF]/80 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
}


