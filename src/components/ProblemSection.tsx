import { ScrollReveal } from './ScrollReveal';

export function ProblemSection() {
  return (
    <section className="py-[70px] bg-slate-100/80 px-4 sm:px-6 border-t border-slate-200">
      <div className="max-w-[1050px] mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[0.75rem] font-extrabold uppercase tracking-widest bg-rose-50 border border-rose-200 text-rose-700 mb-3 shadow-xs">
              ⚠️ KENDALA KONTEN PROMOSI
            </div>
            <h2 className="font-heading text-[clamp(1.7rem,3.8vw,2.6rem)] font-black text-slate-900 leading-[1.2]">
              MEMBUAT KONTEN IKLAN SEHARUSNYA TIDAK SERUMIT INI
            </h2>
            <p className="font-subheading text-[1rem] sm:text-[1.1rem] leading-[1.5] text-slate-700 mt-2 font-medium">
              Produk sudah tersedia, tetapi Anda mungkin masih mengalami hal-hal berikut:
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Core Problems List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <ScrollReveal className="bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-rose-500 shadow-sm hover:shadow-md transition-all text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-rose-600 font-black text-xl">❌</span>
              <h3 className="font-heading font-black text-[1.02rem] text-slate-900">
                Bingung Menentukan Ide Konten
              </h3>
            </div>
            <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
              Produk sudah bagus, tetapi bingung mencari sudut promosi yang menarik perhatian calon pembeli.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-rose-500 shadow-sm hover:shadow-md transition-all text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-rose-600 font-black text-xl">❌</span>
              <h3 className="font-heading font-black text-[1.02rem] text-slate-900">
                Kesulitan Membuat Kalimat Pembuka
              </h3>
            </div>
            <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
              Sulit membuat 3 detik pertama (hook) yang membuat penonton berhenti scrolling di media sosial.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-rose-500 shadow-sm hover:shadow-md transition-all text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-rose-600 font-black text-xl">❌</span>
              <h3 className="font-heading font-black text-[1.02rem] text-slate-900">
                Menghabiskan Waktu Menyusun Prompt
              </h3>
            </div>
            <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
              Harus mencoba berbagai perintah AI berulang kali tanpa tahu standar instruksi yang benar.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-rose-500 shadow-sm hover:shadow-md transition-all text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-rose-600 font-black text-xl">❌</span>
              <h3 className="font-heading font-black text-[1.02rem] text-slate-900">
                Wajah & Produk Berubah-ubah
              </h3>
            </div>
            <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
              Karakter, pakaian, dan bentuk kemasan sering berubah dari adegan pertama ke adegan berikutnya.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-rose-500 shadow-sm hover:shadow-md transition-all text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-rose-600 font-black text-xl">❌</span>
              <h3 className="font-heading font-black text-[1.02rem] text-slate-900">
                Tidak Tahu Adegan yang Harus Dibuat
              </h3>
            </div>
            <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
              Bingung mengatur alur video, posisi produk, arahan kamera, dan jenis pencahayaan setiap scene.
            </p>
          </ScrollReveal>

          <ScrollReveal className="bg-white rounded-2xl p-5 border border-slate-200 border-t-4 border-t-rose-500 shadow-sm hover:shadow-md transition-all text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-rose-600 font-black text-xl">❌</span>
              <h3 className="font-heading font-black text-[1.02rem] text-slate-900">
                Biaya Studio, Model & Editor Mahal
              </h3>
            </div>
            <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
              Sewa studio dan jasa pembuatan video konvensional seringkali memakan anggaran cukup besar.
            </p>
          </ScrollReveal>
        </div>

        {/* Pivot Reassurance Banner */}
        <ScrollReveal>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 text-center shadow-xl text-white">
            <h3 className="font-heading font-black text-2xl md:text-3xl text-amber-400 mb-2">
              Masalahnya bukan karena Anda tidak kreatif.
            </h3>
            <p className="font-subheading text-white font-extrabold text-[1.1rem] sm:text-[1.25rem]">
              Anda hanya membutuhkan sistem yang membantu mengarahkan proses produksi dari awal.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
