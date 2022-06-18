import path from 'path';
import { vars, __dirname, fs } from './script-utils.js';

const generateSprite = () => {
  const directories = {
    source: path.join(__dirname, vars.stateTemplateIconsDir),
    dest: vars.componentFileAll,
  };

  const rewriteIcons = (file) => {
    const html = `buts ${file}`;
    return html;
  };

  const makeFile = (dir) => {
    fs.readdir(dir.source, (err, files) => {
      // Catch error.
      if (err) {
        console.log(`Unable to scan directory: ${err}`);
      }

      // Start sprite.
      let html =
        '<svg style="display:none;" xmlns="http://www.w3.org/2000/svg">';

      // Get each symbol.
      files.forEach((file) => {
        html += rewriteIcons(file);
      });

      // End sprite.
      html += `</svg>`;

      // Write sprite.
      fs.writeFileSync(dir.dest, html);
      console.log(`==> CAGOV: ${dir.source} ==> ${dir.dest}`);
    });
  };
  makeFile(directories);
};

export default generateSprite;
