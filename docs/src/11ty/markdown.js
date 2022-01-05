const markdownIt = require('markdown-it');
const hljs = require('highlight.js');

const md = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

const preWrap = (html) => `<pre><code class="hljs">${html}</code></pre>`;
const scriptWrap = (js) => `<script type="module">${js}</script>`;
const previewWrap = (html) => `<div class="code-block-preview">${html}</div>`;

const defaultWrap = (code) => {
  const escapedCode = md.utils.escapeHtml(code);
  return preWrap(escapedCode);
};

md.renderer.rules.fence = (tokens, idx) => {
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
      formattedCode = preWrap(highlightedCode);
    } catch (_) {
      formattedCode = defaultWrap(rawCode);
    }

    if (instruction === 'script') {
      formattedCode = scriptWrap(rawCode) + formattedCode;
    }

    if (instruction === 'preview') {
      formattedCode = previewWrap(rawCode) + formattedCode;
    }

    return formattedCode;
  }

  return defaultWrap(rawCode);
};

module.exports = md;
