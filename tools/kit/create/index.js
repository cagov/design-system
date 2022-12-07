import prompts from 'prompts';
import chalk from 'chalk';
import { promises as fs, existsSync } from 'fs';
import nunjucks from 'nunjucks';
import path from 'path';
import url from 'url';

const thisDir = url.fileURLToPath(path.dirname(import.meta.url));
const templatesDir = `${thisDir}/templates`;

nunjucks.configure(templatesDir, {
  autoescape: true,
});

const questions = [
  {
    type: 'text',
    name: 'name',
    message: 'Package name:',
    format: (str) => {
      const { 0: module, 1: org } = str.split('/').reverse();

      return {
        module,
        org,
      };
    },
    validate: (str) => str.length > 1,
  },
  {
    type: 'text',
    name: 'version',
    message: 'Version:',
    initial: '1.0.0',
  },
  {
    type: 'text',
    name: 'description',
    message: 'Description:',
  },
  {
    type: 'text',
    name: 'author',
    message: 'Author:',
  },
  {
    type: 'text',
    name: 'license',
    message: 'License:',
    initial: 'MIT',
  },
  {
    type: 'toggle',
    name: 'cssInclude',
    message: 'Include CSS?',
    initial: true,
    active: 'yes',
    inactive: 'no',
  },
  {
    type: (prev) => (prev ? 'select' : null),
    name: 'cssFlavor',
    message: 'CSS flavor:',
    choices: [
      { title: 'Plain CSS', value: 'css' },
      { title: 'Sass', value: 'sass' },
    ],
  },
  {
    type: 'toggle',
    name: 'jsInclude',
    message: 'Include JavaScript?',
    initial: true,
    active: 'yes',
    inactive: 'no',
  },
  {
    type: (prev) => (prev ? 'select' : null),
    name: 'jsFlavor',
    message: 'JavaScript flavor:',
    choices: [
      { title: 'Plain module', value: 'js' },
      { title: 'Custom Element', value: 'custom-element' },
    ],
  },
  {
    type: 'toggle',
    name: 'baseCssInclude',
    message: 'Include Base CSS in example HTML?',
    initial: true,
    active: 'yes',
    inactive: 'no',
  },
];

export const create = async () => {
  const responses = await prompts(questions);

  // Need a line break.
  console.log('');

  const {
    name: { module, org },
    version,
    description,
    author,
    license,
    cssInclude,
    cssFlavor,
    jsInclude,
    // jsFlavor,
    baseCssInclude
  } = responses;

  if (existsSync(module)) {
    console.log(
      chalk.bgRed(
        `Folder ${module} already exists. Cannot create component. Exiting.`,
      ),
    );
    return;
  }

  console.log(chalk.bgGreen(`Creating component in folder ${module}.\n`));

  await fs
    .mkdir(module)
    .then(() =>
      Promise.all([
        fs.mkdir(`${module}/src`),
        fs.mkdir(`${module}/dist`),
        fs.mkdir(`${module}/test`),
        fs.mkdir(`${module}/examples`),
      ]),
    );

  const packageObject = {
    name: org ? `${org}/${module}` : module,
    version,
    description,
    author,
    license,
    scripts: {
      build: 'npx dskit build',
      serve: 'npx dskit serve',
    },
  };

  await fs.writeFile(
    `${module}/package.json`,
    JSON.stringify(packageObject, null, 2),
  );

  const readmeContent = nunjucks.render('readme.njk', { module });
  await fs.writeFile(`${module}/readme.md`, readmeContent);

  const htmlContent = nunjucks.render('html.njk', { module, baseCssInclude });
  await fs.writeFile(`${module}/examples/index.html`, htmlContent);

  const testContent = nunjucks.render('test.njk', {});
  await fs.writeFile(`${module}/test/index.test.js`, testContent);

  if (cssInclude && cssFlavor === 'css') {
    const cssContent = nunjucks.render('css.njk', {});
    await fs.writeFile(`${module}/src/index.css`, cssContent);
  }

  if (cssInclude && cssFlavor === 'sass') {
    const scssContent = nunjucks.render('scss.njk', {});
    await fs.writeFile(`${module}/src/index.scss`, scssContent);
  }

  if (jsInclude) {
    const jsContent = nunjucks.render('js.njk', {});
    await fs.writeFile(`${module}/src/index.js`, jsContent);
  }

  console.log(chalk.bgGreen(`Component ${module} created.\n`));

  console.log('To begin development, run the following commands.\n');

  console.log(`1. Switch your terminal into the ${module} folder.\n`);
  console.log(`${chalk.bgGray(`cd ${module}`)}\n`);

  console.log('2. Install JavaScript dependencies.\n');
  console.log(`${chalk.bgGray('npm install')}\n`);

  console.log('3. Start up the dev server.\n');
  console.log(`${chalk.bgGray('npm run serve')}\n`);
};
