---
title: Why web components
description: Explanation of why we use web components in the CA design system
keywords: 
---


## Component-based development

Building sites with components has a lot of benefits for site visitors and the teams that run them.

### How components work

Components are bite-sized sections of code that link together to create a website. They&rsquo;re kind of like LEGO bricks. They&rsquo;re often uniform and reusable.

Components help developers and designers save time. They help you avoid rewriting redundant code. You can also easily plug them into and remove them from code using HTML tags.

The California Design System uses the minimal amount of tech required for each component. This is&nbsp;often just HTML &amp; CSS. When we need JavaScript, we take advantage of the component model built into the browser. We use the custom elements part of the web components specification. This allows us to define new HTML tags like &lt;cagov-accordion&gt; or &lt;cagov-page-feedback&gt;, which are inert until upgraded by provided JavaScript.

### Examples of our components

The homepage also uses the <a href="https://designsystem.webstandards.ca.gov/components/feature-card/readme/">feature card</a>&nbsp;component. This component requires only HTML & CSS. 

<img alt="" src="/content/img/screenshot-feature.jpg">

In some cases, we can embed components in other components. For example, we put a button in the feature card.

We use the <a href="/components/page-feedback/readme/">page feedback component</a> at the bottom of every page. This component requires HTML, CSS and javascript. It uses a custom element tag associated with a javascript class.

<img alt="" src="/content/img/screenshot-feedback.jpg">

## Web component advantages

### Web components work anywhere

<a href="https://custom-elements-everywhere.com/">All framework support web components</a>. You get this component model with its API built into all browsers. If you still need to support Internet Explorer, a polyfill is available. We use @webcomponents/webcomponentsjs on covid19.ca.gov.

### Web components help ensure longevity of code

Preferred web stacks evolve. Many mature organizations maintain applications written in a variety of frameworks. Each rewrite or launch is an opportunity to update codebases to the &ldquo;modern approach,&rdquo; but that changes over time.

Web components allow us to take our frontend widgets&nbsp;off this cycle&nbsp;of getting rebuilt in the newest framework flavor. Standardized features are built into all browsers. This means they&rsquo;re supported forever. We are not subject to breaking changes in new versions of frameworks. We also do not worry about developers who prefer to write widgets that only work with a specific underlying technology.

### Easier component management

Publishing each component individually lets us take advantage of separate versioning. Site owners get <a href="https://github.com/dependabot">dependabot</a>&nbsp;notifications when there are updates to each npm package. This comes with associated <a href="https://semver.org/">semver</a> compliant version numbers and published changelogs. Site owners can decide if they want to upgrade or ignore the change on their own timeline.

Owners can add, upgrade, or remove components 

more easily than if its code was part of the whole site. We learn a lot from other modular design systems like:

- The <a href="https://designsystem.digital.gov/">U.S. Web Design System</a>
- Other systems also built with web components, like <a href="https://opensource.adobe.com/spectrum-web-components/">Adobe&rsquo;s Spectrum</a>
- Systems with fantastic documentation for new contributors, like&nbsp;<a href="https://opensource.adobe.com/spectrum-web-components/">Clarity</a>

### Components encapsulate code

The code for each widget is within the custom element class. Our component patterns with local variables protect us from accidentally influencing global variables. The custom element API provides a clear interface for interacting with the rest of the application. It receives events responding to instantiation, removal, and attribute updates.

## When we use web components

We only need web components when we need JavaScript. We do not always need JavaScript. If HTML and CSS provide the desired features, that&rsquo;s all a component uses.

## Progressive enhancement

We cannot depend&nbsp;on every device supporting our web components, even if they work in the latest version of all browsers. Older devices get locked out of update cycles. Some people avoid freely available software updates. 

Critical components should work even if the JavaScript fails. For example, accordions have always been progressively enhanced. Now they use details and summary elements. This lets people read the content, even if the JavaScript fails to execute. This failure state eliminates the extra styling or open/close animations.

If a component is not critical to a site&rsquo;s mission, we skip progressive enhancement. We have not made the <a href="https://designsystem.webstandards.ca.gov/components/page-feedback/readme/">page feedback</a> component progressively enhanced because it&#39;s not why people visit the page. That element is only visible when the visitor&rsquo;s browser successfully executes its code. We also use script type=module, which is ignored by browsers that do not support ES6 components. In these cases, the network request is not even made. This stops the JavaScript from slowing down the basic experience.

