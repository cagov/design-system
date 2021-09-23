import nunjucks from 'nunjucks';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import sass from 'sass';

const pluginForServingTemplates =     {
  name: 'serve-templated-html',
  async transform(context) {
    if (context.response.is('html')) {
      
      nunjucks.configure({ autoescape: true });
      let requestedContent = nunjucks.compile(context.body);

      let packageDir = path.dirname(path.join(path.resolve(path.dirname(fileURLToPath(import.meta.url))), context.request.path));
      let packageFile = fs.readFileSync(path.resolve(packageDir, 'package.json'), 'utf8');
      let packageData = JSON.parse(packageFile.toString());

      let attributes = {
        requestedContent
      }

      if (packageData && packageData.cagov && packageData.cagov.scss) {
        attributes.css = sass.renderSync({file: path.join(packageDir, packageData.cagov.scss)}).css.toString();
      }

      return nunjucks.render('layout.njk', attributes);
    }
  }
}

export default {
  nodeResolve: true,
  watch: true,
  plugins: [
    pluginForServingTemplates
  ]
};
