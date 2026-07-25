import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export function PricingAndFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Apakah SMART-UGC memerlukan biaya langganan bulanan?",
      a: "Tidak. SMART-UGC berlisensi sekali bayar untuk akses lifetime tanpa biaya berlangganan bulanan dari kami. Penggunaan API atau platform AI eksternal pihak ketiga (jika Anda gunakan) dapat memiliki ketentuan atau biaya tersendiri sesuai layanan yang Anda pilih."
    },
    {
      q: "Apakah saya wajib memiliki API key untuk menggunakan aplikasi ini?",
      a: "Tidak wajib. SMART-UGC menyediakan dua mode pengerjaan: Mode AI (dengan API key milik Anda) dan Mode Tanpa API Key. Anda tetap bisa menyusun ide, naskah, storyboard, dan mengunduh paket ekspor secara gratis tanpa API key."
    },
    {
      q: "Dapatkah digunakan untuk berbagai jenis produk dan kategori?",
      a: "Sangat bisa. SMART-UGC dapat disesuaikan untuk berbagai kategori seperti produk fisik (fashions, skincare, gadget, makanan), jasa, program pelatihan, hingga konten affiliate digital."
    },
    {
      q: "Bagaimana cara kerja hasil ekspor ke platform luar?",
      a: "Sistem akan menghasilkan file naskah produksi dan prompt terstruktur. Anda tinggal menyalin teks prompt tersebut dan memasukkannya ke platform pembuatan gambar atau video pilihan Anda seperti Kling AI, Runway, Google Flow, dan lainnya."
    },
    {
      q: "Apakah pemula yang belum paham AI bisa menggunakannya?",
      a: "Sangat bisa. Aplikasi dirancang sederhana dan praktis. Anda hanya perlu memasukkan satu foto produk dan informasi singkat, tanpa perlu mengetik instruksi (prompt) rumit dari nol."
    }
  ];

  return (
    <>
      {/* PRICING */}
      <section id="harga" className="py-[90px] px-4 sm:px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1050px] mx-auto relative z-10">
          <div className="text-center max-w-[750px] mx-auto mb-10">
            <div className="text-[0.78rem] font-extrabold tracking-widest uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
              🔥 PROMO PELUNCURAN RESMI
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,3.8vw,2.8rem)] font-black text-white leading-[1.2]">
              Dapatkan Akses Lifetime SMART-UGC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Dengan Harga Spesial Peluncuran
              </span>
            </h2>
            <p className="font-subheading text-[1.05rem] leading-[1.6] text-slate-300 mt-3 max-w-[650px] mx-auto">
              Hemat jutaan rupiah biaya tim kreatif dan produksi iklan. Sekali bayar, tanpa biaya langganan bulanan dari SMART-UGC.
            </p>
          </div>

          <div className="flex justify-center">
            <ScrollReveal className="bg-slate-800/90 border border-slate-700 rounded-3xl p-8 sm:p-10 relative w-full max-w-lg shadow-2xl backdrop-blur-sm">
              <div className="inline-block text-[0.75rem] font-black text-amber-400 uppercase tracking-wider bg-amber-900/40 border border-amber-500/30 px-3 py-1 rounded-full mb-3">
                LIFETIME ACCESS
              </div>
              <h3 className="font-heading text-2xl font-black text-white mb-1">Paket Akses Penuh</h3>
              <p className="text-[0.88rem] text-slate-400 mb-6">Akses langsung ke seluruh fitur dan sistem SMART-UGC</p>
              
              <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-700/80 mb-6 text-center">
                <div className="text-[0.82rem] font-extrabold text-slate-400 uppercase tracking-widest mb-1">HARGA PROMO PELUNCURAN</div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-[1.1rem] text-slate-500 line-through font-bold">Rp 499.000</span>
                  <span className="font-heading text-[2.8rem] font-black text-amber-400 leading-none">Rp99.000</span>
                </div>
                <div className="text-[0.82rem] text-emerald-400 font-bold mt-2">
                  ✓ Sekali Bayar · Tanpa Biaya Bulanan SMART-UGC
                </div>
              </div>
              
              <ul className="list-none mb-8 space-y-3 border-t border-slate-700 pt-5">
                {[
                  "Akses Penuh Aplikasi SMART-UGC",
                  "Sistem 3 Langkah Konsep Video Iklan",
                  "Fitur Penjaga Konsistensi Wajah & Produk",
                  "26 Pendekatan Psikologi Penjualan",
                  "Sistem Dual-Mode (Mode AI & Mode Tanpa API Key)",
                  "Storyboard Otomatis 5 Adegan",
                  "Ekspor Naskah & Prompt Siap Pakai",
                  "Akses Lifetime & Pembaharuan Fitur",
                ].map((f, i) => (
                  <li key={i} className="flex gap-2.5 items-start text-[0.9rem] text-slate-200">
                    <span className="text-emerald-400 shrink-0 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              
              <div className="text-[0.78rem] text-slate-400 bg-slate-900/50 p-3 rounded-xl border border-slate-700/50 mb-6 leading-[1.5]">
                <em>*Penggunaan layanan AI dari pihak ketiga (jika digunakan) dapat memiliki biaya tersendiri sesuai platform yang Anda pilih.</em>
              </div>

              <a 
                href="https://smartbook.myscalev.com/smart-ugc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex justify-center items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 py-4 px-6 rounded-2xl font-black text-[1.1rem] w-full hover:from-amber-400 hover:to-amber-300 hover:shadow-lg transition-all"
              >
                <span>🚀</span> DAPATKAN AKSES SEKARANG — RP99.000
              </a>
              <div className="text-center text-[0.8rem] text-slate-400 mt-3">Akses langsung dibuka setelah pembayaran</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[80px] bg-slate-50 px-4 sm:px-6 border-t border-slate-200">
        <div className="max-w-[780px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[0.78rem] font-extrabold tracking-widest uppercase text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full inline-block mb-3">
              FAQ
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-slate-900 leading-[1.2]">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex justify-between items-center text-slate-900 text-[1rem] font-extrabold hover:text-indigo-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`text-[1.2rem] text-slate-400 transition-transform duration-200 ml-4 shrink-0 ${openFaq === idx ? 'rotate-45 text-indigo-600' : ''}`}>+</span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-slate-600 text-[0.92rem] leading-[1.6] border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-[90px] px-4 sm:px-6 bg-slate-900 text-center text-white relative overflow-hidden">
        <div className="max-w-[750px] mx-auto relative z-10">
          <div className="text-[0.78rem] font-extrabold tracking-widest uppercase text-amber-400 mb-3">
            MULAILAH HARI INI
          </div>
          <h2 className="font-heading text-[clamp(1.8rem,3.8vw,2.8rem)] font-black text-white leading-[1.2] mb-4">
            Ubah Foto Produk Anda Menjadi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Konsep Video Iklan Siap Produksi
            </span>
          </h2>
          <p className="font-subheading text-[1.05rem] leading-[1.6] text-slate-300 mb-8 max-w-[600px] mx-auto">
            Hanya Rp99.000 untuk sekali bayar. Mulai buat naskah, storyboard, dan arahan visual promosi secara rapi, cepat, dan terarah.
          </p>

          <a 
            href="#harga" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 px-8 py-4 rounded-2xl text-[1.1rem] font-black hover:from-amber-400 hover:to-amber-300 transition-all shadow-xl"
          >
            <span>🚀 Amankan Promo Launch Rp99.000 Sekarang</span>
          </a>

          <div className="flex gap-6 justify-center flex-wrap mt-8 text-[0.82rem] text-slate-400 font-medium">
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Lifetime Access</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Sekali Bayar</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Akses Langsung</span>
          </div>
        </div>
      </section>
    </>
  );
}

