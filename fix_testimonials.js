import fs from 'fs';

let content = fs.readFileSync('src/components/ComparisonAndReviews.tsx', 'utf8');

const regex = /\s*\{\/\*\s*TESTIMONIALS\s*\*\/\}\s*<section[\s\S]*?<\/section>\s*(?=\{\/\*\s*FALSE BELIEFS \/ OBJECTIONS SECTION\s*\*\/\})/i;

if (regex.test(content)) {
  content = content.replace(regex, '\n      ');
  fs.writeFileSync('src/components/ComparisonAndReviews.tsx', content);
  console.log("Successfully removed testimonials section.");
} else {
  console.log("Could not find testimonials section.");
}
