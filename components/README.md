# Design system components

This directory contains State of California design system components in research, alpha, beta and production stages of development. More documentation is available on the <a href="https://designsystem.webstandards.ca.gov">design system site</a>.

## README template

[Notion Template](https://www.notion.so/odi-engineering/Component-documentation-template-2da3975cc0954174ace43004d151451c)

## File structure

Each component is an npm package so has a package.json as well as readme and changelog files written in markdown and a test config in the root directory:

- package.json
- README.md
- CHANGELOG.md

The raw markup expected to be used for a CSS only component is included in separate file:

- template.html

This sample markup is consumed by the component test and written into the readme to keep the docs in synch with tested code.

Component source code is stored in a subdirectory:

- src/

All components include a test that at minimum will load the component and run automated accessibility tests against it. Test code is in a subdirectory. The test configuration is in the component root directory:

- test/
- test/index.test.js
- test-config.js

If a component does not use any JavaScript but uses sass the CSS source code will be in `src/index.scss` and output to the root directory:

- index.css
- index.css.map

If a component includes javascript and uses a build step all built files will be written to a distribution folder:

- dist/

Components that use custom elements include a <a href="https://github.com/open-wc/custom-elements-manifest">custom elements manifest</a> to describe their attributes and optional parameters.

- custom-elements.json

This file is generated using the @custom-elements/analyzer package which reviews the JSDoc formatted comments in component code.

The build is run and the distribution folder is deployed to our CDN as a prepublish step.

## Scripts

### Develop

- `npm run build:js` : Compile JavaScript.

- `npm run build` : Compile CSS and/or Javascript if it exists.

### Verify

- `npm run html:preview` : Update preview in design system website README.

- `npm test` : Run automated accessibility test.

### Publish

[See instructions at ODI wiki](https://github.com/cagov/odi-engineering/wiki/How-to-publish-a-package-to-npm) to publish to npm. You will need credentials to publish to npm and AWS. On `npm publish`, the `prePublishOnly` hook will run which contains:

- `npm run html:preview` : Update preview in design system website README.

- `npm run build` : Compile CSS.

- `npm run test` : Run automated accessibility test.

- `npm run cdn:publish` : Publish to AWS CDN.
