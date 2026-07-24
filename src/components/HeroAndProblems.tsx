import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

export function HeroAndProblems() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <section className="pt-[110px] md:pt-[140px] pb-[100px] relative overflow-hidden text-center glow-bg px-6">
        <div className="max-w-[960px] mx-auto">
          
          <div className="mb-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.78rem] md:text-[0.85rem] font-bold tracking-widest uppercase border border-[#7C6EFF]/30 bg-[#7C6EFF]/10 text-[#A78BFA]">
            <span className="w-2 h-2 rounded-full bg-[#7C6EFF] animate-pulse"></span>
            PENJUALAN RESMI DIBUKA - DISKON RP 100.000
          </div>

          <h1 className="font-heading text-[clamp(2.0rem,5.2vw,3.8rem)] font-extrabold leading-[1.1] tracking-tight mb-6 text-white drop-shadow-md">
            Produksi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C6EFF] to-[#A855F7]">Video UGC Viral</span> <br className="hidden md:block" /> Cuma Pakai 1 Foto Produk
          </h1>

          <p className="font-subheading text-[1.1rem] md:text-[1.3rem] leading-[1.6] max-w-[850px] mx-auto mb-10 text-[#E8E8F0]">
            Stop bayar bulanan mahal & capek nulis prompt zonk. Kenalin <strong className="text-white">SMART-UGC</strong>: Platform Dual-Engine Pertama (AI + <strong className="text-[#F5C842]">Offline Mode</strong>) yang merakit naskah, angle, & <strong className="text-white">kunci wajah konsisten</strong> secara otomatis. Siap viral dengan biaya nyaris Rp 0.
          </p>

          {/* YOUTUBE HERO VIDEO */}
          <div className="mb-10 mx-auto w-full max-w-[850px] relative group px-2 sm:px-0">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(124,110,255,0.2)] hover:shadow-[0_0_60px_rgba(124,110,255,0.4)] transition-all duration-500 relative bg-[#0A0A0F]">
              <div className="aspect-video w-full relative">
                {isPlaying ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/lMJ2-DnYdQk?autoplay=1&rel=0" 
                    title="SMART-UGC Demo" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full relative z-10"
                  ></iframe>
                ) : (
                  <div 
                    className="absolute inset-0 z-20 cursor-pointer flex flex-col items-center justify-center group/btn"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* Background Thumbnail */}
                    <div className="absolute inset-0 bg-[#0A0A0F] group-hover/btn:bg-[#0F0F15] transition-colors duration-500"></div>
                    <img 
                      src="https://dopfs.com/wp-content/uploads/2026/07/Dopamine-Influencer.jpeg" 
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover/btn:opacity-50 transition-opacity duration-700"
                      alt="Video Thumbnail"
                    />
                    
                    {/* ELEGANT PLAY BUTTON */}
                    <div className="relative z-30 flex flex-col items-center">
                      <div className="w-24 h-24 bg-[#7C6EFF]/10 border border-[#7C6EFF]/30 rounded-full flex items-center justify-center backdrop-blur-md mb-4 shadow-[0_0_40px_rgba(124,110,255,0.2)] group-hover/btn:scale-110 transition-transform duration-500">
                        <div className="w-16 h-16 bg-[#7C6EFF] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(124,110,255,0.5)]">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-white font-black tracking-[0.25em] text-[0.85rem] md:text-[1rem] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] bg-black/40 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10 uppercase">
                        Putar Video Demo
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mb-14 w-full px-4 relative z-30">
            <a 
              href="#harga" 
              className="w-full md:w-auto relative group flex items-center justify-center gap-3 bg-gradient-to-br from-[#F5C842] via-[#F59E0B] to-[#F5C842] text-black px-8 md:px-[60px] py-4 md:py-[24px] rounded-2xl text-[1.1rem] md:text-[1.3rem] font-black shadow-[0_8px_30px_rgba(245,200,66,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(245,200,66,0.6)] transition-all border border-[#F5C842]/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/30 -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="text-2xl group-hover:scale-125 transition-transform">🚀</span> 
              <span>AMANKAN AKSES SEKARANG (Diskon Rp 100Rb)</span>
            </a>
            <p className="text-[0.85rem] text-[#8888AA] font-medium italic">
              *Promo diskon spesial hangus pada 23 Juli, 14:00 WIB
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-2 md:gap-x-4 lg:divide-x lg:divide-white/10 items-start">
            <div className="flex flex-col items-center px-2">
              <div className="font-heading text-2xl md:text-3xl font-bold text-white grad-text">7 Mode</div>
              <div className="text-[0.8rem] text-[#8888AA] leading-[1.4] mt-1 text-center">UGC, Commercial, Vlog Activity</div>
            </div>
            <div className="flex flex-col items-center px-2">
              <div className="font-heading text-2xl md:text-3xl font-bold text-white grad-text">AI Mode</div>
              <div className="text-[0.8rem] text-[#8888AA] leading-[1.4] mt-1 text-center">Pipeline AI Otomatis</div>
            </div>
            <div className="flex flex-col items-center px-2">
              <div className="font-heading text-2xl md:text-3xl font-bold text-white grad-text">Mekanikal Mode</div>
              <div className="text-[0.8rem] text-[#8888AA] leading-[1.4] mt-1 text-center">Non AI Rancang Video</div>
            </div>
            <div className="flex flex-col items-center px-2">
              <div className="font-heading text-2xl md:text-3xl font-bold text-white grad-text">BYOK</div>
              <div className="text-[0.8rem] text-[#8888AA] leading-[1.4] mt-1 text-center">Gemini, GPT, Hugging Face</div>
            </div>
            <div className="flex flex-col items-center px-2 col-span-2 lg:col-span-1">
              <div className="font-heading text-2xl md:text-3xl font-bold text-white grad-text">0 Credit</div>
              <div className="text-[0.8rem] text-[#8888AA] leading-[1.4] mt-1 text-center">Bayar sekali, pakai selamanya</div>
            </div>
          </div>

          <div className="mt-[72px] bg-[#16161F] border border-white/10 rounded-[20px] overflow-hidden relative text-left">
            <div className="bg-[#1E1E2A] px-5 py-3 border-b border-white/10 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]"></div>
              <span className="text-[0.78rem] text-[#8888AA] ml-2">SMART-UGC - Pipeline View</span>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                <div className="bg-[#7C6EFF]/10 border border-[#7C6EFF] rounded-xl p-4 text-center">
                  <div className="text-[0.65rem] font-bold text-[#7C6EFF] tracking-wider uppercase mb-1.5">Director Class</div>
                  <div className="text-[0.82rem] font-semibold text-white">AI Director</div>
                  <div className="text-[0.7rem] text-[#8888AA] mt-1">Sutradara Pro</div>
                </div>
                <div className="bg-[#7C6EFF]/10 border border-[#7C6EFF] rounded-xl p-4 text-center">
                  <div className="text-[0.65rem] font-bold text-[#7C6EFF] tracking-wider uppercase mb-1.5">Multi Format</div>
                  <div className="text-[0.82rem] font-semibold text-white">Semua Ratio</div>
                  <div className="text-[0.7rem] text-[#8888AA] mt-1">1:1, 16:9, 9:16</div>
                </div>
                <div className="bg-[#7C6EFF]/10 border border-[#7C6EFF] rounded-xl p-4 text-center">
                  <div className="text-[0.65rem] font-bold text-[#7C6EFF] tracking-wider uppercase mb-1.5">Multi Platform</div>
                  <div className="text-[0.82rem] font-semibold text-white">Logika Video</div>
                  <div className="text-[0.7rem] text-[#8888AA] mt-1">TikTok/IG/FB</div>
                </div>
                <div className="bg-[#7C6EFF]/10 border border-[#7C6EFF] rounded-xl p-4 text-center">
                  <div className="text-[0.65rem] font-bold text-[#7C6EFF] tracking-wider uppercase mb-1.5">Hasil Natural</div>
                  <div className="text-[0.82rem] font-semibold text-white">Real Visual</div>
                  <div className="text-[0.7rem] text-[#8888AA] mt-1">Kualitas Kreator</div>
                </div>
                <div className="bg-[#7C6EFF]/10 border border-[#7C6EFF] rounded-xl p-4 text-center">
                  <div className="text-[0.65rem] font-bold text-[#7C6EFF] tracking-wider uppercase mb-1.5">Vibe & Emosi</div>
                  <div className="text-[0.82rem] font-semibold text-white">Video Hidup</div>
                  <div className="text-[0.7rem] text-[#8888AA] mt-1">Humor & Soul</div>
                </div>
                <div className="bg-[#7C6EFF]/10 border border-[#7C6EFF] rounded-xl p-4 text-center">
                  <div className="text-[0.65rem] font-bold text-[#7C6EFF] tracking-wider uppercase mb-1.5">Zero Token</div>
                  <div className="text-[0.82rem] font-semibold text-white">Bebas Kredit</div>
                  <div className="text-[0.7rem] text-[#8888AA] mt-1">Pakai Key Sendiri</div>
                </div>
                <div className="bg-[#7C6EFF]/10 border border-[#7C6EFF] rounded-xl p-4 text-center col-span-2 md:col-span-1">
                  <div className="text-[0.65rem] font-bold text-[#7C6EFF] tracking-wider uppercase mb-1.5">Auto Script</div>
                  <div className="text-[0.82rem] font-semibold text-white">Mekanikal Pro</div>
                  <div className="text-[0.7rem] text-[#8888AA] mt-1">Rakit Otomatis</div>
                </div>
              </div>

              <div className="mt-5 bg-[#0A0A0F] border border-white/10 rounded-xl p-6 text-center">
                <div className="flex gap-2 justify-center flex-wrap mb-4">
                  <span className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-[#7C6EFF]/10 border border-[#7C6EFF]/30 text-[#A78BFA]">UGC Normal</span>
                  <span className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-[#7C6EFF]/10 border border-[#7C6EFF]/30 text-[#A78BFA]">UGC Viral</span>
                  <span className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC]">UGC CGI</span>
                  <span className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-[#F5C842]/10 border border-[#F5C842]/30 text-[#F5C842]">Commercial</span>
                  <span className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#FCA5A5]">Commercial Viral</span>
                  <span className="px-3 py-1 rounded-full text-[0.78rem] font-semibold bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC]">Commercial CGI</span>
                </div>
                <div className="text-[0.82rem] text-[#8888AA]">7 mode produksi · Auto-detected dari input Anda · Storyboard dengan beat structure seperti Pixar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW COPYWRITING SECTION ADDED AS REQUESTED */}
      <section className="py-[64px] bg-[#16161F] border-y border-white/5 overflow-hidden">
        
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#F5C842]/20 rounded-full blur-[50px] pointer-events-none"></div>
            <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-white mb-4 relative z-10">
              SMART-UGC <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C842] to-[#F59E0B]">Bukan Avatar Kaku</span> Kayak AI Sebelah
            </h2>
            <p className="text-[#8888AA] font-subheading text-[1.1rem] max-w-[700px] mx-auto relative z-10 mb-10">
              Kami membangun <strong className="text-white">otak produksi lengkap</strong>. Mulai dari psikologi penonton hingga pencahayaan, semuanya diatur otomatis agar video Anda siap tayang (dan siap viral).
            </p>
            
            <div className="max-w-[800px] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
              <img 
                src="https://dopfs.com/wp-content/uploads/2026/07/Dopamine-Influencer.jpeg" 
                alt="SMART-UGC Production Otak" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* CARD: Konsistensi Mikro */}
            <div className="glass-card rounded-2xl p-6 md:col-span-8 hover:border-white/20 transition-colors relative overflow-hidden flex flex-col md:flex-row gap-6 items-center group">
              <div className="absolute top-0 right-0 w-full h-full max-w-[400px] bg-gradient-to-r from-transparent to-[#7C6EFF]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="flex-1 z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7C6EFF]/20 to-[#A855F7]/20 border border-[#7C6EFF]/30 rounded-xl flex items-center justify-center text-[1.5rem] mb-4">🎯</div>
                <h3 className="font-subheading text-[1.2rem] font-bold text-white mb-2">Konsistensi Mikro, Bukan Gimik</h3>
                <p className="text-[#8888AA] text-[0.9rem] leading-[1.6] mb-4">Sistem kami menjaga setiap detail agar tidak bocor. Menghasilkan visual yang 100% konsisten layaknya direkam oleh kamera asli.</p>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-start text-[#E8E8F0] text-[0.85rem]">
                    <span className="text-[#22C55E] mt-0.5 font-bold">✓</span> Konsistensi hingga level detail terkecil (pakaian, rambut, postur).
                  </li>
                  <li className="flex gap-2 items-start text-[#E8E8F0] text-[0.85rem]">
                    <span className="text-[#22C55E] mt-0.5 font-bold">✓</span> Konsisten dalam lokasi, pencahayaan, posisi produk, dan interaksi.
                  </li>
                </ul>
              </div>
            </div>

            {/* CARD: Karakter Hidup */}
            <div className="glass-card rounded-2xl p-6 md:col-span-4 hover:border-[#F5C842]/30 transition-colors relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#F5C842]/10 rounded-full blur-[30px] group-hover:bg-[#F5C842]/20 transition-colors pointer-events-none"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#F5C842]/20 to-[#F59E0B]/20 border border-[#F5C842]/30 rounded-xl flex items-center justify-center text-[1.5rem] mb-4 relative z-10">🎭</div>
              <h3 className="font-subheading text-[1.1rem] font-bold text-white mb-2 relative z-10">Karakter Hidup & Bernapas</h3>
              <ul className="space-y-2 relative z-10 mt-3">
                <li className="flex gap-2 items-start text-[#8888AA] text-[0.85rem]">
                  <span className="text-[#F5C842] mt-0.5 font-bold">✓</span> Disuntikkan "False Habit" alami (tidak seperti robot).
                </li>
                <li className="flex gap-2 items-start text-[#8888AA] text-[0.85rem]">
                  <span className="text-[#F5C842] mt-0.5 font-bold">✓</span> Mimik wajah natural: menghela napas, tersenyum simpul, gerakan mata.
                </li>
              </ul>
            </div>

            {/* CARD: Creator Archetype & Activity */}
            <div className="glass-card rounded-2xl p-6 md:col-span-5 hover:border-[#EC4899]/30 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EC4899]/10 rounded-full blur-[30px] group-hover:bg-[#EC4899]/20 transition-colors pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-[#EC4899]/20 to-[#BE185D]/20 border border-[#EC4899]/30 rounded-xl flex items-center justify-center text-[1.2rem]">👥</div>
                <h3 className="font-subheading text-[1.1rem] font-bold text-white">Persona Kreator Spesifik</h3>
              </div>
              <p className="text-[#8888AA] text-[0.85rem] leading-[1.6] mb-4 relative z-10">
                Pilih persona yang paling cocok dengan audiens Anda (Beauty, Tech, Mom, Lifestyle, Fitness). AI akan menyesuaikan gaya bahasa, aktivitas (Unboxing, Review, Routine), dan cara subjek berinteraksi dengan kamera.
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                <span className="bg-[#1E1E2A] text-[#F472B6] text-[0.7rem] px-2 py-1 rounded border border-[#EC4899]/20">Beauty Creator</span>
                <span className="bg-[#1E1E2A] text-[#F472B6] text-[0.7rem] px-2 py-1 rounded border border-[#EC4899]/20">Tech Reviewer</span>
              </div>
            </div>

            {/* CARD: Psychology Goal */}
            <div className="glass-card rounded-2xl p-6 md:col-span-7 hover:border-[#0EA5E9]/30 transition-colors relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#0EA5E9]/5 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9]/20 to-[#0369A1]/20 border border-[#0EA5E9]/30 rounded-xl flex items-center justify-center text-[1.2rem]">🧠</div>
                  <h3 className="font-subheading text-[1.1rem] font-bold text-white">Target Psikologi Penonton</h3>
                </div>
                <p className="text-[#8888AA] text-[0.85rem] leading-[1.6] mb-4">
                  Video yang bagus tidak hanya ditonton, tapi dirasakan. Pilih 1 dari 20 target psikologi (seperti Curiosity, Trust, FOMO, Nostalgia, Exclusivity) untuk menjadi "napas" utama di balik setiap naskah dan adegan.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 relative z-10 mt-auto">
                <div className="bg-[#1E1E2A] border border-white/5 rounded-lg p-2 text-center">
                  <div className="text-[0.65rem] text-[#0EA5E9] font-bold uppercase">Kognitif</div>
                  <div className="text-[0.75rem] text-white">Rasa Penasaran</div>
                </div>
                <div className="bg-[#1E1E2A] border border-white/5 rounded-lg p-2 text-center">
                  <div className="text-[0.65rem] text-[#EF4444] font-bold uppercase">Emosional</div>
                  <div className="text-[0.75rem] text-white">Kejutan & FOMO</div>
                </div>
                <div className="bg-[#1E1E2A] border border-white/5 rounded-lg p-2 text-center">
                  <div className="text-[0.65rem] text-[#F5C842] font-bold uppercase">Status</div>
                  <div className="text-[0.75rem] text-white">Kemewahan</div>
                </div>
                <div className="bg-[#1E1E2A] border border-white/5 rounded-lg p-2 text-center">
                  <div className="text-[0.65rem] text-[#22C55E] font-bold uppercase">Sensori</div>
                  <div className="text-[0.75rem] text-white">Kepuasan Visual</div>
                </div>
              </div>
            </div>

            {/* CARD: Platform Pacing */}
            <div className="glass-card rounded-2xl p-6 md:col-span-6 hover:border-white/20 transition-colors flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[1.2rem]">📱</div>
              <div>
                <h3 className="font-subheading text-[1.05rem] font-bold text-white mb-1.5">Platform Pacing (Kecepatan)</h3>
                <p className="text-[#8888AA] text-[0.85rem] leading-[1.6]">
                  Kecepatan video otomatis diatur berdasarkan platform. <strong className="text-white">TikTok</strong> (Raw & Fast-paced), <strong className="text-white">IG Reels</strong> (Polished & Aesthetic), atau <strong className="text-white">YT Shorts</strong> (High Retention).
                </p>
              </div>
            </div>

            {/* CARD: Brand Aesthetic & Lighting */}
            <div className="glass-card rounded-2xl p-6 md:col-span-6 hover:border-white/20 transition-colors flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[1.2rem]">💡</div>
              <div>
                <h3 className="font-subheading text-[1.05rem] font-bold text-white mb-1.5">Brand Tone & Lighting</h3>
                <p className="text-[#8888AA] text-[0.85rem] leading-[1.6]">
                  Kontrol vibe visual Anda secara konsisten. Padukan <strong className="text-white">Brand Tone</strong> (Authentic, Playful, Luxurious) dengan <strong className="text-white">Lighting</strong> (Natural Daylight, Neon/Cyberpunk, Cinematic Mood).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-[64px] bg-gradient-to-t from-[#0A0A0F] to-[#16161F] px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <h2 className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white leading-[1.2]">
              Sering Ngalamin <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-[#F59E0B]">Masalah Kayak Gini?</span>
            </h2>
            <p className="font-subheading text-[1.1rem] leading-[1.7] max-w-[700px] mx-auto mt-4 text-[#8888AA]">
              Faktanya: <strong className="text-white">90% kreator & pebisnis gagal</strong> bukan karena produknya jelek, tapi karena mereka capek duluan sama <strong className="text-[#EF4444]">proses produksi yang ribet.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <ScrollReveal className="glass-card rounded-2xl p-8 border-t-2 border-t-[#EF4444]/40 hover:bg-[#EF4444]/5 transition-all group text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-2xl flex items-center justify-center text-[2rem] group-hover:scale-110 transition-transform">💸</div>
                <div className="font-heading font-extrabold text-[1.2rem] text-white">Langganan Dollar & Kredit Mahal</div>
              </div>
              <p className="text-[0.95rem] text-[#8888AA] leading-[1.7]">
                Muak bayar jutaan tiap bulan cuma buat dapet kredit terbatas? Niatnya mau hemat produksi, malah <strong className="text-white">budget boncos</strong> karena sistem token yang mencekik & bayar pakai dollar.
              </p>
            </ScrollReveal>

            <ScrollReveal className="glass-card rounded-2xl p-8 border-t-2 border-t-[#EF4444]/40 hover:bg-[#EF4444]/5 transition-all group text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-2xl flex items-center justify-center text-[2rem] group-hover:scale-110 transition-transform">🎭</div>
                <div className="font-heading font-extrabold text-[1.2rem] text-white">Video Kaku & Gampang Ketauan AI</div>
              </div>
              <p className="text-[0.95rem] text-[#8888AA] leading-[1.7]">
                Hasil AI murahan biasanya kaku, wajah berubah-ubah, & background bocor. Audiens sekarang pintar, kalau videonya <strong className="text-white">nggak natural</strong>, mereka bakal langsung <span className="italic">skip</span> & brand kamu dicap murahan.
              </p>
            </ScrollReveal>

            <ScrollReveal className="glass-card rounded-2xl p-8 border-t-2 border-t-[#EF4444]/40 hover:bg-[#EF4444]/5 transition-all group text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-2xl flex items-center justify-center text-[2rem] group-hover:scale-110 transition-transform">🤖</div>
                <div className="font-heading font-extrabold text-[1.2rem] text-white">Pusing Trial-Error Prompt Zonk</div>
              </div>
              <p className="text-[0.95rem] text-[#8888AA] leading-[1.7]">
                Habis waktu berjam-jam cuma buat nyari prompt yang pas, tapi hasilnya tetep nggak sesuai ekspektasi? Seharusnya kamu fokus jualan, bukan malah jadi <strong className="text-white">"Prompt Engineer"</strong> dadakan yang nggak dibayar.
              </p>
            </ScrollReveal>

            <ScrollReveal className="glass-card rounded-2xl p-8 border-t-2 border-t-[#EF4444]/40 hover:bg-[#EF4444]/5 transition-all group text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-2xl flex items-center justify-center text-[2rem] group-hover:scale-110 transition-transform">📉</div>
                <div className="font-heading font-extrabold text-[1.2rem] text-white">Kalah Cepat Dengan Kompetitor</div>
              </div>
              <p className="text-[0.95rem] text-[#8888AA] leading-[1.7]">
                Pasar UGC bergerak sangat cepat. Kalau produksi konten kamu masih manual & lambat, kompetitor bakal <strong className="text-white">mencuri start</strong> & mengambil atensi market kamu sebelum kamu sempat posting.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#EF4444]/10 to-[#7C6EFF]/10 border border-[#7C6EFF]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center text-center md:text-left max-w-[800px] mx-auto relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#7C6EFF]/20 blur-[50px] rounded-full"></div>
            <div className="text-[3rem] md:text-[4rem] leading-none shrink-0 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">🛑</div>
            <div className="relative z-10">
              <div className="font-heading font-extrabold mb-2 text-white text-[1.3rem] md:text-[1.6rem]">Wait. Ini BUKAN Salah Kamu.</div>
              <div className="font-subheading text-[1rem] text-[#E8E8F0] leading-[1.7]">
                Masalahnya bukan di kreativitas kamu. Tapi karena kamu masih pakai <strong className="text-[#EF4444] bg-[#EF4444]/10 px-1 rounded">"Generator AI 1-Klik"</strong> yang hasilnya emang asal jadi. <br/><br/>
                Kreator top dunia nggak cuma ngetik prompt aja. Mereka punya <strong className="text-[#F5C842] bg-[#F5C842]/10 px-1 rounded">Sistem Pipeline Terstruktur</strong>. Nah, sekarang kamu bisa punya "otak" produksi kayak mereka tanpa ribet mikir teknis.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
