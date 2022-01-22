const sharp = require('sharp');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');

const backgroundColor = '#F5F5FA';
const originalSvgPath = 'docs/src/assets/illustrations/svg';

fs.readdir(originalSvgPath).then((files) =>
  files.forEach((file) => {
    fs.readFile(`${originalSvgPath}/${file}`, 'utf8')
      .then((rawSvg) => {
        const $ = cheerio.load(rawSvg, null, false);
        $('svg').removeAttr('height').removeAttr('width');
        return $.html();
      })
      .then((formattedSvg) =>
        fs
          .writeFile(`docs/site/_includes/svg/${file}`, formattedSvg)
          .catch((err) => console.log(err)),
      )
      .catch((err) => console.log(err));

    sharp(`${originalSvgPath}/${file}`)
      .resize({
        width: 1050,
        height: 480,
        fit: 'contain',
        background: backgroundColor,
      })
      .extend({
        top: 75,
        bottom: 75,
        left: 75,
        right: 75,
        background: backgroundColor,
      })
      .flatten({
        background: backgroundColor,
      })
      .png()
      .toFile(
        `docs/src/assets/illustrations/png/${path.basename(file, '.svg')}.png`,
      );
  }),
);
