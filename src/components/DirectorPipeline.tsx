import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export function DirectorPipeline() {
  const [activeStage, setActiveStage] = useState(0);

  
  const stages = [
    {
      num: "01",
      id: "stage-1",
      title: "Tentukan Tujuan",
      shortTitle: "Tentukan Tujuan",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">1</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Langkah 1</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Setup Kampanye:<br /><span className="grad-text">Menentukan Arah Bisnis</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Di sinilah segalanya bermula. Anda cukup menentukan tujuan promosi Anda, dan biarkan sistem merancang strateginya secara otomatis.
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
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Pilih emosi yang ingin ditimbulkan, dari rasa penasaran hingga rasa butuh (FOMO), agar video lebih persuasif.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Adaptasi Format Instan</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem otomatis mengatur durasi dan rasio video yang optimal untuk TikTok, Reels, ataupun YouTube.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Simulasi Parameter Awal</div>
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
        </div>
      )
    },
    {
      num: "02",
      id: "stage-2",
      title: "Kunci Referensi",
      shortTitle: "Kunci Referensi",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">2</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Langkah 2</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Kunci Referensi Visual:<br /><span className="grad-text">Menjaga Tampilan Tetap Akurat</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Unggah aset Anda di sini untuk memastikan sistem mengenali produk dan talent Anda. Ini menjamin hasil video tetap konsisten dari detik pertama hingga akhir.
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
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Fokuskan AI pada detail produk Anda agar tampil menonjol dan tidak terdistorsi di layar.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Suara & Musik Selaras</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem menyesuaikan intonasi suara dan musik latar agar sejalan dengan karakter (brand voice) merek Anda.</div>
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
                   <div className="bg-black/50 text-[#A78BFA] text-[0.65rem] font-bold px-2 py-1 rounded inline-block backdrop-blur-sm border border-white/10 mb-1">PENGUNCI WAJAH</div>
                   <div className="text-white font-bold text-[0.8rem] drop-shadow-md">Talent Wanita v1</div>
                 </div>
                 <div className="relative z-10 w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center text-white text-[0.7rem] self-end shadow-[0_0_10px_rgba(34,197,94,0.5)]">✓</div>
               </div>

               <div className="bg-[#1E1E2A] rounded-xl border border-white/5 p-3 flex flex-col justify-between group overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"></div>
                 <div className="relative z-10">
                   <div className="bg-black/50 text-[#EC4899] text-[0.65rem] font-bold px-2 py-1 rounded inline-block backdrop-blur-sm border border-white/10 mb-1">PENGUNCI PRODUK</div>
                   <div className="text-white font-bold text-[0.8rem] drop-shadow-md">Botol Skincare</div>
                 </div>
                 <div className="relative z-10 w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center text-white text-[0.7rem] self-end shadow-[0_0_10px_rgba(34,197,94,0.5)]">✓</div>
               </div>
             </div>
          </div>
        </div>
      )
    },
    {
      num: "03",
      id: "stage-3",
      title: "Rancang Konsep",
      shortTitle: "Rancang Konsep",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">3</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Langkah 3</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Sutradara AI:<br /><span className="grad-text">Menjaga Fokus Cerita</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Sebelum naskah ditulis, Sutradara AI menetapkan visi dan arah. Ini memastikan video Anda memiliki alur cerita yang menarik, logis, dan tidak melenceng kemana-mana.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Jalur Cerita Mengunci</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem dikunci pada satu tujuan promosi sejak awal, memastikan video bebas dari adegan yang tidak relevan.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Alur Cerita Fleksibel</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem otomatis menyesuaikan: konten organik (UGC) dibuat senatural mungkin, sementara promosi produk dirancang agar lebih elegan.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Keputusan Berbasis Logika</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem menampilkan alasan di balik setiap keputusannya, membuktikan bahwa hasilnya dirancang secara cerdas, bukan tebak-tebakan.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Simulasi Keputusan Sutradara</div>
            <div className="flex flex-col gap-3">
              <div className="bg-[#1E1E2A] border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[0.85rem] font-bold text-white">Gaya Video Terpilih</span>
                </div>
                <div className="flex gap-2">
                  <span className="bg-[#7C6EFF]/20 border border-[#7C6EFF]/30 text-[#A78BFA] text-[0.7rem] px-2 py-1 rounded font-bold">Organic Social Mode</span>
                  <span className="bg-[#1E1E2A] border border-white/10 text-[#8888AA] text-[0.7rem] px-2 py-1 rounded font-bold">Cinematic Promo</span>
                </div>
              </div>

              <div className="bg-[#1E1E2A] border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[0.85rem] font-bold text-white">Fokus Logika</span>
                </div>
                <div className="flex gap-2">
                  <span className="bg-[#EC4899]/20 border border-[#EC4899]/30 text-[#F472B6] text-[0.7rem] px-2 py-1 rounded font-bold">MENDEKATI KESEHARIAN AUDIENS</span>
                </div>
              </div>
              
              <div className="bg-[#1E1E2A] border border-white/5 rounded-xl p-4">
                <div className="text-[0.8rem] font-bold text-white mb-2">Menganalisis Kebutuhan...</div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[0.75rem] text-[#8888AA]"><div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></div> Mencocokkan Target Penonton</div>
                  <div className="flex items-center gap-2 text-[0.75rem] text-[#8888AA]"><div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></div> Memastikan Nuansa Merek Sesuai</div>
                  <div className="flex items-center gap-2 text-[0.75rem] text-[#8888AA]"><div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></div> Merancang Emosi yang Tepat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "04",
      id: "stage-4",
      title: "Atur Gaya Visual",
      shortTitle: "Atur Gaya",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">4</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Langkah 4</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Pilar Kreatif:<br /><span className="grad-text">Menentukan Tampilan & Kecepatan</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Sistem merumuskan panduan warna visual, tata cahaya, dan ritme video Anda. Memastikan setiap detiknya tampil estetik, seirama, dan enak dilihat.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Konsistensi Estetika</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem menjaga harmoni warna dan cahaya dari awal sampai akhir, sehingga tidak ada adegan yang terlihat belang.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Revisi Konsep Fleksibel</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Ubah arah gaya dengan mudah hanya dengan memberi saran ke AI, dan sistem akan mengaturnya sebelum video dikerjakan.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Kecepatan Sesuai Platform</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem menentukan apakah video perlu berganti gambar dengan cepat (seperti TikTok) atau mengalun pelan (seperti Profil Perusahaan).</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Simulasi Pengaturan Gaya</div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Fokus Produk:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Sorotan utama pada botol & tekstur</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Gaya Konten:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Testimoni jujur pemakaian harian</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Target Emosi:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Membangkitkan rasa butuh (FOMO)</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Tempo Video:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Pergantian adegan yang cepat</div>
              </div>
              <div className="flex items-start gap-3 bg-[#1E1E2A] p-2.5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-[#A78BFA] font-bold text-[0.8rem] min-w-[110px]">Tata Cahaya:</div>
                <div className="text-[#8888AA] text-[0.75rem]">Cahaya alami ruangan, berkesan asli</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "05",
      id: "stage-5",
      title: "Tulis Naskah",
      shortTitle: "Tulis Naskah",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">5</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Langkah 5</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Penulis AI:<br /><span className="grad-text">Merangkai Naskah & Teks Suara</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Sistem memecah rencana Anda menjadi urutan adegan yang rapi, lengkap dengan skrip kalimat (Voiceover) yang dirancang khusus untuk memikat perhatian audiens.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Naskah yang Menjual</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">AI otomatis membagi naskah menjadi Pancingan di awal, Penawaran di tengah, dan Ajakan bertindak di akhir.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Durasi Bicara Pas</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Jumlah kata disesuaikan dengan durasi adegan agar tidak terdengar terburu-buru dan nyaman diikuti penonton.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Tanpa Bagian Membosankan</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem mencegah kalimat yang bertele-tele, menjaga agar audiens Anda terus menonton hingga usai.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Simulasi Naskah Cerdas</div>
            <div className="flex flex-col gap-3 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[2px] before:bg-white/10">
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#7C6EFF] flex items-center justify-center text-[0.65rem] font-bold text-white z-10 border-4 border-[#16161F]">1</div>
                <div className="bg-[#1E1E2A] p-3.5 rounded-xl border border-[#7C6EFF]/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#7C6EFF]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-lg"></div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#A78BFA] font-bold text-[0.8rem]">Pancingan (Hook)</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[0.7rem] text-white">0.0s - 4.5s</span>
                  </div>
                  <div className="text-[#E8E8F0] text-[0.85rem] italic">"Udah pakai skincare mahal tapi jerawat makin meradang?"</div>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#1E1E2A] flex items-center justify-center text-[0.65rem] font-bold text-[#8888AA] z-10 border-4 border-[#16161F]">2</div>
                <div className="bg-[#1E1E2A] p-3.5 rounded-xl border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-bold text-[0.8rem]">Penjelasan Produk</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[0.7rem] text-white">4.5s - 9.0s</span>
                  </div>
                  <div className="text-[#E8E8F0] text-[0.85rem] italic">"Stop dulu! Kulitmu mungkin butuh perlindungan lapisan pelindung ini..."</div>
                </div>
              </div>

              <div className="relative pl-8 opacity-60">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#1E1E2A] flex items-center justify-center text-[0.65rem] font-bold text-[#8888AA] z-10 border-4 border-[#16161F]">...</div>
                <div className="bg-[#1E1E2A] p-2 rounded-xl border border-white/5 text-center text-[#8888AA] text-[0.75rem]">
                  (Adegan dilanjutkan hingga ajakan bertindak)
                </div>
              </div>

            </div>
          </div>
        </div>
      )
    },
    {
      num: "06",
      id: "stage-6",
      title: "Arahan Kamera",
      shortTitle: "Arahan Kamera",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">6</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Langkah 6</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Pengatur Kamera AI:<br /><span className="grad-text">Mengarahkan Posisi & Transisi Visual</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Sistem merencanakan pergerakan sudut gambar dan transisi untuk setiap adegan. Memastikan hasil video Anda tidak kaku dan terlihat direkam dengan apik.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Sudut Pandang Dinamis</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Otomatis memilih posisi (misal: jarak dekat atau menjauh) yang tepat agar video terasa hidup.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Pergantian Adegan Mulus</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Mengatur cara perpindahan gambar antar klip agar penonton merasa nyaman, tanpa efek patah-patah.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Kontrol Tanpa Batas</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Jika Anda kurang suka, Anda cukup ketik instruksi sederhana dan sistem akan mengatur ulang teknik kameranya.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Simulasi Pengaturan Kamera</div>
            <div className="flex flex-col gap-3">
              <div className="bg-[#1E1E2A] p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#7C6EFF]"></div>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-white font-bold text-[0.85rem]">Adegan 1: Sorotan Utama</div>
                  <span className="text-[0.65rem] text-[#8888AA] bg-black/40 px-2 py-0.5 rounded">0.0s - 4.5s</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <div className="text-[0.65rem] text-[#8888AA] font-bold uppercase mb-1">🎥 Teknik Kamera</div>
                    <div className="text-[0.75rem] text-[#E8E8F0] font-mono leading-tight">Pengambilan dari jarak dekat, lalu perlahan menjauh.</div>
                  </div>
                  <div>
                    <div className="text-[0.65rem] text-[#8888AA] font-bold uppercase mb-1">✨ Perpindahan</div>
                    <div className="text-[0.75rem] text-[#E8E8F0] font-mono leading-tight">Meredup secara halus (Fade Out).</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1E1E2A] p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#EC4899]"></div>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-white font-bold text-[0.85rem]">Adegan 2: Detail Produk</div>
                  <span className="text-[0.65rem] text-[#8888AA] bg-black/40 px-2 py-0.5 rounded">4.5s - 9.0s</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <div className="text-[0.65rem] text-[#8888AA] font-bold uppercase mb-1">🎥 Teknik Kamera</div>
                    <div className="text-[0.75rem] text-[#E8E8F0] font-mono leading-tight">Kamera stabil menyorot produk yang diputar lambat.</div>
                  </div>
                  <div>
                    <div className="text-[0.65rem] text-[#8888AA] font-bold uppercase mb-1">✨ Perpindahan</div>
                    <div className="text-[0.75rem] text-[#E8E8F0] font-mono leading-tight">Masuk perlahan dengan cahaya terang.</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2 text-[0.75rem] text-[#8888AA] leading-[1.4]">
                <div className="w-1.5 h-1.5 shrink-0 bg-[#8888AA] rounded-full"></div>
                Otomatis dirancang agar terlihat seperti kreasi profesional.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "07",
      id: "stage-7",
      title: "Rakit Instruksi",
      shortTitle: "Rakit Instruksi",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">7</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Langkah 7</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Penyusun Sistem:<br /><span className="grad-text">Mengemas Perintah untuk Mesin AI</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Semua detail dari langkah sebelumnya dirangkum otomatis menjadi teks perintah (prompt) super akurat, yang siap diproses oleh pembuat video AI.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Terkunci dengan Aman</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Mengikat setiap perintah kamera dan naskah dengan foto referensi Anda agar wajah produk tidak keliru.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Percantik Perintah Sekali Klik</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem kami otomatis menambahkan kata kunci rahasia agar kualitas gambar yang dihasilkan tampak jernih dan tajam.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Bisa Disesuaikan Manual</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Anda juga bebas menambahkan catatan manual jika ada hal khusus yang ingin ditampilkan dalam adegan.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Simulasi Bahasa Mesin AI</div>
            <div className="flex flex-col gap-3 h-full">
              <div className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-[0.7rem] text-[#8888AA] leading-[1.7] relative overflow-hidden flex-grow group">
                <div className="absolute top-0 right-0 bg-[#22C55E]/20 text-[#22C55E] text-[0.65rem] font-bold px-2 py-1 rounded-bl-lg">SIAP DIPROSES</div>
                
                <span className="text-[#EC4899] font-bold">[REFERENSI: gambar_produk_botol_01]</span>{' '}<br/>
                <span className="text-white">Medium close-up shot of a young asian woman holding a skincare bottle in a modern bedroom with natural daylight.</span><br/>
                <span className="text-[#F5C842]">Arah Kamera:</span> Mendekat perlahan dari sudut sejajar mata.<br/>
                <span className="text-[#F5C842]">Lampu:</span> Cahaya alami, bersih, terang, resolusi tinggi.
                
                <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-black/80 to-transparent flex items-end justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-white/10 hover:bg-white/20 cursor-pointer px-3 py-1.5 rounded-lg text-white font-bold text-[0.75rem] flex items-center gap-2">
                     <span className="text-[0.9rem]">✨</span> Kembangkan Teks
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[0.75rem] text-[#E8E8F0] bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="w-2 h-2 shrink-0 bg-[#22C55E] rounded-full animate-pulse"></div>
                Semua kerumitan ini ditangani tanpa Anda perlu mengetik apa pun.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "08",
      id: "stage-8",
      title: "Validasi Hasil",
      shortTitle: "Validasi Hasil",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">8</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Langkah 8</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2vw,1.8rem)] font-bold text-white mb-4">
              Cek Papan Cerita:<br /><span className="grad-text">Tinjau Gambar Sebelum Menjadi Video</span>
            </h3>
            <p className="text-[#8888AA] mb-6 leading-relaxed">
              Sistem akan mengubah rencana tadi menjadi cuplikan gambar untuk tiap adegan (Storyboard). Anda bisa meninjau tampilannya lebih awal, sehingga tidak perlu membuang biaya untuk proses pembuatan video panjang yang salah.
            </p>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Cerdas Menjaga Wajah</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Sistem memakai gambar awal sebagai patokan untuk gambar selanjutnya, membuat semuanya konsisten.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Hemat Dana dan Waktu</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Mengetahui kesalahan visual di tahap awal jauh lebih baik daripada menunggu proses render video selesai.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="shrink-0 w-6 h-6 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[12px]">✓</div>
                <div>
                  <div className="text-white font-semibold text-[0.95rem]">Unduh & Gunakan Bebas</div>
                  <div className="text-[#8888AA] text-[0.85rem] leading-[1.5] mt-1">Anda dapat menyalin semua perintah naskah ini ke platform AI mana saja untuk diproduksi sesuai keinginan Anda.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[300px] flex flex-col gap-4">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Simulasi Tinjauan Gambar</div>
            
            <div className="bg-[#1E1E2A] rounded-xl border border-white/5 p-3 flex-grow grid grid-cols-2 gap-2">
              <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-1.5 text-[0.55rem] text-white font-mono truncate border-t border-white/10">1: "Kulit lagi sensitif..."</div>
              </div>
              <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-1.5 text-[0.55rem] text-white font-mono truncate border-t border-white/10">2: "Ini masalahnya..."</div>
              </div>
              <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-1.5 text-[0.55rem] text-white font-mono truncate border-t border-white/10">3: "Cobain produk ini!"</div>
              </div>
              <div className="relative aspect-video bg-[#16161F] rounded-lg overflow-hidden border border-white/5 flex items-center justify-center">
                <span className="text-[#8888AA] font-bold text-[0.8rem]">Cek Adegan Lain</span>
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
        </div>
      )
    }
  ];

  return (
    <section className="py-[100px] bg-[#0A0A0F] relative overflow-hidden" id="pipeline">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#7C6EFF]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#EC4899]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12 max-w-[800px] mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#7C6EFF]/30 bg-[#7C6EFF]/10 text-[#A78BFA] text-[0.85rem] font-bold tracking-widest uppercase mb-4">
              Alur Produksi Cerdas
            </div>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight mb-6">
              Gak perlu kerja keras, Tinggal pakai.<br />
              <span className="grad-text">Kerja Otomatis Layaknya Sutradara Profesional</span>
            </h2>
            <p className="text-[#8888AA] text-[1.1rem] leading-relaxed">
              Lihat bagaimana aplikasi ini merancang ide Anda melalui 8 tahapan cerdas. Klik tiap tahapan untuk melihat cara kerjanya.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation (Scrollable horizontally on mobile) */}
        <ScrollReveal delay={0.1}>
          <div className="w-full overflow-x-auto pb-4 mb-8 custom-scrollbar">
            <div className="flex gap-2 min-w-max mx-auto justify-center">
              {stages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`px-5 py-3 rounded-full text-[0.85rem] font-bold transition-all duration-300 whitespace-nowrap border
                    ${activeStage === idx 
                      ? 'bg-[#7C6EFF] border-[#7C6EFF] text-white shadow-[0_0_20px_rgba(124,110,255,0.4)]' 
                      : 'bg-[#1E1E2A]/50 border-white/5 text-[#8888AA] hover:bg-[#1E1E2A] hover:text-white hover:border-white/10'
                    }`}
                >
                  <span className={activeStage === idx ? 'text-white' : 'text-[#7C6EFF]'}>S{idx + 1}</span> 
                  <span className="mx-1.5">•</span> 
                  {stage.shortTitle}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Active Tab Content */}
        <ScrollReveal delay={0.2} className="transition-all duration-500 min-h-[400px]">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             {stages[activeStage].content}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 bg-gradient-to-r from-[#7C6EFF]/10 via-[#EC4899]/10 to-[#7C6EFF]/10 border border-[#7C6EFF]/30 rounded-2xl p-8 text-center max-w-[800px] mx-auto">
            <h4 className="font-heading text-2xl font-bold text-white mb-3">Tinggalkan Cara Lama, Biar Sistem Bekerja Untuk Anda</h4>
            <p className="text-[#E8E8F0] leading-relaxed text-[1.05rem]">
              Anda tidak perlu pusing belajar editing rumit atau menghafal perintah AI. Aplikasi ini siap mengurus semua kebutuhan teknis video dari ide hingga siap tayang.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
