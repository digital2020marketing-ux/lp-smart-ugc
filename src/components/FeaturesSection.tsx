import { ScrollReveal } from './ScrollReveal';

export function FeaturesSection() {
  return (
    <section id="fitur" className="py-[80px] bg-slate-50 overflow-hidden scroll-mt-16">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        
        {/* Main Header */}
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.78rem] font-bold tracking-widest uppercase border border-indigo-200 bg-indigo-50 text-indigo-800 mb-3 shadow-xs">
              💎 FITUR UTAMA SMART-UGC
            </div>
            <h2 className="font-heading text-[clamp(1.7rem,3.8vw,2.6rem)] font-black text-slate-900 leading-[1.2]">
              Fitur Lengkap Untuk Membantu <br className="hidden md:block" />
              <span className="grad-text">Menyusun Produksi Iklan Terarah</span>
            </h2>
            <p className="text-[0.98rem] sm:text-[1.05rem] leading-[1.5] text-slate-600 mt-2 max-w-[680px] mx-auto font-medium">
              Semua fitur dirancang agar siapapun dapat menyiapkan materi promosi secara sistematis.
            </p>
          </div>
        </ScrollReveal>

        {/* MOCKUP LANDSCAPE DASHBOARD SLIDER */}
        <div className="relative w-full mx-auto mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          <style>
            {`
              @keyframes slide-landscape {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 0.5rem)); }
              }
              .animate-slide-landscape {
                animation: slide-landscape 40s linear infinite;
              }
            `}
          </style>

          <div className="flex gap-4 w-max animate-slide-landscape hover:[animation-play-state:paused]">
            {[
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-1.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-5.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-14.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-3.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-8.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-13.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-4.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-11.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-1.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-5.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-14.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-3.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-8.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-13.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-4.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-11.png"
            ].map((item, idx) => (
              <div key={idx} className="w-[260px] h-[146px] md:w-[420px] md:h-[236px] shrink-0 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white relative group">
                <img 
                  loading="lazy" 
                  src={item} 
                  alt="Landscape Dashboard Mockup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* 7 MAIN FEATURES GRID */}
        <div className="space-y-8">
          
          {/* FEATURE 1: Penjaga Konsistensi Wajah & Produk */}
          <ScrollReveal className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-[0.75rem] font-extrabold mb-2">
              FITUR 1
            </div>
            <h3 className="font-heading text-xl font-black text-slate-900 mb-2">
              1. PENJAGA KONSISTENSI WAJAH DAN PRODUK
            </h3>
            <p className="text-slate-600 text-[0.88rem] leading-[1.5] mb-4">
              SMART-UGC membantu membuat panduan visual agar wajah, pakaian, produk, dan kemasan terlihat lebih konsisten.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[0.82rem] font-semibold text-slate-800">
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Referensi karakter beberapa sudut</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Referensi ekspresi wajah</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Referensi bentuk & kemasan produk</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Referensi lokasi</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Referensi pencahayaan</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Warna & gaya visual seragam</div>
            </div>
          </ScrollReveal>

          {/* FEATURE 2: Pembuat Naskah Iklan Otomatis */}
          <ScrollReveal className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-[0.75rem] font-extrabold mb-2">
              FITUR 2
            </div>
            <h3 className="font-heading text-xl font-black text-slate-900 mb-2">
              2. PEMBUAT NASKAH IKLAN OTOMATIS
            </h3>
            <p className="text-slate-600 text-[0.88rem] leading-[1.5] mb-4">
              Cukup masukkan informasi singkat tentang produk Anda. Sistem membantu menyusun elemen naskah terarah.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[0.82rem] font-semibold text-slate-800">
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100"><span className="text-emerald-600 font-bold">✓</span> Kalimat pembuka</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100"><span className="text-emerald-600 font-bold">✓</span> Masalah konsumen</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100"><span className="text-emerald-600 font-bold">✓</span> Manfaat produk</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100"><span className="text-emerald-600 font-bold">✓</span> Alasan membeli</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100"><span className="text-emerald-600 font-bold">✓</span> Ajakan bertindak (CTA)</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100"><span className="text-emerald-600 font-bold">✓</span> Teks pada layar</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 sm:col-span-2"><span className="text-emerald-600 font-bold">✓</span> Narasi video & voice-over</div>
            </div>
          </ScrollReveal>

          {/* FEATURE 3: Psikologi Penjualan & Storyboard Otomatis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-[0.75rem] font-extrabold mb-2">
                FITUR 3
              </div>
              <h3 className="font-heading text-lg font-black text-slate-900 mb-2">
                3. PENDEKATAN PSIKOLOGI PENJUALAN
              </h3>
              <p className="text-slate-600 text-[0.85rem] leading-[1.5] mb-3">
                SMART-UGC menyediakan berbagai pendekatan emosional seperti rasa penasaran, FOMO, keinginan memiliki, kemudahan, penghematan, kenyamanan, bukti sosial, hingga urgensi.
              </p>
              <p className="text-[0.78rem] text-slate-500 italic bg-amber-50 border border-amber-200 p-2.5 rounded-xl">
                *Membantu membuat variasi materi iklan untuk diuji. Hasil akhir tetap dipengaruhi kualitas produk & penawaran Anda.
              </p>
            </ScrollReveal>

            <ScrollReveal className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-[0.75rem] font-extrabold mb-2">
                FITUR 4
              </div>
              <h3 className="font-heading text-lg font-black text-slate-900 mb-2">
                4. STORYBOARD OTOMATIS
              </h3>
              <p className="text-slate-600 text-[0.85rem] leading-[1.5] mb-3">
                Setiap konsep dipecah menjadi urutan adegan yang mudah dipahami:
              </p>
              <ul className="text-[0.82rem] font-medium text-slate-800 space-y-1">
                <li>• <strong>Adegan 1:</strong> Menarik Perhatian (Hook)</li>
                <li>• <strong>Adegan 2:</strong> Memperkenalkan Produk</li>
                <li>• <strong>Adegan 3:</strong> Menjelaskan Manfaat</li>
                <li>• <strong>Adegan 4:</strong> Menguatkan Alasan Membeli</li>
                <li>• <strong>Adegan 5:</strong> Ajakan Bertindak (CTA)</li>
              </ul>
            </ScrollReveal>
          </div>

          {/* FEATURE 5, 6, 7 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-[0.72rem] font-extrabold mb-2">
                FITUR 5
              </div>
              <h4 className="font-heading font-black text-slate-900 text-[1rem] mb-1.5">
                5. Penyambung Antaradegan
              </h4>
              <p className="text-slate-600 text-[0.82rem] leading-[1.5]">
                Menjaga hubungan antar adegan agar tidak terputus melalui panduan posisi karakter, arah gerakan, pencahayaan, dan transisi.
              </p>
            </ScrollReveal>

            <ScrollReveal className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-[0.72rem] font-extrabold mb-2">
                FITUR 6
              </div>
              <h4 className="font-heading font-black text-slate-900 text-[1rem] mb-1.5">
                6. Format Media Sosial
              </h4>
              <p className="text-slate-600 text-[0.82rem] leading-[1.5]">
                Disesuaikan untuk TikTok, Instagram Reels, YouTube Shorts, iklan marketplace, video katalog, & konten affiliate.
              </p>
            </ScrollReveal>

            <ScrollReveal className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-[0.72rem] font-extrabold mb-2">
                FITUR 7
              </div>
              <h4 className="font-heading font-black text-slate-900 text-[1rem] mb-1.5">
                7. Ekspor ke Platform Lain
              </h4>
              <p className="text-slate-600 text-[0.82rem] leading-[1.5]">
                Ekspor naskah produksi, storyboard, prompt gambar & video, serta arahan kamera/lighting dalam paket teks siap pakai.
              </p>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}

