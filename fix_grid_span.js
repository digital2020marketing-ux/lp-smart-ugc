import fs from 'fs';

let content = fs.readFileSync('src/components/HeroAndProblems.tsx', 'utf8');

content = content.replace(
  '<div className="bg-[#7C6EFF]/10 border border-[#7C6EFF] rounded-xl p-4 text-center">\n                  <div className="text-[0.7rem] font-bold text-[#7C6EFF] tracking-wider uppercase mb-1.5">Stage 8–9</div>',
  '<div className="bg-[#7C6EFF]/10 border border-[#7C6EFF] rounded-xl p-4 text-center col-span-2 md:col-span-1">\n                  <div className="text-[0.7rem] font-bold text-[#7C6EFF] tracking-wider uppercase mb-1.5">Stage 8–9</div>'
);

fs.writeFileSync('src/components/HeroAndProblems.tsx', content);
