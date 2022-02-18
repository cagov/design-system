import glob from 'glob';
import path from 'path';
import fs from 'fs';
import fileGetContents from 'file-get-contents';
import vars from './vars.js';

const generateLibrary = async () => {
  // Controller.
  const library = {
    pattern: vars.componentPatternEach,
    iconComponents: '',
    siteFileTemplate: vars.siteFileTemplate,
    siteDir: vars.siteDir,
    label: vars.componentTextLabel,
    iconSprite: vars.componentFileAll,
    getMarkup: (sprite, components) => {
      // Remove xml declaration.
      let strippedSprite = sprite.replace(
        '<?xml version="1.0" encoding="utf-8"?>',
        '',
      );

      // Hide sprite.
      strippedSprite = strippedSprite.replace(
        '<svg ',
        '<svg style="display:none;" ',
      );
      // Return entire library.
      return `
        ${strippedSprite}
        <div class="cagov-icon-library">
          ${components} 
        </div>
        `;
    },
  };

  // Writes icon-library.njk
  const writeFile = (code) => {
    fs.writeFile(library.siteFileTemplate, code, (error) => {
      if (error) {
        return console.log(error);
      }
      return console.log('Creating file!');
    });
  };

  // Create cagov-icon components.
  glob.sync(library.pattern).forEach((fileName) => {
    const svgID = path.basename(fileName, path.extname(fileName));
    library.iconComponents += `<div class=cagov-icon-library--card>
      <cagov-icon data-icon="${svgID}"></cagov-icon>
      <a href="${library.siteDir}${svgID}.svg" download="${svgID}.svg">${library.label}<br>${svgID}.svg</a>
    </div>`;
  });

  // After getting the mega svg, generate the file.
  await fileGetContents(library.iconSprite)
    .then((contents) => library.getMarkup(contents, library.iconComponents))
    .then((wholeFile) => writeFile(wholeFile));
};

// Create a file with everything.
generateLibrary();
