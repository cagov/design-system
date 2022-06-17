import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import vars from './vars.js';

// fs.
const require = createRequire(import.meta.url);
const fs = require('fs');
// end fs.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const directoryPath = path.join(__dirname, vars.stateTemplateIconsDir);

const createFiles = () => {
  fs.readdir(directoryPath, (err, files) => {
    // Catch error.
    if (err) {
      console.log(`Unable to scan directory: ${err}`);
    }

    files.forEach((file) => {
      // Copy files from State template to this component.
      fs.writeFileSync(
        `${vars.componentSubdir}/${file}`,
        fs.readFileSync(`${directoryPath}/${file}`),
      );
    });
  });
};

createFiles();
