import { ScrollReveal } from './ScrollReveal';

export function NewMechanismSection() {
  return (
    <section className="py-[70px] bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6">
        
        {/* Main Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-[850px] mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.78rem] font-bold tracking-widest uppercase border border-indigo-200 bg-indigo-50 text-indigo-800 mb-4 shadow-xs">
              💡 SOLUSI PRODUKSI KONTEN
            </div>
            <h2 className="font-heading text-[clamp(1.7rem,3.8vw,2.6rem)] font-black text-slate-900 leading-[1.2]">
              SMART-UGC MEMBANTU ANDA MEMULAI TANPA HALAMAN KOSONG
            </h2>
            <p className="text-slate-700 font-subheading text-[1rem] md:text-[1.1rem] leading-[1.6] max-w-[780px] mx-auto mt-3 font-medium">
              SMART-UGC dirancang sebagai asisten produksi konten yang membantu mengubah informasi sederhana menjadi konsep iklan yang lebih lengkap.
            </p>
          </div>
        </ScrollReveal>

        {/* Section 4 Checklist Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl mb-12 max-w-[900px] mx-auto">
          <p className="text-amber-400 font-extrabold text-[0.95rem] uppercase tracking-wider mb-4 text-center sm:text-left">
            Sistem membantu menyusun:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-[0.9rem] font-semibold text-slate-200 mb-6">
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-black">✅</span> Target penonton
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-black">✅</span> Tujuan video
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-black">✅</span> Sudut promosi
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-black">✅</span> Kalimat pembuka
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-black">✅</span> Naskah setiap adegan
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-black">✅</span> Arahan visual
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-black">✅</span> Penempatan produk
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-black">✅</span> Ekspresi karakter
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-black">✅</span> Sudut dan gerakan kamera
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-black">✅</span> Pencahayaan
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-black">✅</span> Prompt gambar dan video
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-emerald-400 font-black">✅</span> Hubungan antaradegan
            </div>
          </div>
          <p className="text-[0.9rem] text-slate-300 font-medium text-center border-t border-slate-800 pt-4">
            Anda tetap memegang kendali atas hasil akhirnya, tetapi tidak perlu menyusun semuanya dari awal.
          </p>
        </div>

        {/* Dual Mode Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-8">
            <div className="text-[0.78rem] font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-2">
              ⚙️ DUA PILIHAN CARA KERJA
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900">
              Fleksibel Sesuai Kebutuhan Anda
            </h3>
          </div>
        </ScrollReveal>

        {/* Dual Engine Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: MODE MENGGUNAKAN AI */}
          <ScrollReveal className="bg-slate-50 rounded-2xl p-6 border border-slate-200 border-t-4 border-t-emerald-500 shadow-sm relative overflow-hidden group hover:bg-white hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-3">
              <div className="w-11 h-11 bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-center text-2xl">
                🤖
              </div>
              <span className="text-[0.72rem] font-black bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                MODE 1 — MENGGUNAKAN AI
              </span>
            </div>
            <h4 className="font-heading text-lg font-black text-slate-900 mb-1.5">
              Gunakan API Key Milik Anda Sendiri
            </h4>
            <p className="text-slate-600 text-[0.88rem] leading-[1.5] mb-4">
              Dapat digunakan dengan layanan terhubung seperti Gemini, OpenAI, Hugging Face, atau AI lain dalam sistem.
            </p>
            <ul className="space-y-2 text-[0.85rem]">
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-black">✓</span> Naskah dibuat otomatis berdasarkan info produk.
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-black">✓</span> Variasi konsep lebih banyak & fleksibel.
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-black">✓</span> Tidak perlu membayar biaya langganan AI melalui SMART-UGC.
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-emerald-600 font-black">✓</span> Hanya membayar penggunaan AI langsung sesuai penyedia.
              </li>
            </ul>
          </ScrollReveal>

          {/* Card 2: MODE TANPA API */}
          <ScrollReveal className="bg-slate-50 rounded-2xl p-6 border border-slate-200 border-t-4 border-t-amber-500 shadow-sm relative overflow-hidden group hover:bg-white hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-3">
              <div className="w-11 h-11 bg-amber-100 border border-amber-200 rounded-xl flex items-center justify-center text-2xl">
                ⚙️
              </div>
              <span className="text-[0.72rem] font-black bg-amber-100 text-amber-800 px-3 py-1 rounded-full uppercase tracking-wider">
                MODE 2 — TANPA API
              </span>
            </div>
            <h4 className="font-heading text-lg font-black text-slate-900 mb-1.5">
              Mode Praktis Berbasis Formula Teruji
            </h4>
            <p className="text-slate-600 text-[0.88rem] leading-[1.5] mb-4">
              Belum punya API Key? Gunakan mode praktis untuk menyusun konsep berdasarkan formula yang sudah tersedia.
            </p>
            <ul className="space-y-2 text-[0.85rem]">
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-amber-600 font-black">✓</span> Otomatis menyusun ide video & struktur naskah.
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-amber-600 font-black">✓</span> Menyajikan kalimat pembuka & ajakan bertindak (CTA).
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-amber-600 font-black">✓</span> Menyusun adegan berdasarkan kategori produk.
              </li>
              <li className="flex items-start gap-2 text-slate-800 font-medium">
                <span className="text-amber-600 font-black">✓</span> Membantu menyiapkan konsep & bahan produksi tanpa internet/API.
              </li>
            </ul>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}


