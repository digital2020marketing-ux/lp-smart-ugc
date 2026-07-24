import fs from 'fs';

let content = fs.readFileSync('src/components/DirectorPipeline.tsx', 'utf8');

// Title Update
content = content.replace(
  /Bukan Sekadar Prompt Biasa\.<br \/>\s*<span className="grad-text">Kerja Otomatis Layaknya Sutradara Profesional<\/span>/g,
  `Bukan Sekadar Prompt, Tapi Aplikasi.<br />\n              <span className="grad-text">Kerja Otomatis Layaknya Sutradara Profesional</span>`
);
content = content.replace(
  /Lihat bagaimana Dopamine Influencer memproses ide Anda melalui 8 Stage terstruktur\. Klik tiap stage di bawah untuk melihat keajaibannya\./g,
  `Lihat bagaimana aplikasi ini merancang ide Anda melalui 9 tahapan cerdas. Klik tiap tahapan untuk melihat cara kerjanya.`
);

// Stage 1
const stage1_regex = /<h3 className="font-heading text-2xl font-bold text-white mb-4">Stage 1: Setup Awal<\/h3>[\s\S]*?(?=<\/div>\s*\)\s*},\s*\{\s*id: 'stage2')/m;
const stage1_new = `<h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Setup Kampanye:<br /><span className="grad-text">Menentukan Arah Bisnis</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Di sinilah segalanya bermula. Anda cukup menentukan tujuan bisnis Anda, dan biarkan sistem merancang strateginya secara otomatis.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Otomatisasi Tepat Sasaran</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem menyesuaikan gaya video dengan produk dan audiens Anda tanpa perlu pengaturan yang rumit.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Targeting Emosional</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Pilih emosi yang ingin ditimbulkan—dari penasaran hingga rasa takut tertinggal (FOMO)—agar video lebih persuasif.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Adaptasi Format Instan</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem otomatis mengatur durasi dan rasio video yang optimal untuk TikTok, Reels, ataupun Iklan.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Simulasi Parameter Input</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between p-3 bg-[#1E1E2A] rounded-xl border border-white/5">
                <span className="text-[#8888AA] text-[0.85rem] font-bold">Produk / Niche</span>
                <span className="text-white text-[0.85rem]">Skincare (Acne)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1E1E2A] rounded-xl border border-white/5">
                <span className="text-[#8888AA] text-[0.85rem] font-bold">Tipe Video</span>
                <span className="text-[#EC4899] text-[0.85rem] font-bold bg-[#EC4899]/10 px-2 py-0.5 rounded">Organic UGC</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1E1E2A] rounded-xl border border-white/5">
                <span className="text-[#8888AA] text-[0.85rem] font-bold">Durasi Video</span>
                <span className="text-[#A78BFA] text-[0.85rem] font-bold bg-[#7C6EFF]/10 px-2 py-0.5 rounded">30 Detik</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#1E1E2A] rounded-xl border border-white/5">
                <span className="text-[#8888AA] text-[0.85rem] font-bold">Tujuan Psikologis</span>
                <span className="text-white text-[0.85rem]">Pain Agitation</span>
              </div>
            </div>
          </div>
        </div>`;
content = content.replace(stage1_regex, stage1_new);

// Stage 2
const stage2_regex = /<h3 className="font-heading text-2xl font-bold text-white mb-4">Stage 2: Resource Manager<\/h3>[\s\S]*?(?=<\/div>\s*\)\s*},\s*\{\s*id: 'stage3')/m;
const stage2_new = `<h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Kunci Referensi Visual:<br /><span className="grad-text">Menjaga Tampilan Tetap Akurat</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Unggah aset Anda di sini untuk memastikan sistem mengenali produk dan talent Anda. Ini menjamin hasil video tetap konsisten tanpa ada wujud yang melenceng.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Wajah Tetap Konsisten</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem mengunci referensi wajah talent agar tidak berubah-ubah atau terganti di setiap adegan.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Produk Sebagai Bintang</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Fokuskan AI pada detail produk Anda agar tampil sempurna dan tidak terdistorsi di layar.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Suara & Musik Selaras</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem menyesuaikan intonasi suara dan musik latar agar sesuai dengan karakter (brand voice) merek Anda.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
             <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Simulasi Penguncian Aset</div>
             <div className="grid grid-cols-2 gap-3 h-full">
               <div className="bg-[#1E1E2A] rounded-xl border border-white/5 p-3 flex flex-col justify-between group overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"></div>
                 <div className="relative z-10">
                   <div className="bg-black/50 text-[#A78BFA] text-[0.65rem] font-bold px-2 py-1 rounded inline-block backdrop-blur-sm border border-white/10 mb-1">CHARACTER LOCK</div>
                   <div className="text-white font-bold text-[0.8rem] drop-shadow-md">Asian Woman v1</div>
                 </div>
                 <div className="relative z-10 w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center text-white text-[0.7rem] self-end shadow-[0_0_10px_rgba(34,197,94,0.5)]">✓</div>
               </div>

               <div className="bg-[#1E1E2A] rounded-xl border border-white/5 p-3 flex flex-col justify-between group overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"></div>
                 <div className="relative z-10">
                   <div className="bg-black/50 text-[#EC4899] text-[0.65rem] font-bold px-2 py-1 rounded inline-block backdrop-blur-sm border border-white/10 mb-1">PRODUCT LOCK</div>
                   <div className="text-white font-bold text-[0.8rem] drop-shadow-md">Serum Bottle</div>
                 </div>
                 <div className="relative z-10 w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center text-white text-[0.7rem] self-end shadow-[0_0_10px_rgba(34,197,94,0.5)]">✓</div>
               </div>
             </div>
          </div>
        </div>`;
