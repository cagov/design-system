// import { fs } from fs;
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { exec } from 'child_process';

// Set up arguments for the command line.
const { argv } = yargs(hideBin(process.argv))
  .option('ids', {
    alias: 'i',
    description: 'Pass the ids of the individual svgs.',
    type: 'array',
  })
  .help()
  .alias('help', 'h');

// Parse arguments and run through svg-generate command.
if (argv.ids) {
  // Inputs and outputs.
  const inputStart = 'dist/svg/';
  const inputEnd = `.svg`;
  const inputSeparator = `${inputEnd},${inputStart}`;
  const input = inputStart + argv.ids.join(inputSeparator) + inputEnd;
  const output = 'cagov-select-sprite.svg';

  // Run command.
  const cmd = `svg-sprite-generate -l ${input} -o ${output}`;

  // Report.
  console.log('Attempting to combine SVGs...');
  console.log(argv.ids);
  console.log(`...from ${inputStart} to ${output} `);

  exec(cmd);
}
