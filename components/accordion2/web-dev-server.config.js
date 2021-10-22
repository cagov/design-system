const jsAssetFoundAt = contextPath => {
  const jsAssetExtensions = [
    '.template.html',
    '.module.css'
  ];

  return jsAssetExtensions.some(fileExt => contextPath.endsWith(fileExt));
}

const pluginForExportingStrings = {
  name: 'export-strings',
  resolveMimeType(context) {
    if (jsAssetFoundAt(context.path)) {
      return 'js';
    }
  },
  transform(context) {
    if (jsAssetFoundAt(context.path)) {
      return `export default ${JSON.stringify(context.body)};`;
    }
  },
}

export default {
  nodeResolve: true,
  watch: true,
  plugins: [
    pluginForExportingStrings
  ]
};
