import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { exec } from 'child_process';
import vars from './vars.js';

// Default command.
let cmd = `svg-sprite-generate -d ${vars.componentSubdir} -o ${vars.componentFileAll}`;

// Set up arguments for the command line.
const { argv } = yargs(hideBin(process.argv))
  .option('ids', {
    alias: 'i',
    description: 'Pass the ids of the individual svgs.',
    type: 'array',
  })
  .help()
  .alias('help', 'h');

// Parse arguments.
if (argv.ids) {
  // Inputs and outputs.
  const inputStart = `${vars.componentSubdir}/`;
  const inputEnd = `.svg`;
  const inputSeparator = `${inputEnd},${inputStart}`;
  const input = inputStart + argv.ids.join(inputSeparator) + inputEnd;
  const output = vars.componentFileSome;

  // Set command.
  cmd = `svg-sprite-generate -l ${input} -o ${output}`;

  // Report.
  console.log('Attempting to combine SVGs...');
  console.log(`...from ${inputStart} to ${output} `);
}

// Run command.
exec(cmd, (error) => {
  if (error) {
    console.log(`error: ${error.message}`);
  }
});
