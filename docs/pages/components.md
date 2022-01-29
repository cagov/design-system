---
layout: component-index
title: Components
description: Components are the structural elements of the California Design System. They meet common user needs and can be reused across websites.
---

{%- from "macros/component-card-list.njk" import componentCardList -%}

# Components

<p class="text-lead">Components are the structural elements of the Design System. They meet common user needs and can be reused across websites.</p>

Our components are:

* Based on W3C custom element standards to avoid the need for an underlying library
* Created with performance and accessibility in mind
* Usable in any framework

## Structural components 

These components form the header and footer of a Design System website.

{{ componentCardList(componentSets.structural) }}

## Navigation components 

These components help people find and move through content.

{{ componentCardList(componentSets.navigation) }}

## Visual components

Intro paragraph to visual components.

{{ componentCardList(componentSets.visual) }}

## Content components

Use these components to present information and images.

{{ componentCardList(componentSets.content) }}

## Component maturity

Design System components are in different stages of maturity and labeled accordingly.

### In research
A need has been identified for a new component. The need comes from either:

* An external product
* The Design System itself

Components in research are going through initial testing to determine:

* If there is a broad need throughout the state’s digital ecosystem for the component
* If the component will be a permanent part of the Design System

The component meets minimal or no accessibility requirements.

### Alpha

An _In research_ component has matured and is ready for wider adoption and use cases. The component is a candidate for permanent status as part of the Design System.

Alpha components must pass the following accessibility reviews every time a new version is published:

* Tested with the [axe](https://www.deque.com/axe/) accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) AA level checks 
* Reviewed with the [VoiceOver screen reader](https://www.apple.com/voiceover/info/guide/_1121.html) on desktop
* Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only 
* Reviewed component layout on a variety of screen sizes

### Beta

The component is widely used and has been refined through several research, design, and development iterations.

Beta components must pass the following accessibility reviews every time a new version is published:

* Tested with the axe accessibility tool and passes all automated AA level checks 
* Reviewed with the VoiceOver screen reader on desktop
* Reviewed with the [TalkBack screen reader](https://support.google.com/accessibility/android/answer/6283677?hl=en) on mobile 
* Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
* Reviewed component layout on a variety of screen sizes
* Reviewed component display using content in English, Spanish, Simplified Chinese, German, and Arabic (using right to left display (RTL))

### Production

The component has been adopted at scale and meets the highest standard for accessibility and performance. Production components must pass all accessibility reviews every time a new version is published.
