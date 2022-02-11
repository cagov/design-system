import glob from 'glob';
import path from 'path';
import fs from 'fs';
import fileGetContents from 'file-get-contents';

const generateFile = async () => {
  // Controller.
  const cagovGenerateIconDemo = {
    dir: 'dist/svg/*.svg',
    js: '<script src="src/index.js" type=module></script>',
    iconComponents: '',
    getMarkup: (allIconsSVG, components) => {
      console.log('getcode');
      return `<html>
        <head>${cagovGenerateIconDemo.js}</head>
        <style>svg {fill:inherit}</style>
        ${allIconsSVG}
        ${components}
        </html>`;
    },
  };

  // Create demo.html
  const writeFile = (code) => {
    fs.writeFile('demo.html', code, (error) => {
      if (error) {
        return console.log(error);
      }
      return console.log('Creating file!');
    });
  };

  // Create cagov-icon components.
  glob.sync(cagovGenerateIconDemo.dir).forEach((fileName) => {
    const svgID = path.basename(fileName, path.extname(fileName));
    cagovGenerateIconDemo.iconComponents += `<cagov-icon data-icon="${svgID}"></cagov-icon>`;
  });

  // After getting the mega svg, generate the file.
  await fileGetContents('dist/allicons.svg')
    .then((contents) =>
      cagovGenerateIconDemo.getMarkup(
        contents,
        cagovGenerateIconDemo.iconComponents,
      ),
    )
    .then((wholeFile) => writeFile(wholeFile));
};

// Create a file with everything.
generateFile();
