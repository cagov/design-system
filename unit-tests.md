# Writing unit tests

We are using the <a href="https://open-wc.org/docs/testing/testing-package/">testing package from open-wc.org</a> to write unit tests for our components.

Every component has a test. 

Some of our components are composed only of CSS and HTML. In those cases we render the component and run it through the axe accessibility check:

```
await expect(el).to.be.accessible();
```

Web components with more javascript powered interactivity get exercised by tests that run through expected use cases.

This repository is setup to run lint and all the unit tests on new commits.

## Writing a test for a new component

A new component needs the following to run a test:
- The package.json should include the test packages as devDependencies
```
"@open-wc/testing": "^2.5.33",
"@web/test-runner": "^0.13.17",
"@web/test-runner-puppeteer": "^0.10.2",
```
- The package.json should be identified as type: module
- The package.json should contain test scripts that call the desired tests headlessly and visually
  ```
    "test": "web-test-runner test/test.index.js --node-resolve",
    "test:visual": "web-test-runner test/test.index.js --node-resolve --config test/test.config.js"
  ```
- The component repo should have the test.config file at its root
  - ```
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
    ```
- The test scirpt should be in a test folder

## Fetching fixtures

## Delays for visual review

It is often helpful to interject delays when running tests visually. Add a delay function:
```
function delay(time) {
  return new Promise(function(resolve) {
  setTimeout(resolve, time)
  });
}
```

Then call it wherever you want the test script to pause so you can see what is happening:

```
await delay(2000)
```

## Gotchas

### 5 second default timeout

We used the default 2 second timeout when we began writing tests but discovered that on some macs with an m1 chip the axe accessibility check took longer than that to run resulting in test time outs. This was counter intuitive because the m1 chip is faster but is probably due to a library this tool depends on being optimized for other platforms but not yet the m1. Changing the default timeout to 5 seconds by adding this line at the top of tests right after the describe declaration solves this problem:

```
this.timeout(5000);
```

### Selector issues

Using fixtures, then referring to that fixture and running querySelectors inside it to review the element state works fine. Be careful if you are attempting to review some attribute on the top level element in the fisture though. The querySelector method is only reviewing children of the top level element so won't be able to retrieve attributes of a custom element if that is what your fixture starts with. To avoid this refer to that element directly without querySelector or put a containing element at the top level of your fixture.
