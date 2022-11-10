#! /usr/bin/env node

import yargs from 'yargs';

import { hideBin } from 'yargs/helpers';
import { serve } from './serve/index.js';
import { build } from './build/index.js';
import { create } from './create/index.js';

yargs(hideBin(process.argv))
  .command(
    'serve', 
    "Start the component's dev server.", 
    (y) => y
      .option('port', {
        describe: 'Provide a port number for the dev server.',
        default: 3000,
        alias: 'p'
      }), 
    (argv) => serve(argv)
  )
  .command(
    'build', 
    'Build the component for publication.', 
    () => {}, 
    async () => {
      await build();
      process.exit(0);
    }
  )
  .command(
    'create', 
    'Create a new component.', 
    () => {}, 
    async () => {
      await create();
      process.exit(0);
    }
  )
  .demandCommand(1)
  .parse();