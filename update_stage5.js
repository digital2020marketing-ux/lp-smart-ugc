import fs from 'fs';

let content = fs.readFileSync('src/components/DirectorPipeline.tsx', 'utf8');

const stage5Content = `        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">5</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Scene Sequencer</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Penulis Skenario AI:<br /><span className="grad-text">Mengubah Konsep Menjadi Skrip Nyata</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Ini adalah tempat <strong>"Daging"</strong> dari video Anda dibuat. Memecah strategi Director menjadi urutan adegan detik demi detik (shot-by-shot timeline), lengkap dengan skrip <em>Voiceover</em> tajam yang terukur oleh waktu.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Rumus Copywriting Otomatis</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Memaksa AI menyusun struktur yang terbukti berkonversi (Hook selalu di awal, diikuti Pain Point, lalu ditutup CTA yang presisi).</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Kesesuaian Durasi (Time-to-Speak)</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Jumlah kata voiceover dibatasi secara cerdas agar pas diucapkan manusia nyata, mencegah tempo balapan atau terlalu cepat.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Keamanan Ganda & Quality Assurance</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem fallback procedural (tanpa API eksternal) dan validasi durasi (QA) agar adegan tidak terlalu panjang yang merusak retensi audiens.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Simulasi Output Timeline</div>
            <div className="flex flex-col gap-3 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[2px] before:bg-white/10">
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#7C6EFF] flex items-center justify-center text-[0.65rem] font-bold text-white z-10 border-4 border-[#16161F]">1</div>
                <div className="bg-[#1E1E2A] p-3.5 rounded-xl border border-[#7C6EFF]/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#7C6EFF]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-lg"></div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#A78BFA] font-bold text-[0.8rem]">Hook / Problem</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[0.7rem] text-white">0.0s - 4.5s</span>
                  </div>
                  <div className="text-[#E8E8F0] text-[0.85rem] italic">"Pernah ngalamin kulit breakout parah padahal udah pakai skincare mahal?"</div>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#1E1E2A] flex items-center justify-center text-[0.65rem] font-bold text-[#8888AA] z-10 border-4 border-[#16161F]">2</div>
                <div className="bg-[#1E1E2A] p-3.5 rounded-xl border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-bold text-[0.8rem]">Agitation</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[0.7rem] text-white">4.5s - 9.0s</span>
                  </div>
                  <div className="text-[#E8E8F0] text-[0.85rem] italic">"Itu karena skin barrier kamu rusak dan butuh perbaikan ekstra..."</div>
                </div>
              </div>

              <div className="relative pl-8 opacity-60">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#1E1E2A] flex items-center justify-center text-[0.65rem] font-bold text-[#8888AA] z-10 border-4 border-[#16161F]">...</div>
                <div className="bg-[#1E1E2A] p-2 rounded-xl border border-white/5 text-center text-[#8888AA] text-[0.75rem]">
                  (Adegan berlanjut hingga CTA di detik ke-30)
                </div>
              </div>

            </div>
          </div>
        </div>`;

content = content.replace(
  /<div className="flex flex-col items-center justify-center text-center p-8 bg-\[#16161F\] rounded-2xl border border-white\/10">\s*<h3 className="font-heading text-2xl font-bold text-white mb-4">Stage 5: Scene Sequencer<\/h3>\s*<p className="text-\[#8888AA\]">Memecah strategi menjadi urutan adegan logis \(shot-by-shot timeline\) lengkap dengan Voiceover\.<\/p>\s*<\/div>/,
  stage5Content
);

fs.writeFileSync('src/components/DirectorPipeline.tsx', content);
