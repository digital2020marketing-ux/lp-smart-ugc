import { ScrollReveal } from './ScrollReveal';

export function FinalCTASection() {
  return (
    <section className="py-[100px] px-4 sm:px-6 relative text-center overflow-hidden bg-slate-50 border-t border-slate-200">
      
      {/* Glow Effect */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center top, rgba(99,102,241,0.08) 0%, transparent 70%)' }}></div>

      <div className="max-w-[800px] mx-auto relative z-10">
        
        {/* Continuous Ticker */}
        <div className="flex gap-12 overflow-hidden mb-12" style={{ maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}>
          <div className="flex gap-12 animate-ticker whitespace-nowrap">
            {[
              "Ide Video Iklan", "Naskah Promosi", "Kalimat Pembuka (Hook)", "Storyboard Adegan", "Arahan Kamera & Pencahayaan",
              "Prompt Gambar & Video AI", "Panduan Referensi Visual", "Paket Produksi Siap Pakai"
            ].map((item, i) => (
              <span key={`ft1-${i}`} className="font-heading text-[1rem] font-bold text-slate-500 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0"></span>{item}
              </span>
            ))}
            {[
              "Ide Video Iklan", "Naskah Promosi", "Kalimat Pembuka (Hook)", "Storyboard Adegan", "Arahan Kamera & Pencahayaan",
              "Prompt Gambar & Video AI", "Panduan Referensi Visual", "Paket Produksi Siap Pakai"
            ].map((item, i) => (
              <span key={`ft2-${i}`} className="font-heading text-[1rem] font-bold text-slate-500 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0"></span>{item}
              </span>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="text-[0.78rem] font-black tracking-widest uppercase text-emerald-800 mb-4 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full inline-block shadow-xs">
            🔥 PROMO PELUNCURAN RESMI
          </div>

          <h2 className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-black text-slate-900 leading-[1.2] mb-5">
            JANGAN BIARKAN FOTO PRODUK HANYA DIAM DI KATALOG
          </h2>

          <p className="font-subheading text-[1rem] sm:text-[1.1rem] leading-[1.6] text-slate-700 mb-8 max-w-[680px] mx-auto font-medium">
            Ubah satu foto produk dan informasi singkat menjadi konsep video iklan yang lebih rapi, terarah, dan siap diproduksi.
          </p>

          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl max-w-[500px] mx-auto text-center">
            <div className="font-black text-amber-900 text-[1.1rem]">PROMO PELUNCURAN HANYA RP99.000</div>
            <div className="text-[0.85rem] text-slate-700 font-semibold mt-1">Akses Lifetime - Tanpa Biaya Langganan Bulanan SMART-UGC</div>
          </div>

          <a 
            href="#harga" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950 px-8 sm:px-12 py-5 rounded-2xl text-[1.1rem] sm:text-[1.2rem] font-black shadow-md hover:-translate-y-1 transition-all border border-amber-400 relative group overflow-hidden uppercase"
          >
            <div className="absolute inset-0 bg-white/30 -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="text-2xl group-hover:scale-125 transition-transform">🚀</span> 
            <span className="text-center leading-[1.2]">
              Dapatkan Akses SMART-UGC Sekarang
            </span>
          </a>

          <div className="flex gap-6 justify-center flex-wrap mt-8">
            <div className="flex items-center gap-2 text-[0.85rem] text-slate-600 font-semibold"><span className="text-[1rem]">♾️</span> Akses Lifetime</div>
            <div className="flex items-center gap-2 text-[0.85rem] text-slate-600 font-semibold"><span className="text-[1rem]">⚡</span> Sekali Bayar</div>
            <div className="flex items-center gap-2 text-[0.85rem] text-slate-600 font-semibold"><span className="text-[1rem]">🛡️</span> Garansi Sistem Aktif</div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

