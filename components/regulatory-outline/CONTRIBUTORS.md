
## Scripts for contributors

### Develop

- `npm run build`  :  Compile CSS. 

### Verify

- `npm run html:preview`  :  Update preview in design system website README.

- `npm test` : Run automated accessibility test.

###  Publish 

[See instructions at ODI wiki](https://github.com/cagov/odi-engineering/wiki/How-to-publish-a-package-to-npm) to publish to npm. You will need credentials to publish to npm and AWS. On npm publish the following scripts will run:

- `npm run html:preview`  :  Update preview in design system website README.

- `npm run build`  :  Compile CSS.

- `npm run test` : Run automated accessibility test.

- `npm run cdn:publish` : Publish to AWS CDN.
