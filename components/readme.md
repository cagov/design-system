# Design system components

This directory contains State of California design system components in research, alpha, beta and production stages of development. More documentation is available on the <a href="https://designsystem.webstandards.ca.gov">design system site</a>.

## File structure

Each component is an npm package so has a package.json as well as readme and changelog files written in markdown and a test config in the root directory:

- package.json
- readme.md
- changelog.md
- test.config

The raw markup expected to be used for a CSS only component is included in separate file:

- template.html

This sample markup is consumed by the component test and written into the readme to keep the docs in synch with tested code.

Component source code is stored in a subdirectory:

- /src/

All components include a test that at minimum will load the component and run automated accessibility tests against it. Test code is in a subdirectory:

- /test/

If a component does not use any javascript but uses sass the CSS source code will be in ```src/index.scss``` and output to the root directory:

- index.css
- index.css.map

If a component includes javascript and uses a build step all built files will be written to a distribution folder:

- /dist/

Components that use custom elements include a <a href="https://github.com/open-wc/custom-elements-manifest">custom elements manifest</a> to describe their attributes and optional parameters.

- custom-elements.json

This file is generated using the @custom-elements/analyzer package which reviews the JSDoc formatted comments in component code.

The build is run and the distribution folder is deployed to our CDN as a prepublish step.

