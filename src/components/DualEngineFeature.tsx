import { ScrollReveal } from './ScrollReveal';

export function DualEngineFeature() {
  return (
    <section className="py-20 bg-[#050508] relative border-y border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.8rem] font-bold tracking-widest uppercase border border-[#7C6EFF]/30 bg-[#7C6EFF]/10 text-[#A78BFA] mb-6">
              Kenali SMART-UGC
            </div>
            <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold mb-6 leading-[1.1] text-white">
              Teknologi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C6EFF] to-[#A855F7]">Dual-Engine</span> <br/>
              Tekan Biaya Produksi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C842] to-[#F59E0B]">Nyaris Rp 0</span>
            </h2>
            <p className="text-[1.05rem] md:text-[1.15rem] text-[#8888AA] max-w-[800px] mx-auto leading-[1.6]">
              Aplikasi ini adalah satu-satunya di market yang beroperasi dengan dua mesin terpisah. Anda memiliki fleksibilitas mutlak: Gunakan AI Generatif untuk ide liar, atau beralih ke Mesin Mekanikal untuk merakit konten/iklan tanpa biaya tagihan API Dari AI.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* AI ENGINE CARD */}
          <ScrollReveal className="glass-card rounded-3xl p-8 md:p-10 border-t-2 border-t-[#22C55E]/40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#22C55E]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#22C55E]/10 transition-colors duration-700"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-16 h-16 bg-[#22C55E]/10 border border-[#22C55E]/20 rounded-2xl flex items-center justify-center text-3xl">🤖</div>
              <div className="text-[0.75rem] font-bold bg-[#22C55E]/20 text-[#86EFAC] px-3 py-1 rounded-full uppercase tracking-wider">Online Mode</div>
            </div>
            
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Generative AI Engine</h3>
            <p className="text-[#8888AA] leading-[1.7] mb-8 relative z-10 text-[0.95rem] md:text-[1rem]">
              Hubungkan kunci API Anda dan gunakan kecerdasan buatan paling canggih (Gemini, ChatGPT, dll) dengan sistem <strong className="text-white">Bring Your Own Key (BYOK)</strong>. Anda hanya membayar tarif dasar API langsung ke provider.
            </p>
            
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                  <span className="text-[#22C55E] text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="text-[#E8E8F0] font-bold block mb-1">Super Murah & Transparan</span>
                  <span className="text-[#8888AA] text-[0.9rem] leading-relaxed block">Tanpa mark-up konyol bulanan. Satu script iklan rata-rata hanya memakan biaya Rp 150 - Rp 500 perak.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                  <span className="text-[#22C55E] text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="text-[#E8E8F0] font-bold block mb-1">Multi-Model Terkini</span>
                  <span className="text-[#8888AA] text-[0.9rem] leading-relaxed block">Akses otak paling brilian untuk brainstorming angle konten dan variasi hook yang out-of-the-box.</span>
                </div>
              </li>
            </ul>
          </ScrollReveal>

          {/* MECHANICAL ENGINE CARD */}
          <ScrollReveal className="glass-card rounded-3xl p-8 md:p-10 border-t-2 border-t-[#F5C842]/40 relative overflow-hidden group text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5C842]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#F5C842]/10 transition-colors duration-700"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-16 h-16 bg-[#F5C842]/10 border border-[#F5C842]/20 rounded-2xl flex items-center justify-center text-3xl">⚙️</div>
              <div className="text-[0.75rem] font-bold bg-[#F5C842]/20 text-[#FDE047] px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FDE047] animate-pulse"></span>
                Offline Mode
              </div>
            </div>
            
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Mechanical Engine</h3>
            <p className="text-[#8888AA] leading-[1.7] mb-8 relative z-10 text-[0.95rem] md:text-[1rem]">
              Sistem algoritmik murni. Mesin ini <strong className="text-white">merakit</strong> iklan Anda dari ratusan formula (hook, body, CTA) yang teruji konversi tinggi secara instan, tanpa butuh AI generatif sama sekali.
            </p>
            
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#F5C842]/20 flex items-center justify-center">
                  <span className="text-[#F5C842] text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="text-[#E8E8F0] font-bold block mb-1">Cetak Video Nyaris Rp 0</span>
                  <span className="text-[#8888AA] text-[0.9rem] leading-relaxed block">Generate struktur storyboard 100% Gratis di lokal browser. Bawa hasilnya ke platform AI gratisan lain di luar sana, produksi selesai tanpa keluar biaya.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#F5C842]/20 flex items-center justify-center">
                  <span className="text-[#F5C842] text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="text-[#E8E8F0] font-bold block mb-1">Anti-Halusinasi & Konsisten</span>
                  <span className="text-[#8888AA] text-[0.9rem] leading-relaxed block">Hasil deterministik 100%. Struktur langsung berfokus pada jualan, terhindar dari gaya bahasa AI yang kaku & terlalu berbunga-bunga.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#F5C842]/20 flex items-center justify-center">
                  <span className="text-[#F5C842] text-xs font-bold">✓</span>
                </div>
                <div>
                  <span className="text-[#E8E8F0] font-bold block mb-1">Zero Latency & Fallback Aman</span>
                  <span className="text-[#8888AA] text-[0.9rem] leading-relaxed block">Diproses seketika di laptop Anda. Server AI global sedang down? Anda tetap bisa produksi iklan tanpa hambatan.</span>
                </div>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
