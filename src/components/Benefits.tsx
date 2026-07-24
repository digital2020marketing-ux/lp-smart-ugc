import { ScrollReveal } from './ScrollReveal';

export function Benefits() {
  const benefits = [
    {
      title: "Hemat Waktu",
      desc: "Menyusun ide, naskah, dan storyboard otomatis tanpa membuang waktu berpikir dari nol."
    },
    {
      title: "Alur Kerja Rapi & Terstruktur",
      desc: "Setiap tahap pengerjaan terarah dengan panduan visual dan instruksi yang jelas."
    },
    {
      title: "Mudah Buat Variasi Iklan",
      desc: "Hasilkan beragam sudut promosi dan pendekatan emosi untuk pengujian materi iklan."
    },
    {
      title: "Mandiri Tanpa Tim Besar",
      desc: "Mengurangi ketergantungan pada tim kreatif, sutradara, atau penulis naskah luar."
    },
    {
      title: "Hemat Biaya Produksi",
      desc: "Solusi ekonomis menghasilkan konsep video berkualitas tanpa sewa studio mahal."
    },
    {
      title: "Akses Lifetime Bebas Digunakan",
      desc: "Sekali bayar untuk penggunaan jangka panjang tanpa beban langganan bulanan aplikasi."
    }
  ];

  return (
    <section className="py-[80px] px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1050px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-[800px] mx-auto">
            <div className="text-[0.78rem] font-black tracking-widest uppercase text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full inline-block mb-3">
              MANFAAT UTAMA
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,3.8vw,2.8rem)] font-black text-slate-900 leading-[1.2]">
              Mengapa Pengguna Memilih <br />
              <span className="grad-text">SMART-UGC?</span>
            </h2>
            <p className="font-subheading text-[1.05rem] text-slate-600 mt-2 font-medium">
              Fokus pada kemudahan pengerjaan dan efisiensi biaya promosi bisnis Anda.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-black flex items-center justify-center text-sm mb-3">
                  ✓
                </div>
                <h3 className="font-heading font-black text-[1.1rem] text-slate-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-slate-600 text-[0.88rem] leading-[1.5]">
                  {b.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

