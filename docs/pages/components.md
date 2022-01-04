---
layout: component-index
---

{%- from "macros/component-card-list.njk" import componentCardList -%}

# Components

Components are the structural elements of the Design System. They meet common user needs and can be reused across websites.

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
