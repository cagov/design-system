const defaultRoot =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://designsystem.webstandards.ca.gov';

module.exports = process.env.ROOT || defaultRoot;
