/**
 * Add Design System component folder names here.
 * Anything that needs a discreet JS build for the documentation site.
 */
const jsComponentsToBuild = ['accordion'];

/**
 * Outputs a list of esbuild configurations.
 * @param {String} component
 * The name of the component's folder in the Design System repo.
 * @param {String} format
 * The desired Javascript format for the output.
 * See https://esbuild.github.io/api/#format
 * @returns
 */
const esbuildFor = (component, format) => ({
  watch: [`components/${component}/**/*.!(md)`],
  options: {
    entryPoints: [`components/${component}/src/index.js`],
    bundle: true,
    minify: true,
    format,
    outfile: `_build_dist/${component}-${format}.js`,
    // This CSS loader will import CSS as text in a JS module.
    // Esbuild default behavior will output a separate CSS file instead.
    // This override is needed for Accordion and could be useful in general.
    loader: { '.css': 'text' },
  },
});

module.exports = jsComponentsToBuild.flatMap((component) => [
  esbuildFor(component, 'esm'),
  esbuildFor(component, 'iife'),
]);
