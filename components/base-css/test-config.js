import { playwrightLauncher } from '@web/test-runner-playwright';

/*
export default {
  browsers: [playwrightLauncher({ concurrency: 1 })],
};
*/

export default {
  browsers: [
    playwrightLauncher({
      product: 'chromium',
      launchOptions: {
        headless: false,
        devtools: true,
      },
    }),
  ],
};
