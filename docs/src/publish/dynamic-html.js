const fs = require('fs');
const readmeFile = './readme.md';
const htmlFile = './template.html';

try {
  let readme = fs.readFileSync(readmeFile, 'utf8');

  let retrievalRegex = /<html-preview>(.|\n)*?<\/html-preview>/;

  let latestHTML = fs.readFileSync(htmlFile,'utf8');
  const markdownCodeDelim = '```';

  let finalReadme = readme.replace(retrievalRegex,`<html-preview>
  ${markdownCodeDelim}html preview
  ${latestHTML}
  ${markdownCodeDelim}
  </html-preview>`);

  fs.writeFileSync(readmeFile,finalReadme,'utf8')
} catch(e) {
  console.log(e);
  // called from prepublish, exit if readme cannot be updated
  process.exit(1);
}
