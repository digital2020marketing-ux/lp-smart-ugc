import fs from 'fs';

let content = fs.readFileSync('src/components/DirectorPipeline.tsx', 'utf8');

const stage4Content = `        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">4</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Virtual Director</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Pilar Kreatif:<br /><span className="grad-text">Panduan Dasar AI Sebelum Produksi</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Menerjemahkan input mentah Anda menjadi sebuah <strong>Pilar Kreatif</strong>. Sebelum video dipecah detik demi detik, AI menetapkan panduan visual, tempo, penokohan, dan teknik efek khusus.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Boundary Alignment</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Mengunci gaya dan batas estetika. Mencegah AI melakukan halusinasi liar atau menggunakan tone yang berbeda antar adegan (scene).</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Kontrol Iteratif Efisien</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Gunakan fitur <em>Regenerate with Feedback</em> untuk "berdebat" dengan AI dan merevisi ide konseptual tanpa membuang kuota render besar.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Injeksi Logika Dinamis (CGI/Viral)</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Jika mode Viral/CGI dipilih, sistem cerdas menimpa aturan fisika normal dengan parameter anomali/VFX (objek raksasa, hiperbola visual).</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">7 Output Parameter Director</div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Hero Focus:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Karakter / produk utama sorotan</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Narrative:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Jenis aktivitas (mis. Review, Unboxing)</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Psychological:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Tujuan emosi audiens (mis. FOMO)</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Pacing / Energy:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Tempo video (Fast Cuts / Smooth)</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Visual Aesthetic:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Tata cahaya & vibe (Raw / Cinematic)</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Core Technique:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Angle kamera & gaya hook</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">VFX Enhancement:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Efek manipulasi khusus (khusus CGI)</div>
              </div>
            </div>
          </div>
        </div>`;

// Regex replacement
content = content.replace(
  /<div className="flex flex-col items-center justify-center text-center p-8 bg-\[#16161F\] rounded-2xl border border-white\/10">\s*<h3 className="font-heading text-2xl font-bold text-white mb-4">Stage 4: Virtual Director<\/h3>\s*<p className="text-\[#8888AA\]">Menerjemahkan parameter menjadi Pilar Kreatif\. Mengunci gaya visual, tempo, dan teknik kamera\.<\/p>\s*<\/div>/,
  stage4Content
);

fs.writeFileSync('src/components/DirectorPipeline.tsx', content);
