import fs from 'fs';

let content = fs.readFileSync('src/components/BonusStack.tsx', 'utf8');
content = content.replace(/Mesin Kombinasi Iklan/g, 'Mesin Kombinasi Video');
content = content.replace(/materi iklan/g, 'materi konten');

fs.writeFileSync('src/components/BonusStack.tsx', content);
