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
