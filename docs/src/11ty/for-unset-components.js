const glob = require('glob');
const components = require('../../site/_data/editable/components.json');

const getComponentSlug = (folderPath) =>
  folderPath.match(/components\/(.+?)\//)[1];

// First, find any components NOT included within 11ty's data...
// ...at docs/site/_data/editable/components.json.
// Next, execute the provided callback function against each unset component.
module.exports = (fn) => {
  const unsetComponentFolders = glob.sync('components/*/').filter((folder) => {
    const componentSlug = getComponentSlug(folder);
    return !(componentSlug in components);
  });

  unsetComponentFolders.forEach((folder) => fn(`${folder}**/*`));
};
