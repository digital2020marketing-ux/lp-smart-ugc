import fs from 'fs';

let content = fs.readFileSync('src/components/PricingAndFAQ.tsx', 'utf8');

const personalListTarget = `<ul className="list-none mb-8 space-y-3 border-t border-white/5 pt-4">
                {[
                  "Aplikasi Generator Prompt Video 9-Stage",
                  "Mendapat Arahan Voice Over Lengkap",
                  "Storyboard Generation (Hook - CTA)",
                  "Siap Pakai untuk Kling AI / Luma",
                  "Video Panduan Detail untuk Pemula",
                  "Akses Selamanya (Life Time)",
                  "Bonus Akses 6 Mode Konten Ads",
                ].map((f, i) => (
                  <li key={i} className="flex gap-2 items-start text-[0.9rem] text-white pb-1 border-b border-white/5 last:border-0">
                    <span className="text-[#22C55E] shrink-0 mt-0.5 font-bold">✓</span> {f}
                  </li>
                ))}
                <li className="flex gap-2 items-start text-[0.9rem] text-[#8888AA] opacity-70 pb-1 border-b border-white/5 last:border-0">
                    <span className="text-[#EF4444] shrink-0 mt-0.5 font-bold">✗</span> Tidak boleh dijual ulang (No Whitelabel)
                </li>
              </ul>`;

const newPersonalList = `<ul className="list-none mb-8 space-y-3 border-t border-white/5 pt-4">
                {[
                  "Akses Penuh Dopamine Influencer AI",
                  "Sistem 9-Stage AI Director Otomatis",
                  "Fitur Konsistensi Karakter & Produk 100%",
                  "Setting Psikologi, Pacing, & Vibe Video",
                  "Export Lengkap dengan Arahan Voice Over",
                  "Sistem BYOK (Tanpa Langganan & Kredit)",
                  "Akses 4 Bonus Spesial Hari Ini",
                  "Akses Selamanya & Free Update",
                ].map((f, i) => (
                  <li key={i} className="flex gap-2 items-start text-[0.9rem] text-white pb-1 border-b border-white/5 last:border-0">
                    <span className="text-[#22C55E] shrink-0 mt-0.5 font-bold">✓</span> {f}
                  </li>
                ))}
                <li className="flex gap-2 items-start text-[0.9rem] text-[#8888AA] opacity-70 pb-1 border-b border-white/5 last:border-0">
                    <span className="text-[#EF4444] shrink-0 mt-0.5 font-bold">✗</span> Hanya Pemakaian Pribadi (No Whitelabel)
                </li>
              </ul>`;

content = content.replace(personalListTarget, newPersonalList);

const whitelabelListTarget = `<div className="bg-[#F5C842]/10 border border-[#F5C842]/20 rounded-xl p-4 mb-6">
                <div className="text-[0.8rem] font-bold text-[#F5C842] uppercase tracking-wider mb-2">🏆 BEBAS JUAL ULANG 100% PROFIT</div>
                <ul className="list-none text-[0.85rem] leading-[2] text-white">
                  <li>⚡ <strong className="text-[#F5C842]">Whitelabel License (Rebrand & Jual)</strong></li>
                  <li>⚡ Bebas ganti logo & warna aplikasi!</li>
                  <li>⚡ Bonus Landing Page template jualan</li>
                  <li>⚡ Bonus aset promo + copywriting</li>
                </ul>
              </div>`;

const newWhitelabelList = `<ul className="list-none mb-6 space-y-3 border-t border-white/5 pt-4">
                {[
                  "Lisensi Whitelabel (Bebas Jual Ulang)",
                  "100% Keuntungan Penjualan Milik Anda",
                  "Bebas Ganti Nama, Logo, & Warna Aplikasi",
                  "Termasuk Semua Fitur Personal License",
                ].map((f, i) => (
                  <li key={i} className="flex gap-2 items-start text-[0.9rem] text-white pb-1 border-b border-white/5 last:border-0">
                    <span className="text-[#F5C842] shrink-0 mt-0.5 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              
              <div className="bg-[#F5C842]/10 border border-[#F5C842]/20 rounded-xl p-4 mb-6">
                <div className="text-[0.8rem] font-bold text-[#F5C842] uppercase tracking-wider mb-2">🏆 BONUS SPESIAL WHITELABEL</div>
                <ul className="list-none text-[0.85rem] leading-[2] text-white">
                  <li>⚡ <strong className="text-[#F5C842]">DFY Sales System (Landing Page Siap Pakai)</strong></li>
                  <li>⚡ 4 Bonus PLR (Label Kit, Finance, Dll) Siap Jual!</li>
                  <li>⚡ Bisnis Software Siap Jalan Hari Ini</li>
                </ul>
              </div>`;

content = content.replace(whitelabelListTarget, newWhitelabelList);

fs.writeFileSync('src/components/PricingAndFAQ.tsx', content);
console.log("Updated pricing list.");
