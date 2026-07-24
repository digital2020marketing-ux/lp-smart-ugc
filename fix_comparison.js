import fs from 'fs';

let content = fs.readFileSync('src/components/ComparisonAndReviews.tsx', 'utf8');
content = content.replace(/budget iklan/g, 'budget produksi');
content = content.replace(/Naskah Iklan/g, 'Naskah Video');

fs.writeFileSync('src/components/ComparisonAndReviews.tsx', content);
