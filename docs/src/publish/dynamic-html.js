const fs = require('fs');

const readmeFile = './README.md';
const htmlFile = './template.html';

try {
  const readme = fs.readFileSync(readmeFile, 'utf8');

  const retrievalRegex = /<html-preview>(.|\n)*?<\/html-preview>/;

  const latestHTML = fs.readFileSync(htmlFile, 'utf8');
  const markdownCodeDelim = '```';

  const finalReadme = readme.replace(
    retrievalRegex,
    `<html-preview>

${markdownCodeDelim}html preview
${latestHTML}
${markdownCodeDelim}

</html-preview>`,
  );

  fs.writeFileSync(readmeFile, finalReadme, 'utf8');
} catch (e) {
  console.log(e);
  // called from prepublish, exit if README cannot be updated
  process.exit(1);
}
