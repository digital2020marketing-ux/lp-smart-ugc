import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    {
      quote: "Sangat membantu menyusun ide dan naskah sebelum masuk ke tahap produksi.",
      role: "Pemilik Toko Online & Affiliate"
    },
    {
      quote: "Hemat waktu persiapan karena storyboard dan prompt sudah tertata dengan rapi.",
      role: "Pengelola Iklan Digital"
    },
    {
      quote: "Lebih mudah mencoba beberapa sudut promosi tanpa harus memikirkan semuanya dari nol.",
      role: "Kreator Konten Produksi"
    }
  ];

  const faqs = [
    {
      q: "Apakah SMART-UGC langsung menghasilkan video final?",
      a: "SMART-UGC membantu menyiapkan ide, naskah, storyboard, arahan visual, dan prompt produksi. Hasilnya bisa digunakan langsung di fitur internal atau diekspor ke platform video AI pilihan Anda."
    },
    {
      q: "Apakah saya harus memiliki API Key?",
      a: "Tidak wajib. SMART-UGC menyediakan Mode Praktis Berbasis Formula yang dapat digunakan tanpa API Key. Jika Anda ingin variasi yang lebih fleksibel, Anda juga dapat menggunakan API Key pribadi."
    },
    {
      q: "Apakah ada biaya langganan bulanan dari SMART-UGC?",
      a: "Tidak ada. Pembayaran promo Tahap 1 sebesar Rp99.000 (berlaku sampai 17 Agustus 2026, setelah itu naik menjadi Rp199.000 hingga kembali ke harga normal Rp498.000) berlaku untuk akses lifetime tanpa biaya langganan bulanan dari SMART-UGC."
    },
    {
      q: "Apakah ada biaya tambahan untuk platform AI lain?",
      a: "Ya, jika Anda menggunakan platform video AI eksternal atau API Key berbayar, biaya tersebut mengikuti kebijakan penyedia masing-masing."
    }
  ];

  return (
    <section id="faq" className="py-[80px] bg-slate-100/80 px-4 sm:px-6 border-t border-slate-200 scroll-mt-16">
      <div className="max-w-[900px] mx-auto">

        {/* SECTION 10: TESTIMONI / BUKTI SOSIAL */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="text-[0.78rem] font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full inline-block mb-2">
              💬 UMBAN BALIK PENGGUNA AWAL
            </div>
            <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-black text-slate-900 leading-[1.2]">
              Apa Kata Mereka yang Sudah Mencoba?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <p className="text-[0.9rem] text-slate-700 italic leading-[1.5] mb-4">
                  "{t.quote}"
                </p>
                <div className="text-[0.8rem] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg inline-block self-start">
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        
        {/* SECTION 11: FAQ */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="text-[0.78rem] font-black tracking-widest uppercase text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full inline-block mb-2">
              ❓ FAQ & PERTANYAAN
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-slate-900 leading-[1.2]">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left bg-transparent border-none cursor-pointer p-5 flex justify-between items-center text-slate-900 text-[0.98rem] font-extrabold hover:text-indigo-600 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className={`text-[1.3rem] text-slate-400 transition-transform duration-200 shrink-0 font-black ${openFaq === idx ? 'rotate-45 text-indigo-600' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-slate-600 text-[0.92rem] leading-[1.6] border-t border-slate-100 pt-3 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

