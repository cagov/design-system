import wget from 'node-wget';
import fontBlast from 'font-blast';
import util from 'util';
import vars from './vars.js';

// svg-sprite-generate -d dist/svg -o dist/allicons.svg",

const urlToSVG = util.promisify(wget);

const generateIcons = async () => {
  urlToSVG({ url: vars.cagovUrl, dest: vars.componentDirFonts });
  console.log(
    `==> CAGOV: ${vars.cagovUrl} ==> ${vars.componentDirFonts}CaGov.svg`,
  );

  const promise2 = () => {
    fontBlast(vars.componentFontAll, vars.componentDir);
    console.log(
      `==> CAGOV: ${vars.componentFontAll} ==> ${vars.componentDir}/*.svg`,
    );
  };

  urlToSVG({ url: vars.cagovUrl, dest: vars.componentDirFonts })
    .then(() => promise2())
    .catch((err) => console.log(err.message));
};

generateIcons();
