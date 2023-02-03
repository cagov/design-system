import prompts from 'prompts';
import chalk from 'chalk';
import { promises as fs } from 'fs';
import nunjucks from 'nunjucks';

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
];

export const create = async (options) => {
  const { dirs } = options;

  const templatesDir = `${dirs.command}/templates`;
  nunjucks.configure(templatesDir, {
    autoescape: true,
  });

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
  } = responses;

  const componentDir = `${dirs.target}/${module}`;

  const writePackageFile = () => {
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

    const packageJson = JSON.stringify(packageObject, null, 2);
    const packagePath = `${componentDir}/package.json`;
    return fs.writeFile(packagePath, packageJson);
  };

  const renderToFile = (source, destination, data = {}) => {
    const content = nunjucks.render(source, data);
    const path = `${componentDir}/${destination}`;
    return fs.writeFile(path, content);
  };

  await fs
    .mkdir(componentDir)
    .then(() => {
      console.log(chalk.bgGreen(`Creating component in folder ${module}.`));
      console.log(chalk.bgGreen(`${componentDir}\n`));

      return Promise.all([
        fs.mkdir(`${componentDir}/src`),
        fs.mkdir(`${componentDir}/dist`),
        fs.mkdir(`${componentDir}/test`),
        fs.mkdir(`${componentDir}/examples`),
      ]);
    })
    .catch((e) => {
      console.log(e.stack);
      throw new Error();
    })
    .then(() => {
      const writeCss = cssInclude && cssFlavor === 'css';
      const writeSass = cssInclude && cssFlavor === 'sass';

      return Promise.all([
        writePackageFile(),
        renderToFile('readme.njk', 'readme.md', { module }),
        renderToFile('gitignore.njk', '.gitignore', { module }),
        renderToFile('html.njk', 'examples/index.html', { module }),
        renderToFile('test.njk', 'test/index.test.js'),
        ...(writeCss ? [renderToFile('css.njk', 'src/index.css')] : []),
        ...(writeSass ? [renderToFile('scss.njk', 'src/index.scss')] : []),
        ...(jsInclude ? [renderToFile('js.njk', 'src/index.js')] : []),
      ]);
    })
    .catch((e) => {
      console.log(e.stack);
      console.log(chalk.bgRed('\nFailed to generate component.\n'));
      throw new Error();
    })
    .then(() => {
      console.log(chalk.bgGreen(`Component ${module} created.\n`));

      console.log('To begin development, run the following commands.\n');

      const cdParentPath = dirs.target
        .replace(dirs.current, '')
        .replace(/^\/+|\/+$/g, '');
      const cdPath = cdParentPath ? `${cdParentPath}/${module}` : module;
      console.log(`1. Switch your terminal into the ${module} folder.\n`);
      console.log(`${chalk.bgGray(`cd ${cdPath}`)}\n`);

      console.log('2. Install JavaScript dependencies.\n');
      console.log(`${chalk.bgGray('npm install')}\n`);

      console.log('3. Start up the dev server.\n');
      console.log(`${chalk.bgGray('npm run serve')}\n`);
    })
    .catch(() => false);
};
