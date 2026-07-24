import fs from 'fs';

let content = fs.readFileSync('src/components/HeroAndProblems.tsx', 'utf8');

const regex = /<div className="max-w-\[1000px\] mx-auto px-6">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newSection = `
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#F5C842]/20 rounded-full blur-[50px] pointer-events-none"></div>
            <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-white mb-4 relative z-10">
              Dopamine Influencer <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C842] to-[#F59E0B]">Bukan Avatar Kaku</span> Kayak AI Sebelah
            </h2>
            <p className="text-[#8888AA] font-subheading text-[1.1rem] max-w-[700px] mx-auto relative z-10">
              Kami membangun <strong className="text-white">otak produksi lengkap</strong>. Mulai dari psikologi penonton hingga pencahayaan, semuanya diatur otomatis agar video Anda siap tayang (dan siap viral).
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* CARD: Konsistensi Mikro */}
            <div className="glass-card rounded-2xl p-6 md:col-span-8 hover:border-white/20 transition-colors relative overflow-hidden flex flex-col md:flex-row gap-6 items-center group">
              <div className="absolute top-0 right-0 w-full h-full max-w-[400px] bg-gradient-to-r from-transparent to-[#7C6EFF]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="flex-1 z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7C6EFF]/20 to-[#A855F7]/20 border border-[#7C6EFF]/30 rounded-xl flex items-center justify-center text-[1.5rem] mb-4">🎯</div>
                <h3 className="font-subheading text-[1.2rem] font-bold text-white mb-2">Konsistensi Mikro, Bukan Gimik</h3>
                <p className="text-[#8888AA] text-[0.9rem] leading-[1.6] mb-4">Sistem kami menjaga setiap detail agar tidak bocor. Menghasilkan visual yang 100% konsisten layaknya direkam oleh kamera asli.</p>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-start text-[#E8E8F0] text-[0.85rem]">
                    <span className="text-[#22C55E] mt-0.5 font-bold">✓</span> Konsistensi hingga level detail terkecil (pakaian, rambut, postur).
                  </li>
                  <li className="flex gap-2 items-start text-[#E8E8F0] text-[0.85rem]">
                    <span className="text-[#22C55E] mt-0.5 font-bold">✓</span> Konsisten dalam lokasi, pencahayaan, posisi produk, dan interaksi.
                  </li>
                </ul>
              </div>
            </div>

            {/* CARD: Karakter Hidup */}
            <div className="glass-card rounded-2xl p-6 md:col-span-4 hover:border-[#F5C842]/30 transition-colors relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F5C842]/10 rounded-full blur-[30px] group-hover:bg-[#F5C842]/20 transition-colors pointer-events-none"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#F5C842]/20 to-[#F59E0B]/20 border border-[#F5C842]/30 rounded-xl flex items-center justify-center text-[1.5rem] mb-4 relative z-10">🎭</div>
              <h3 className="font-subheading text-[1.1rem] font-bold text-white mb-2 relative z-10">Karakter Hidup & Bernapas</h3>
              <ul className="space-y-2 relative z-10 mt-3">
                <li className="flex gap-2 items-start text-[#8888AA] text-[0.85rem]">
                  <span className="text-[#F5C842] mt-0.5 font-bold">✓</span> Disuntikkan "False Habit" alami (tidak seperti robot).
                </li>
                <li className="flex gap-2 items-start text-[#8888AA] text-[0.85rem]">
                  <span className="text-[#F5C842] mt-0.5 font-bold">✓</span> Mimik wajah natural: menghela napas, tersenyum simpul, gerakan mata.
                </li>
              </ul>
            </div>

            {/* CARD: Creator Archetype & Activity */}
            <div className="glass-card rounded-2xl p-6 md:col-span-5 hover:border-[#EC4899]/30 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EC4899]/10 rounded-full blur-[30px] group-hover:bg-[#EC4899]/20 transition-colors pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-[#EC4899]/20 to-[#BE185D]/20 border border-[#EC4899]/30 rounded-xl flex items-center justify-center text-[1.2rem]">👥</div>
                <h3 className="font-subheading text-[1.1rem] font-bold text-white">Persona Kreator Spesifik</h3>
              </div>
              <p className="text-[#8888AA] text-[0.85rem] leading-[1.6] mb-4 relative z-10">
                Pilih persona yang paling cocok dengan audiens Anda (Beauty, Tech, Mom, Lifestyle, Fitness). AI akan menyesuaikan gaya bahasa, aktivitas (Unboxing, Review, Routine), dan cara subjek berinteraksi dengan kamera.
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                <span className="bg-[#1E1E2A] text-[#F472B6] text-[0.7rem] px-2 py-1 rounded border border-[#EC4899]/20">Beauty Creator</span>
                <span className="bg-[#1E1E2A] text-[#F472B6] text-[0.7rem] px-2 py-1 rounded border border-[#EC4899]/20">Tech Reviewer</span>
              </div>
            </div>

            {/* CARD: Psychology Goal */}
            <div className="glass-card rounded-2xl p-6 md:col-span-7 hover:border-[#0EA5E9]/30 transition-colors relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#0EA5E9]/5 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9]/20 to-[#0369A1]/20 border border-[#0EA5E9]/30 rounded-xl flex items-center justify-center text-[1.2rem]">🧠</div>
                  <h3 className="font-subheading text-[1.1rem] font-bold text-white">Target Psikologi Penonton</h3>
                </div>
                <p className="text-[#8888AA] text-[0.85rem] leading-[1.6] mb-4">
                  Video yang bagus tidak hanya ditonton, tapi dirasakan. Pilih 1 dari 20 target psikologi (seperti Curiosity, Trust, FOMO, Nostalgia, Exclusivity) untuk menjadi "napas" utama di balik setiap naskah dan adegan.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 relative z-10 mt-auto">
                <div className="bg-[#1E1E2A] border border-white/5 rounded-lg p-2 text-center">
                  <div className="text-[0.65rem] text-[#0EA5E9] font-bold uppercase">Kognitif</div>
                  <div className="text-[0.75rem] text-white">Rasa Penasaran</div>
                </div>
                <div className="bg-[#1E1E2A] border border-white/5 rounded-lg p-2 text-center">
                  <div className="text-[0.65rem] text-[#EF4444] font-bold uppercase">Emosional</div>
                  <div className="text-[0.75rem] text-white">Kejutan & FOMO</div>
                </div>
                <div className="bg-[#1E1E2A] border border-white/5 rounded-lg p-2 text-center">
                  <div className="text-[0.65rem] text-[#F5C842] font-bold uppercase">Status</div>
                  <div className="text-[0.75rem] text-white">Kemewahan</div>
                </div>
                <div className="bg-[#1E1E2A] border border-white/5 rounded-lg p-2 text-center">
                  <div className="text-[0.65rem] text-[#22C55E] font-bold uppercase">Sensori</div>
                  <div className="text-[0.75rem] text-white">Kepuasan Visual</div>
                </div>
              </div>
            </div>

            {/* CARD: Platform Pacing */}
            <div className="glass-card rounded-2xl p-6 md:col-span-6 hover:border-white/20 transition-colors flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[1.2rem]">📱</div>
              <div>
                <h3 className="font-subheading text-[1.05rem] font-bold text-white mb-1.5">Platform Pacing (Kecepatan)</h3>
                <p className="text-[#8888AA] text-[0.85rem] leading-[1.6]">
                  Kecepatan video otomatis diatur berdasarkan platform. <strong className="text-white">TikTok</strong> (Raw & Fast-paced), <strong className="text-white">IG Reels</strong> (Polished & Aesthetic), atau <strong className="text-white">YT Shorts</strong> (High Retention).
                </p>
              </div>
            </div>

            {/* CARD: Brand Aesthetic & Lighting */}
            <div className="glass-card rounded-2xl p-6 md:col-span-6 hover:border-white/20 transition-colors flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[1.2rem]">💡</div>
              <div>
                <h3 className="font-subheading text-[1.05rem] font-bold text-white mb-1.5">Brand Tone & Lighting</h3>
                <p className="text-[#8888AA] text-[0.85rem] leading-[1.6]">
                  Kontrol vibe visual Anda secara konsisten. Padukan <strong className="text-white">Brand Tone</strong> (Authentic, Playful, Luxurious) dengan <strong className="text-white">Lighting</strong> (Natural Daylight, Neon/Cyberpunk, Cinematic Mood).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>`;

if (regex.test(content)) {
  fs.writeFileSync('src/components/HeroAndProblems.tsx', content.replace(regex, newSection));
  console.log("Successfully replaced with V2.");
} else {
  console.log("Regex not found.");
}
