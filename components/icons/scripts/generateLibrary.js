import path from 'path';
import fs from 'fs';
import fileGetContents from 'file-get-contents';
import { vars } from './script-utils.js';
import Sprite from './Sprite.js';

const generateLibrary = async () => {
  // Controller.
  const library = {
    iconComponents: '',
    siteFileTemplate: vars.siteFileTemplate,
    siteDir: vars.siteDir,
    iconSprite: vars.componentFileAll,
    getMarkup: (sprite, components) =>
      // Return entire library.
      `${sprite}
        <div class="cagov-icon-library">
          ${components} 
        </div>
        `,
  };

  // Writes icon-library.njk
  const writeFile = (code) => {
    fs.writeFile(library.siteFileTemplate, code, (error) => {
      if (error) {
        return console.log(error);
      }
      return console.log('Creating icon-library.njk!');
    });
  };

  // Create cagov-icon components.
  const sprite = new Sprite();
  const list = sprite.setIconFileList();
  list.forEach((fileName) => {
    const svgID = path.basename(fileName, path.extname(fileName)).toLowerCase();
    library.iconComponents += `<div class=cagov-icon-library--card>
      <cagov-icon data-icon="${svgID}"></cagov-icon>
      <a href="${library.siteDir}${svgID}.svg" type="image/svg+xml" download="${svgID}.svg">${svgID}.svg</a>
    </div>`;
  });

  // After getting the mega svg, generate the file.
  await fileGetContents(library.iconSprite)
    .then((contents) => library.getMarkup(contents, library.iconComponents))
    .then((wholeFile) => writeFile(wholeFile));
};

// Create a file with everything.
generateLibrary();
