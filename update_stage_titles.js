import fs from 'fs';

let content = fs.readFileSync('src/components/DirectorPipeline.tsx', 'utf8');

content = content.replace(/title: "The Director's Brief",\s*shortTitle: "Director's Brief",/g, 'title: "Tentukan Tujuan",\n      shortTitle: "Tentukan Tujuan",');
content = content.replace(/title: "Visual Anchor",\s*shortTitle: "Visual Anchor",/g, 'title: "Kunci Referensi",\n      shortTitle: "Kunci Referensi",');
content = content.replace(/title: "AI Orchestrator",\s*shortTitle: "Orchestrator",/g, 'title: "Rancang Konsep",\n      shortTitle: "Rancang Konsep",');
content = content.replace(/title: "Virtual Director",\s*shortTitle: "Virtual Director",/g, 'title: "Atur Gaya Visual",\n      shortTitle: "Atur Gaya",');
content = content.replace(/title: "Scene Sequencer",\s*shortTitle: "Sequencer",/g, 'title: "Tulis Naskah",\n      shortTitle: "Tulis Naskah",');
content = content.replace(/title: "Technical Planner",\s*shortTitle: "Technical Planner",/g, 'title: "Arahan Kamera",\n      shortTitle: "Arahan Kamera",');
content = content.replace(/title: "Prompt Assembly",\s*shortTitle: "Prompt Assembly",/g, 'title: "Rakit Instruksi",\n      shortTitle: "Rakit Instruksi",');
content = content.replace(/title: "Visual Storyboard",\s*shortTitle: "Visual Storyboard",/g, 'title: "Validasi Hasil",\n      shortTitle: "Validasi Hasil",');

fs.writeFileSync('src/components/DirectorPipeline.tsx', content);
