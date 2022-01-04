const cagovBuildSystem = require('@cagov/11ty-build-system');
const builds = require('./docs/src/11ty/builds.js');
const markdown = require('./docs/src/11ty/markdown.js');
const developmentStageTransform = require('./docs/src/11ty/development-stage-transform.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary('md', markdown);

  eleventyConfig.addPlugin(cagovBuildSystem, {
    processors: {
      sass: {
        watch: ['docs/src/css/**/*', 'components/**/*.scss'],
        output: '_site_dist/index.css',
        minify: true,
        options: {
          file: 'docs/src/css/sass/index.scss',
          includePaths: ['./src/css/sass'],
        },
      },
      esbuild: [
        {
          watch: ['docs/src/js/**/*', 'components/**/*.!(md)'],
          options: {
            entryPoints: ['docs/src/js/index.js'],
            bundle: true,
            minify: true,
            outfile: '_site_dist/built.js',
          },
        },
        ...builds,
      ],
    },
  });

  eleventyConfig.addTransform(
    'developmentStageTransform',
    developmentStageTransform,
  );

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy({ 'docs/src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'docs/src/assets/img/*': 'img' });
  eleventyConfig.addPassthroughCopy({ 'docs/src/css/fonts': 'fonts' });
  eleventyConfig.addPassthroughCopy({ '_site_dist/*': '/' });
  eleventyConfig.addPassthroughCopy({ '_build_dist/*': 'builds' });

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
