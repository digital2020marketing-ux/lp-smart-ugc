import fs from 'fs';

let content = fs.readFileSync('src/components/HeroAndProblems.tsx', 'utf8');

content = content.replace(
  'className="grid grid-cols-1 md:grid-cols-5 gap-3"',
  'className="grid grid-cols-2 md:grid-cols-5 gap-3"'
);

fs.writeFileSync('src/components/HeroAndProblems.tsx', content);
