// This is the file to download icons and fonts from the
// State Web Template to the proper folders for this component.
// To use:
//  ```
// cd PACKAGEROOT
// npm install Office-of-Digital-Innovation/California-State-Web-Template#5.6.2 -D
// node scripts/copyStateAssets.js
// npm remove cagov-template-v6
// ```

import path from 'path';
import { vars, __dirname, fs } from './script-utils.js';

const directoryPaths = [
  {
    source: path.join(__dirname, vars.stateTemplateIconsDir),
    dest: vars.componentSubdir,
    filter: '',
  },
  {
    source: path.join(__dirname, vars.stateTemplateFontsDir),
    dest: vars.componentDirFonts,
    filter: 'CaGov',
  },
];

const copyFiles = (item) => {
  fs.readdir(item.source, (err, files) => {
    // Catch error.
    if (err) {
      console.log(`Unable to scan directory: ${err}`);
    }

    console.log(`==> CAGOV: ${item.source} ==> ${item.dest}`);
    files.forEach((file) => {
      // Copy files from State template to this component.
      if (item.filter.length === 0 || file.indexOf(item.filter) === 0) {
        fs.writeFileSync(
          `${item.dest}/${file}`,
          fs.readFileSync(`${item.source}/${file}`),
        );
      }
    });
  });
};

directoryPaths.forEach((item) => {
  copyFiles(item);
});
