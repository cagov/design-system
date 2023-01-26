import { promises as fs, existsSync } from 'fs';
import sass from 'sass';
import esbuild from 'esbuild';

// Build and bundle CSS and JS.
export const build = async () => {
  let css;

  // If a plain CSS file exists, serve it.
  const cssFileExists = existsSync('src/index.css');
  if (cssFileExists) {
    const cssFile = await fs
      .readFile('src/index.css')
      .then((buf) => buf.toString());
    css = cssFile;
  }

  // If no CSS, and there's a Sass file with the same name, render it instead.
  if (!css) {
    const sassFileExists = existsSync('src/index.scss');
    if (sassFileExists) {
      const result = await sass.compileAsync('src/index.scss');
      css = result.css;
    }
  }

  if (css) {
    await fs.writeFile('dist/index.css', css);
  }

  let js;

  // Build and bundle up the JS via esbuild.
  const jsFileExists = existsSync('src/index.js');
  if (jsFileExists) {
    const result = esbuild.buildSync({
      entryPoints: ['src/index.js'],
      bundle: true,
      format: 'esm',
      write: false,
      loader: {
        '.css': 'text',
        '.html': 'text',
      },
    });

    js = result.outputFiles[0].text;
  }

  if (js) {
    await fs.writeFile('dist/index.js', js);
    console.log('Component built.');
  }
};
