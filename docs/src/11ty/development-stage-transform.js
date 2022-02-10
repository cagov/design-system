const cheerio = require('cheerio');
const components = require('../../site/_data/editable/components.json');
const componentStages = require('../../site/_data/editable/componentStages.json');

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
      ${componentStages[metadata.component.status].description}
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
      const h1 = $('div.cagov-content h1:first-of-type');
      if (h1.length) {
        const metadata = {
          component,
          outputPath: outputPath.toLowerCase(),
          has: {
            readme: $('meta[content="has:readme"]').length,
            'use-cases': $('meta[content="has:use-cases"]').length,
            changelog: $('meta[content="has:changelog"]').length,
          },
        };

        if (component.status in componentStages) {
          const devStageHtml = devStageTemplate(metadata);
          h1.after(devStageHtml);
          result = $.html();
        }
      }
    }
  }

  return result;
};
