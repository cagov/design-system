import glob from 'glob';
import path from 'path';
import fs from 'fs';
import fileGetContents from 'file-get-contents';

const generateFile = async () => {
  // Controller.
  const cagovGenerateIconDemo = {
    dir: 'dist/svg/*.svg',
    iconComponents: '',
    destiniationFile: '../../docs/site/_includes/layouts/icon-demo.njk',
    getMarkup: (allIconsSVG, components) => `
        ${allIconsSVG}
        <div class="cagov-icon-demo">
          ${components} 
        </div>
        `,
  };

  // Create demo.html
  const writeFile = (code) => {
    fs.writeFile(cagovGenerateIconDemo.destiniationFile, code, (error) => {
      if (error) {
        return console.log(error);
      }
      return console.log('Creating file!');
    });
  };

  // Create cagov-icon components.
  glob.sync(cagovGenerateIconDemo.dir).forEach((fileName) => {
    const svgID = path.basename(fileName, path.extname(fileName));
    cagovGenerateIconDemo.iconComponents += `<div class=cagov-icon-demo--card>
      <cagov-icon data-icon="${svgID}"></cagov-icon>
      <a href="/cagov-icons-svg/${svgID}.svg" download="${svgID}.svg">Download<br>${svgID}.svg</a>
    </div>`;
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
