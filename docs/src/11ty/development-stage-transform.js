const cheerio = require('cheerio');
const components = require('../../site/_data/components.json');

const componentDocTab = (docName, docSlug, metadata) => {
  let result = '';

  if (metadata.outputPath.includes(docSlug)) {
    result = `
      <span 
        class="component-document-tabs-selected" 
        aria-current="page">
        ${docName}
      </span>
    `;
  } else if (metadata.has[docSlug]) {
    result = `
      <a 
        class="component-document-tabs-link" 
        href="/components/${metadata.component.slug}/${docSlug}/">
        ${docName}
      </a>
    `;
  }

  return result;
};

const devStageGridItemTemplate = (label, description, stage) => `
  <div class="${stage === description ? 'current-development-stage' : ''}">
    <dt>${label}</dt>
    <dd>${description}</dd>
  </div>
`;

const devStageTemplate = (metadata) => `
  <div class="component-document-tabs">
    ${componentDocTab('Readme', 'readme', metadata)}
    ${componentDocTab('Use cases', 'use-cases', metadata)}
    ${componentDocTab('Changelog', 'changelog', metadata)}
  </div>
  <div class="component-development-stage">
    <p class="component-development-stage-heading">Development stage</p>
    <dl class="component-development-stage-grid">
      ${devStageGridItemTemplate('1', 'In research', metadata.component.status)}
      ${devStageGridItemTemplate('2', 'Alpha', metadata.component.status)}
      ${devStageGridItemTemplate('3', 'Beta', metadata.component.status)}
      ${devStageGridItemTemplate('4', 'Production', metadata.component.status)}
    </dl>
    <p class="component-development-stage-description">
      This component is currently in Alpha. 
      Alpha means that the component has not been thorougly tested by developers. 
      <a href="#">Learn more.</a>
    </p>
  </div>
`;

module.exports = (html, outputPath) => {
  // outputPath === false means serverless templates
  const isHtml = !outputPath || outputPath.endsWith('.html');
  const isComponent = outputPath.includes('/components/');
  const isNotGallery = !outputPath.includes('/components/index.html');

  let result = html;

  if (isHtml && isComponent && isNotGallery) {
    // const $ = cheerio.load(result);
    const componentSlug = outputPath.match(/.+?\/components\/(.+?)\/.+/)[1];
    const component = components[componentSlug];
    if (component) {
      const $ = cheerio.load(result);
      const h2 = $('div.entry-content h2:first-of-type');
      if (h2.length) {
        const metadata = {
          component,
          outputPath: outputPath.toLowerCase(),
          has: {
            readme: $('meta[content="has:readme"]').length,
            'use-cases': $('meta[content="has:use-cases"]').length,
            changelog: $('meta[content="has:changelog"]').length,
          },
          stage: $('meta[content*="stage"]').length
            ? $('meta[content*="stage"]')['0'].attribs.content.replace(
                'stage:',
                '',
              )
            : undefined,
        };

        const devStageHtml = devStageTemplate(metadata);
        h2.before(devStageHtml);
        result = $.html();
      }
    }
  }

  return result;
};
