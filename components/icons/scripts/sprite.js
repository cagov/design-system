// import { fs } from fs;
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const { argv } = yargs(hideBin(process.argv))
  .option('ids', {
    alias: 'i',
    description: 'Pass the ids of the individual svgs.',
    type: 'array',
  })
  .help()
  .alias('help', 'h');

if (argv.ids) {
  console.log('Generating the following:');
  console.log(argv.ids);
}
