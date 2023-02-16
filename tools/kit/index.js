#! /usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import path from 'path';
import url from 'url';

import { serve } from './serve/index.js';
import { build } from './build/index.js';
import { create } from './create/index.js';

const withFacts = (argv) => {
  const currentDir = process.cwd();
  const kitDir = url.fileURLToPath(path.dirname(import.meta.url));
  const commandDir = `${kitDir}/${argv._[0]}`;
  const targetDir = path.resolve(argv.dir);
  const commonFacts = {
    dirs: {
      current: currentDir, // The current directory of the CLI
      target: targetDir, // The targetted directory of the tool
      kit: kitDir, // The directory of this tool.
      command: commandDir, // The directory of this tool's requested mode
      relative: (filePath) => filePath.replace(`${currentDir}/`, ''),
    },
  };
  const options = Object.assign(argv, commonFacts);
  return options;
};

const withCommonOptions = (y) => {
  y.option('dir', {
    describe: 'Configure the folder where this tool should run.',
    default: '',
    alias: 'd',
  });
  return y;
};

yargs(hideBin(process.argv))
  .command(
    'serve',
    "Start the component's dev server.",
    (y) =>
      withCommonOptions(y).option('port', {
        describe: 'Provide a port number for the dev server.',
        default: 3000,
        alias: 'p',
      }),
    (argv) => serve(withFacts(argv)),
  )
  .command(
    'build',
    'Build the component for publication.',
    (y) => withCommonOptions(y),
    async (argv) => {
      await build(withFacts(argv));
      process.exit(0);
    },
  )
  .command(
    'create',
    'Create a new component.',
    (y) => withCommonOptions(y),
    async (argv) => {
      await create(withFacts(argv));
      process.exit(0);
    },
  )
  .demandCommand(1, '')
  .recommendCommands()
  .strict()
  .parse();
