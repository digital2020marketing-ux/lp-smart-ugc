import fs from 'fs';

const content = `import { ScrollReveal } from './ScrollReveal';

export function BonusStack() {
  return (
    <section className="py-[100px] px-6 bg-[#16161F] border-t border-white/5 relative overflow-hidden">
       {/* bg gradient */}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#16161F] to-[#0A0A0F] z-0 pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <div className="inline-block bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] px-4 py-1.5 rounded-full text-[0.8rem] font-bold tracking-widest uppercase mb-4 animate-pulse">
              🎁 SPESIAL PEMBELIAN HARI INI
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.2]">
              Ambil Keputusan Hari Ini, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C842] to-[#F59E0B]">Dapatkan 4 Bonus PLR Siap Jual!</span>
            </h2>
            <p className="font-subheading text-[#8888AA] text-[1.1rem] mt-5 leading-[1.6]">
              Semua bonus ini dilengkapi dengan Lisensi PLR (Private Label Rights). Artinya, selain bisa dipakai sendiri, <strong>Anda juga BEBAS menjualnya kembali dengan keuntungan 100% milik Anda!</strong>
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8 mb-12">
          {/* Bonus 1 */}
          <ScrollReveal className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center border-[#7C6EFF]/20">
            <div className="w-full md:w-1/2">
               <div className="inline-block bg-[#7C6EFF]/20 text-[#A78BFA] border border-[#7C6EFF]/30 px-3 py-1 rounded-full text-[0.75rem] font-bold tracking-widest uppercase mb-4">BONUS #1</div>
               <h3 className="font-subheading text-white font-bold text-[1.5rem] mb-3">Label Brand Kit <br/><span className="text-[1.1rem] text-[#F5C842]">(PLR LICENCE)</span></h3>
               <p className="text-[#8888AA] text-[0.95rem] leading-[1.6] mb-4">
                 All-in-one template label profesional siap pakai untuk kemasan (makanan, kosmetik, botol, dll). Dibuat di Canva gratisan, sangat ramah pemula. Tinggal sesuaikan warna dan langsung pakai!
               </p>
               <ul className="space-y-2 mb-6">
                 <li className="flex gap-2 items-start text-[#E8E8F0] text-[0.85rem]">
                   <span className="text-[#22C55E] font-bold mt-0.5">✓</span> 95+ Ukuran label segala jenis produk
                 </li>
                 <li className="flex gap-2 items-start text-[#E8E8F0] text-[0.85rem]">
                   <span className="text-[#22C55E] font-bold mt-0.5">✓</span> Template Stiker & 50+ Icon gratis
                 </li>
               </ul>
            </div>
            <div className="w-full md:w-1/2">
               <div className="grid grid-cols-2 gap-2">
                 <img loading="lazy" src="https://jd.dopfs.com/wp-content/uploads/2024/05/3.jpg" className="rounded-xl w-full h-auto object-cover border border-white/10" alt="Bonus 1" />
                 <img loading="lazy" src="https://jd.dopfs.com/wp-content/uploads/2024/05/2.jpg" className="rounded-xl w-full h-auto object-cover border border-white/10" alt="Bonus 1" />
               </div>
            </div>
          </ScrollReveal>

          {/* Bonus 2 */}
          <ScrollReveal className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row-reverse gap-8 items-center border-[#7C6EFF]/20">
            <div className="w-full md:w-1/2">
               <div className="inline-block bg-[#7C6EFF]/20 text-[#A78BFA] border border-[#7C6EFF]/30 px-3 py-1 rounded-full text-[0.75rem] font-bold tracking-widest uppercase mb-4">BONUS #2</div>
               <h3 className="font-subheading text-white font-bold text-[1.5rem] mb-3">Automatic Finance <br/><span className="text-[1.1rem] text-[#F5C842]">(PLR LICENCE)</span></h3>
               <p className="text-[#8888AA] text-[0.95rem] leading-[1.6] mb-4">
                 Template Google Sheets cerdas untuk memantau pendapatan, pengeluaran, dan profit bisnis. Cukup masukkan data, otomatis terkalkulasi. Gratis, aman, dan bisa diakses via HP kapan saja.
               </p>
               <ul className="space-y-2 mb-6">
                 <li className="flex gap-2 items-start text-[#E8E8F0] text-[0.85rem]">
                   <span className="text-[#22C55E] font-bold mt-0.5">✓</span> Visual grafik progres keuangan otomatis
                 </li>
                 <li className="flex gap-2 items-start text-[#E8E8F0] text-[0.85rem]">
                   <span className="text-[#22C55E] font-bold mt-0.5">✓</span> 100% Google Sheets, mudah & data online aman
                 </li>
               </ul>
               <a href="https://www.youtube.com/watch?v=DWrTM2uVnnk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[0.85rem] font-bold text-[#EF4444] hover:text-[#EF4444]/80 transition-colors">
                 ▶ Tonton Demo Video
               </a>
            </div>
            <div className="w-full md:w-1/2">
               <div className="grid grid-cols-2 gap-2">
                 <img loading="lazy" src="https://jd.dopfs.com/wp-content/uploads/2024/05/automatic-finance-1.jpg" className="rounded-xl w-full h-auto object-cover border border-white/10" alt="Bonus 2" />
                 <img loading="lazy" src="https://jd.dopfs.com/wp-content/uploads/2024/05/automatic-finance-2.jpg" className="rounded-xl w-full h-auto object-cover border border-white/10" alt="Bonus 2" />
               </div>
            </div>
          </ScrollReveal>

          {/* Bonus 3 */}
          <ScrollReveal className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center border-[#7C6EFF]/20">
            <div className="w-full md:w-1/2">
               <div className="inline-block bg-[#7C6EFF]/20 text-[#A78BFA] border border-[#7C6EFF]/30 px-3 py-1 rounded-full text-[0.75rem] font-bold tracking-widest uppercase mb-4">BONUS #3</div>
               <h3 className="font-subheading text-white font-bold text-[1.5rem] mb-3">Konten Marketing Plan <br/><span className="text-[1.1rem] text-[#F5C842]">(PLR LICENCE)</span></h3>
               <p className="text-[#8888AA] text-[0.95rem] leading-[1.6] mb-4">
                 Solusi lengkap merencanakan konten sosmed secara efektif. Tersedia visualisasi tata letak, gambaran kalender bulanan, dan jadwal harian. Cocok untuk mengelola multi-akun secara profesional.
               </p>
               <ul className="space-y-2 mb-6">
                 <li className="flex gap-2 items-start text-[#E8E8F0] text-[0.85rem]">
                   <span className="text-[#22C55E] font-bold mt-0.5">✓</span> Dashboard kalender & To-do list otomatis
                 </li>
                 <li className="flex gap-2 items-start text-[#E8E8F0] text-[0.85rem]">
                   <span className="text-[#22C55E] font-bold mt-0.5">✓</span> Setup mudah dengan Google Sheets gratis
                 </li>
               </ul>
               <a href="https://www.youtube.com/watch?v=DXKtVidAK_c" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[0.85rem] font-bold text-[#EF4444] hover:text-[#EF4444]/80 transition-colors">
                 ▶ Tonton Demo Video
               </a>
            </div>
            <div className="w-full md:w-1/2">
               <div className="grid grid-cols-2 gap-2">
                 <img loading="lazy" src="https://jd.dopfs.com/wp-content/uploads/2024/05/all-in-one-konten-planner-1.jpg" className="rounded-xl w-full h-auto object-cover border border-white/10" alt="Bonus 3" />
                 <img loading="lazy" src="https://jd.dopfs.com/wp-content/uploads/2024/05/all-in-one-konten-planner-4.jpg" className="rounded-xl w-full h-auto object-cover border border-white/10" alt="Bonus 3" />
               </div>
            </div>
          </ScrollReveal>

          {/* Bonus 4 */}
          <ScrollReveal className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row-reverse gap-8 items-center border-[#7C6EFF]/20">
            <div className="w-full md:w-1/2">
               <div className="inline-block bg-[#7C6EFF]/20 text-[#A78BFA] border border-[#7C6EFF]/30 px-3 py-1 rounded-full text-[0.75rem] font-bold tracking-widest uppercase mb-4">BONUS #4</div>
               <h3 className="font-subheading text-white font-bold text-[1.5rem] mb-3">Mockup Video Pro <br/><span className="text-[1.1rem] text-[#F5C842]">(PLR LICENCE)</span></h3>
               <p className="text-[#8888AA] text-[0.95rem] leading-[1.6] mb-4">
                 Bikin animasi promo untuk produk digital dalam hitungan detik! Tidak perlu skill editing rumit. Cukup buka template di Canva, drag & drop gambar, dan video promosi Anda siap di-upload.
               </p>
               <ul className="space-y-2 mb-6">
                 <li className="flex gap-2 items-start text-[#E8E8F0] text-[0.85rem]">
                   <span className="text-[#22C55E] font-bold mt-0.5">✓</span> Template Canva animasi (Promo, Freegift, Lead)
                 </li>
                 <li className="flex gap-2 items-start text-[#E8E8F0] text-[0.85rem]">
                   <span className="text-[#22C55E] font-bold mt-0.5">✓</span> Cocok untuk IG Reels, TikTok, & Story
                 </li>
               </ul>
            </div>
            <div className="w-full md:w-1/2">
               <div className="grid grid-cols-2 gap-2">
                 <img loading="lazy" src="https://jd.dopfs.com/wp-content/uploads/2024/05/mockup-video-pro-1.jpg" className="rounded-xl w-full h-auto object-cover border border-white/10" alt="Bonus 4" />
                 <img loading="lazy" src="https://jd.dopfs.com/wp-content/uploads/2024/05/mockup-video-pro-2.gif" className="rounded-xl w-full h-auto object-cover border border-white/10" alt="Bonus 4" />
               </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/BonusStack.tsx', content);
