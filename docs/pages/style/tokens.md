---
title: Design tokens
description: Design tokens are useful to create predictable, consistent web design elements, layouts and components.
---

<p class="text-lead">The California Design System web design is built from consistent elements of style we call design tokens. Design tokens are set of css-variables that constitute elements like color, typography, and spacing units. Design tokens allow us to create predictable, consistent web design elements, layouts, and components.</p>

## Responsive tokens
### Container width
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--w-lg: 1176px;
--w-md: 960px;
--w-sm: 720px;
--w-xs: 540px;
--w-page-content: 876px;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.official-header .container {
  max-width: var(--w-lg);
}
</span></code></pre>
</div>




</div>



<div class="grid-container">
  <div class="text-center">
    <span class="ca-gov-icon-smartphone gray-600 font-size-8" aria-hidden="true"></span>
    <p class="font-size-1">--w-xs</p>
  </div>
  <div class="text-center">
      <span class="ca-gov-icon-tablet gray-600 font-size-8" aria-hidden="true"></span>
    <p class="font-size-1">--w-sm</p>
  </div>
  <div class="text-center">
    <span class="ca-gov-icon-tablet gray-600 font-size-8 d-block" aria-hidden="true" style="transform: rotate(90deg);"></span>
    <p class="font-size-1">--w-md</p>
  </div>
  <div class="text-center">
    <span class="ca-gov-icon-computer gray-600 font-size-8" aria-hidden="true"></span>
    <p class="font-size-1">--w-lg</p>
  </div>
</div>

### Viewport width
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--mobile-xs: 360px;
--mobile-xs-max: 359px;
--mobile-sm: 480px;
--mobile-sm-max: 479px;
--mobile: 768px;
--mobile-max: 767px;
--tablet: 992px;
--tablet-max: 991px;
--tablet-lg: 1024px;
--tablet-lg-max: 1023px;
--desktop: 1176px;
--desktop-max: 1175px;
--desktop-lg: 1440px;
</span></code></pre>

<hr class="border-1 border-gray-600 m-y-5">

## Measure tokens
### Spacing and size
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--s0: 0px;
--s-sm: 0.25rem;
--s-1: 0.5rem;
--s-2: 1rem;
--s-3: 1.5rem;
--s-4: 2rem;
--s-5: 3rem;
--s-6: 4rem;
--s-7: 6rem;
--s-8: 12rem;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.grid-container {
  gap: var(--s-3);
}
</span></code></pre>
</div>
</div>

<div class="grid-container p-t-4">
  <div class="text-center">
    <div class="w-1 h-1 bg-gray-600 m-0-a"></div>
    <p class="font-size-1 m-b-0">--s-1</p>
  </div>
  <div class="text-center">
    <div class="w-2 h-2  bg-gray-600 m-0-a"></div>
    <p class="font-size-1 m-b-0">--s-2</p>
  </div>
  <div class="text-center">
    <div class="w-3 h-3 bg-gray-600 m-0-a"></div>
    <p class="font-size-1 m-b-0">--s-3</p>
  </div>
  <div class="text-center">
    <div class="w-4 h-4 bg-gray-600 m-0-a"></div>
    <p class="font-size-1 m-b-0">--s-4</p>
  </div>
  <div class="text-center">
    <div class="w-5 h-5 bg-gray-600 m-0-a"></div>
    <p class="font-size-1 m-b-0">--s-5</p>
  </div>
  <div class="text-center">
    <div class="w-6 h-6 bg-gray-600 m-0-a"></div>
    <p class="font-size-1 m-b-0">--s-6</p>
  </div>
  <div class="text-center">
    <div class="w-7 h-7 bg-gray-600 m-0-a"></div>
    <p class="font-size-1 m-b-0">--s-7</p>
  </div>
  <div class="text-center">
    <div class="w-8 h-8 bg-gray-600 m-0-a"></div>
    <p class="font-size-1 m-b-0">--s-8</p>
  </div>
</div>



