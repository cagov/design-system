import nunjucks from 'nunjucks';
import * as path from 'path';
import { promises as fs } from "fs"
import { fileURLToPath } from 'url';
import sass from 'sass';

const pluginForServingTemplates =     {
  name: 'serve-templated-html',
  async transform(context) {
    if (context.response.is('html')) {
      
      nunjucks.configure({ autoescape: true });
      let requestedContent = nunjucks.compile(context.body);
      let attributes = {
        requestedContent
      }

      let packageDir = path.dirname(path.join(path.resolve(path.dirname(fileURLToPath(import.meta.url))), '../components', context.request.path));

      let packageFile = await fs.readFile(path.resolve(packageDir, 'package.json'), 'utf-8')
        .catch(err => undefined);

      console.log(path.resolve(packageDir, 'package.json'));

      if (packageFile) {
        let packageData = JSON.parse(packageFile);

        if (packageData.cagov && packageData.cagov.scss) {
          attributes.css = sass.renderSync({file: path.join(packageDir, packageData.cagov.scss)}).css.toString();
        }
      }

      return nunjucks.render('tools/layout.njk', attributes);
    }
  }
}

export default {
  nodeResolve: true,
  watch: true,
  appIndex: 'components/index.html',
  rootDir: 'components',
  plugins: [
    pluginForServingTemplates
  ]
};
