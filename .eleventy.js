const cagovBuildSystem = require('@cagov/11ty-build-system');
const pluginMdjs = require('@rocket/eleventy-plugin-mdjs-unified');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginMdjs);
  eleventyConfig.addPlugin(cagovBuildSystem, {
    sass: {
      watch: ['docs/src/css/**/*', 'components/**/*.scss'],
      output: '_site_dist/index.css',
      minify: true,
      options: {
        file: 'docs/src/css/sass/index.scss',
        includePaths: ['./src/css/sass'],
      },
    },
    esbuild: {
      watch: ['docs/src/js/**/*', 'components/**/*.!(md)'],
      options: {
        entryPoints: ['docs/src/js/index.js'],
        bundle: true,
        minify: true,
        outfile: '_site_dist/built.js',
      },
    },
  });

  eleventyConfig.addPassthroughCopy({ 'docs/src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ '_site_dist/*': '/' });

  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', '11ty.js', 'md'],
    dir: {
      input: '.',
      output: '_site',
      includes: 'docs/site/_includes',
      layouts: 'docs/site/_includes/layouts',
      data: 'docs/site/_data',
    },
  };
};
