import css from 'rollup-plugin-import-css';

export default {
  input: 'src/index.js',
  output: { file: 'dist/index.js', format: 'esm' },
  plugins: [css()],
};
