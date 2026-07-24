import fs from 'fs';

let content = fs.readFileSync('src/components/DirectorPipeline.tsx', 'utf8');

const stage9Content = `        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">9</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Final Render</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              The Final Output:<br /><span className="grad-text">Kompilasi Video AI Berkualitas Hollywood</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Muara terakhir dari seluruh pipeline. Mengubah gambar statis dan instruksi kamera menjadi satu kesatuan video utuh melalui API Video Generator terkemuka (seperti <em>Luma Dream Machine</em> atau <em>Runway</em>).
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Image Keyframe Lock</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Menggunakan gambar dari Stage 8 sebagai panduan visual absolut. Wajah karakter di Scene 1 akan sama persis dengan Scene terakhir (Anti Halusinasi).</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Smart Polling & Anti-Gagal</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Status progresif (QUEUED, GENERATING, COMPLETED). Jika render Scene 3 gagal, Scene lain aman. Anda cukup me-<em>retry</em> yang gagal saja.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Perlindungan Biaya (Cost Guard)</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Tersedia mekanisme <em>Fake Video Placeholder</em> saat testing/debugging agar kredit API mahal Anda tidak terkuras sia-sia (bebas boncos).</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Render Status Tracking</div>
            
            <div className="flex flex-col gap-3">
              <div className="bg-[#1E1E2A] p-4 rounded-xl border border-[#22C55E]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#22C55E]/20 flex items-center justify-center text-[0.85rem]">🎬</div>
                  <div>
                    <div className="text-white font-bold text-[0.85rem]">Scene 1: Hook</div>
                    <div className="text-[#8888AA] text-[0.7rem]">Luma Dream Machine API</div>
                  </div>
                </div>
                <div className="bg-[#22C55E]/10 text-[#22C55E] text-[0.7rem] font-bold px-2 py-1 rounded">COMPLETED</div>
              </div>

              <div className="bg-[#1E1E2A] p-4 rounded-xl border border-[#F5C842]/30 flex items-center justify-between relative overflow-hidden">
                <div className="absolute bottom-0 left-0 h-1 bg-[#F5C842] w-[65%] rounded-r"></div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F5C842]/20 flex items-center justify-center text-[0.85rem] animate-pulse">⏳</div>
                  <div>
                    <div className="text-white font-bold text-[0.85rem]">Scene 2: Agitation</div>
                    <div className="text-[#8888AA] text-[0.7rem]">Est. time remaining: 1m 20s</div>
                  </div>
                </div>
                <div className="bg-[#F5C842]/10 text-[#F5C842] text-[0.7rem] font-bold px-2 py-1 rounded animate-pulse">GENERATING...</div>
              </div>

              <div className="bg-[#1E1E2A] p-4 rounded-xl border border-white/5 flex items-center justify-between opacity-60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-black/50 flex items-center justify-center text-[0.85rem]">⏸️</div>
                  <div>
                    <div className="text-white font-bold text-[0.85rem]">Scene 3: Solution</div>
                    <div className="text-[#8888AA] text-[0.7rem]">Waiting for queue...</div>
                  </div>
                </div>
                <div className="bg-white/5 text-[#8888AA] text-[0.7rem] font-bold px-2 py-1 rounded">QUEUED</div>
              </div>
            </div>

          </div>
        </div>`;

content = content.replace(
  /<div className="flex flex-col items-center justify-center text-center p-8 bg-\[#16161F\] rounded-2xl border border-white\/10">\s*<h3 className="font-heading text-2xl font-bold text-white mb-4">Stage 9: Final Render<\/h3>\s*<p className="text-\[#8888AA\]">Mengubah Visual Storyboard dan instruksi teknis menjadi video utuh melalui AI Video Generator\.<\/p>\s*<\/div>/,
  stage9Content
);

fs.writeFileSync('src/components/DirectorPipeline.tsx', content);
