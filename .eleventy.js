const cagovBuildSystem = require('@cagov/11ty-build-system');

module.exports = function (eleventyConfig) {
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
    extraContent: {
      'components/accordion/*.+(md|11tydata.json)':
        'docs/site/components/accordion',
      'components/menu/*.+(md|11tydata.json)': 'docs/site/components/menu',
    },
  });

  eleventyConfig.addPassthroughCopy({ 'docs/src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ '_site_dist/*': '/' });

  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'md',
    templateFormats: ['html', 'njk', '11ty.js', 'md'],
    dir: {
      input: 'docs/site',
      output: '_site',
      layouts: '_includes/layouts',
    },
  };
};
