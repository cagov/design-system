import nunjucks from 'nunjucks';
import * as path from 'path';
import { promises as fs } from "fs"
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import sass from 'sass';

const sassAsync = promisify(sass.render);

const pluginForServingSass = {
  name: 'serve-sass',
  resolveMimeType(context) {
    if (context.path.endsWith('.scss')) {
      return 'css';
    }
  },
  async transform(context) {
    if (context.path.endsWith('.scss')) {
      let css = await sassAsync({data: context.body})
        .then(result => result.css.toString())
        .catch(err => undefined);
      return css;
    }
  },
}

const pluginForServingTemplates = {
  name: 'serve-templated-html',
  async transform(context) {
    if (context.response.is('html')) {
      
      nunjucks.configure({ autoescape: true });
      let renderAttributes = {
        requestedContent: nunjucks.compile(context.body)
      }

      let packageDir = path.dirname(path.join(path.resolve(path.dirname(fileURLToPath(import.meta.url))), '../components', context.request.path));

      let packageFile = await fs.readFile(path.resolve(packageDir, 'package.json'), 'utf-8')
        .catch(err => undefined);

      if (packageFile) {
        let packageData = JSON.parse(packageFile);

        if (packageData.cagov && packageData.cagov.scss) {
          renderAttributes.scss = path.join(path.dirname(context.request.path), packageData.cagov.scss);
        }
      }

      return nunjucks.render('tools/layout.njk', renderAttributes);
    }
  }
}

export default {
  nodeResolve: true,
  watch: true,
  appIndex: 'components/index.html',
  rootDir: 'components',
  plugins: [
    pluginForServingSass,
    pluginForServingTemplates
  ]
};
