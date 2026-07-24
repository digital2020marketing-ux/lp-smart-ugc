import { ScrollReveal } from './ScrollReveal';

export function ComparisonSection() {
  return (
    <section id="perbandingan" className="py-[80px] bg-slate-50 border-t border-slate-200 px-4 sm:px-6 scroll-mt-16">
      <div className="max-w-[1080px] mx-auto">
        
        {/* SECTION 8: MEMBANTU MENJAGA WAJAH DAN PRODUK LEBIH KONSISTEN */}
        <ScrollReveal>
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 mb-16 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.75rem] font-black tracking-widest uppercase border border-indigo-200 bg-indigo-50 text-indigo-800 mb-4 shadow-xs">
              🎯 ARAHAN VISUAL TERARAH
            </div>
            <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-black text-slate-900 leading-[1.2]">
              MEMBANTU MENJAGA WAJAH DAN PRODUK LEBIH KONSISTEN
            </h2>
            <p className="font-subheading text-[0.98rem] sm:text-[1.05rem] leading-[1.6] text-slate-700 mt-3 max-w-[800px] font-medium">
              Keutamaan SMART-UGC adalah memberikan arahan visual yang lebih spesifik, seperti deskripsi wajah, pakaian, bentuk produk, warna, dan jenis pencahayaan pada setiap adegan.
            </p>
            <p className="text-[0.9rem] text-slate-600 mt-2 leading-[1.5]">
              Panduan ini membantu mengurangi perubahan visual yang tidak perlu saat Anda membuat gambar atau video AI.
            </p>
            <div className="mt-4 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-[0.85rem] text-amber-900 font-medium">
              ⚠️ <em>Catatan: Tingkat konsistensi tetap bergantung pada kemampuan platform AI yang Anda gunakan.</em>
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION 9: COMPARISON TABLE */}
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <div className="text-[0.78rem] font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-2">
              ⚖️ PERBANDINGAN SOLUSI
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-slate-900 leading-[1.2]">
              MENGAPA MEMILIH SMART-UGC?
            </h2>
            <p className="font-subheading text-[1.05rem] leading-[1.6] text-slate-600 mt-3 font-medium">
              Bandingkan cara kerja SMART-UGC dengan alternatif persiapan konten lainnya:
            </p>
          </div>

          <div className="overflow-x-auto w-full mb-16 bg-white rounded-2xl border border-slate-200 shadow-sm p-1">
            <table className="w-full border-separate border-spacing-0 text-left min-w-[650px]">
              <thead>
                <tr>
                  <th className="bg-slate-100 text-slate-700 font-extrabold text-[0.82rem] uppercase tracking-wide p-4 border-b border-slate-200 rounded-tl-xl">Fitur / Kriteria</th>
                  <th className="bg-indigo-50 text-indigo-900 font-black text-[0.9rem] uppercase tracking-wide p-4 border-b border-slate-200 border-l border-r border-indigo-200">⚡ SMART-UGC</th>
                  <th className="bg-slate-100 text-slate-700 font-extrabold text-[0.82rem] uppercase tracking-wide p-4 border-b border-slate-200">AI Generator Biasa</th>
                  <th className="bg-slate-100 text-slate-700 font-extrabold text-[0.82rem] uppercase tracking-wide p-4 border-b border-slate-200 rounded-tr-xl">Tim / Freelancer</th>
                </tr>
              </thead>
              <tbody className="text-[0.88rem] text-slate-800">
                <tr>
                  <td className="p-4 border-b border-slate-100 font-bold">Penyusunan Konsep</td>
                  <td className="p-4 border-b border-slate-100 bg-indigo-50/40 border-l border-r border-indigo-100"><span className="text-emerald-700 font-extrabold">✓ Otomatis dari foto & info singkat</span></td>
                  <td className="p-4 border-b border-slate-100"><span className="text-rose-600 font-bold">✗ Manual dari prompt sendiri</span></td>
                  <td className="p-4 border-b border-slate-100"><span className="text-amber-600 font-bold">~ Tergantung brief & diskusi</span></td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-slate-100 font-bold">Kelengkapan Output</td>
                  <td className="p-4 border-b border-slate-100 bg-indigo-50/40 border-l border-r border-indigo-100"><span className="text-emerald-700 font-extrabold">✓ Ide, naskah, storyboard, prompt, arahan visual</span></td>
                  <td className="p-4 border-b border-slate-100"><span className="text-rose-600 font-bold">✗ Biasanya hanya teks atau gambar</span></td>
                  <td className="p-4 border-b border-slate-100"><span className="text-amber-600 font-bold">~ Naskah & video final</span></td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-slate-100 font-bold">Kecepatan Persiapan</td>
                  <td className="p-4 border-b border-slate-100 bg-indigo-50/40 border-l border-r border-indigo-100"><span className="text-emerald-700 font-extrabold">✓ Hitungan menit</span></td>
                  <td className="p-4 border-b border-slate-100"><span className="text-rose-600 font-bold">✗ Tergantung kemampuan prompt</span></td>
                  <td className="p-4 border-b border-slate-100"><span className="text-rose-600 font-bold">✗ Beberapa hari</span></td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-slate-100 font-bold">Biaya Layanan SMART-UGC</td>
                  <td className="p-4 border-b border-slate-100 bg-indigo-50/40 border-l border-r border-indigo-100"><span className="text-emerald-700 font-extrabold">✓ Rp99.000 sekali bayar (lifetime)</span></td>
                  <td className="p-4 border-b border-slate-100"><span className="text-rose-600 font-bold">✗ Langganan bulanan</span></td>
                  <td className="p-4 border-b border-slate-100"><span className="text-rose-600 font-bold">✗ Per projek / per video</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Kebebasan Platform</td>
                  <td className="p-4 bg-indigo-100/60 border-l border-r border-indigo-200"><span className="text-emerald-700 font-black">✓ Bebas pakai di berbagai platform AI</span></td>
                  <td className="p-4"><span className="text-rose-600 font-bold">✗ Terkunci di satu sistem</span></td>
                  <td className="p-4"><span className="text-amber-600 font-bold">~ Tergantung hasil editor</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* OBJECTION HANDLING CARDS */}
        <ScrollReveal>
          <div className="text-center max-w-[720px] mx-auto mb-10">
            <h3 className="font-heading text-[1.5rem] sm:text-[1.8rem] font-black text-slate-900">
              Klarifikasi & Pertanyaan Umum
            </h3>
            <p className="text-[0.95rem] text-slate-600 mt-1 font-medium">
              Beberapa hal penting sebelum Anda memutuskan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="text-indigo-900 font-black text-[0.88rem] mb-1.5 uppercase tracking-wide">
                🤔 "Apakah saya harus mengerti AI?"
              </div>
              <p className="text-[0.88rem] leading-[1.5] text-slate-600">
                Tidak perlu. Anda cukup mengisi informasi produk, dan sistem akan membantu menyusun prompt serta naskahnya.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="text-indigo-900 font-black text-[0.88rem] mb-1.5 uppercase tracking-wide">
                🤔 "Apakah ada biaya bulanan SMART-UGC?"
              </div>
              <p className="text-[0.88rem] leading-[1.5] text-slate-600">
                Tidak ada. Akses SMART-UGC cukup dibayar sekali Rp99.000 untuk lisensi lifetime.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="text-indigo-900 font-black text-[0.88rem] mb-1.5 uppercase tracking-wide">
                🤔 "Bagaimana dengan biaya platform AI lain?"
              </div>
              <p className="text-[0.88rem] leading-[1.5] text-slate-600">
                Penggunaan platform eksternal (seperti Google Flow, Kling, Runway, dll.) mengikuti ketentuan & biaya platform tersebut.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="text-indigo-900 font-black text-[0.88rem] mb-1.5 uppercase tracking-wide">
                🤔 "Apakah bisa dipakai untuk banyak produk?"
              </div>
              <p className="text-[0.88rem] leading-[1.5] text-slate-600">
                Bisa. Anda dapat menggunakannya untuk berbagai jenis produk fisik, digital, maupun jasa.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Interruption #4 */}
        <div className="text-center">
          <a 
            href="#harga" 
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-xl text-[0.95rem] font-extrabold transition-all shadow-md uppercase"
          >
            <span>🚀 Dapatkan Akses Lifetime Rp99.000 Sekarang</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

