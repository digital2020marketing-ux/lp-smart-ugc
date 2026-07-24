import fs from 'fs';

let content = fs.readFileSync('src/components/PricingAndFAQ.tsx', 'utf8');

content = content.replace(/biaya iklan sampai puluhan/g, 'biaya produksi sampai puluhan');
content = content.replace(/kami iklankan/g, 'kami janjikan');
content = content.replace(/Video Iklan Penjualan Hari Ini/g, 'Video Konten & Promosi Menarik Hari Ini');

fs.writeFileSync('src/components/PricingAndFAQ.tsx', content);
