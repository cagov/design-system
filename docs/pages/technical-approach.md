---
title: A different approach
description: An introduction to the technical approach of the California Design System.
---

Design systems are often created as a single monolithic package. All parts, whether desired or not, come as a whole and the entire system is a dependency of the parent project.

In contrast, the State of California’s Design System is a collection of independent components. With [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) as the base, they’re less likely to cause dependency issues or CSS conflicts. This means you can choose which ones you need. 

The independent components are also themeable. We use CSS variables with default values as design tokens. 

## Use your preferred framework, or none at all

The Design System components are agnostic. You can choose to use an opinionated tool, like Vue or React, but you do not need to use one. All components include sample HTML and only use JavaScript when necessary.

## How to contribute

Right now, the Design System components are in use on pilot sites like:

* [covid19.ca.gov](https://covid19.ca.gov/)
* [drought.ca.gov](https://drought.ca.gov/)
* [cannabis.ca.gov](https://cannabis.ca.gov/)

There’s still a lot of work ahead to develop and refine the components, but we cannot do it in a vacuum. We need feedback from anyone that comes in contact with the components. 

Some things we want to include in our next phase are:

* CDN-hosted JavaScript and CSS
* Installation instructions for specific frameworks like WordPress and .NET
* More functionality tests
* More robust accessibility testing
* Standardized file names across components

## Component installation

The Design System components are individual packages that you can download. Each component has README instructions for how to install it.

1. Browse the [components gallery](/components/).
2. Choose the component you want.
3. Follow the README instructions to install.
