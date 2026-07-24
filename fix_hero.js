import fs from 'fs';

let content = fs.readFileSync('src/components/HeroAndProblems.tsx', 'utf8');
content = content.replace(
  /RAHASIA BIKIN VIDEO IKLAN ANTI BONCOS/g,
  'RAHASIA BIKIN KONTEN & PROMO BERKUALITAS'
);

fs.writeFileSync('src/components/HeroAndProblems.tsx', content);