### Fluid size
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--s-fluid-1: clamp(0.5rem, 1vw, 1rem);
--s-fluid-2: clamp(1rem, 2vw, 1.5rem);
--s-fluid-3: clamp(1.5rem, 3vw, 2rem);
--s-fluid-4: clamp(2rem, 4vw, 3rem);
--s-fluid-5: clamp(4rem, 6vw, 6rem);
--s-fluid-6: clamp(6rem, 8vw, 8rem);
--s-fluid-7: clamp(8rem, 10vw, 10rem);
--s-fluid-8: clamp(10rem, 16vw, 12rem);
</span></code></pre>


<hr class="border-1 border-gray-600 m-y-5">

## Color tokens
### CA&#46;gov theme colors
Theme colors (primary, accent 1, and accent 2) change depending the color scheme a website uses. The following color schemes are available in the California Design System:
- CA&#46;gov
- Cannabis
- Drought

Color scheme files are available in following directory: `components/base-css/src/colorschemes/`.
#### Primary colors

<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--primary-100: #e7eef9;
--primary-300: #a3bee7;
--primary-500: #5a8ad4;
--primary-700: #165ac2;
--primary-900: #003688;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.btn-primary-outline {
  color: var(--primary-700);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-primary-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--primary-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--primary-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--primary-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--primary-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--primary-900</p>
  </div>
</div>

#### Accent 1 colors

<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--accent1-100: #ffead6;
--accent1-300: #ffa656;
--accent1-500: #de6516;
--accent1-700: #9c4510;
--accent1-900: #642a0a;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.bg-accent1-500 {
  background-color: var(--accent1-500);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-accent1-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--accent1-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent1-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent1-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent1-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent1-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent1-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent1-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent1-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent1-900</p>
  </div>
</div>


#### Accent 2 colors

<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--accent2-100: #ffecc4;
--accent2-300: #ecb32d;
--accent2-500: #ac8227;
--accent2-700: #775a20;
--accent2-900: #4a3918;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">a:focus {
  outline-color: var(--accent2-300);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-accent2-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--accent2-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent2-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent2-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent2-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent2-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent2-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent2-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-accent2-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--accent2-900</p>
  </div>
</div>


### CA&#46;gov main colors
CA&#46;gov main colors are used in the CA&#46;gov logo and other CA&#46;gov branding elements.
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--cagov-highlight: #fec02f;
--cagov-primary: #004abc;
--cagov-primary-dark: #003484;
--cagov-secondary: #ff8000;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">svg .gov {
  fill: var(--cagov-primary-dark);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-cagov-highlight radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--cagov-highlight</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-cagov-primary radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--cagov-primary</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-cagov-primary-dark radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--cagov-primary-dark</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-cagov-secondary radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--cagov-secondary</p>
  </div>
</div>

### Grayscale colors
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--white: #fff;
--gray-50: #fafafa;
--gray-100: #ededef;
--gray-200: #d4d4d7;
--gray-300: #bcbbc1;
--gray-400: #a4a3ab;
--gray-500: #898891;
--gray-600: #72717c;
--gray-700: #5e5e6a;
--gray-800: #4a4958;
--gray-900: #3b3a48;
--black: #000;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.btn-primary-outline:hover {
  background-color: var(--gray-200);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-white-color radius-round w-6 h-6 m-x-a border-1 border-gray-600"></div>
    <p class="font-size-1">--white</p>
  </div>
    <div class="text-center p-t-3">
    <div class="bg-gray-50 radius-round w-6 h-6 m-x-a border-1 border-gray-600"></div>
      <p class="font-size-1">--gray-50</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-100 radius-round w-6 h-6 m-x-a border-1 border-gray-600"></div>
      <p class="font-size-1">--gray-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-200 radius-round w-6 h-6 m-x-a border-1 border-gray-600"></div>
      <p class="font-size-1">--gray-200</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-300 radius-round w-6 h-6 m-x-a border-1 border-gray-600"></div>
      <p class="font-size-1">--gray-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-400 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--gray-400</p>
  </div>

</div>


