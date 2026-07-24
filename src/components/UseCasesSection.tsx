import { ScrollReveal } from './ScrollReveal';

export function UseCasesSection() {
  const targetAudience = [
    {
      title: "Pemilik Bisnis & Toko Online",
      icon: "🏪",
      desc: "Ubah foto katalog produk menjadi konsep video iklan menarik tanpa perlu sewa studio atau model."
    },
    {
      title: "Kreator Konten & Afiliator",
      icon: "📲",
      desc: "Buat variasi video review dan promosi produk secara konsisten untuk tingkatkan penjualan komisi."
    },
    {
      title: "Pengelola Iklan (Advertiser)",
      icon: "📊",
      desc: "Siapkan banyak variasi materi iklan untuk diuji (testing) tanpa membuang waktu syuting berulang."
    },
    {
      title: "Freelancer Video & Agensi",
      icon: "🎬",
      desc: "Percepat proses pengerjaan ide, naskah, dan storyboard untuk memenuhi kebutuhan berbagai klien."
    },
    {
      title: "UMKM Berhemat Biaya",
      icon: "💡",
      desc: "Solusi mandiri menghasilkan materi promosi yang rapi dan terarah dengan anggaran efisien."
    }
  ];

  return (
    <section className="py-[80px] bg-slate-100/80 border-t border-slate-200">
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <div className="text-[0.78rem] font-black tracking-widest uppercase text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full inline-block mb-3">
              SIAPA YANG COCOK MENGGUNAKAN SMART-UGC?
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,3.8vw,2.8rem)] font-black text-slate-900 leading-[1.2]">
              Solusi Tepat Untuk <br />
              <span className="grad-text">Berbagai Kebutuhan Promosi Digital</span>
            </h2>
            <p className="font-subheading text-[1.05rem] text-slate-600 mt-3 leading-[1.6] font-medium">
              Dirancang sederhana agar dapat langsung digunakan oleh siapapun.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targetAudience.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading font-black text-[1.1rem] text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-[0.88rem] text-slate-600 leading-[1.5]">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

