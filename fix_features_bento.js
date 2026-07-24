import fs from 'fs';

let content = fs.readFileSync('src/components/HeroAndProblems.tsx', 'utf8');

const targetStr = `<div className="max-w-[720px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-6 hover:border-[#7C6EFF]/50 transition-colors">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-subheading text-lg font-bold text-white mb-4">Konsistensi Mikro, Bukan Gimik</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start text-[#8888AA] text-[0.95rem]">
                  <span className="text-[#7C6EFF] font-bold mt-1">✓</span>
                  Konsistensi hingga level detail terkecil (pakaian, rambut, postur).
                </li>
                <li className="flex gap-3 items-start text-[#8888AA] text-[0.95rem]">
                  <span className="text-[#7C6EFF] font-bold mt-1">✓</span>
                  Konsisten dalam lokasi, pencahayaan, posisi produk, dan interaksi barang.
                </li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6 hover:border-[#F5C842]/50 transition-colors">
              <div className="text-3xl mb-4">🎭</div>
              <h3 className="font-subheading text-lg font-bold text-white mb-4">Karakter Hidup & Bernapas</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start text-[#8888AA] text-[0.95rem]">
                  <span className="text-[#F5C842] font-bold mt-1">✓</span>
                  Disuntikkan "False Habit" alami agar tidak terlihat seperti robot.
                </li>
                <li className="flex gap-3 items-start text-[#8888AA] text-[0.95rem]">
                  <span className="text-[#F5C842] font-bold mt-1">✓</span>
                  Mimik wajah natural: menghela napas, tersenyum simpul, gerakan mata organik.
                </li>
              </ul>
            </div>
          </div>
        </div>`;

