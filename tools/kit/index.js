#! /usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import path from 'path';
import url from 'url';

import { serve } from './serve/index.js';
import { build } from './build/index.js';
import { create } from './create/index.js';

const currentDir = process.cwd();
const kitDir = url.fileURLToPath(path.dirname(import.meta.url));

const withFacts = (argv) => {
  const commandDir = `${kitDir}/${argv._[0]}`;
  const targetDir = path.resolve(argv.dir);
  const commonFacts = {
    dirs: {
      current: currentDir, // The current directory of the CLI
      target: targetDir, // The targetted directory of the tool
      kit: kitDir, // The directory of this tool.
      command: commandDir, // The directory of this tool's requested mode
    },
  };
  const options = Object.assign(argv, commonFacts);
  return options;
};

yargs(hideBin(process.argv))
  .command(
    'serve',
    "Start the component's dev server.",
    (y) =>
      y
        .option('port', {
          describe: 'Provide a port number for the dev server.',
          default: 3000,
          alias: 'p',
        })
        .option('dir', {
          describe: 'Serve from a different directory.',
          default: '',
          alias: 'd',
        }),
    (argv) => serve(withFacts(argv)),
  )
  .command(
    'build',
    'Build the component for publication.',
    () => {},
    async () => {
      await build();
      process.exit(0);
    },
  )
  .command(
    'create',
    'Create a new component.',
    () => {},
    async () => {
      await create();
      process.exit(0);
    },
  )
  .demandCommand(1)
  .parse();
