import fs from 'fs';

let content = fs.readFileSync('src/components/DirectorPipeline.tsx', 'utf8');

content = content.replace(
  /Bukan Sekadar Prompt, Tapi Aplikasi\./,
  'Gak perlu kerja keras, Tinggal pakai.'
);

fs.writeFileSync('src/components/DirectorPipeline.tsx', content);
