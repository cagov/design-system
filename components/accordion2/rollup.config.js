import { string } from "rollup-plugin-string";
import { nodeResolve } from '@rollup/plugin-node-resolve';

/**
 * 
 * @param {string} format  The format of Rollup's output. Tested with 'esm' and 'umd'.
 *                         See https://rollupjs.org/guide/en/#outputformat
 * 
 * @returns {{}}           A Rollup configuration object.
 *                         See https://rollupjs.org/guide/en/#configuration-files
 */
const rollupFor = (format) => {
  return {
    input: "src/main.js",
    output: { 
      file: `dist/ds-accordion.${format}.js`, 
      format: format, 
      name: "accordion"
    },
    plugins: [ 
      string({ include: ['src/**/*.html', 'src/**/*.css'] }),
      nodeResolve()
    ]
  }
};

export default [
  rollupFor('esm'),
  rollupFor('umd')
];
