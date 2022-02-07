// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  webServer: {
    command: 'npm run test:serve',
    port: 8080,
    timeout: 120 * 1000,
    reuseExistingServer: false,
  },
};
export default config;