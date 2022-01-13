const components = require('./editable/components.json');

const filterByType = (type) =>
  Object.entries(components).reduce((bucket, [key, properties]) => {
    if (properties.type === type) {
      bucket.push({
        slug: key,
        ...properties,
      });
    }
    return bucket;
  }, []);

module.exports = {
  structural: filterByType('structural'),
  navigation: filterByType('navigation'),
  visual: filterByType('visual'),
  content: filterByType('content'),
};