<div class="grid-container">

  <div class="text-center p-t-3">
    <div class="bg-gray-500 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--gray-500</p>
  </div>

  <div class="text-center p-t-3">
    <div class="bg-gray-600 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--gray-600</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--gray-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-800 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--gray-800</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--gray-900</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-black radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--black</p>
  </div>
</div>


### System status colors
System status colors palette consist of four main colors spectrums, such as success, danger, warning, and info. System-level palette is consistent in all Design System color schemes. 

#### Success

<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--success-100: #e5f1e7;
--success-300: #9ac7a4;
--success-500: #489b62;
--success-700: #0f6d38;
--success-900: #154425;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.success {
  color: var(--success-700);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-success-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--success-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-success-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--success-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-success-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--success-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-success-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--success-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-success-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--success-900</p>
  </div>
</div>


#### Danger

<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--danger-100: #fce9e8;
--danger-300: #eeaba9;
--danger-500: #d5676a;
--danger-700: #b91b37;
--danger-900: #721923;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.error {
  color: var(--danger-700);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-danger-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--danger-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-danger-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--danger-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-danger-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--danger-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-danger-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--danger-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-danger-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--danger-900</p>
  </div>
</div>


#### Warning

<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--warning-100: #ffef97;
--warning-300: #dcba00;
--warning-500: #a38900;
--warning-700: #6f5e00;
--warning-900: #463b00;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.alert {
  background-color: var(--warning-100);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-warning-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--warning-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-warning-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--warning-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-warning-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--warning-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-warning-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--warning-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-warning-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--warning-900</p>
  </div>
</div>


#### Info

<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--info-100: #ededf6;
--info-300: #b9b9dc;
--info-500: #8585c2;
--info-700: #5555aa;
--info-900: #2b2b95;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.info {
  background-color: var(--info-700);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-info-100 radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--info-100</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-info-300 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--info-300</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-info-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--info-500</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-info-700 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--info-700</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-info-900 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--info-900</p>
  </div>
</div>

<hr class="border-1 border-gray-600 m-y-5">

## Typography tokens
### Font size
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-1: 1rem;
--font-size-2: 1.125rem;
--font-size-3: 1.25rem;
--font-size-4: 1.4375rem;
--font-size-5: 1.625rem;
--font-size-6: 1.8125rem;
--font-size-7: 2.0625rem;
--font-size-8: 2.3175rem;
--font-size-9: 2.625rem;
--font-size-10: 2.9375rem;
--font-size-11: 3.5rem;
--font-size-12: 5rem;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">body {
  font-size: var(--font-size-2);
}
</span></code></pre>
</div>
</div>



<div class="d-grid gap-3" style="grid-template-columns: max-content 1fr; align-items: center;">
<code class="font-size-1">var(--font-size-xs)</code>
<span class="font-size-xs">Design for people</span>
<code class="font-size-1">var(--font-size-sm)</code>
<span class="font-size-sm">Design for people</span>
<code class="font-size-1">var(--font-size-1)</code>
<span class="font-size-1">Design for people</span>
<code class="font-size-1">var(--font-size-2)</code>
<span class="font-size-2">Design for people</span>
<code class="font-size-1">var(--font-size-3)</code>
<span class="font-size-3">Design for people</span>
<code class="font-size-1">var(--font-size-4)</code>
<span class="font-size-4">Design for people</span>
<code class="font-size-1">var(--font-size-5)</code>
<span class="font-size-5">Design for people</span>
<code class="font-size-1">var(--font-size-6)</code>
<span class="font-size-6">Design for people</span>
<code class="font-size-1">var(--font-size-7)</code>
<span class="font-size-7">Design for people</span>
<code class="font-size-1">var(--font-size-8)</code>
<span class="font-size-8">Design for people</span>
<code class="font-size-1">var(--font-size-9)</code>
<span class="font-size-9">Design for people</span>
<code class="font-size-1">var(--font-size-10)</code>
<span class="font-size-10">Design for people</span>
<code class="font-size-1">var(--font-size-11)</code>
<span class="font-size-11">Design for people</span>
<code class="font-size-1">var(--font-size-12)</code>
<span class="font-size-12">Design for people</span>
</div>


