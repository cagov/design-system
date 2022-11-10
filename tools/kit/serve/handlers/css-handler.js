import { promises as fs, existsSync } from 'fs';
import sass from 'sass';

// Handle CSS and Sass.
export const cssHandler = async (ctx) => {
  let css;

  // If a plain CSS file exists, serve it.
  const cssFileExists = existsSync(ctx.state.filePath);
  if (cssFileExists) {
    const cssFile = await fs.readFile(ctx.state.filePath).then(buf => buf.toString());
    css = cssFile;
  }

  // If no CSS, and there's a Sass file with the same name, render it instead.
  if (!css) {
    const sassFilePath = ctx.state.filePath.replace('.css', '.scss');
    const sassFileExists = existsSync(sassFilePath);
    if (sassFileExists) {
      const result = await sass.compileAsync(sassFilePath);
      css = result.css;
    }
  }

  // Deliver.
  if (css) {
    ctx.body = css;
    ctx.type = "text/css";
  } else {
    ctx.body = "Not found";
    ctx.status = 404;
  }
}