import fs from 'fs';

let content = fs.readFileSync('src/components/DirectorPipeline.tsx', 'utf8');

const stage8Content = `        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">8</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Visual Storyboard</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Studio Validasi:<br /><span className="grad-text">Visual Debugging & Continuity Check</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Ubah instruksi teks menjadi representasi visual nyata (Image). Daripada menghabiskan kuota mahal untuk render video panjang, Anda berhenti di sini untuk memvalidasi konsistensi estetika.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Contextual Image Continuity</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem cerdas me-<em>loop back</em> gambar Scene 1 sebagai referensi Scene 2, menjaga memori visual agar wajah & warna 100% berkelanjutan.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Hemat Biaya (Cost Efficiency)</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Reference Audit mencegah generate gambar jika referensi utama kosong. Menghindari pemborosan token mahal akibat AI halusinasi.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Portabilitas Ekstrem (Export)</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Export <em>Production Script (.txt)</em> atau <em>Copy Prompt</em> ke clipboard. Anda bebas merender di platform eksternal mana pun!</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Storyboard Grid Generator</div>
            
            <div className="bg-[#1E1E2A] rounded-xl border border-white/5 p-3 flex-grow grid grid-cols-2 gap-2">
              <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-1.5 text-[0.55rem] text-white font-mono truncate border-t border-white/10">S1: "Kulit breakout parah?"</div>
              </div>
              <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-1.5 text-[0.55rem] text-white font-mono truncate border-t border-white/10">S2: "Barrier kamu rusak..."</div>
              </div>
              <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-1.5 text-[0.55rem] text-white font-mono truncate border-t border-white/10">S3: "Ini solusinya..."</div>
              </div>
              <div className="relative aspect-video bg-[#16161F] rounded-lg overflow-hidden border border-white/5 flex items-center justify-center">
                <span className="text-[#8888AA] font-bold text-[0.8rem]">+3 Scenes</span>
              </div>
            </div>

            <div className="flex gap-2 mt-2">
               <button className="flex-1 bg-[#7C6EFF]/20 text-[#A78BFA] border border-[#7C6EFF]/30 py-2 rounded-lg text-[0.75rem] font-bold hover:bg-[#7C6EFF]/30 transition-colors flex items-center justify-center gap-1.5">
                 <span>⬇️</span> EXPORT TXT
               </button>
               <button className="flex-1 bg-[#F5C842]/10 text-[#F5C842] border border-[#F5C842]/30 py-2 rounded-lg text-[0.75rem] font-bold hover:bg-[#F5C842]/20 transition-colors flex items-center justify-center gap-1.5">
                 <span>📋</span> COPY PROMPT
               </button>
            </div>
          </div>
        </div>`;

content = content.replace(
  /<div className="flex flex-col items-center justify-center text-center p-8 bg-\[#16161F\] rounded-2xl border border-white\/10">\s*<h3 className="font-heading text-2xl font-bold text-white mb-4">Stage 8: Visual Storyboard<\/h3>\s*<p className="text-\[#8888AA\]">Studio Visual untuk menguji dan memvalidasi estetika gambar sebelum dirender menjadi video\.<\/p>\s*<\/div>/,
  stage8Content
);

fs.writeFileSync('src/components/DirectorPipeline.tsx', content);
