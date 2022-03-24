import { puppeteerLauncher } from '@web/test-runner-puppeteer';

export default {
  browsers: [
    puppeteerLauncher({
      launchOptions: {
        headless: false,
        devtools: true,
        args: [],
      },
    }),
  ],
};
