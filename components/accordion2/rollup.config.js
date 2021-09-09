import { string } from "rollup-plugin-string";
import { nodeResolve } from '@rollup/plugin-node-resolve';

/**
 * Create a Rollup configuration to output a specific Javascript format.
 * 
 * @param {string} format The desired Javascript format of Rollup's output. 
 *                        Tested with 'es' (module) and 'umd' (universal).
 *                        See https://rollupjs.org/guide/en/#outputformat
 * 
 * @returns {{}} A Rollup configuration object.
 *               See https://rollupjs.org/guide/en/#configuration-files
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
      string({ 
        include: [
          'src/**/*.template.html', 
          'src/**/*.module.css'
        ] 
      }),
      nodeResolve()
    ]
  }
};

export default [
  rollupFor('es'),
  rollupFor('umd')
];
