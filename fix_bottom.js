import fs from 'fs';

let content = fs.readFileSync('src/components/DirectorPipeline.tsx', 'utf8');
content = content.replace(
  /Lihat bagaimana aplikasi ini merancang ide Anda melalui 9 tahapan cerdas/g,
  'Lihat bagaimana aplikasi ini merancang ide Anda melalui 8 tahapan cerdas'
);

content = content.replace(
  /<h4 className="font-heading text-2xl font-bold text-white mb-3">Tinggalkan Cara Lama, Biar AI Bekerja Keras Untukmu<\/h4>\s*<p className="text-\[#E8E8F0\] leading-relaxed text-\[1\.05rem\]">\s*Nggak perlu pusing belajar editing rumit atau menghapal perintah AI \(prompt\)\. Sistem Dopamine Influencer siap mengurus semua kebutuhan video dari awal sampai selesai secara otomatis\.\s*<\/p>/m,
  `<h4 className="font-heading text-2xl font-bold text-white mb-3">Tinggalkan Cara Lama, Biar Sistem Bekerja Untuk Anda</h4>
            <p className="text-[#E8E8F0] leading-relaxed text-[1.05rem]">
              Anda tidak perlu pusing belajar editing rumit atau menghafal perintah AI. Aplikasi ini siap mengurus semua kebutuhan teknis video dari ide hingga siap tayang.
            </p>`
);

fs.writeFileSync('src/components/DirectorPipeline.tsx', content);
