import { ScrollReveal } from './ScrollReveal';

export function TargetAudience() {
  return (
    <section className="py-[100px] px-6 bg-[#0A0A0F] border-t border-white/5">
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.2]">
              Mesin Pencetak Uang <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C6EFF] to-[#A855F7]">Untuk Apapun Model Bisnismu</span>
            </h2>
            <p className="font-subheading text-[#8888AA] text-[1.1rem] mt-5 leading-[1.6]">
              Aplikasi ini bukan cuma sekedar AI, tapi <strong>mesin pencetak uang</strong>. Apapun model bisnis kamu, ini adalah cara paling cepat untuk melipatgandakan profit tanpa harus bayar biaya produksi yang mahal.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Persona 1: Affiliate & Creator */}
          <ScrollReveal className="glass-card rounded-2xl p-6 hover:border-[#7C6EFF]/40 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7C6EFF]/20 to-[#A855F7]/20 border border-[#7C6EFF]/30 rounded-xl flex items-center justify-center text-[1.5rem] mb-5 group-hover:scale-110 transition-transform">🛒</div>
            <h3 className="font-subheading text-white font-bold text-[1.1rem] mb-2">Affiliate Shopee & TikTok</h3>
            <p className="text-[#8888AA] text-[0.85rem] leading-[1.7] mb-4">
              Stop boncos beli sampel produk! Bikin puluhan video review dan unboxing tiap hari modal 1 foto aja.
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2 text-[0.85rem] text-[#E8E8F0]"><span className="text-[#22C55E]">✓</span> Dominasi FYP tanpa ribet shooting.</li>
              <li className="flex gap-2 text-[0.85rem] text-[#E8E8F0]"><span className="text-[#22C55E]">✓</span> Komisi keranjang kuning meledak.</li>
            </ul>
          </ScrollReveal>

          {/* Persona 2: Brand Owner */}
          <ScrollReveal className="glass-card rounded-2xl p-6 hover:border-[#7C6EFF]/40 transition-all group delay-75">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F5C842]/20 to-[#F59E0B]/20 border border-[#F5C842]/30 rounded-xl flex items-center justify-center text-[1.5rem] mb-5 group-hover:scale-110 transition-transform">🛍️</div>
            <h3 className="font-subheading text-white font-bold text-[1.1rem] mb-2">Pemilik Bisnis & Olshop</h3>
            <p className="text-[#8888AA] text-[0.85rem] leading-[1.7] mb-4">
              Bikin video promo produk sekelas brand besar tanpa perlu sewa studio atau bayar model mahal.
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2 text-[0.85rem] text-[#E8E8F0]"><span className="text-[#22C55E]">✓</span> Katalog produk jadi video estetik.</li>
              <li className="flex gap-2 text-[0.85rem] text-[#E8E8F0]"><span className="text-[#22C55E]">✓</span> Tingkatkan konversi penjualan.</li>
            </ul>
          </ScrollReveal>

          {/* Persona 3: Iklan */}
          <ScrollReveal className="glass-card rounded-2xl p-6 hover:border-[#7C6EFF]/40 transition-all group delay-150">
            <div className="w-12 h-12 bg-gradient-to-br from-[#EF4444]/20 to-[#B91C1C]/20 border border-[#EF4444]/30 rounded-xl flex items-center justify-center text-[1.5rem] mb-5 group-hover:scale-110 transition-transform">🎯</div>
            <h3 className="font-subheading text-white font-bold text-[1.1rem] mb-2">Advertiser (FB/IG/TikTok Ads)</h3>
            <p className="text-[#8888AA] text-[0.85rem] leading-[1.7] mb-4">
              ROAS anjlok karena audiens bosen sama video yang itu-itu aja? Tes puluhan angle iklan dengan cepat.
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2 text-[0.85rem] text-[#E8E8F0]"><span className="text-[#22C55E]">✓</span> Split test banyak video iklan sekaligus.</li>
              <li className="flex gap-2 text-[0.85rem] text-[#E8E8F0]"><span className="text-[#22C55E]">✓</span> Turunkan biaya per akuisisi (CPA).</li>
            </ul>
          </ScrollReveal>

          {/* Persona 4: Freelancer / Agency */}
          <ScrollReveal className="glass-card rounded-2xl p-6 hover:border-[#7C6EFF]/40 transition-all group delay-200">
            <div className="w-12 h-12 bg-gradient-to-br from-[#22C55E]/20 to-[#10B981]/20 border border-[#22C55E]/30 rounded-xl flex items-center justify-center text-[1.5rem] mb-5 group-hover:scale-110 transition-transform">💼</div>
            <h3 className="font-subheading text-white font-bold text-[1.1rem] mb-2">Freelancer & Video Agency</h3>
            <p className="text-[#8888AA] text-[0.85rem] leading-[1.7] mb-4">
              Buka jasa pembuatan video promo dengan hasil sekelas studio profesional, hanya bermodalkan satu tool ini saja.
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2 text-[0.85rem] text-[#E8E8F0]"><span className="text-[#22C55E]">✓</span> Terima banyak pesanan tanpa pusing produksi.</li>
              <li className="flex gap-2 text-[0.85rem] text-[#E8E8F0]"><span className="text-[#22C55E]">✓</span> Margin profit maksimal, tanpa tim besar.</li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
