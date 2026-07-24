import fs from 'fs';

let content = fs.readFileSync('src/components/DirectorPipeline.tsx', 'utf8');

const stage6Content = `        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">6</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Technical Planner</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Director of Photography (DOP):<br /><span className="grad-text">Visual Grammar & Kamera Cerdas</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Menerjemahkan <strong>"Apa yang terjadi"</strong> (Narasi/Script) menjadi <strong>"Bagaimana direkam & diedit"</strong> (Visual Grammar). Merencanakan eksekusi visual teknis untuk setiap adegan agar video tidak statis dan membosankan.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Camera Logic (Pergerakan & Lensa)</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Mengatur angle gambar, pergerakan kamera cerdas (pan/tilt/zoom), pemilihan lensa, dan framing yang sesuai dengan nuansa video.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Motion & VFX (Transisi & Efek)</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Mendikte dinamika pergerakan subjek dalam frame, transisi antar adegan, serta injeksi efek sinematik (speed ramp, light leak).</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Human-in-the-Loop (Auto-Optimize)</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Anda memiliki wewenang mengoreksi. Cukup ketik "buat lebih dramatis", AI akan mengkalkulasi ulang seluruh tabel pergerakan secara otomatis.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Technical Matrix / Shot List</div>
            <div className="flex flex-col gap-3">
              <div className="bg-[#1E1E2A] p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#7C6EFF]"></div>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-white font-bold text-[0.85rem]">Scene 1: Hook</div>
                  <span className="text-[0.65rem] text-[#8888AA] bg-black/40 px-2 py-0.5 rounded">0.0s - 4.5s</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <div className="text-[0.65rem] text-[#8888AA] font-bold uppercase mb-1">🎥 Camera Logic</div>
                    <div className="text-[0.75rem] text-[#E8E8F0] font-mono leading-tight">Close-up, 24mm wide lens, Dolly-in fast</div>
                  </div>
                  <div>
                    <div className="text-[0.65rem] text-[#8888AA] font-bold uppercase mb-1">✨ Motion & VFX</div>
                    <div className="text-[0.75rem] text-[#E8E8F0] font-mono leading-tight">Subjek panik, transisi glitch, light leak</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1E1E2A] p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#EC4899]"></div>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-white font-bold text-[0.85rem]">Scene 2: Product Reveal</div>
                  <span className="text-[0.65rem] text-[#8888AA] bg-black/40 px-2 py-0.5 rounded">4.5s - 9.0s</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <div className="text-[0.65rem] text-[#8888AA] font-bold uppercase mb-1">🎥 Camera Logic</div>
                    <div className="text-[0.75rem] text-[#E8E8F0] font-mono leading-tight">Macro shot, 50mm lens, Slow pan right</div>
                  </div>
                  <div>
                    <div className="text-[0.65rem] text-[#8888AA] font-bold uppercase mb-1">✨ Motion & VFX</div>
                    <div className="text-[0.75rem] text-[#E8E8F0] font-mono leading-tight">Smooth fade, product rotating slowly</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2 text-[0.75rem] text-[#8888AA] leading-[1.4]">
                <div className="w-1.5 h-1.5 shrink-0 bg-[#8888AA] rounded-full"></div>
                Pemisahan Tugas: Penulis skrip (Cerita) dan DOP (Teknis) dipisah agar akurasi visual AI lebih maksimal tanpa halusinasi prompt.
              </div>
            </div>
          </div>
        </div>`;

content = content.replace(
  /<div className="flex flex-col items-center justify-center text-center p-8 bg-\[#16161F\] rounded-2xl border border-white\/10">\s*<h3 className="font-heading text-2xl font-bold text-white mb-4">Stage 6: Technical Planner<\/h3>\s*<p className="text-\[#8888AA\]">Merencanakan eksekusi visual teknis \(Camera Logic, Motion & VFX\) untuk setiap adegan\.<\/p>\s*<\/div>/,
  stage6Content
);

fs.writeFileSync('src/components/DirectorPipeline.tsx', content);
