const cagovBuildSystem = require('@cagov/11ty-build-system');
const markdownIt = require('markdown-it');
const hljs = require('highlight.js');

const md = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
});

md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
  const token = tokens[idx];
  const info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
  const [lang, instruction] = info.split(/\s+/g);

  const rawCode = token.content;
  let formattedCode;

  if (lang) {
    try {
      const hljsOptions = {
        language: lang,
        ignoreIllegals: true,
      };
      const highlightedCode = hljs.highlight(rawCode, hljsOptions).value;
      formattedCode = `<pre class="hljs"><code>${highlightedCode}</code></pre>`;
    } catch (_) {
      const escapedCode = md.utils.escapeHtml(rawCode);
      formattedCode = `<pre class="hljs"><code>${escapedCode}</code></pre>`;
    }

    if (instruction === 'script') {
      formattedCode = `<script type="module">${rawCode}</script>${formattedCode}`;
    }

    if (instruction === 'preview') {
      formattedCode = `<div class="code-block-preview">${rawCode}</div>${formattedCode}`;
    }

    return formattedCode;
  }

  const escapedCode = md.utils.escapeHtml(rawCode);
  return `<pre class="hljs"><code>${escapedCode}</code></pre>`;
};

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary('md', md);
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