const replacement = `<div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-10">
             <h3 className="text-[#8888AA] font-subheading text-[1.1rem]">Bukan sekadar "generator video", tapi <span className="text-white font-bold">otak produksi lengkap</span> yang didesain untuk konversi.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* BIG CARD 1 */}
            <div className="glass-card rounded-2xl p-6 md:col-span-2 hover:border-[#7C6EFF]/40 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C6EFF]/10 rounded-full blur-[40px] group-hover:bg-[#7C6EFF]/20 transition-colors"></div>
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="font-subheading text-lg font-bold text-white mb-3">Psychology-Driven (Tujuan Psikologis)</h3>
              <p className="text-[#8888AA] text-[0.9rem] leading-[1.6] mb-4">Setiap adegan dirancang bukan cuma agar visualnya bagus, tapi punya efek emosional spesifik kepada penonton.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1E1E2A] text-[#E8E8F0] text-[0.75rem] px-2.5 py-1 rounded-md border border-white/5">🔥 FOMO (Keinginan)</span>
                <span className="bg-[#1E1E2A] text-[#E8E8F0] text-[0.75rem] px-2.5 py-1 rounded-md border border-white/5">🥺 Rasa Penasaran</span>
                <span className="bg-[#1E1E2A] text-[#E8E8F0] text-[0.75rem] px-2.5 py-1 rounded-md border border-white/5">👑 Otoritas & Kepercayaan</span>
              </div>
            </div>

            {/* SMALL CARD 1 */}
            <div className="glass-card rounded-2xl p-6 hover:border-[#22C55E]/40 transition-colors relative overflow-hidden group">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#22C55E]/10 rounded-full blur-[30px]"></div>
              <div className="text-3xl mb-4">🎭</div>
              <h3 className="font-subheading text-lg font-bold text-white mb-2">Creator Archetype</h3>
              <p className="text-[#8888AA] text-[0.85rem] leading-[1.6]">Pilih persona talent yang paling pas: Beauty Creator, Tech Reviewer, Mom Creator, dan lainnya.</p>
            </div>

            {/* SMALL CARD 2 */}
            <div className="glass-card rounded-2xl p-6 hover:border-[#F5C842]/40 transition-colors">
              <div className="text-3xl mb-4">🎬</div>
              <h3 className="font-subheading text-lg font-bold text-white mb-2">Karakter Hidup</h3>
              <p className="text-[#8888AA] text-[0.85rem] leading-[1.6]">Mimik wajah natural, menghela napas, gerakan mata organik. Jauh dari kesan robot kaku.</p>
            </div>

            {/* SMALL CARD 3 */}
            <div className="glass-card rounded-2xl p-6 hover:border-[#EC4899]/40 transition-colors">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-subheading text-lg font-bold text-white mb-2">Platform Pacing</h3>
              <p className="text-[#8888AA] text-[0.85rem] leading-[1.6]">Kecepatan video otomatis disesuaikan (TikTok yang cepat, atau Reels yang sinematik/rapi).</p>
            </div>

            {/* SMALL CARD 4 */}
            <div className="glass-card rounded-2xl p-6 hover:border-[#0EA5E9]/40 transition-colors">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="font-subheading text-lg font-bold text-white mb-2">Lighting & Vibe</h3>
              <p className="text-[#8888AA] text-[0.85rem] leading-[1.6]">Kontrol penuh warna brand: Natural Daylight, Neon, Cinematic, atau Minimalist & Clean.</p>
            </div>

            {/* BIG CARD 2 */}
            <div className="glass-card rounded-2xl p-6 md:col-span-3 hover:border-white/20 transition-colors relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] bg-gradient-to-r from-[#7C6EFF]/10 to-[#EC4899]/10 rounded-full blur-[60px] pointer-events-none"></div>
              
              <div className="flex-1 z-10 text-center md:text-left">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-subheading text-[1.2rem] font-bold text-white mb-2">Konsistensi Mikro Ekstrem</h3>
                <p className="text-[#8888AA] text-[0.9rem] leading-[1.6]">Sistem kami mengunci aset Anda (wajah, pakaian, posisi produk, dan tata cahaya) agar tidak berubah-ubah atau bocor di tengah adegan. Setiap frame akan selaras tanpa halusinasi visual.</p>
              </div>
              
              <div className="flex-shrink-0 z-10 w-full md:w-auto">
                 <div className="bg-[#16161F] border border-white/10 rounded-xl p-3 flex flex-col gap-2 w-full md:w-[320px]">
                   <div className="flex items-center gap-3 bg-[#1E1E2A] p-2 rounded-lg border border-white/5">
                     <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E] text-[10px]">✓</div>
                     <span className="text-[#E8E8F0] text-[0.8rem]">Konsistensi Wajah Talent</span>
                   </div>
                   <div className="flex items-center gap-3 bg-[#1E1E2A] p-2 rounded-lg border border-white/5">
                     <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E] text-[10px]">✓</div>
                     <span className="text-[#E8E8F0] text-[0.8rem]">Bentuk Produk Tidak Distorsi</span>
                   </div>
                   <div className="flex items-center gap-3 bg-[#1E1E2A] p-2 rounded-lg border border-white/5">
                     <div className="w-6 h-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E] text-[10px]">✓</div>
                     <span className="text-[#E8E8F0] text-[0.8rem]">Pencahayaan & Background Tetap</span>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>`;

if (content.includes(targetStr)) {
  fs.writeFileSync('src/components/HeroAndProblems.tsx', content.replace(targetStr, replacement));
  console.log("Successfully replaced grid.");
} else {
  console.log("Target string not found, trying regex fallback");
  
  // fallback to regex if exact spacing issue
  const regex = /<div className="max-w-\[720px\] mx-auto px-6">[\s\S]*?<\/ul>\s*<\/div>\s*<\/div>\s*<\/div>/;
  if (regex.test(content)) {
     fs.writeFileSync('src/components/HeroAndProblems.tsx', content.replace(regex, replacement));
     console.log("Successfully replaced grid with regex.");
  } else {
     console.log("Failed to find target block entirely.");
  }
}
