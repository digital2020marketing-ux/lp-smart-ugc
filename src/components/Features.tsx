import { ScrollReveal } from './ScrollReveal';

export function Features() {
  return (
    <section id="fitur" className="py-[100px] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center max-w-[800px] mx-auto mb-[72px]">
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.2]">
            Tinggalkan Cara Lama, <span className="grad-text">Biar AI Bekerja Keras Untukmu</span>
          </h2>
          <p className="text-[1.1rem] leading-[1.7] text-[#8888AA] mt-4 max-w-[700px] mx-auto">
            Nggak perlu pusing belajar editing rumit atau menghapal perintah AI (prompt). Sistem SMART-UGC siap mengurus semua kebutuhan video dari awal sampai selesai secara otomatis.
          </p>
        </div>
      </div>

        {/* MOCKUP LANDSCAPE SLIDER */}
        <div className="relative w-full mx-auto mt-12 mb-[80px]">
          {/* Edge gradients for smooth scrolling effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10 pointer-events-none"></div>
          
          <style>
            {`
              @keyframes slide-landscape {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 0.5rem)); }
              }
              .animate-slide-landscape {
                animation: slide-landscape 40s linear infinite;
              }
            `}
          </style>

          <div className="flex gap-4 w-max animate-slide-landscape hover:[animation-play-state:paused] px-6">
            {[
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-1.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-5.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-14.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-3.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-8.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-13.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-4.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-11.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-10.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-7.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-12.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-15.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-1.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-5.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-14.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-3.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-8.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-13.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-4.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-11.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-10.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-7.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-12.png",
              "https://dopfs.com/wp-content/uploads/2026/07/UGC-Board-15.png"
            ].map((item, idx) => (
              <div key={idx} className="w-[280px] h-[158px] md:w-[480px] md:h-[270px] shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-[#1E1E2A] relative group cursor-pointer">
                <img loading="lazy" 
                  src={item} 
                  alt="Landscape Dashboard Mockup" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
              </div>
            ))}
          </div>
        </div>

      <div className="max-w-[1100px] mx-auto px-6">
        {/* Feature 1 */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-[80px]">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">1</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">Reference & Moodboard Lock</span>
            </div>
            <h3 className="font-heading text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold text-white mb-4">
              Visual Konsisten,<br/><span className="grad-text">Bukan Sekadar Avatar Kaku</span>
            </h3>
            <p className="text-[#8888AA] mb-6">
              Sistem kita otomatis ngunci wajah talent dan bentuk produk dari frame pertama. Nggak ada lagi cerita wajah berubah-ubah tiap adegan. Hasilnya 100% konsisten.
            </p>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Character Board: 6 panel (angle, ekspresi, outfit detail)</div>
            </div>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Location Board: time-of-day variants, material & warna detail</div>
            </div>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Product Board: multi-angle shot, texture, label visibility</div>
            </div>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Locked seed, semua generate gambar merujuk ke board ini</div>
            </div>
          </div>
          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[280px] flex flex-col gap-3">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-3">Character Board Preview</div>
            <div className="flex-1 rounded-xl overflow-hidden border border-white/10 mb-2 relative group cursor-pointer">
              <img loading="lazy" 
                src="https://dopfs.com/wp-content/uploads/2026/07/Ubah_karakter_menjadi_board_2K_202607100044-FILEminimizer.jpeg" 
                alt="Character Board Preview" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-[#0A0A0F] border border-[#7C6EFF]/20 rounded-lg p-2.5 mt-2.5 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full shrink-0"></div>
              <div className="text-[0.75rem] text-[#22C55E] font-semibold">LOCKED (timestamp: {new Date().getFullYear()}), Semua scene merujuk board ini</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature 2 */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-[80px] md:rtl">
          <div className="md:ltr" dir="ltr">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">2</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">AI Director Engine</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold text-white mb-4">
              Punya <span className="grad-text">Sutradara Konten</span> Sendiri
            </h3>
            <p className="text-[#8888AA] mb-6">
              Dilengkapi 26 pemicu psikologis, 50+ racikan Hook Viral, dan 20+ trik pergerakan kamera. AI ini tau banget caranya bikin audiens stop scroll dan nonton video kamu sampai habis.
            </p>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Router Engine: auto-detect grammar (UGC/Commercial) dari input</div>
            </div>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">26 psychology goals tersedia (curiosity, desire, luxury, dll)</div>
            </div>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Category-aware: Tech ≠ Food ≠ Fashion ≠ Beauty</div>
            </div>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Integrated viral_cgi_engine untuk konsep CGI & Viral</div>
            </div>
          </div>
          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[280px] flex flex-col gap-3 md:ltr" dir="ltr">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-3">AI Director Output</div>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#1E1E2A] border border-white/10 rounded-lg p-3">
                  <div className="text-[0.7rem] text-[#8888AA] uppercase tracking-wide font-bold mb-1">PERAN</div>
                  <div className="text-[0.85rem] font-semibold text-white">Pengguna iPhone, Pria Jakarta</div>
                </div>
                <div className="bg-[#1E1E2A] border border-white/10 rounded-lg p-3">
                  <div className="text-[0.7rem] text-[#8888AA] uppercase tracking-wide font-bold mb-1">EMOSI</div>
                  <div className="text-[0.85rem] font-semibold text-[#A78BFA]">Aspirasi · Keinginan · Futuristik</div>
                </div>
              </div>
              <div className="bg-[#1E1E2A] border border-white/10 rounded-lg p-3">
                <div className="text-[0.7rem] text-[#8888AA] uppercase tracking-wide font-bold mb-1">TEKNIK VISUAL</div>
                <div className="text-[0.85rem] font-semibold text-[#F5C842]">Fast Cuts · Product Hero Shot · Macro Texture View · POV</div>
              </div>
              <div className="bg-[#1E1E2A] border border-[#EF4444]/20 rounded-lg p-3">
                <div className="text-[0.7rem] text-[#8888AA] uppercase tracking-wide font-bold mb-1">TEKNIK VFX</div>
                <div className="text-[0.85rem] font-semibold text-[#FCA5A5]">Glitch Transition · ASMR Sound Effect · Kinetic Typography</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature 3 */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-[80px]">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">3</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">3 Output Modes & Audio Mixer</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold text-white mb-4">
              Bebas Fleksibel,<br/><span className="grad-text">Nggak Terikat Satu Tools</span>
            </h3>
            <p className="text-[#8888AA] mb-6">
              Naskah, storyboard, sama instruksi visual udah disiapin semua. Kamu bebas mau langsung render di aplikasi ini, atau copy-paste prompt-nya ke AI andalan kamu (Kling, Runway, Luma, dll).
            </p>

            <div className="flex gap-2 flex-wrap mb-5">
              <span className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-[#7C6EFF]/10 border border-[#7C6EFF]/30 text-[#A78BFA]">UGC Normal</span>
              <span className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-[#7C6EFF]/10 border border-[#7C6EFF]/30 text-[#A78BFA]">UGC Viral</span>
              <span className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC]">UGC CGI-AR</span>
              <span className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-[#F5C842]/10 border border-[#F5C842]/30 text-[#F5C842]">Commercial</span>
              <span className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#FCA5A5]">Comm. Viral</span>
              <span className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC]">Comm. CGI</span>
            </div>

            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Beat structure dengan body blocking konkret per mode</div>
            </div>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Continuity Anchor: scene N mewarisi end-state scene N-1</div>
            </div>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Image Prompt + Video Prompt terpisah, siap pakai</div>
            </div>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Export Production Script lengkap (txt) untuk tim produksi</div>
            </div>
          </div>
          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-4 min-h-[280px] flex flex-col gap-3">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-2">Storyboard Preview</div>
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-[#1E1E2A] border border-white/10 rounded-lg overflow-hidden flex flex-col">
                <div className="relative aspect-[9/16] w-full bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/z9aS_6vpoG0"
                    title="Scene 1"
                    className="w-full h-full border-0 absolute inset-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <span className="absolute top-1.5 left-1.5 bg-[#7C6EFF] text-white text-[0.65rem] font-bold px-1.5 py-0.5 rounded z-10 pointer-events-none">S1</span>
                </div>
                <div className="p-2">
                  <div className="text-[0.72rem] font-semibold mb-0.5 text-white">Opening Hook</div>
                  <div className="text-[0.65rem] text-[#8888AA]">Beat-drop reveal</div>
                </div>
              </div>
              <div className="bg-[#1E1E2A] border border-white/10 rounded-lg overflow-hidden flex flex-col">
                <div className="relative aspect-[9/16] w-full bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/gI3Wu-vsPFM"
                    title="Scene 2"
                    className="w-full h-full border-0 absolute inset-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <span className="absolute top-1.5 left-1.5 bg-[#7C6EFF] text-white text-[0.65rem] font-bold px-1.5 py-0.5 rounded z-10 pointer-events-none">S2</span>
                </div>
                <div className="p-2">
                  <div className="text-[0.72rem] font-semibold mb-0.5 text-white">Product Detail</div>
                  <div className="text-[0.65rem] text-[#8888AA]">Macro texture</div>
                </div>
              </div>
              <div className="bg-[#1E1E2A] border border-white/10 rounded-lg overflow-hidden flex flex-col">
                <div className="relative aspect-[9/16] w-full bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/lpfKHioRMic"
                    title="Scene 3"
                    className="w-full h-full border-0 absolute inset-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <span className="absolute top-1.5 left-1.5 bg-[#7C6EFF] text-white text-[0.65rem] font-bold px-1.5 py-0.5 rounded z-10 pointer-events-none">S3</span>
                </div>
                <div className="p-2">
                  <div className="text-[0.72rem] font-semibold mb-0.5 text-white">Demo Scene</div>
                  <div className="text-[0.65rem] text-[#8888AA]">Application POV</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature 4 */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center md:rtl">
          <div className="md:ltr" dir="ltr">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#7C6EFF]/20 border border-[#7C6EFF] rounded-lg flex items-center justify-center text-[0.75rem] font-extrabold text-[#7C6EFF]">4</div>
              <span className="text-[0.75rem] font-bold tracking-widest uppercase text-[#7C6EFF]">True BYOK (Bring Your Own Key)</span>
            </div>
            <h3 className="font-subheading font-heading text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold text-white mb-4">
              Anti Boncos:<br /><span className="grad-text">Bebas Biaya Langganan Bulanan</span>
            </h3>
            <p className="text-[#8888AA] mb-6">
              Tools AI luaran sana wajibin kamu langganan tiap bulan. Di sini, kamu pakai API Key (Gemini/OpenAI) punya kamu sendiri. Cukup bayar sekali di awal, nikmatin biaya operasional super murah selamanya.
            </p>

            <div className="bg-gradient-to-br from-[#F5C842]/5 to-[#7C6EFF]/5 border border-[#F5C842]/20 rounded-2xl p-6 text-left mb-5">
              <div className="text-[0.78rem] font-bold text-[#F5C842] uppercase tracking-wider mb-2">💰 Simulasi Penghematan</div>
              <div className="text-[0.88rem] text-[#8888AA] leading-[1.8]">
                Tool kompetitor: 50 kredit/video × Rp 2.000 = <span className="text-[#EF4444]">Rp 100.000/video</span><br/>
                SMART-UGC: API Gemini Flash ≈ <span className="text-[#22C55E]">Rp 300–2.000/video</span> (langsung ke Google)<br/>
                <strong className="text-[#F5C842]">Hemat hingga 90% biaya per video</strong>
              </div>
            </div>

            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Gemini (Imagen · Veo · Gemini Chat) atau GPT (Image · Sora · GPT-4o)</div>
            </div>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Pilih model per fungsi: chat, image, video, bebas kombinasi</div>
            </div>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Generate in-app ATAU export prompt ke Flow, Kling, Seedance, Runway</div>
            </div>
            <div className="flex gap-2.5 items-start mb-2.5">
              <div className="shrink-0 w-5 h-5 bg-[#22C55E]/10 border border-[#22C55E] rounded-full flex items-center justify-center mt-0.5 text-[#22C55E] font-bold text-[11px]">✓</div>
              <div className="text-[#E8E8F0]">Production Script export: full package per scene, siap copy-paste</div>
            </div>
          </div>
          <div className="bg-[#16161F] border border-white/10 rounded-2xl p-6 min-h-[280px] flex flex-col gap-3 md:ltr" dir="ltr">
            <div className="text-[0.78rem] text-[#7C6EFF] font-bold uppercase tracking-widest mb-4">Dual Output Mode</div>
            <div className="flex flex-col gap-2.5">
              <div className="bg-[#7C6EFF]/10 border border-[#7C6EFF]/20 rounded-xl p-4">
                <div className="font-bold text-[0.9rem] mb-1 text-[#A78BFA]">🖥️ Mode 1: Generate In-App</div>
                <div className="text-[0.82rem] text-[#8888AA]">Storyboard gambar langsung via Gemini/GPT API key Anda. Semua di satu tempat.</div>
              </div>
              <div className="bg-[#F5C842]/5 border border-[#F5C842]/20 rounded-xl p-4">
                <div className="font-bold text-[0.9rem] mb-1 text-[#F5C842]">🚀 Mode 2: Export ke Platform Luar</div>
                <div className="text-[0.82rem] text-[#8888AA]">Export Production Script → upload ke Google Flow, Kling, Seedance, Runway. Prompt image + video sudah lengkap per scene.</div>
              </div>
              <div className="bg-[#22C55E]/5 border border-[#22C55E]/15 rounded-xl p-4">
                <div className="font-bold text-[0.9rem] mb-2 text-[#22C55E]">Platform yang Didukung Prompt Export:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Google Flow', 'Kling AI', 'Seedance', 'Runway', 'Midjourney', '+ semua platform'].map((plat, i) => (
                    <span key={i} className="bg-[#1E1E2A] border border-white/10 rounded-md px-2.5 py-1 text-[0.75rem] font-semibold text-white">{plat}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
