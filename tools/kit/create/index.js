import prompts from 'prompts';
import chalk from 'chalk';
import { promises as fs, existsSync } from 'fs';

const questions = [
  {
    type: 'text',
    name: 'name',
    message: 'Package name:',
    format: (str) => {
      const { 
        0: module, 
        1: org
      } = str.split('/').reverse();

      return {
        module,
        org
      }
    },
    validate: (str) => str.length > 1
  },
  {
    type: 'text',
    name: 'version',
    message: 'Version:',
    initial: '1.0.0'
  },
  {
    type: 'text',
    name: 'description',
    message: 'Description:'
  },
  {
    type: 'text',
    name: 'author',
    message: 'Author:'
  },
  {
    type: 'text',
    name: 'license',
    message: 'License:',
    initial: 'MIT'
  },
  {
    type: 'toggle',
    name: 'cssInclude',
    message: 'Include CSS?',
    initial: true,
    active: 'yes',
    inactive: 'no'
  },
  {
    type: (prev) => prev ? 'select': null,
    name: 'cssFlavor',
    message: 'CSS flavor:',
    choices: [
      { title: 'Plain CSS', value: 'css' },
      { title: 'Sass', value: 'sass' }
    ]
  },
  {
    type: 'toggle',
    name: 'jsInclude',
    message: 'Include JavaScript?',
    initial: true,
    active: 'yes',
    inactive: 'no'
  },
  {
    type: (prev) => prev ? 'select' : null,
    name: 'jsFlavor',
    message: 'JavaScript flavor:',
    choices: [
      { title: 'Plain module', value: 'js' },
      { title: 'Custom Element', value: 'custom-element' }
    ]
  },
  {
    type: 'toggle',
    name: 'baseCssInclude',
    message: 'Load Base CSS into dev server?',
    initial: true,
    active: 'yes',
    inactive: 'no'
  }
];

export const create = async () => {
  const responses = await prompts(questions);

  // Need a line break.
  console.log('');

  const {
    name: {
      module,
      org
    },
    version,
    description,
    author,
    license,
    cssInclude,
    cssFlavor,
    jsInclude,
    // jsFlavor,
    // baseCssInclude
  } = responses;

  if (existsSync(module)) {
    console.log(chalk.bgRed(`Folder ${module} already exists. Cannot create component. Exiting.`));
    return;
  }

  console.log(chalk.bgGreen(`Creating component in folder ${module}.\n`));

  await fs.mkdir(module)
    .then(() => Promise.all([
      fs.mkdir(`${module}/src`),
      fs.mkdir(`${module}/dist`),
      fs.mkdir(`${module}/test`),
      fs.mkdir(`${module}/examples`)
    ]));

  const packageObject = {
    name: org ? `${org}/${module}` : module,
    version,
    description,
    author,
    license,
    scripts: {
      build: "npx dskit build",
      serve: "npx dskit serve"
    }
  }

  await fs.writeFile(`${module}/package.json`, JSON.stringify(packageObject, null, 2));

  await fs.writeFile(`${module}/examples/index.html`, 
    `<p>Welcome to your new ${module} component.</p>\n<p>Add your sample mark-up into examples/index.html.</p>`
  );

  await fs.writeFile(`${module}/test/index.test.js`, '// Test');

  if (cssInclude) {
    if (cssFlavor === 'css') {
      await fs.writeFile(`${module}/src/index.css`, '/* CSS */');
    }
    if (cssFlavor === 'sass') {
      await fs.writeFile(`${module}/src/index.scss`, '/* Sass */');
    }
  }

  if (jsInclude) {
    await fs.writeFile(`${module}/src/index.js`, 'console.log("Add your Javascript into the src/index.js file.")');
  }

  console.log(chalk.bgGreen(`Component ${module} created.\n`));

  console.log('To begin development, run the following commands.\n');

  console.log(`1. Switch your terminal into the ${module} folder.\n`);
  console.log(`${chalk.bgGray(`cd ${module}`)}\n`);

  console.log('2. Install JavaScript dependencies.\n');
  console.log(`${chalk.bgGray('npm install')}\n`);

  console.log('3. Start up the dev server.\n');
  console.log(`${chalk.bgGray('npm run serve')}\n`);
}