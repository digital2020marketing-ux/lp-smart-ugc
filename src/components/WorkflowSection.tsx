import { ScrollReveal } from './ScrollReveal';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function WorkflowSection() {
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
    <section id="workflow" className="py-[80px] bg-slate-100/80 overflow-hidden border-t border-slate-200 scroll-mt-16">
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <div className="text-[0.78rem] font-black tracking-widest uppercase text-indigo-700 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200 inline-block mb-2.5">
              PRAKTIS & CEPAT
            </div>
            <h2 className="font-heading text-[clamp(1.7rem,3.8vw,2.6rem)] font-black text-slate-900 leading-[1.2]">
              CUKUP <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">3 LANGKAH PRAKTIS</span>
            </h2>
            <p className="text-slate-600 font-subheading text-[0.98rem] sm:text-[1.05rem] mt-2 leading-[1.5] font-medium">
              Proses instan dari foto produk sederhana menjadi materi video iklan siap pakai.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative">
          
          {/* STEP 1 */}
          <ScrollReveal>
            <div className="group flex flex-col h-full bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl p-5 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[0.72rem] font-black tracking-widest text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                  LANGKAH 1
                </span>
                <div className="h-[1px] flex-grow ml-3 bg-slate-200 group-hover:bg-indigo-300 transition-colors"></div>
              </div>

              <h3 className="font-heading text-slate-900 font-black text-[1.08rem] mb-2">
                MASUKKAN FOTO & INFORMASI PRODUK
              </h3>
              
              <div className="mb-3 w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative shrink-0">
                <img
                  src="https://dopfs.com/wp-content/uploads/2026/07/ugc-step-2.png"
                  alt="Masukkan Info Singkat"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-slate-600 text-[0.85rem] leading-[1.5] mb-3">
                Unggah satu foto produk, kemudian isi informasi singkat seperti:
              </p>

              <ul className="text-[0.8rem] text-slate-700 space-y-1 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                <li>• Nama produk & keunggulan utama</li>
                <li>• Target pembeli & masalah yang diselesaikan</li>
                <li>• Harga / penawaran & tujuan video</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* STEP 2 */}
          <ScrollReveal delay={0.1}>
            <div className="group flex flex-col h-full bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl p-5 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[0.72rem] font-black tracking-widest text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                  LANGKAH 2
                </span>
                <div className="h-[1px] flex-grow ml-3 bg-slate-200 group-hover:bg-indigo-300 transition-colors"></div>
              </div>

              <h3 className="font-heading text-slate-900 font-black text-[1.08rem] mb-2">
                PILIH JENIS VIDEO
              </h3>
              
              <div className="mb-3 w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative shrink-0">
                <img
                  src="https://dopfs.com/wp-content/uploads/2026/07/ugc-step-1.png"
                  alt="Pilih Jenis Video"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-slate-600 text-[0.85rem] leading-[1.5] mb-3">
                Pilih gaya video yang ingin dibuat, misalnya:
              </p>

              <ul className="text-[0.8rem] text-slate-700 space-y-1 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                <li>• UGC natural / Video ulasan & demonstrasi</li>
                <li>• Video affiliate & Iklan komersial</li>
                <li>• Video promosi singkat & Storytelling produk</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* STEP 3 */}
          <ScrollReveal delay={0.2}>
            <div className="group flex flex-col h-full bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl p-5 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[0.72rem] font-black tracking-widest text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                  LANGKAH 3
                </span>
                <div className="h-[1px] flex-grow ml-3 bg-slate-200 group-hover:bg-indigo-300 transition-colors"></div>
              </div>

              <h3 className="font-heading text-slate-900 font-black text-[1.08rem] mb-2">
                GUNAKAN ATAU EKSPOR HASIL
              </h3>
              
              <div className="mb-3 w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative shrink-0">
                <img
                  src="https://dopfs.com/wp-content/uploads/2026/07/ugc-step-3.png"
                  alt="Gunakan Hasil"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-slate-600 text-[0.85rem] leading-[1.5] mb-3">
                Anda dapat langsung memanfaatkan hasil produksi:
              </p>

              <ul className="text-[0.8rem] text-slate-700 space-y-1 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                <li>• Menyalin naskah & menyimpan storyboard</li>
                <li>• Prompt gambar & prompt video AI</li>
                <li>• Ekspor paket produksi ke platform pilihan</li>
              </ul>
            </div>
          </ScrollReveal>

        </div>

        {/* 6. PERJELAS HASIL YANG DIPEROLEH */}
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-10">
            <div className="text-[0.78rem] font-extrabold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200 inline-block mb-2">
              OUTPUT NYATA
            </div>
            <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-black text-slate-900 leading-[1.2]">
              APA YANG ANDA DAPATKAN DARI SMART-UGC?
            </h2>
            <p className="text-slate-600 font-medium text-[0.95rem] mt-2">
              SMART-UGC membantu menghasilkan materi lengkap untuk mendukung proses produksi Anda:
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="text-2xl mb-2">💡</div>
            <h3 className="font-heading font-black text-slate-900 text-[1.05rem] mb-1.5">
              Ide dan Sudut Promosi
            </h3>
            <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
              Pilihan pendekatan berdasarkan masalah konsumen, manfaat produk, cara penggunaan, ulasan, perbandingan, rasa penasaran, dan penawaran.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="text-2xl mb-2">✍️</div>
            <h3 className="font-heading font-black text-slate-900 text-[1.05rem] mb-1.5">
              Naskah Video
            </h3>
            <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
              Berisi kalimat pembuka, isi utama, teks layar, narasi, ajakan bertindak, dan perkiraan durasi setiap adegan.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="text-2xl mb-2">🎬</div>
            <h3 className="font-heading font-black text-slate-900 text-[1.05rem] mb-1.5">
              Storyboard
            </h3>
            <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
              Menjelaskan visual, posisi produk, ekspresi karakter, sudut kamera, pencahayaan, dan transisi.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-heading font-black text-slate-900 text-[1.05rem] mb-1.5">
              Prompt Gambar dan Video AI
            </h3>
            <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
              Instruksi produksi yang dapat digunakan pada platform AI yang sesuai.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-heading font-black text-slate-900 text-[1.05rem] mb-1.5">
              Panduan Referensi Visual
            </h3>
            <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
              Membantu menjaga wajah, pakaian, produk, kemasan, warna, dan gaya visual lebih konsisten.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="text-2xl mb-2">📦</div>
            <h3 className="font-heading font-black text-slate-900 text-[1.05rem] mb-1.5">
              Paket Produksi
            </h3>
            <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
              Naskah, storyboard, prompt, dan arahan visual dapat disimpan atau diekspor untuk digunakan pada proses berikutnya.
            </p>
          </div>
        </div>

        {/* 7. PERJELAS VIDEO FINAL */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl mb-14">
          <h3 className="font-heading font-black text-xl md:text-2xl mb-3 text-amber-400 text-center sm:text-left">
            ❓ APAKAH SMART-UGC LANGSUNG MEMBUAT VIDEO FINAL?
          </h3>
          <p className="text-[0.92rem] text-slate-200 leading-[1.6] mb-5">
            SMART-UGC membantu menyiapkan ide, naskah, storyboard, gambar pendukung, dan prompt produksi. Untuk menghasilkan video final, Anda dapat:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[0.88rem] mb-4">
            <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
              <div className="font-bold text-emerald-400 mb-1.5 flex items-center gap-2">
                <span>⚡</span> Menggunakan Fitur dalam Aplikasi
              </div>
              <p className="text-slate-300 leading-[1.5]">
                Gunakan fitur AI yang tersedia apabila sesuai dengan kebutuhan produksi Anda.
              </p>
            </div>
            <div className="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
              <div className="font-bold text-emerald-400 mb-1.5 flex items-center gap-2">
                <span>🚀</span> Mengekspor ke Platform Video AI
              </div>
              <p className="text-slate-300 leading-[1.5]">
                Salin atau ekspor hasil SMART-UGC ke platform seperti <strong>Google Flow, Kling AI, Seedance, Runway, Luma, Pika</strong>, atau platform AI lain yang mendukung prompt video.
              </p>
            </div>
          </div>
          
          <p className="text-[0.88rem] font-semibold text-amber-300 mb-2">
            Anda bebas memilih platform berdasarkan kualitas, kebutuhan, dan anggaran.
          </p>
          <p className="text-[0.8rem] text-slate-400 italic border-t border-slate-800 pt-3">
            *Biaya penggunaan platform eksternal tidak termasuk dalam harga SMART-UGC.
          </p>
        </div>

        {/* Video Results Headline */}
        <div className="text-center max-w-[800px] mx-auto mb-8">
          <h3 className="font-heading text-[1.4rem] sm:text-[1.7rem] font-black text-slate-900">
            Lihat Contoh <span className="text-amber-600">Hasil Video Siap Pakai</span> Ini:
          </h3>
        </div>

        {/* Youtube Shorts Slider */}
        <style>
          {`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}
        </style>
        <div className="w-full relative max-w-[1200px] mx-auto px-10 group">
          <button 
            onClick={scrollLeft}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-slate-300 shadow-md flex items-center justify-center text-slate-800 hover:bg-indigo-600 hover:text-white backdrop-blur-sm transition-all"
            aria-label="Previous Video"
          >
            <ChevronLeft size={22} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar py-2"
          >
            {videoIds.map((id, idx) => (
              <div key={`v1-${idx}`} className="shrink-0 w-[220px] sm:w-[240px] aspect-[9/16] rounded-2xl overflow-hidden shadow-md bg-slate-900 border border-slate-300 relative snap-center">
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
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-slate-300 shadow-md flex items-center justify-center text-slate-800 hover:bg-indigo-600 hover:text-white backdrop-blur-sm transition-all"
            aria-label="Next Video"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  );
}