## Features of web components we use

Web components help limit development to the local scope of the custom element. There are good <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements">lifecycle tools</a> for building up and tearing down JavaScript features. In other words, no waiting for &quot;DOMContentLoaded&quot; or any other old hacks.

We use plain custom elements. This does not stop us from depending on advanced base classes, but we get a lot of mileage out of the supported API now.

### Applying CSS only to instantiated elements

We can use the :defined CSS selector to apply styling rules only when the custom element&rsquo;s JavaScript has run. We import and deliver this CSS as part of the JavaScript package because it&rsquo;s only used in the js-powered version of the component

### Custom events

We often communicate between components with custom events. This is not a web component-specific tool, but it works nicely with any <a href="https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events">DOM element</a>, including our own custom elements. 

One example is our reusable county search box component on COVID-19 site pages. It fires events with county details when a visitor chooses from an autocomplete list. Chart components that need to use the county can subscribe to the custom event fired by the search custom element. They then update the data as needed.

### Lots of other ways to communicate data between components

Web components provide lifecycle callbacks that respond to attribute changes. You can pass information in through attributes as strings. If you want to pass in a complex object, you can assign it to the custom element in the DOM via: ``` document.querySelector("my-element").bigOjbect = myJSON; ```

You can refer to this inside the component via:  ``` this.bigObject ```

Custom elements can read their own interior HTML. We translate components server-side by writing translated HTML inside the custom element. Complex elements like charts need translated strings for things like tooltips and legends.

We use this pattern with our static site generator to provide these translations. 11ty builds a different version of each HTML page for each language we support. Then the charts on that page receive their translated strings in the page HTML.

## Collaborate with us

Do you have an idea for a new component? Does your team already have a useful widget you think would be helpful on other sites? Let&rsquo;s use web components to iterate together and refine reusable tech that works anywhere.

You can suggest changes or new components by opening issues in the <a href="https://github.com/cagov/design-system/">open source Design System repository</a>. If you have a component that&rsquo;s built for a certain platform, we can work together to make it stack agnostic.

## Resources

- <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements">Using custom elements</a> documentation from MDN
- <a href="https://custom-elements-everywhere.com/">Custom elements everywhere</a> tracks all the frameworks that support all the aspects of custom elements
- Design systems built with web components
  - Microsoft&rsquo;s <a href="https://www.fast.design/">FAST design system</a>
  - SalesForce&rsquo;s <a href="https://www.lightningdesignsystem.com/">Lightning design system</a>
  - Adobe&rsquo;s <a href="https://opensource.adobe.com/spectrum-web-components/">Spectrum design system</a>
  - The component.gallery site lets you sort their list of design systems by tech, here is the <a href="https://component.gallery/design-systems/?tech%3DWeb%2520Components">web components result set</a>
- Web component libraries and patterns
  - <a href="https://github.blog/2021-05-04-how-we-use-web-components-at-github/">How we use web components at GitHub</a>
  - Google&rsquo;s web components library: <a href="https://lit.dev/">lit.dev</a>
  - The <a href="https://open-wc.org/">Open-WC project</a> recommends patterns for developing with web components
  - <a href="https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/">All the ways to make a web component February 2022 update</a>: Compare 61 different approaches based on complexity, bundle size
- Articles on why web components are helpful especially in design systems
  - <a href="https://ionicframework.com/blog/5-reasons-web-components-are-perfect-for-design-systems/">5 reasons web components are perfect for design systems</a> by ionic, makers of the stencil.js web components tool
  - <a href="https://vaadin.com/blog/design-systems-and-standardized-web-components">Design systems and standards based web components</a> by Vaadin, makers of the Vaadin web component based design system
  - Brad Frost on <a href="https://bradfrost.com/blog/link/why-we-use-web-components/">Why we use web components</a>
  - <a href="https://www.zaplabs.com/blog/engineering/building-web-applications-longevity-through-web-components">Building web applications with longevity through web components</a> from ZapLabs in 2018
  - <a href="https://shoelace.style/?id=new-to-web-components">New to web components?</a> by Cory LaViska, author of web components based design system shoelace.style
  - New foundations being built on custom elements with projects like <a href="https://dev.to/open-wc/introducing-custom-elements-manifest-gkk ">Custom Elements Manifest</a>