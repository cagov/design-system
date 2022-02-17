import glob from 'glob';
import path from 'path';
import fs from 'fs';
import fileGetContents from 'file-get-contents';
import vars from './vars.js';

const generateDemo = async () => {
  // Controller.
  const demo = {
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
      // Return entire demo.
      return `
        ${strippedSprite}
        <div class="cagov-icon-demo">
          ${components} 
        </div>
        `;
    },
  };

  // Create demo.html
  const writeFile = (code) => {
    fs.writeFile(demo.siteFileTemplate, code, (error) => {
      if (error) {
        return console.log(error);
      }
      return console.log('Creating file!');
    });
  };

  // Create cagov-icon components.
  glob.sync(demo.pattern).forEach((fileName) => {
    const svgID = path.basename(fileName, path.extname(fileName));
    demo.iconComponents += `<div class=cagov-icon-demo--card>
      <cagov-icon data-icon="${svgID}"></cagov-icon>
      <a href="${demo.siteDir}${svgID}.svg" download="${svgID}.svg">${demo.label}<br>${svgID}.svg</a>
    </div>`;
  });

  // After getting the mega svg, generate the file.
  await fileGetContents(demo.iconSprite)
    .then((contents) => demo.getMarkup(contents, demo.iconComponents))
    .then((wholeFile) => writeFile(wholeFile));
};

// Create a file with everything.
generateDemo();
