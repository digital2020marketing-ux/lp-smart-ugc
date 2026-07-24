import { ScrollReveal } from './ScrollReveal';

export function DreamOutcomeSection() {
  return (
    <section className="py-[80px] bg-slate-50 px-4 sm:px-6 relative overflow-hidden border-b border-slate-200">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1050px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.78rem] font-bold tracking-widest uppercase border border-indigo-200 bg-indigo-50 text-indigo-800 mb-4 shadow-xs">
              ✨ PROSES LEBIH MUDAH
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-black text-slate-900 leading-[1.15]">
              BAYANGKAN JIKA PRODUKSI KONTEN MENJADI LEBIH MUDAH
            </h2>
            <p className="font-subheading text-slate-600 text-[1rem] sm:text-[1.1rem] max-w-[680px] mx-auto mt-3 leading-[1.5] font-medium">
              Dengan SMART-UGC, Anda dapat menjalankan persiapan konten dengan lebih efisien dan terstruktur:
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Core Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          
          <ScrollReveal className="bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-indigo-500 shadow-sm hover:shadow-md transition-all group">
            <div className="w-11 h-11 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-center text-[1.5rem] mb-3 group-hover:scale-110 transition-transform">
              💡
            </div>
            <h3 className="font-subheading text-slate-900 font-black text-[1.05rem] mb-2">
              Membuat Banyak Variasi Ide Iklan
            </h3>
            <p className="text-slate-600 text-[0.88rem] leading-[1.5]">
              Gunakan satu produk untuk menghasilkan beberapa pilihan sudut promosi, kalimat pembuka, dan konsep video.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-indigo-500 shadow-sm hover:shadow-md transition-all group">
            <div className="w-11 h-11 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-center text-[1.5rem] mb-3 group-hover:scale-110 transition-transform">
              ✍️
            </div>
            <h3 className="font-subheading text-slate-900 font-black text-[1.05rem] mb-2">
              Menyiapkan Naskah Lebih Cepat
            </h3>
            <p className="text-slate-600 text-[0.88rem] leading-[1.5]">
              Tidak perlu menghabiskan waktu berjam-jam menulis naskah dari awal.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-indigo-500 shadow-sm hover:shadow-md transition-all group">
            <div className="w-11 h-11 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-center text-[1.5rem] mb-3 group-hover:scale-110 transition-transform">
              🎬
            </div>
            <h3 className="font-subheading text-slate-900 font-black text-[1.05rem] mb-2">
              Mendapatkan Storyboard yang Terarah
            </h3>
            <p className="text-slate-600 text-[0.88rem] leading-[1.5]">
              Setiap konsep dilengkapi dengan susunan adegan, posisi produk, arahan kamera, dan pencahayaan.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-indigo-500 shadow-sm hover:shadow-md transition-all group">
            <div className="w-11 h-11 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-center text-[1.5rem] mb-3 group-hover:scale-110 transition-transform">
              🤖
            </div>
            <h3 className="font-subheading text-slate-900 font-black text-[1.05rem] mb-2">
              Membuat Prompt Tanpa Harus Menjadi Ahli AI
            </h3>
            <p className="text-slate-600 text-[0.88rem] leading-[1.5]">
              SMART-UGC membantu mengubah informasi singkat menjadi instruksi yang lebih lengkap dan siap digunakan.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-indigo-500 shadow-sm hover:shadow-md transition-all group">
            <div className="w-11 h-11 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-center text-[1.5rem] mb-3 group-hover:scale-110 transition-transform">
              💰
            </div>
            <h3 className="font-subheading text-slate-900 font-black text-[1.05rem] mb-2">
              Mengurangi Biaya Persiapan Produksi
            </h3>
            <p className="text-slate-600 text-[0.88rem] leading-[1.5]">
              Siapkan konsep dan materi lebih dahulu sebelum menggunakan studio, model, editor, atau platform video AI.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-indigo-500 shadow-sm hover:shadow-md transition-all group">
            <div className="w-11 h-11 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center justify-center text-[1.5rem] mb-3 group-hover:scale-110 transition-transform">
              🎯
            </div>
            <h3 className="font-subheading text-slate-900 font-black text-[1.05rem] mb-2">
              Menguji Beberapa Sudut Promosi
            </h3>
            <p className="text-slate-600 text-[0.88rem] leading-[1.5]">
              Bandingkan berbagai ide iklan untuk menemukan pendekatan yang paling sesuai dengan calon pembeli Anda.
            </p>
          </ScrollReveal>

        </div>

        {/* Disclaimer note */}
        <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 text-center max-w-[850px] mx-auto text-[0.85rem] text-slate-600 italic leading-[1.5]">
          *SMART-UGC membantu mempercepat persiapan konten. Hasil penjualan tetap dipengaruhi oleh kualitas produk, penawaran, target pasar, platform, dan strategi pemasaran Anda.
        </div>

      </div>
    </section>
  );
}