### Font weight
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--font-weight-1: 100;
--font-weight-2: 200;
--font-weight-3: 300;
--font-weight-4: 400;
--font-weight-5: 500;
--font-weight-6: 600;
--font-weight-7: 700;
--font-weight-8: 800;
--font-weight-9: 900;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">h1 {
  font-weight: var(--font-weight-7);
}
</span></code></pre>
</div>
</div>

<div class="d-grid gap-3" style="grid-template-columns: max-content 1fr; align-items: center;">
<code class="font-size-1">var(--font-weight-3)</code>
<span class="font-size-6 font-weight-3">Do not design for designers. Design for people.</span>
<code class="font-size-1">var(--font-weight-4)</code>
<span class="font-size-6 font-weight-4">Do not design for designers. Design for people.</span>
<code class="font-size-1">var(--font-weight-7)</code>
<span class="font-size-6 font-weight-7">Do not design for designers. Design for people.</span>
</div>


### Line height
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--font-lineheight-xs: 0.95;
--font-lineheight-sm: 1.1;
--font-lineheight-1: 1.25;
--font-lineheight-2: 1.375;
--font-lineheight-3: 1.5;
--font-lineheight-4: 1.625;
--font-lineheight-5: 1.75;
--font-lineheight-6: 2;
</span></code></pre>
</div>

This example uses Vietnamese language because it has marks above and below letters that could affect readability. This is important to consider in order to make your content accessible in multiple languages. 
  
<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">h1 {
  line-height: var(--font-lineheight-1);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-gray-200 p-a-3 m-x-a font-lineheight-xs">Đọc các tiêu chí vốn chủ sở hữu để xem liệu bạn có đủ điều kiện để được miễn giấy phép hoặc phí gia hạn hay không. </div>
    <p class="font-size-1">--font-lineheight-xs</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-200 p-a-3 m-x-a font-lineheight-sm">Đọc các tiêu chí vốn chủ sở hữu để xem liệu bạn có đủ điều kiện để được miễn giấy phép hoặc phí gia hạn hay không. </div>
    <p class="font-size-1">--font-lineheight-sm</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-200 p-a-3 m-x-a font-lineheight-1">Đọc các tiêu chí vốn chủ sở hữu để xem liệu bạn có đủ điều kiện để được miễn giấy phép hoặc phí gia hạn hay không. </div>
    <p class="font-size-1">--font-lineheight-1</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-200 p-a-3 m-x-a font-lineheight-2">Đọc các tiêu chí vốn chủ sở hữu để xem liệu bạn có đủ điều kiện để được miễn giấy phép hoặc phí gia hạn hay không. </div>
    <p class="font-size-1">--font-lineheight-2</p>
  </div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-gray-200 p-a-3 m-x-a font-lineheight-3">Đọc các tiêu chí vốn chủ sở hữu để xem liệu bạn có đủ điều kiện để được miễn giấy phép hoặc phí gia hạn hay không. </div>
    <p class="font-size-1">--font-lineheight-3</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-200 p-a-3 m-x-a font-lineheight-4">Đọc các tiêu chí vốn chủ sở hữu để xem liệu bạn có đủ điều kiện để được miễn giấy phép hoặc phí gia hạn hay không. </div>
    <p class="font-size-1">--font-lineheight-4</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-200 p-a-3 m-x-a font-lineheight-5">Đọc các tiêu chí vốn chủ sở hữu để xem liệu bạn có đủ điều kiện để được miễn giấy phép hoặc phí gia hạn hay không. </div>
    <p class="font-size-1">--font-lineheight-5</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-gray-200 p-a-3 m-x-a font-lineheight-6">Đọc các tiêu chí vốn chủ sở hữu để xem liệu bạn có đủ điều kiện để được miễn giấy phép hoặc phí gia hạn hay không. </div>
    <p class="font-size-1">--font-lineheight-6</p>
  </div>
</div>

### Responsive font ratio
Responsive font ratio is the viewport width value that's used for responsive font size calculations.
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--ratio: 0.1vw;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">h2 {
  font-size: calc(var(--font-size-8) + var(--ratio));
}
</span></code></pre>
</div>
</div>

