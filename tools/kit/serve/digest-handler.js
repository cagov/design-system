import nunjucks from 'nunjucks';
import { readFileSync } from 'fs';

// Handle templated HTML.
export const createDigestHandler = (options, examples) => {
  const {
    dirs
  } = options;

  const templatesDir = `${dirs.command}/templates`;
  
  const nunjucksEnv = new nunjucks.Environment({ autoescape: true });
  const digestStr = readFileSync(`${templatesDir}/digest.njk`, 'utf-8');
  const digest = nunjucks.compile(digestStr, nunjucksEnv);

  return async (ctx) => {
    // Render the HTML file into the template.
    const body = digest.render({ examples });

    // Return the result.
    ctx.body = body;
  };
}; 
