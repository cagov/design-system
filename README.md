# California Design System README

## About the California Design System

### Status
This project is currently in early beta status. It’s used in production on a few sites while we learn and continuously improve.

Part of our early beta includes learning and collaborating with teams. As the project matures we’ll share more details on how we might meld the design system components into the State template.

### Why a design system
We built this to address common needs identified by California's Office of Digital Innovation (ODI) and the California Department of Technology (CDT) during development of <a href="https://alpha.ca.gov">alpha.ca.gov</a>, <a href="https://covid19.ca.gov">covid19.ca.gov</a> and <a href="https://cannabis.ca.gov">cannabis.ca.gov</a>.

### How we work
We start by understanding the needs of residents of California through user research. We use an iterative design and development process to provide services that meet these needs. As we work, we continue to test our principles, designs, and components. We prioritize equity to some degree by ensuring that our code is accessible and performant for all devices and bandwidths. Components <a href="https://designsystem.webstandards.ca.gov/components/">pass through stages</a> of alpha, beta and production as they become available to the Design System.

We work in the open: all our code and issue tracking is public. We’re happy to review pull requests from the public and state employees. Anyone can file an issue with bug reports and feature requests by selecting the **New issue** button from our <a href="https://github.com/cagov/design-system/issues">issues page</a>. You can see the prioritized list of issues we’re addressing on our <a href="https://github.com/orgs/cagov/projects/7">project board</a>.


## Development instructions

This project is a collection of components. This means the individual widgets are easy to iterate on in isolation, upgrade individually, or exclude from a project.

To run this project locally, checkout this repo and run these commands:
- `npm install`
- `npm run dev`

This will start up a local server running the site you see at <a href="https://designsystem.webstandards.ca.gov">designsystem.webstandards.ca.gov</a>.

You can find the components in the `/components` directory. The README for each component is used to create the pages in the <a href="https://designsystem.webstandards.ca.gov/components/">Components section</a>. Interactive versions of each component are included in these pages.

Each component is published to npm. The following steps are run in a pre-publish hook in the package.json script. New versions will not publish unless these steps complete:
- The sample markup in the README is matched to the sample markup used in the automated test
- Any build steps like JavaScript concatenation or Sass compilation are run and resulting files are stored in the /dist folder
- Automated tests are run including an axe accessibility checker
- The latest version of the component is written to our CDN so it can be included with a script tag

We welcome your component modification requests or suggestions. Create a pull request or open an issue in this repository.

### End to end testing

Playwright is used to run end to end and accessibility tests against local site urls using axe.

This set of tests is configured to be run against any open PR in our git actions: <a href="tree/main/.github/workflows/validate.yml">validate.yml</a>.

They can be run locally with:

```
npm run test:site
```

If you run into test failures due to an axe detected accessibility violation the offending node will be part of the test failure output. You can get more information on this type of failure by using the axe chrome plugin and letting it evaluate the page locally during development.

The playwright test setup uses `http-server' instead of 11ty because axe-playwright flags the browser-sync element that is injected into 11ty's default local serve mode as an accessibility violation for not being included in a landmark element. 

### Unit tests

Each component contains its own unit tests. The tests for all components are run in sequence when any commit is made in this repo via a husky pre-commit hook. When a package is published its own unit tests are run via an npm prepublish hook configured in the component's package.json

You can run any components tests individually during development with the ```npm test``` command inside its directory.

These component unit tests were created following <a href="https://open-wc.org/">Open Web Components</a> recommendations.

### Directory structure

The code for all the components is in ```/components```. Each directory contains the entire package for each component published to npm. The markdown files in each component's directory provide the content used in the component gallery section of the <a href="https://designsystem.webstandards.ca.gov/">design system site</a>. Any modification to a component's code or documentation should be associated with a new version of the component being published. Publishing a new version of a component to npm will run the scripts that publish its code to the CA CDN. More information on component development in the <a href="/tree/main/components#readme">component readme</a>.

The rest of the site content is in ```/docs```
- ```/docs/pages```: markdown for additional pages 
- ```/docs/site```: templates for site layouts
- ```/docs/src/css/sass/index.scss```: site CSS dependencies
- ```/docs/src/js/index.js```: site JS dependencies