### Font family
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--site-font: "Public Sans", sans-serif;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">body {
  font-family: var(--site-font);
}
</span></code></pre>
</div>
</div>


### Site logo font variables
Site logo font variables are used to stylize a website's logotype in the site-header component.
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--org-name-state-font: "Public Sans";
--org-name-state-font-size: 1rem;
--org-name-state-font-weight: 500;
--org-name-state-line-height: 1.2;
--org-name-state-text-transform: none;
--org-name-dept-font: "Public Sans";
--org-name-dept-font-size: 1.75rem;
--org-name-dept-font-weight: 700;
--org-name-dept-line-height: 1.2;
--org-name-dept-text-transform: none;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.org-name-dept {
    font-family: var(--org-name-dept-font);
  }
</span></code></pre>
</div>
</div>


<div class="site-header">
  <div class="container with-logo">
    <a href="/" class="grid-logo" aria-label="DCC logo">
    <img src="https://california.azureedge.net/cdt/statetemplate/global/images/gov-seal.png" alt="State seal">
    </a>
    <a class="grid-org-name" href="/">
<span class="org-name-state">
        State of California
      </span>
      <span class="org-name-dept">
        Design System
      </span>
    </a>
  </div>
</div>



<hr class="border-1 border-gray-600 m-y-5">

## Border tokens
### Border width


<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--border-1: 1px;
--border-2: 2px;
--border-3: 3px;
--border-4: 4px;
--border-5: 5px;
--border-6: 6px;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.btn-primary-outline {
    border: var(--border-1) solid;
  }
</span></code></pre>
</div>
</div>



<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="border-1 w-7 h-7 m-x-a"></div>
    <p class="font-size-1">--border-1</p>
  </div>
  <div class="text-center p-t-3">
    <div class="border-2 w-7 h-7 m-x-a"></div>
      <p class="font-size-1">--border-2</p>
  </div>
  <div class="text-center p-t-3">
    <div class="border-3 w-7 h-7 m-x-a"></div>
      <p class="font-size-1">--border-3</p>
  </div>
  <div class="text-center p-t-3">
    <div class="border-4 w-7 h-7 m-x-a"></div>
      <p class="font-size-1">--border-4</p>
  </div>
  <div class="text-center p-t-3">
    <div class="border-5 w-7 h-7 m-x-a"></div>
      <p class="font-size-1">--border-5</p>
  </div>
  <div class="text-center p-t-3">
    <div class="border-6 w-7 h-7 m-x-a"></div>
      <p class="font-size-1">--border-6</p>
  </div>
</div>

### Border radius


<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--radius-round: 50%;
--radius-1: 2px;
--radius-2: 4px;
--radius-3: 0.5rem;
--radius-4: 1rem;
--radius-5: 2rem;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.btn-primary {
    border-radius: var(--radius-2);
  }
</span></code></pre>
</div>
</div>



<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="radius-1 border-1 w-7 h-7 m-x-a"></div>
    <p class="font-size-1">--border-1</p>
  </div>
  <div class="text-center p-t-3">
    <div class="radius-2 border-1 w-7 h-7 m-x-a"></div>
      <p class="font-size-1">--border-2</p>
  </div>
  <div class="text-center p-t-3">
    <div class="radius-3 border-1 w-7 h-7 m-x-a"></div>
      <p class="font-size-1">--border-3</p>
  </div>
  <div class="text-center p-t-3">
    <div class="radius-4 border-1 w-7 h-7 m-x-a"></div>
      <p class="font-size-1">--border-4</p>
  </div>
  <div class="text-center p-t-3">
    <div class="radius-5 border-1 w-7 h-7 m-x-a"></div>
      <p class="font-size-1">--border-5</p>
  </div>
    <div class="text-center p-t-3">
    <div class="radius-round border-1 w-7 h-7 m-x-a"></div>
      <p class="font-size-1">--radius-round</p>
  </div>
</div>


<hr class="border-1 border-gray-600 m-y-5">
