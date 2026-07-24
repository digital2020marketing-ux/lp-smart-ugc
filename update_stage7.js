import fs from 'fs';

let content = fs.readFileSync('src/components/DirectorPipeline.tsx', 'utf8');

const stage7Content = `        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">7</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Prompt Assembly</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Pabrik Penerjemah:<br /><span className="grad-text">Ide Manusia ke Bahasa Mesin</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Menggabungkan seluruh kerangka logika dari stage sebelumnya menjadi instruksi bahasa mesin (<strong>Final AI Prompt</strong>) yang sangat spesifik dan terstruktur. Anda tidak perlu pusing belajar <em>Prompt Engineering</em>.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Identity Resolver (Konsistensi Visual)</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Mengunci data referensi wajah & produk agar visual di setiap shot tetap konsisten, mencegah morphing atau pergantian wujud.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Auto-Optimize Prompt Engine</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Tombol cerdas yang memicu AI untuk menulis ulang prompt mentah menjadi lebih puitis & deskriptif. Tingkat keberhasilan render meroket.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Manual Override (Kontrol Penuh)</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Anda memiliki wewenang mengedit text-editor prompt akhir secara manual sebelum dirender.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Simulasi Kompilasi Prompt</div>
            <div className="flex flex-col gap-3 h-full">
              <div className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-[0.7rem] text-[#8888AA] leading-[1.7] relative overflow-hidden flex-grow group">
                <div className="absolute top-0 right-0 bg-[#22C55E]/20 text-[#22C55E] text-[0.65rem] font-bold px-2 py-1 rounded-bl-lg">READY TO RENDER</div>
                
                <span className="text-[#EC4899] font-bold">[CHARACTER: locked_asian_woman_v1]</span>{' '}
                <span className="text-[#A78BFA] font-bold">[PRODUCT: locked_skincare_bottle]</span><br/>
                <span className="text-white">Medium close-up shot of a young asian woman holding a skincare bottle in a modern bedroom with natural daylight.</span><br/>
                <span className="text-[#F5C842]">Camera:</span> Dolly-in slowly, 50mm lens, eye-level.<br/>
                <span className="text-[#F5C842]">Motion:</span> Woman looking panicked, smooth transition, light leak effect.<br/>
                <span className="text-[#F5C842]">Aesthetic:</span> Raw and authentic, cinematic moody lighting, high contrast, 8k resolution, photorealistic.
                
                <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-black/80 to-transparent flex items-end justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-white/10 hover:bg-white/20 cursor-pointer px-3 py-1.5 rounded-lg text-white font-bold text-[0.75rem] flex items-center gap-2">
                     <span className="text-[0.9rem]">✨</span> Auto-Optimize
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[0.75rem] text-[#E8E8F0] bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="w-2 h-2 shrink-0 bg-[#22C55E] rounded-full animate-pulse"></div>
                Siap dikirim ke Midjourney, Kling, Runway, atau dirender in-app.
              </div>
            </div>
          </div>
        </div>`;

content = content.replace(
  /<div className="flex flex-col items-center justify-center text-center p-8 bg-\[#16161F\] rounded-2xl border border-white\/10">\s*<h3 className="font-heading text-2xl font-bold text-white mb-4">Stage 7: Prompt Assembly<\/h3>\s*<p className="text-\[#8888AA\]">Pabrik penerjemah yang menggabungkan seluruh logika menjadi Final AI Prompt\.<\/p>\s*<\/div>/,
  stage7Content
);

fs.writeFileSync('src/components/DirectorPipeline.tsx', content);
