import fs from 'fs';

let content = fs.readFileSync('src/components/DirectorPipeline.tsx', 'utf8');
content = content.replace(
  /The AI Brain Pipeline/g,
  'Alur Produksi Cerdas'
);

fs.writeFileSync('src/components/DirectorPipeline.tsx', content);
