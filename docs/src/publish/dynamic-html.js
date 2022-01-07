const fs = require('fs');
const readmeFile = './readme.md';
const htmlFile = './template.html';

try {
  let readme = fs.readFileSync(readmeFile, 'utf8');

  let retrievalRegex = /<htmlpreview>(.|\n)*?<\/htmlpreview>/;

  let latestHTML = fs.readFileSync(htmlFile,'utf8');
  const markdownCodeDelim = '```';

  let finalReadme = readme.replace(retrievalRegex,`<htmlpreview>
  ${markdownCodeDelim}html preview
  ${latestHTML}
  ${markdownCodeDelim}
  </htmlpreview>`);

  fs.writeFileSync(readmeFile,finalReadme,'utf8')
} catch(e) {
  console.log(e);
  // called from prepublish, exit if readme cannot be updated
  process.exit(1);
}
