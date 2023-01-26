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

const insertFacts = (argv) => {
  const commandDir = `${kitDir}/${argv._[0]}`;
  const commonFacts = {
    dirs: {
      current: currentDir,
      kit: kitDir,
      command: commandDir,
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
        })
        .option('many', {
          describe: 'Serve a folder of many components.',
          default: false,
          type: 'boolean',
          alias: 'm',
        }),
    (argv) => serve(insertFacts(argv)),
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
