import { ScrollReveal } from './ScrollReveal';

export function ComparisonAndReviews() {
  return (
    <>
      {/* INTERNAL PROOF / TRUST SECTION */}
      <section className="py-[64px] bg-[#0A0A0F] px-6 border-t border-white/5">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-[48px]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.75rem] font-bold tracking-widest uppercase border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E] mb-6">
              🛡️ Dibangun Dari Kebutuhan Agensi Sendiri
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.2]">
              Bukan Sekadar "Teori AI", Ini Adalah <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#10B981]">Mesin Uang Internal Kami</span>
            </h2>
            <p className="font-subheading text-[1.1rem] leading-[1.7] text-[#8888AA] mt-4">
              Aplikasi ini awalnya tidak untuk dijual. Kami membangunnya untuk memotong biaya produksi video internal kami sendiri. Kami muak dengan kualitas "AI Generik" yang terlihat palsu dan membuang-buang budget iklan. Karena terbukti berhasil untuk kami, sekarang kami membukanya untuk Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal className="bg-[#16161F] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF4444]/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2"></div>
               <div className="text-[0.75rem] font-bold bg-[#EF4444]/20 text-[#EF4444] px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">Masa Lalu (Tanpa Sistem Kami)</div>
               <h3 className="text-white font-bold text-xl mb-3">AI Generator Biasa (Pasaran)</h3>
               <ul className="space-y-3">
                 <li className="flex items-start gap-2 text-[#8888AA] text-[0.95rem]">
                   <span className="text-[#EF4444] mt-0.5">✗</span> Wajah karakter berubah-ubah di setiap scene.
                 </li>
                 <li className="flex items-start gap-2 text-[#8888AA] text-[0.95rem]">
                   <span className="text-[#EF4444] mt-0.5">✗</span> Intonasi suara kaku dan terdengar seperti robot CS.
                 </li>
                 <li className="flex items-start gap-2 text-[#8888AA] text-[0.95rem]">
                   <span className="text-[#EF4444] mt-0.5">✗</span> Terlihat jelas seperti iklan palsu, audiens langsung skip.
                 </li>
                 <li className="flex items-start gap-2 text-[#8888AA] text-[0.95rem]">
                   <span className="text-[#EF4444] mt-0.5">✗</span> Fitur dibatasi sistem kredit bulanan yang mahal.
                 </li>
               </ul>
            </ScrollReveal>
            
            <ScrollReveal className="bg-gradient-to-br from-[#16161F] to-[#7C6EFF]/10 border border-[#7C6EFF]/30 rounded-2xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(124,110,255,0.1)]">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C6EFF]/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2"></div>
               <div className="text-[0.75rem] font-bold bg-[#7C6EFF]/20 text-[#A855F7] px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">Sekarang (SMART-UGC)</div>
               <h3 className="text-white font-bold text-xl mb-3">Hasil Standar UGC Kreator Asli</h3>
               <ul className="space-y-3">
                 <li className="flex items-start gap-2 text-white text-[0.95rem]">
                   <span className="text-[#22C55E] mt-0.5 font-bold">✓</span> <strong className="text-[#A855F7]">Reference Lock:</strong> Wajah dan produk 100% konsisten.
                 </li>
                 <li className="flex items-start gap-2 text-white text-[0.95rem]">
                   <span className="text-[#22C55E] mt-0.5 font-bold">✓</span> <strong className="text-[#A855F7]">Natural Vibe:</strong> Naskah dan pacing disesuaikan algoritma TikTok/Reels.
                 </li>
                 <li className="flex items-start gap-2 text-white text-[0.95rem]">
                   <span className="text-[#22C55E] mt-0.5 font-bold">✓</span> <strong className="text-[#A855F7]">Fleksibilitas Output:</strong> Storyboard, Image, Video, & Export ke platform luar.
                 </li>
                 <li className="flex items-start gap-2 text-white text-[0.95rem]">
                   <span className="text-[#22C55E] mt-0.5 font-bold">✓</span> <strong className="text-[#A855F7]">No Hidden Fees:</strong> Bayar sekali di depan, sisanya pakai tarif dasar API.
                 </li>
               </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-[64px] bg-[#16161F] px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[720px] mx-auto mb-[48px]">
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.2]">
              Kenapa Kreator & Brand Besar <span className="grad-text">Mulai Meninggalkan Cara Lama?</span>
            </h2>
            <p className="font-subheading text-[1.1rem] leading-[1.7] text-[#8888AA] mt-4 max-w-[600px] mx-auto">
              Berhenti membuang budget produksi di tempat yang salah. Lihat perbandingan ini dan temukan seberapa besar kerugian yang bisa kamu hindari.
            </p>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full border-separate border-spacing-0 mt-10 text-left min-w-[700px]">
              <thead>
                <tr>
                  <th className="bg-[#16161F] text-[#8888AA] font-bold text-[0.82rem] uppercase tracking-wide p-3.5 border-b border-white/10 rounded-tl-xl">Fitur</th>
                  <th className="bg-[#7C6EFF]/10 text-[#7C6EFF] font-bold text-[0.82rem] uppercase tracking-wide p-3.5 border-b border-white/10 border-l border-r border-[#7C6EFF]/15">⚡ SMART-UGC</th>
                  <th className="bg-[#16161F] text-[#8888AA] font-bold text-[0.82rem] uppercase tracking-wide p-3.5 border-b border-white/10">AI Generator Biasa</th>
                  <th className="bg-[#16161F] text-[#8888AA] font-bold text-[0.82rem] uppercase tracking-wide p-3.5 border-b border-white/10 rounded-tr-xl">Hire Freelancer</th>
                </tr>
              </thead>
              <tbody className="text-[0.92rem] text-white">
                <tr>
                  <td className="p-3.5 border-b border-white/10">Kualitas Naskah Video</td>
                  <td className="p-3.5 border-b border-white/10 bg-[#7C6EFF]/5 border-l border-r border-[#7C6EFF]/15"><span className="text-[#22C55E] font-bold">✓ Berbasis Psikologi Penjualan</span></td>
                  <td className="p-3.5 border-b border-white/10"><span className="text-[#EF4444] font-bold">✗ Generik & mirip orang lain</span></td>
                  <td className="p-3.5 border-b border-white/10"><span className="text-[#F5C842] font-bold">~ Tergantung skill</span></td>
                </tr>
                <tr>
                  <td className="p-3.5 border-b border-white/10">Konsistensi Visual</td>
                  <td className="p-3.5 border-b border-white/10 bg-[#7C6EFF]/5 border-l border-r border-[#7C6EFF]/15"><span className="text-[#22C55E] font-bold">✓ Konsisten 100% (Reference Lock)</span></td>
                  <td className="p-3.5 border-b border-white/10"><span className="text-[#EF4444] font-bold">✗ Wajah & baju berubah-ubah</span></td>
                  <td className="p-3.5 border-b border-white/10"><span className="text-[#F5C842] font-bold">~ Tergantung shooting</span></td>
                </tr>
                <tr>
                  <td className="p-3.5 border-b border-white/10">Skema Pembayaran</td>
                  <td className="p-3.5 border-b border-white/10 bg-[#7C6EFF]/5 border-l border-r border-[#7C6EFF]/15"><span className="text-[#22C55E] font-bold">✓ Sekali bayar + API (Lebih hemat)</span></td>
                  <td className="p-3.5 border-b border-white/10"><span className="text-[#EF4444] font-bold">✗ Langganan bulanan mahal</span></td>
                  <td className="p-3.5 border-b border-white/10"><span className="text-[#EF4444] font-bold">✗ Bayar per video (Sangat mahal)</span></td>
                </tr>
                <tr>
                  <td className="p-3.5 border-b border-white/10">Fleksibilitas Output</td>
                  <td className="p-3.5 border-b border-white/10 bg-[#7C6EFF]/5 border-l border-r border-[#7C6EFF]/15"><span className="text-[#22C55E] font-bold">✓ Storyboard, Video, Image, Prompts</span></td>
                  <td className="p-3.5 border-b border-white/10"><span className="text-[#EF4444] font-bold">✗ Terbatas format mereka</span></td>
                  <td className="p-3.5 border-b border-white/10"><span className="text-[#F5C842] font-bold">~ File final saja</span></td>
                </tr>
                <tr>
                  <td className="p-3.5 border-b border-white/10">Export ke Platform Luar</td>
                  <td className="p-3.5 border-b border-white/10 bg-[#7C6EFF]/5 border-l border-r border-[#7C6EFF]/15"><span className="text-[#22C55E] font-bold">✓ Bisa pakai Kling, Flow, dll</span></td>
                  <td className="p-3.5 border-b border-white/10"><span className="text-[#EF4444] font-bold">✗ Terkunci di 1 aplikasi</span></td>
                  <td className="p-3.5 border-b border-white/10"><span className="text-[#22C55E] font-bold">✓ Bebas</span></td>
                </tr>
                <tr>
                  <td className="p-3.5 border-b border-white/10">Kecepatan Produksi</td>
                  <td className="p-3.5 border-b border-white/10 bg-[#7C6EFF]/5 border-l border-r border-[#7C6EFF]/15"><span className="text-[#22C55E] font-bold">✓ Hitungan menit</span></td>
                  <td className="p-3.5 border-b border-white/10"><span className="text-[#22C55E] font-bold">✓ Cepat tapi hasil jelek</span></td>
                  <td className="p-3.5 border-b border-white/10"><span className="text-[#EF4444] font-bold">✗ Berminggu-minggu</span></td>
                </tr>
                <tr>
                  <td className="p-3.5">Harga Masuk</td>
                  <td className="p-3.5 bg-[#7C6EFF]/5 border-l border-r border-[#7C6EFF]/15"><span className="text-[#22C55E] font-bold text-[0.95rem]">Rp 249.000 bayar sekali</span></td>
                  <td className="p-3.5"><span className="text-[#EF4444] font-bold">Rp 150rb–400rb/bulan</span></td>
                  <td className="p-3.5"><span className="text-[#EF4444] font-bold">Rp 500rb–5jt/project</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* FALSE BELIEFS / OBJECTIONS SECTION */}
      <section className="py-[64px] bg-[#16161F] px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[720px] mx-auto mb-[48px]">
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.2]">
              "Apakah Ini Cocok <span className="grad-text">Buat Saya?</span>"
            </h2>
            <p className="text-[1.1rem] leading-[1.7] text-[#8888AA] mt-4">
              Masih ragu? Kita jawabin semua keresahan kamu di sini.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ScrollReveal className="glass-card rounded-[20px] p-7 hover:border-white/20 transition-all">
              <div className="font-subheading text-[0.85rem] text-[#EF4444] font-bold uppercase tracking-wide mb-2">🤔 "Aku gaptek nih, nggak paham cara setting API"</div>
              <p className="text-[0.95rem] leading-[1.7] text-[#8888AA]">Tenang, nggak perlu jadi programmer! Bikin API key (Gemini/OpenAI) itu gratis & cuma butuh 2 menit. Kita udah siapin video tutorial *step-by-step*. Tinggal copas ke Settings, dan boom! Sistem langsung jalan.</p>
            </ScrollReveal>
            
            <ScrollReveal className="glass-card rounded-[20px] p-7 hover:border-white/20 transition-all">
              <div className="font-subheading text-[0.85rem] text-[#EF4444] font-bold uppercase tracking-wide mb-2">🤔 "Pasti biaya API-nya nanti bikin kantong jebol?"</div>
              <p className="text-[0.95rem] leading-[1.7] text-[#8888AA]">Justru kebalikannya! Tools AI yang pakai sistem kredit itu yang mahal karena harganya *di-markup*. Kalau pakai API sendiri, kamu punya 100% kendali budget. Asyiknya lagi, ada free tier API Gemini yang bisa kamu pake!</p>
            </ScrollReveal>
            
            <ScrollReveal className="glass-card rounded-[20px] p-7 hover:border-white/20 transition-all">
              <div className="font-subheading text-[0.85rem] text-[#EF4444] font-bold uppercase tracking-wide mb-2">🤔 "Hasil video AI kan biasanya kaku & kelihatan palsu!"</div>
              <p className="text-[0.95rem] leading-[1.7] text-[#8888AA]">Itu karena kamu masih pake prompt generik 1 kalimat. SMART-UGC punya <strong>Sistem Sutradara</strong> lengkap dengan *Reference Lock* & *Continuity Engine*. Hasilnya? Wajah konsisten & transisi kamera sinematik, bukan editan patah-patah.</p>
            </ScrollReveal>
            
            <ScrollReveal className="glass-card rounded-[20px] p-7 hover:border-white/20 transition-all">
              <div className="font-subheading text-[0.85rem] text-[#EF4444] font-bold uppercase tracking-wide mb-2">🤔 "Ini tools-nya langganan tiap bulan ya?"</div>
              <p className="text-[0.95rem] leading-[1.7] text-[#8888AA]"><strong className="text-white">Nggak dong!</strong> 100% cukup bayar sekali buat seumur hidup. Kamu mendapatkan akses penuh selamanya tanpa biaya berlangganan tersembunyi.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
