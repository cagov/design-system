---
name: Technical Review
about: Design system 03 - Technical checklist for reviewing a design system component
title: 'Technical Review: '
labels: Process - Component Review, Process - Technical Review
assignees: ''
---

# Technical Review

## Component name

## Current component status (alpha, beta, production)

## Technical Review Checklist
These are the checks we do on each component before we publish

Alpha
Beta
Production

- [ ] Name registered
- [ ] Basic description
- [ ] Reviewed description
- [ ] Sample markup
- [ ] Graphic
- [ ] Features
- [ ] Content model
- [ ] Data schema
- [ ] Has sample markup
- [ ] Has custom elements manifest
- [ ] Accessibility
- [ ] CSS Variables documented
- [ ] Translation review
- [ ] Analytics integration review
- [ ] Performance review
- [ ] Test plan
- [ ] Tests
- [ ] Readme
- [ ] Changelog
- [ ] Roadmap
- [ ] npm package published

Most of this information is used for creating the webpage and README for the component.

### Features
*Critical features*

### Content model
*Which field values and data attributes are in use in this component.*

### Data schema
*If this component maps to an existing schema.org microdata format, please include. If it doesnt, that's ok. We will look it up and provide a data structure. We use schema.org for SEO and data management and round-trip data migration to help keep the component upgradable.*

### Sample Markup
*Include or reference the expected HTML markup and CSS output (if known). Save in file called template.html*

### Accessibility
*In our design system, we are creating fully-accessible components, for delivery and for the editor experience. We have a baseline of general accessibility practices we are following. Are there any additional accessibility considerations with this component?* 

### Analytics
*How can we measure if this component is succeeding in its intention, or discover new insights about needs that we did not know?*

### Performance
*We provide a baseline of tests for basic performance. Will this component present additional performance issues, and if so, how can we address them?*

### Testing plan
*We provide a baseline of tests for basic component features. Are there additional tests that need to happen for this component?*

### npm package
*Where is this package published on npm?*