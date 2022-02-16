import wget from 'node-wget';
import fontBlast from 'font-blast';
import vars from './vars.js';

// svg-sprite-generate -d dist/svg -o dist/allicons.svg",

const generateIcons = async () => {
  const promise1 = () => {
    wget({ url: vars.cagovUrl, dest: vars.componentDirFonts });
  };

  const promise2 = () => {
    fontBlast(vars.componentFontAll, vars.componentDir);
  };

  promise1();
};

generateIcons();
