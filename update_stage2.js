const fs = require('fs');

let content = fs.readFileSync('src/components/DirectorPipeline.tsx', 'utf8');

const stage2Content = `        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">2</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Reference Board</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Visual Anchor:<br /><span className="grad-text">Kunci Wajah & Produk 100% Konsisten</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Stage 2 bertindak sebagai "Mata" bagi AI. Berfungsi menyelaraskan dan mengunci (<em>locking</em>) 3 pilar utama video: <strong>Karakter, Lingkungan, dan Produk</strong> sebelum produksi dimulai.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Zero Hallucination</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">AI Video sering lupa bentuk asli saat berganti scene. Referensi yang di-"LOCK" di sini terus dikirim ke setiap shot, menjamin visual 100% akurat.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Workflow Hybrid Epik</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Kombinasi Brand Asset Asli (foto Anda) + Kreativitas AI. Produk asli Anda, dibalut visual sinematik AI.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">External Prompt Generator</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">AI membacakan instruksi Prompt tingkat dewa untuk Anda copy ke Midjourney atau ComfyUI.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Visual Locking System</div>
            <div className="flex flex-col gap-4">
              <div className="bg-[#1E1E2A] border border-white/5 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-white/5 flex justify-between items-center bg-black/20">
                  <span className="text-[0.8rem] font-bold text-white">Character (Talent)</span>
                  <span className="text-[0.65rem] font-bold text-[#22C55E] bg-[#22C55E]/10 px-2 py-1 rounded">LOCKED</span>
                </div>
                <div className="p-4 text-[0.8rem] text-[#8888AA]">
                  Menggunakan foto referensi: Wanita Asia 20-an (Otomatis AI Rendered).
                </div>
              </div>
              <div className="bg-[#1E1E2A] border border-white/5 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-white/5 flex justify-between items-center bg-black/20">
                  <span className="text-[0.8rem] font-bold text-white">Product</span>
                  <span className="text-[0.65rem] font-bold text-[#22C55E] bg-[#22C55E]/10 px-2 py-1 rounded">LOCKED</span>
                </div>
                <div className="p-4 text-[0.8rem] text-[#8888AA]">
                  Menggunakan <em>Local Uploads</em> (Foto asli produk Anda).
                </div>
              </div>
            </div>
            <div className="mt-auto text-[0.75rem] text-[#E8E8F0] bg-white/5 p-3 rounded-lg border border-white/10 text-center">
              Metadata visual siap disuntikkan ke otak AI.
            </div>
          </div>
        </div>`;

// Naive replace
content = content.replace(
  /<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">[\s\S]*?<div className="text-center text-\[#8888AA\] text-\[0.9rem\] italic">Deskripsi visual Stage 2 \(Dapat diupdate lebih detail nanti\)<\/div>\s*<\/div>\s*<\/div>/,
  stage2Content
);

fs.writeFileSync('src/components/DirectorPipeline.tsx', content);
