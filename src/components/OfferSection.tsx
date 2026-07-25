import { ScrollReveal } from './ScrollReveal';

export function OfferSection() {
  return (
    <section id="harga" className="py-[90px] bg-slate-100/90 px-4 sm:px-6 relative overflow-hidden scroll-mt-16">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-100/60 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1050px] mx-auto relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-10">
            <div className="text-[0.78rem] font-black tracking-widest uppercase text-emerald-800 mb-3 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full inline-block shadow-xs">
              🔥 PENAWARAN KHUSUS PELUNCURAN
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,3.8vw,2.8rem)] font-black text-slate-900 leading-[1.15]">
              PENAWARAN KHUSUS PELUNCURAN <br />
              <span className="grad-gold">Akses Lifetime Cuma Rp99.000</span>
            </h2>
            <p className="font-subheading text-[1rem] sm:text-[1.1rem] leading-[1.5] text-slate-600 mt-2 max-w-[640px] mx-auto font-medium">
              Akses Lifetime | Sekali Bayar | Tanpa Biaya Langganan Bulanan SMART-UGC
            </p>
          </div>
        </ScrollReveal>

        {/* Highlights Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8 max-w-[900px] mx-auto">
          <div className="bg-white border border-slate-200 px-4 py-2 rounded-full text-[0.85rem] font-bold text-slate-800 flex items-center gap-2 shadow-xs">
            <span className="text-emerald-600 font-black">✓</span> Rp99.000 Sekali Bayar Selamanya
          </div>
          <div className="bg-white border border-slate-200 px-4 py-2 rounded-full text-[0.85rem] font-bold text-slate-800 flex items-center gap-2 shadow-xs">
            <span className="text-emerald-600 font-black">✓</span> Tanpa Biaya Bulanan SMART-UGC
          </div>
          <div className="bg-white border border-slate-200 px-4 py-2 rounded-full text-[0.85rem] font-bold text-slate-800 flex items-center gap-2 shadow-xs">
            <span className="text-emerald-600 font-black">✓</span> Akses Langsung Selamanya
          </div>
        </div>

        {/* PRICING CARD & VALUE STACK */}
        <div className="flex justify-center">
          <ScrollReveal className="bg-white border border-slate-300 rounded-3xl p-6 sm:p-9 relative w-full max-w-[620px] shadow-lg">
            
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[0.78rem] tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md border border-amber-300">
              🔥 PROMO PELUNCURAN RESMI
            </div>

            <div className="text-center mb-6 mt-2">
              <div className="text-[0.8rem] text-indigo-700 font-black uppercase tracking-widest">Lifetime License</div>
              <h3 className="font-heading text-[1.6rem] sm:text-[1.8rem] font-black text-slate-900">Miliki SMART-UGC Sekarang</h3>
              <p className="text-[0.85rem] text-slate-600 font-medium">Satu kali bayar untuk akses seumur hidup</p>
            </div>

            {/* Price Box */}
            <div className="bg-slate-50 border border-emerald-300 rounded-2xl p-5 text-center mb-6 relative overflow-hidden">
              <div className="inline-block bg-amber-100 border border-amber-300 text-amber-900 font-extrabold text-[0.78rem] px-3 py-1 rounded-full mb-3 animate-pulse">
                ⏰ Promo Rp99.000 Hanya Sampai 17 Agustus 2026!
              </div>
              <div className="text-[0.85rem] text-slate-500 line-through mb-1 font-bold">
                Harga Normal: Rp498.000
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[1.3rem] font-black text-amber-600">Rp</span>
                <span className="font-heading text-[3.5rem] font-black text-slate-900 leading-none">
                  99.000
                </span>
              </div>
              <div className="text-[0.82rem] text-emerald-700 font-black mt-2">
                ✓ Sekali Bayar · Tanpa Biaya Langganan Bulanan SMART-UGC
              </div>

              {/* Tiered Price Timeline Notice */}
              <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left text-xs bg-amber-50/90 p-3.5 rounded-xl border border-amber-200">
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-black text-sm">🔥</span>
                  <div>
                    <span className="font-black text-slate-900 block">S/d 17 Agustus 2026:</span>
                    <span className="text-amber-800 font-extrabold text-[0.85rem]">Rp 99.000</span> (Diskon Terbesar)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-600 font-black text-sm">📈</span>
                  <div>
                    <span className="font-black text-slate-900 block">Setelah 17 Agustus 2026:</span>
                    <span className="text-indigo-800 font-extrabold text-[0.85rem]">Rp 199.000</span> (Sebelum Normal <span className="line-through text-slate-500">Rp 498.000</span>)
                  </div>
                </div>
              </div>
            </div>

            {/* WHAT YOU GET LIST */}
            <div className="mb-6">
              <div className="text-[0.78rem] font-black text-indigo-700 uppercase tracking-wider mb-3">
                ANDA MENDAPATKAN:
              </div>
              <ul className="space-y-2.5 text-[0.88rem] text-slate-800">
                <li className="flex items-center gap-2 font-semibold">
                  <span className="text-emerald-600 font-black">✅</span> Akses penuh aplikasi SMART-UGC
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span className="text-emerald-600 font-black">✅</span> Mode Praktis Berbasis Formula (tanpa API Key)
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span className="text-emerald-600 font-black">✅</span> Mode AI dengan API Key milik sendiri
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span className="text-emerald-600 font-black">✅</span> Pembuat ide, naskah, storyboard, dan prompt
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span className="text-emerald-600 font-black">✅</span> Ekspor paket produksi
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <span className="text-emerald-600 font-black">✅</span> Pembaruan sistem secara berkala
                </li>
              </ul>
            </div>

            {/* Checkout Link */}
            <a 
              href="https://smartbook.myscalev.com/smart-ugc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex justify-center items-center gap-2.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white py-4.5 px-6 rounded-2xl font-black text-[1.05rem] sm:text-[1.15rem] w-full shadow-lg shadow-red-500/30 hover:-translate-y-1 transition-all border border-red-400 uppercase"
            >
              <span className="text-2xl">🚀</span>
              <span>Dapatkan Akses SMART-UGC Sekarang</span>
            </a>

            <div className="text-center text-[0.78rem] text-slate-500 mt-4 font-medium italic border-t border-slate-100 pt-3">
              *Akses SMART-UGC tidak memiliki biaya langganan bulanan. Penggunaan API Key atau platform AI eksternal mengikuti ketentuan penyedia layanan masing-masing.
            </div>

          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

