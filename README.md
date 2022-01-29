# California Design System README

## About the California Design System

### Status
This project is currently in early beta status. It’s used in production on a few sites while we learn and continuously improve.

Part of our early beta includes learning and collaborating with teams. As the project matures we’ll share more details on how we might meld the design system components into the State template.

### Why a Design System
We built this to address common needs identified by California's Office of Digital Innovation (ODI) and the California Department of Technology (CDT) during development of <a href="https://alpha.ca.gov">alpha.ca.gov</a>, <a href="https://covid19.ca.gov">covid19.ca.gov</a>, <a href="https://cannabis.ca.gov">cannabis.ca.gov</a>, and <a href="https://drought.ca.gov">drought.ca.gov</a>.

### How We Work
We start by understanding the needs of residents of California through user research. We use an iterative design and development process to provide services that meet these needs. As we work, we continue to test our principles, designs, and components. We prioritize equity to some degree by ensuring that our code is accessible and performant for all devices and bandwidths. Components <a href="https://designsystem.webstandards.ca.gov/components/">pass through stages</a> of alpha, beta and production as they become available to the Design System.

We work in the open: all our code and issue tracking is public. We’re happy to review pull requests from the public and state employees. Anyone can file an issue with bug reports and feature requests by selecting the **New issue** button from our <a href="https://github.com/cagov/design-system/issues">issues page</a>. You can see the prioritized list of issues we’re addressing on our <a href="https://github.com/orgs/cagov/projects/7">project board</a>.

## Be a part of the Design System

We’re looking for partners to share feedback and improve the Design System.

Reach out to us through the <a href="https://designsystem.webstandards.ca.gov/">contact form</a> if you’d like to work with us. Or, participate through this GitHub repository.

## Development Instructions

This project is a collection of components. This means the individual widgets are easy to iterate on in isolation, upgrade individually, or exclude from a project.

To run this project locally, checkout this repo and run these commands:
- `npm install`
- `npm run dev`

This will start up a local server running the site you see at <a href="https://designsystem.webstandards.ca.gov">designsystem.webstandards.ca.gov</a>.

You can find the components in the `/components` directory. The readme for each component is used to create the pages in the <a href="https://designsystem.webstandards.ca.gov/components/">Components section</a>. Interactive versions of each component are included in these pages.

Each component is published to npm. The following steps are run in a pre-publish hook in the package.json script. New versions will not publish unless these steps complete:
- The sample markup in the readme is matched to the sample markup used in the automated test
- Any build steps like JavaScript concatenation or Sass compilation are run and resulting files are stored in the /dist folder
- Automated tests are run including an axe accessibility checker
- The latest version of the component is written to our CDN so it can be included with a script tag

We welcome your component modification requests or suggestions. Create a pull request or open an issue in this repository.
