import { puppeteerLauncher } from '@web/test-runner-playwright';

/*
export default {
  browsers: [puppeteerLauncher({ concurrency: 1 })],
};
*/

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
