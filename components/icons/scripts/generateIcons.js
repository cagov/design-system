import wget from 'node-wget';
import fontBlast from 'font-blast';
import util from 'util';
import vars from './vars.js';
import generateSprite from './generateSprite.js';

// svg-sprite-generate -d dist/svg -o dist/allicons.svg",

const urlToSVG = util.promisify(wget);

const generateIcons = async () => {
  urlToSVG({ url: vars.cagovUrl, dest: vars.componentDirFonts });
  console.log(
    `==> CAGOV: ${vars.cagovUrl} ==> ${vars.componentDirFonts}CaGov.svg`,
  );

  const svgToManySVGs = () => {
    fontBlast(vars.componentFontAll, vars.componentDir);
    console.log(
      `==> CAGOV: ${vars.componentFontAll} ==> ${vars.componentDir}/*.svg`,
    );
  };

  const manySVGsToSprite = () => {
    generateSprite();
  };

  urlToSVG({ url: vars.cagovUrl, dest: vars.componentDirFonts })
    .then(() => svgToManySVGs())
    .then(() => manySVGsToSprite())
    .catch((err) => console.log(err.message));
};

generateIcons();
