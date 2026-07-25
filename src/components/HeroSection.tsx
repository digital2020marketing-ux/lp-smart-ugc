import { useState } from 'react';

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="pt-[105px] md:pt-[125px] pb-[70px] relative overflow-hidden glow-bg px-4 sm:px-6 bg-slate-50">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Top Urgency Badge */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.78rem] sm:text-[0.88rem] font-extrabold tracking-wider uppercase border border-amber-300 bg-amber-50 text-amber-950 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
            🔥 PROMO PELUNCURAN — AKSES LIFETIME HANYA RP99.000
          </div>
        </div>

        {/* Main Header Layout (Centered Single Column) */}
        <div className="max-w-[880px] mx-auto text-left mb-12">
          
          {/* Main Headline (Paling Besar) */}
          <h1 className="font-heading text-[clamp(1.9rem,4.2vw,3.2rem)] font-black leading-[1.15] tracking-tight mb-5 text-slate-900 text-center sm:text-left">
            <span className="text-indigo-600 underline decoration-indigo-300 underline-offset-4">PRODUK ANDA BAGUS.</span> <br />
            SAYANG JIKA CALON PEMBELI MELEWATKANNYA KARENA <span className="text-rose-600 underline decoration-rose-300 underline-offset-4">KONTENNYA KURANG MENARIK.</span>
          </h1>

          {/* Subheading (Ukuran Sedang) */}
          <p className="font-subheading text-[1.05rem] sm:text-[1.2rem] text-slate-700 font-medium leading-[1.6] mb-5 text-center sm:text-left">
            Ubah <strong className="text-amber-700 bg-amber-100/80 px-1.5 py-0.5 rounded border border-amber-200">1 foto produk</strong> menjadi <strong className="text-slate-900 font-extrabold">ide iklan, naskah promosi, storyboard, arahan visual, serta prompt gambar dan video AI</strong> yang lebih rapi dan siap digunakan untuk proses produksi.
          </p>

          {/* Kalimat Penguat */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 mb-5 shadow-xs">
            <p className="text-[0.92rem] text-slate-600 mb-2 font-medium">
              Tidak punya studio, model, tim kreatif, atau kemampuan membuat prompt AI?
            </p>
            <p className="text-[0.98rem] text-slate-900 font-bold leading-[1.5]">
              SMART-UGC membantu Anda memulai tanpa harus memikirkan semuanya dari nol.
            </p>
            <p className="text-[0.88rem] text-slate-600 mt-2 italic">
              Cukup unggah satu foto produk, masukkan informasi singkat, lalu pilih gaya video yang Anda inginkan.
            </p>
          </div>

          {/* Checklist Manfaat Utama */}
          <div className="mb-6 bg-slate-100/80 border border-slate-200 rounded-2xl p-4 sm:p-5">
            <p className="text-[0.85rem] font-black text-indigo-900 uppercase tracking-wider mb-3">
              Dengan SMART-UGC, Anda dapat menyiapkan:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[0.88rem] text-slate-800 font-semibold">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-black shrink-0">✅</span> Ide dan sudut promosi
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-black shrink-0">✅</span> Kalimat pembuka (hook)
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-black shrink-0">✅</span> Naskah setiap adegan
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-black shrink-0">✅</span> Storyboard yang mudah diikuti
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-black shrink-0">✅</span> Arahan kamera & pencahayaan
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-black shrink-0">✅</span> Prompt gambar & video AI
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-black shrink-0">✅</span> Panduan konsistensi visual
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-black shrink-0">✅</span> Paket produksi siap ekspor
              </div>
            </div>
          </div>

          {/* Highlight Offer Price Box (Ukuran Menonjol) */}
          <div className="bg-gradient-to-r from-amber-50 via-amber-100/60 to-indigo-50 border-2 border-amber-400 rounded-2xl p-4 sm:p-5 mb-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-[0.75rem] font-black text-amber-900 uppercase tracking-widest bg-amber-300 px-2.5 py-0.5 rounded-md inline-block">
                    PENAWARAN PELUNCURAN
                  </span>
                  <span className="text-[0.75rem] font-extrabold text-rose-700 bg-rose-100 border border-rose-300 px-2.5 py-0.5 rounded-md inline-block animate-pulse">
                    ⏰ S/d 17 Agustus 2026
                  </span>
                </div>
                <h3 className="font-heading text-[1.4rem] sm:text-[1.6rem] font-black text-slate-900">
                  AKSES LIFETIME HANYA <span className="text-amber-700 bg-amber-200 px-1.5 py-0.5 rounded">RP99.000</span>
                </h3>
                <p className="text-[0.88rem] text-slate-800 font-bold mt-1">
                  Sekali bayar. Tanpa biaya langganan bulanan dari SMART-UGC.
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2 text-[0.8rem] font-extrabold text-indigo-950 bg-white/80 px-3 py-1.5 rounded-lg border border-indigo-200">
                  <span>🔥 Tahap 1: Rp99.000 (S/d 17 Agt)</span>
                  <span className="text-slate-400">|</span>
                  <span>📈 Tahap 2: Rp199.000</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-slate-600 line-through">Normal: Rp498.000</span>
                </div>
              </div>
            </div>
            <p className="text-[0.78rem] text-slate-500 mt-2.5 pt-2 border-t border-amber-200/80 italic">
              *Penggunaan API atau platform AI eksternal dapat memiliki biaya tersendiri sesuai ketentuan layanan yang Anda pilih.
            </p>
          </div>

          {/* Action Buttons (Primary & Secondary CTA) */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a 
              href="#harga" 
              className="flex-1 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-black px-6 py-4 rounded-xl text-[1rem] sm:text-[1.05rem] transition-all shadow-lg shadow-red-500/25 hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 border border-red-400 uppercase"
            >
              <span>🚀</span> DAPATKAN AKSES LIFETIME RP99.000
            </a>
            <a 
              href="#demo" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-4 rounded-xl text-[0.92rem] transition-all border border-slate-700 shadow-md text-center flex items-center justify-center gap-2 shrink-0"
            >
              <span>▶</span> TONTON DEMO DARI FOTO SAMPAI HASIL
            </a>
          </div>

          {/* Trust badges below buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[0.78rem] font-bold text-slate-600 pt-2 border-t border-slate-200">
            <div className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Cocok untuk pemula</div>
            <div className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Akses langsung aktif</div>
            <div className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Panduan tersedia</div>
            <div className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Berbagai produk & jasa</div>
          </div>

        </div>

        {/* 2. BAGIAN VIDEO DEMO */}
        <div id="demo" className="scroll-mt-24 pt-10 border-t border-slate-200">
          <div className="max-w-[850px] mx-auto text-center mb-6">
            <div className="text-[0.78rem] font-black tracking-widest uppercase text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full inline-block mb-2">
              LIHAT SENDIRI BAGAIMANA SMART-UGC BEKERJA
            </div>
            <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-black text-slate-900 leading-[1.2]">
              Dari Satu Foto Produk Menjadi Materi Video Iklan yang Lebih Terarah
            </h2>
            <p className="text-slate-600 text-[0.98rem] font-medium mt-2">
              Lihat prosesnya terlebih dahulu, lalu putuskan apakah SMART-UGC sesuai dengan kebutuhan konten Anda.
            </p>
          </div>

          <div className="mb-6 mx-auto w-full max-w-[850px]">
            <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-2xl relative bg-slate-900">
              <div className="aspect-video w-full relative">
                {isPlaying ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/lMJ2-DnYdQk?autoplay=1&rel=0" 
                    title="SMART-UGC Demo" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full relative z-10"
                  ></iframe>
                ) : (
                  <div 
                    className="absolute inset-0 z-20 cursor-pointer flex flex-col items-center justify-center group/btn"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="absolute inset-0 bg-slate-950/40 group-hover/btn:bg-slate-950/20 transition-colors duration-500"></div>
                    <img 
                      src="https://dopfs.com/wp-content/uploads/2026/07/Dopamine-Influencer.jpeg" 
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                      alt="Video Thumbnail"
                    />
                    
                    <div className="relative z-30 flex flex-col items-center">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/30 border border-white/50 rounded-full flex items-center justify-center backdrop-blur-md mb-3 shadow-2xl group-hover/btn:scale-110 transition-transform duration-500">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-white font-black tracking-wider text-[0.82rem] sm:text-[0.95rem] shadow-md bg-slate-900/90 px-5 py-2 rounded-full backdrop-blur-md border border-white/20 uppercase">
                        ▶ KLIK UNTUK MENONTON VIDEO DEMO
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="max-w-[850px] mx-auto bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 text-left shadow-xs">
            <p className="font-extrabold text-slate-900 text-[0.98rem] mb-3">
              Dalam video demo ini, Anda dapat melihat proses:
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[0.88rem] text-slate-800 font-semibold mb-4">
              <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">1</span>
                Mengunggah foto produk
              </li>
              <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">2</span>
                Memasukkan informasi singkat
              </li>
              <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">3</span>
                Memilih jenis atau gaya video
              </li>
              <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">4</span>
                Menghasilkan ide dan sudut promosi
              </li>
              <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">5</span>
                Menyusun naskah setiap adegan
              </li>
              <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">6</span>
                Membuat storyboard
              </li>
              <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">7</span>
                Menyiapkan prompt gambar dan video
              </li>
              <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black shrink-0">8</span>
                Memproses hasil menjadi video final
              </li>
            </ol>
            <p className="text-[0.88rem] text-slate-700 font-bold italic text-center sm:text-left bg-amber-50 border border-amber-200 p-3 rounded-xl">
              Lihat prosesnya terlebih dahulu, lalu putuskan apakah SMART-UGC sesuai dengan kebutuhan konten Anda.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