content = content.replace(stage2_regex, stage2_new);

// Stage 3
const stage3_regex = /<h3 className="font-subheading font-heading text-\[clamp\(1\.3rem,2vw,1\.8rem\)\] font-bold text-white mb-4">\s*Sutradara Utama:<br \/><span className="grad-text">Mencegah Halusinasi & Inkonsistensi AI<\/span>\s*<\/h3>[\s\S]*?(?=<\/div>\s*\)\s*},\s*\{\s*id: 'stage4')/m;
const stage3_new = `<h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Sutradara AI:<br /><span className="grad-text">Menjaga Fokus Cerita</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Sebelum naskah ditulis, Sutradara AI menetapkan visi dan aturan main. Ini memastikan video Anda memiliki alur cerita yang logis dan tidak melenceng kemana-mana.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Anti Melenceng</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem dikunci pada satu konteks cerita sejak awal, memastikan video tidak diisi dengan adegan yang tidak relevan.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Alur Cerita Cerdas</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Secara otomatis membedakan gaya: video organik (UGC) dibuat senatural mungkin, sementara video komersial dibuat elegan dan sinematik.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Keputusan Berbasis Data</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem menampilkan alasan di balik setiap keputusan cerita, membuktikan bahwa hasil ini benar-benar dirancang secara spesifik, bukan ditebak acak.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Sistem Keputusan AI</div>
            <div className="flex flex-col gap-3">
              <div className="bg-[#1E1E2A] border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[0.85rem] font-bold text-white">Fokus Mode Terpilih</span>
                </div>
                <div className="flex gap-2">
                  <span className="bg-[#7C6EFF]/20 border border-[#7C6EFF]/30 text-[#A78BFA] text-[0.7rem] px-2 py-1 rounded font-bold">Organic Social Mode</span>
                  <span className="bg-[#1E1E2A] border border-white/10 text-[#8888AA] text-[0.7rem] px-2 py-1 rounded font-bold">Cinematic Mode</span>
                </div>
              </div>

              <div className="bg-[#1E1E2A] border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[0.85rem] font-bold text-white">Mesin Logika Aktif</span>
                </div>
                <div className="flex gap-2">
                  <span className="bg-[#EC4899]/20 border border-[#EC4899]/30 text-[#F472B6] text-[0.7rem] px-2 py-1 rounded font-bold">KEMANUSIAAN_SENTRIS</span>
                </div>
              </div>
              
              <div className="bg-[#1E1E2A] border border-white/5 rounded-xl p-4">
                <div className="text-[0.8rem] font-bold text-white mb-2">Menganalisis Kebutuhan...</div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[0.75rem] text-[#8888AA]"><div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></div> Menentukan Target Audiens</div>
                  <div className="flex items-center gap-2 text-[0.75rem] text-[#8888AA]"><div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></div> Mencocokkan Nuansa Brand</div>
                  <div className="flex items-center gap-2 text-[0.75rem] text-[#8888AA]"><div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></div> Mengatur Emosi Talent</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
content = content.replace(stage3_regex, stage3_new);

// Stage 4
const stage4_regex = /<h3 className="font-subheading font-heading text-\[clamp\(1\.3rem,2vw,1\.8rem\)\] font-bold text-white mb-4">\s*Pilar Kreatif:<br \/><span className="grad-text">Panduan Dasar AI Sebelum Produksi<\/span>\s*<\/h3>[\s\S]*?(?=<\/div>\s*\)\s*},\s*\{\s*id: 'stage5')/m;
const stage4_new = `<h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Pilar Kreatif:<br /><span className="grad-text">Menentukan Gaya Visual & Tempo</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Sistem merumuskan panduan gaya visual, tempo, penokohan, dan efek khusus untuk proyek Anda. Memastikan setiap detiknya memiliki nuansa dan emosi yang selaras.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Konsistensi Estetika</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem mengunci gaya visual secara keseluruhan agar tidak ada adegan yang terlihat belang atau tidak nyambung dengan adegan lainnya.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Revisi Konsep Tanpa Ribet</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Gunakan fitur feedback untuk mengubah arah ide cerita dengan cepat sebelum video mulai dibuat, menghemat waktu dan biaya secara signifikan.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Efek Viral Otomatis</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Untuk tipe video Viral atau efek khusus (CGI), sistem otomatis menambahkan gerakan hiperbola yang memikat perhatian penonton.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Panduan Parameter Terkunci</div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Fokus Produk:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Sorotan utama pada botol & tekstur</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Gaya Narasi:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Testimoni jujur pemakaian harian</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Target Emosi:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Membangkitkan rasa butuh (FOMO)</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Tempo Video:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Potongan cepat & dinamis (Fast Cuts)</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Tata Cahaya:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Cahaya natural, kesan otentik</div>
              </div>
            </div>
          </div>
        </div>`;
content = content.replace(stage4_regex, stage4_new);

// Stage 5
const stage5_regex = /<h3 className="font-subheading font-heading text-\[clamp\(1\.3rem,2vw,1\.8rem\)\] font-bold text-white mb-4">\s*Penulis Skenario AI:<br \/><span className="grad-text">Mengubah Konsep Menjadi Skrip Nyata<\/span>\s*<\/h3>[\s\S]*?(?=<\/div>\s*\)\s*},\s*\{\s*id: 'stage6')/m;
const stage5_new = `<h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Penulis Skenario AI:<br /><span className="grad-text">Merakit Naskah & Voiceover</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Sistem memecah rencana Anda menjadi urutan adegan yang rapi, lengkap dengan skrip pengisi suara (Voiceover) yang dirancang khusus untuk mempertahankan perhatian penonton.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Struktur Skrip Berkonversi Tinggi</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">AI otomatis menggunakan pola terbukti: Kalimat pancingan di awal, Penawaran menarik di tengah, dan Ajakan bertindak di akhir.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Durasi Bicara Natural</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Jumlah kata dalam naskah disesuaikan dengan durasi adegan agar saat diucapkan terdengar pas, tidak terburu-buru, dan nyaman didengar.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Kualitas Selalu Terjaga</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem memastikan tidak ada satu adegan pun yang durasinya terlalu panjang atau membosankan yang bisa merusak kenyamanan penonton.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Simulasi Hasil Skenario</div>
            <div className="flex flex-col gap-3 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[2px] before:bg-white/10">
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#7C6EFF] flex items-center justify-center text-[0.65rem] font-bold text-white z-10 border-4 border-[#16161F]">1</div>
                <div className="bg-[#1E1E2A] p-3.5 rounded-xl border border-[#7C6EFF]/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#7C6EFF]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-lg"></div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#A78BFA] font-bold text-[0.8rem]">Pancingan (Hook)</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[0.7rem] text-white">0.0s - 4.5s</span>
                  </div>
                  <div className="text-[#E8E8F0] text-[0.85rem] italic">"Pernah ngalamin kulit breakout parah padahal udah pakai skincare mahal?"</div>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#1E1E2A] flex items-center justify-center text-[0.65rem] font-bold text-[#8888AA] z-10 border-4 border-[#16161F]">2</div>
                <div className="bg-[#1E1E2A] p-3.5 rounded-xl border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-bold text-[0.8rem]">Penjelasan Singkat</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[0.7rem] text-white">4.5s - 9.0s</span>
                  </div>
                  <div className="text-[#E8E8F0] text-[0.85rem] italic">"Itu karena skin barrier kamu butuh perlindungan dan perbaikan ekstra..."</div>
                </div>
              </div>

              <div className="relative pl-8 opacity-60">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#1E1E2A] flex items-center justify-center text-[0.65rem] font-bold text-[#8888AA] z-10 border-4 border-[#16161F]">...</div>
                <div className="bg-[#1E1E2A] p-2 rounded-xl border border-white/5 text-center text-[#8888AA] text-[0.75rem]">
                  (Dilanjutkan hingga ajakan bertindak di detik akhir)
                </div>
              </div>

            </div>
          </div>
        </div>`;
content = content.replace(stage5_regex, stage5_new);

// Stage 6
const stage6_regex = /<h3 className="font-subheading font-heading text-\[clamp\(1\.3rem,2vw,1\.8rem\)\] font-bold text-white mb-4">\s*Director of Photography \(DOP\):<br \/><span className="grad-text">Visual Grammar & Kamera Cerdas<\/span>\s*<\/h3>[\s\S]*?(?=<\/div>\s*\)\s*},\s*\{\s*id: 'stage7')/m;
const stage6_new = `<h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Pengatur Kamera AI:<br /><span className="grad-text">Mengarahkan Visual & Transisi</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Sistem merencanakan pergerakan kamera dan transisi untuk setiap adegan, memastikan hasil video Anda tampil dinamis, hidup, dan jauh dari kesan membosankan.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Pergerakan Kamera Dinamis</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Secara otomatis memilih sudut dan pergerakan kamera (seperti mendekat atau bergeser) yang paling sesuai dengan emosi tiap adegan.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Transisi & Efek Profesional</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Menambahkan efek pencahayaan profesional dan pergerakan objek yang halus agar perpindahan antar adegan terasa mulus.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Ubah Sesuai Keinginan</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Anda bebas meminta AI mengubah gaya (misal: "buat gaya videonya lebih misterius") dan sistem akan mengatur ulang kameranya seketika.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Rencana Teknikal Video</div>
            <div className="flex flex-col gap-3">
              <div className="bg-[#1E1E2A] p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#7C6EFF]"></div>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-white font-bold text-[0.85rem]">Adegan 1: Pancingan</div>
                  <span className="text-[0.65rem] text-[#8888AA] bg-black/40 px-2 py-0.5 rounded">0.0s - 4.5s</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <div className="text-[0.65rem] text-[#8888AA] font-bold uppercase mb-1">🎥 Sudut Kamera</div>
                    <div className="text-[0.75rem] text-[#E8E8F0] font-mono leading-tight">Pengambilan jarak dekat, maju secara perlahan.</div>
                  </div>
                  <div>
                    <div className="text-[0.65rem] text-[#8888AA] font-bold uppercase mb-1">✨ Transisi Visual</div>
                    <div className="text-[0.75rem] text-[#E8E8F0] font-mono leading-tight">Pergantian cepat dengan sentuhan cahaya redup.</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1E1E2A] p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#EC4899]"></div>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-white font-bold text-[0.85rem]">Adegan 2: Solusi Produk</div>
                  <span className="text-[0.65rem] text-[#8888AA] bg-black/40 px-2 py-0.5 rounded">4.5s - 9.0s</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <div className="text-[0.65rem] text-[#8888AA] font-bold uppercase mb-1">🎥 Sudut Kamera</div>
                    <div className="text-[0.75rem] text-[#E8E8F0] font-mono leading-tight">Fokus detail kemasan produk, memutar pelan.</div>
                  </div>
                  <div>
                    <div className="text-[0.65rem] text-[#8888AA] font-bold uppercase mb-1">✨ Transisi Visual</div>
                    <div className="text-[0.75rem] text-[#E8E8F0] font-mono leading-tight">Fade masuk yang mulus dan terang.</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2 text-[0.75rem] text-[#8888AA] leading-[1.4]">
                <div className="w-1.5 h-1.5 shrink-0 bg-[#8888AA] rounded-full"></div>
                Sistem merancang teknik tanpa mengharuskan Anda belajar dasar videografi.
              </div>
            </div>
          </div>
        </div>`;
content = content.replace(stage6_regex, stage6_new);

// Stage 7
const stage7_regex = /<h3 className="font-subheading font-heading text-\[clamp\(1\.3rem,2vw,1\.8rem\)\] font-bold text-white mb-4">\s*Pabrik Penerjemah:<br \/><span className="grad-text">Ide Manusia ke Bahasa Mesin<\/span>\s*<\/h3>[\s\S]*?(?=<\/div>\s*\)\s*},\s*\{\s*id: 'stage8')/m;
const stage7_new = `<h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Penyusun Perintah AI:<br /><span className="grad-text">Mengoptimalkan Hasil Akhir</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Sistem merangkum semua perencanaan di atas menjadi instruksi rahasia (prompt) yang sangat akurat untuk mesin AI pembuat video. Anda cukup terima beres.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Kunci Identitas Visual</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Memastikan wajah talent dan bentuk produk Anda tidak berubah wujud secara aneh dari awal sampai akhir video.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Penyempurna Perintah Otomatis</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Cukup sekali tekan, AI akan mempercantik deskripsi instruksi agar hasil videonya jauh lebih nyata dan menakjubkan.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Kendalikan Hasil Akhir</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Anda tetap memegang kendali penuh. Anda bisa memperbaiki atau menambahkan detail pada instruksi akhir sebelum video mulai dibuat.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Bocoran Instruksi AI</div>
            <div className="flex flex-col gap-3 h-full">
              <div className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-[0.7rem] text-[#8888AA] leading-[1.7] relative overflow-hidden flex-grow group">
                <div className="absolute top-0 right-0 bg-[#22C55E]/20 text-[#22C55E] text-[0.65rem] font-bold px-2 py-1 rounded-bl-lg">READY</div>
                
                <span className="text-[#EC4899] font-bold">[REFERENSI: wajah_asian_woman_v1]</span>{' '}
                <span className="text-[#A78BFA] font-bold">[REFERENSI: botol_skincare_pink]</span><br/>
                <span className="text-white">Medium close-up shot of a young asian woman holding a skincare bottle in a modern bedroom with natural daylight.</span><br/>
                <span className="text-[#F5C842]">Kamera:</span> Mendekat perlahan dari sudut sejajar mata.<br/>
                <span className="text-[#F5C842]">Efek:</span> Transisi mulus, cahaya alami yang hangat.<br/>
                <span className="text-[#F5C842]">Gaya:</span> Otentik, resolusi super jernih, tampak nyata.
                
                <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-black/80 to-transparent flex items-end justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-white/10 hover:bg-white/20 cursor-pointer px-3 py-1.5 rounded-lg text-white font-bold text-[0.75rem] flex items-center gap-2">
                     <span className="text-[0.9rem]">✨</span> Percantik Instruksi
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[0.75rem] text-[#E8E8F0] bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="w-2 h-2 shrink-0 bg-[#22C55E] rounded-full animate-pulse"></div>
                Instruksi ini akan menghasilkan adegan video yang sangat presisi tanpa cacat visual.
              </div>
            </div>
          </div>
        </div>`;
content = content.replace(stage7_regex, stage7_new);


// Stage 8
const stage8_regex = /<h3 className="font-subheading font-heading text-\[clamp\(1\.3rem,2vw,1\.8rem\)\] font-bold text-white mb-4">\s*Studio Validasi:<br \/><span className="grad-text">Visual Debugging & Continuity Check<\/span>\s*<\/h3>[\s\S]*?(?=<\/div>\s*\)\s*},\s*\{\s*id: 'stage9')/m;
const stage8_new = `<h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Papan Cerita Visual:<br /><span className="grad-text">Cek Visual Sebelum Video Dibuat</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Sistem akan membuatkan cuplikan gambar untuk setiap adegan (storyboard). Anda bisa mengecek konsistensi visualnya sebelum merender video secara penuh guna menghindari biaya tinggi.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Konsistensi Visual Otomatis</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem menggunakan gambar adegan pertama sebagai acuan bagi adegan selanjutnya agar wajah dan warna video tetap selaras.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Cegah Pemborosan Kuota</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem otomatis memblokir proses jika data penting terlewat, sehingga Anda tidak membuang saldo untuk hasil gambar yang keliru.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Bebas Digunakan di Mana Saja</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Simpan naskah dan perintah sistem ke perangkat Anda, lalu gunakan di platform pembuatan video AI mana pun di luaran sana.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Hasil Papan Cerita Gambar</div>
            
            <div className="bg-[#1E1E2A] rounded-xl border border-white/5 p-3 flex-grow grid grid-cols-2 gap-2">
              <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-1.5 text-[0.55rem] text-white font-mono truncate border-t border-white/10">1: "Kulit breakout parah?"</div>
              </div>
              <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-1.5 text-[0.55rem] text-white font-mono truncate border-t border-white/10">2: "Barrier kamu rusak..."</div>
              </div>
              <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-1.5 text-[0.55rem] text-white font-mono truncate border-t border-white/10">3: "Ini solusinya..."</div>
              </div>
              <div className="relative aspect-video bg-[#16161F] rounded-lg overflow-hidden border border-white/5 flex items-center justify-center">
                <span className="text-[#8888AA] font-bold text-[0.8rem]">Lihat Adegan Lain</span>
              </div>
            </div>

            <div className="flex gap-2 mt-2">
               <button className="flex-1 bg-[#7C6EFF]/20 text-[#A78BFA] border border-[#7C6EFF]/30 py-2 rounded-lg text-[0.75rem] font-bold hover:bg-[#7C6EFF]/30 transition-colors flex items-center justify-center gap-1.5">
                 <span>⬇️</span> UNDUH NASKAH
               </button>
               <button className="flex-1 bg-[#F5C842]/10 text-[#F5C842] border border-[#F5C842]/30 py-2 rounded-lg text-[0.75rem] font-bold hover:bg-[#F5C842]/20 transition-colors flex items-center justify-center gap-1.5">
                 <span>📋</span> SALIN INSTRUKSI
               </button>
            </div>
          </div>
        </div>`;
content = content.replace(stage8_regex, stage8_new);


// Stage 9
const stage9_regex = /<h3 className="font-subheading font-heading text-\[clamp\(1\.3rem,2vw,1\.8rem\)\] font-bold text-white mb-4">\s*The Final Output:<br \/><span className="grad-text">Kompilasi Video AI Berkualitas Hollywood<\/span>\s*<\/h3>[\s\S]*?(?=<\/div>\s*\)\s*},\s*\])/m;
const stage9_new = `<h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Hasil Akhir:<br /><span className="grad-text">Video AI Utuh Siap Tayang</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Tahap terakhir di mana semua potongan gambar dan instruksi digabungkan secara otomatis menjadi sebuah video utuh yang mulus, menawan, dan siap dipublikasikan.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Anti Wajah Berubah</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Menggunakan gambar referensi mutlak dari awal agar karakter dan produk tampil konsisten dari detik pertama hingga akhir.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Render Aman Tanpa Gagal</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Jika ada satu adegan yang gagal saat diproses sistem, Anda cukup mengulang bagian kecil itu saja tanpa harus memulai dari awal.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Simulasi Tanpa Biaya</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Gunakan mode simulasi untuk menguji hasil kerangka sebelum Anda yakin merender video sesungguhnya, menjaga saldo agar tidak terkuras.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Pantau Status Pembuatan</div>
            
            <div className="flex flex-col gap-3">
              <div className="bg-[#1E1E2A] p-4 rounded-xl border border-[#22C55E]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#22C55E]/20 flex items-center justify-center text-[0.85rem]">🎬</div>
                  <div>
                    <div className="text-white font-bold text-[0.85rem]">Adegan 1: Pancingan</div>
                    <div className="text-[#8888AA] text-[0.7rem]">Pembuatan Video Sukses</div>
                  </div>
                </div>
                <div className="bg-[#22C55E]/10 text-[#22C55E] text-[0.7rem] font-bold px-2 py-1 rounded">SELESAI</div>
              </div>

              <div className="bg-[#1E1E2A] p-4 rounded-xl border border-[#F5C842]/30 flex items-center justify-between relative overflow-hidden">
                <div className="absolute bottom-0 left-0 h-1 bg-[#F5C842] w-[65%] rounded-r"></div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F5C842]/20 flex items-center justify-center text-[0.85rem] animate-pulse">⏳</div>
                  <div>
                    <div className="text-white font-bold text-[0.85rem]">Adegan 2: Penjelasan</div>
                    <div className="text-[#8888AA] text-[0.7rem]">Estimasi waktu: 1 menit</div>
                  </div>
                </div>
                <div className="bg-[#F5C842]/10 text-[#F5C842] text-[0.7rem] font-bold px-2 py-1 rounded animate-pulse">MEMPROSES...</div>
              </div>

              <div className="bg-[#1E1E2A] p-4 rounded-xl border border-white/5 flex items-center justify-between opacity-60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-black/50 flex items-center justify-center text-[0.85rem]">⏸️</div>
                  <div>
                    <div className="text-white font-bold text-[0.85rem]">Adegan 3: Solusi Akhir</div>
                    <div className="text-[#8888AA] text-[0.7rem]">Menunggu giliran...</div>
                  </div>
                </div>
                <div className="bg-white/5 text-[#8888AA] text-[0.7rem] font-bold px-2 py-1 rounded">MENGANTRI</div>
              </div>
            </div>

          </div>
        </div>`;
content = content.replace(stage9_regex, stage9_new);

fs.writeFileSync('src/components/DirectorPipeline.tsx', content);
