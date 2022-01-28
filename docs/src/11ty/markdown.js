const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const hljs = require('highlight.js');

const md = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
}).use(markdownItAnchor, { level: 2 });

/**
 * Encloses syntax-highlighted code blocks in <pre> and <code> tags.
 * @param {String} hljsHtml
 * An HTML string that's formatted by highlight.js.
 * @returns {String} HTML
 */
const preWrap = (hljsHtml) =>
  `<pre><code class="hljs">${hljsHtml}</code></pre>`;

/**
 * Displays the code block's language alongside the code.
 * @param {String} hljsHtml
 * An HTML string that's formatted by highlight.js.
 * @param {String} language
 * The code block's language.
 * @returns {String} HTML
 */
const codeWrap = (hljsHtml, language) => `
  <div class="code-block">
    <p class="code-block-language">
      ${language}
    </p>
    ${preWrap(hljsHtml)}
  </div>
`;

/**
 * HTML that both displays and executes a JS code block.
 * @param {String} js
 * A Javascript code block.
 * @param {String} hljsHtml
 * An HTML string that's formatted by highlight.js.
 * @returns {String} HTML
 */
const scriptWrap = (js, hljsHtml) => `
  <script type="module">
    ${js}
  </script>
  ${codeWrap(hljsHtml, 'Javascript')}
`;

/**
 * HTML that both displays and demonstrates an HTML mark-up block.
 * @param {String} rawHtml
 * An HTML string that's NOT YET formatted by highlight.js.
 * @param {String} hljsHtml
 * The same HTML string that's formatted by highlight.js.
 * @returns {String} HTML
 */
const previewWrap = (rawHtml, hljsHtml) => `
  <div class="code-preview">
    <div class="code-preview-demo">
      ${rawHtml}
    </div>
    ${codeWrap(hljsHtml, 'HTML')}
  </div>
`;

/**
 * A default fallback for code blocks that break highlight.js.
 * This ensures the Markdown will still render.
 * @param {String} code
 * @returns {String} HTML
 */
const defaultWrap = (code) => {
  const escapedCode = md.utils.escapeHtml(code);
  return preWrap(escapedCode);
};

// Here we override the default "fence" rule of markdown-it.
// This is where we tell our markdown engine to format code.
// https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer
md.renderer.rules.fence = (tokens, idx) => {
  const token = tokens[idx];

  // info is the list of meta/labels supplied with the code block in markdown.
  const info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
  const [lang, instruction] = info.split(/\s+/g);

  // This is the raw code block as supplied in the markdown.
  const rawCode = token.content;

  // If markdown supplies a language, try to highlight syntax.
  if (lang) {
    try {
      const hljsOptions = {
        language: lang,
        ignoreIllegals: true,
      };

      // Apply syntax highlighting.
      const highlightedCode = hljs.highlight(rawCode, hljsOptions).value;

      // This is a special JS preview block.
      if (instruction === 'script') {
        return scriptWrap(rawCode, highlightedCode);
      }

      // This is a special HTML demo block.
      if (instruction === 'preview') {
        return previewWrap(rawCode, highlightedCode);
      }

      // Remove the XML blurb when it's HTML. Highlight.js wrinkle.
      const languageName =
        lang.toLowerCase() === 'html' ? 'HTML' : hljs.getLanguage(lang).name;

      return codeWrap(highlightedCode, languageName);
    } catch (_) {
      return defaultWrap(rawCode);
    }
  }

  // Syntax highlighting is not possible, so just return a regular code block.
  return defaultWrap(rawCode);
};

/** Override table markup so we can apply a parent class. */
md.renderer.rules.table_open = () => '<div class="cagov-table"><table>';
md.renderer.rules.table_close = () => '</table></div>';

module.exports = md;
