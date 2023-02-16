import { promises as fs } from 'fs';
import chalk from 'chalk';
import { buildCss } from '../util/css-util.js';
import { buildJavascript } from '../util/js-util.js';

// Build and bundle CSS and JS.
export const build = async (options) => {
  const { dirs } = options;

  const formatsBuilt = [];
  let errorsFound = false;

  const componentPath = dirs.relative(dirs.target);
  console.log('Building component');
  console.log(`${chalk.blue('Directory')}: ${componentPath}\n`);

  const cssPath = `${dirs.target}/src/index.css`;
  const cssDestination = `${dirs.target}/dist/index.css`;

  const cssPromise = buildCss(cssPath, true)
    .then((css) => {
      if (css.type === 'css') {
        console.log(chalk.magentaBright('** Writing CSS **'));
      }
      if (css.type === 'sass') {
        console.log(chalk.magenta('** Writing CSS via Sass **'));
      }

      const sourcePath = dirs.relative(css.path);
      console.log(`${chalk.blue('Source')}: ${sourcePath}`);
      const resultPath = dirs.relative(cssDestination);
      console.log(`${chalk.green('Result')}: ${resultPath}\n`);

      formatsBuilt.push('css');
      return fs.writeFile(cssDestination, css.body);
    })
    .catch((err) => {
      if (!(err.name === 'FileReadError')) {
        errorsFound = true;
        console.log(err.message);
      }
    });

  const jsPath = `${dirs.target}/src/index.js`;
  const jsDestination = `${dirs.target}/dist/index.js`;

  const jsPromise = buildJavascript(jsPath, true)
    .then((js) => {
      console.log(chalk.magenta('** Writing JavaScript via esbuild **'));

      const sourcePath = dirs.relative(js.path);
      console.log(`${chalk.blue('Source')}: ${sourcePath}`);
      const resultPath = dirs.relative(jsDestination);
      console.log(`${chalk.green('Result')}: ${resultPath}\n`);

      formatsBuilt.push('js');
      return fs.writeFile(jsDestination, js.body);
    })
    .catch((err) => {
      if (!(err.name === 'FileReadError')) {
        errorsFound = true;
        console.log(err.message);
      }
    });

  const buildDestination = dirs.relative(`${dirs.target}/dist`);

  await Promise.all([cssPromise, jsPromise])
    .then(() => {
      if (!formatsBuilt.length || errorsFound) {
        throw new Error();
      }
      console.log('Component built');
      console.log(`${chalk.green('Build')}: ${buildDestination}`);
    })
    .catch(() => {
      console.log('Component not built');
      if (!formatsBuilt.length) {
        console.log('No component files found, check your directory');
      }
      if (errorsFound) {
        console.log('Check errors above');
      }
    });
};
