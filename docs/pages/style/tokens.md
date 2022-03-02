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
Theme colors (primary, secondary, and highlight) change depending the color scheme a website uses. The following color schemes are available in the California Design System:
- CA&#46;gov
- Cannabis
- Drought

Color scheme files are available in following directory: `components/base-css/src/colorschemes/`.
#### Primary colors

<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--primary-color: #004abc;
--primary-dark-color: #003484;
--primary-light-color: #4d80d0;
--primary-lightest-color: #b3c9eb;
--primary-hover-color: #003484;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.btn-primary-outline {
  color: var(--primary-color);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-primary-color radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--primary-color</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-dark-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--primary-dark-color</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-light-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--primary-light-color</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-lightest-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--primary-lightest-color</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-dark-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--primary-hover-color</p>
  </div>
</div>

#### Secondary colors

<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--secondary-color: #ff8000;
--secondary-dark-color: #b35a00;
--secondary-light-color: #ffa64d;
--secondary-lightest-color: #ffd9b3;
--secondary-hover-color: #b35a00;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.bg-secondary-color {
  background-color: var(--secondary-color);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-secondary-color radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--secondary-color</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-secondary-dark-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--secondary-dark-color</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-secondary-light-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--secondary-light-color</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-secondary-lightest-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--secondary-lightest-color</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-secondary-dark-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--secondary-hover-color</p>
  </div>
</div>


#### Highlight colors

<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--highlight-color: #fec02f;
--highlight-dark-color: #b28621;
--highlight-light-color: #fed36d;
--highlight-lightest-color: #ffecc1;
--highlight-hover-color: #b28621;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">a:focus {
  outline-color: var(--highlight-color);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-highlight-color radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--highlight-color</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-highlight-dark-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--highlight-dark-color</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-highlight-light-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--highlight-light-color</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-highlight-lightest-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--highlight-lightest-color</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-highlight-dark-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--highlight-hover-color</p>
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
    <div class="bg-highlight-color radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--cagov-highlight</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--cagov-primary</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-primary-dark-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--cagov-primary-dark</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-secondary-color radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--cagov-secondary</p>
  </div>
</div>

### Grayscale colors
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--white: #fff;
--gray-100: #f9f9fa;
--gray-200: #ededef;
--gray-300: #e1e0e3;
--gray-400: #d3d2d6;
--gray-500: #c4c3c8;
--gray-600: #b3b2b8;
--gray-700: #a09fa7;
--gray-800: #6c6b77;
--gray-900: #3f3e4d;
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
  <div class="text-center p-t-3">
    <div class="bg-gray-500 radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--gray-500</p>
  </div>
</div>


<div class="grid-container">
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
  <div></div>
</div>


### System status colors
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--success: #008542;
--danger: #b71234;
--warning: #ffd700;
--info: #000080;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.error {
  color: var(--danger);
}
</span></code></pre>
</div>
</div>

<div class="grid-container">
  <div class="text-center p-t-3">
    <div class="bg-success radius-round w-6 h-6 m-x-a"></div>
    <p class="font-size-1">--success</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-danger radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--danger</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-warning radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--warning</p>
  </div>
  <div class="text-center p-t-3">
    <div class="bg-info radius-round w-6 h-6 m-x-a"></div>
      <p class="font-size-1">--info</p>
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
<span class="font-size-xs">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-sm)</code>
<span class="font-size-sm">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-1)</code>
<span class="font-size-1">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-2)</code>
<span class="font-size-2">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-3)</code>
<span class="font-size-3">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-4)</code>
<span class="font-size-4">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-5)</code>
<span class="font-size-5">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-6)</code>
<span class="font-size-6">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-7)</code>
<span class="font-size-7">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-8)</code>
<span class="font-size-8">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-9)</code>
<span class="font-size-9">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-10)</code>
<span class="font-size-10">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-11)</code>
<span class="font-size-11">Hỗ trợ phí</span>
<code class="font-size-1">var(--font-size-12)</code>
<span class="font-size-12">Hỗ trợ phí</span>
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
--radius-2: 5px;
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

## Shadow tokens

### Shadow properties
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--shadow-color: 220 3% 15%;
--shadow-strength: 1%;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code font-size-sm">.shadow-1 {
    box-shadow: 0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%));
  }
</span></code></pre>
</div>
</div>


### Shadow variations
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code font-size-sm">--shadow-1: 0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%));
--shadow-2: 0 3px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 7px 14px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%));
--shadow-3: 0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));
--shadow-4: 0 -2px 5px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 1px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 2px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 9px 9px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 16px 16px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%));
--shadow-5: 0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 2px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 10px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 20px 20px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 40px 40px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));
--shadow-6: 0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%)),
    0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));
</span></code></pre>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code font-size-sm">.shadow-6 {
  box-shadow: var(--shadow-6);
}
</span></code></pre>

<div class="grid-container bg-gray-200 p-y-6 p-x-3">

  <div class="text-center p-t-3 ">
    <div class="radius-3 bg-white shadow-1 w-7 h-7 m-x-a"></div>
      <p class="font-size-1 bg-alpha-0 m-t-4">--shadow-1</p>
  </div>
    <div class="text-center p-t-3">
    <div class="radius-3 bg-white shadow-2 w-7 h-7 m-x-a"></div>
      <p class="font-size-1 bg-alpha-0 m-t-4">--shadow-2</p>
  </div>
    <div class="text-center p-t-3">
    <div class="radius-3 bg-white shadow-3 w-7 h-7 m-x-a"></div>
      <p class="font-size-1 bg-alpha-0 m-t-4">--shadow-3</p>
  </div>
    <div class="text-center p-t-3">
    <div class="radius-3 bg-white shadow-4 w-7 h-7 m-x-a"></div>
      <p class="font-size-1 bg-alpha-0 m-t-4">--shadow-4</p>
  </div>
    <div class="text-center p-t-3">
    <div class="radius-3 bg-white shadow-5 w-7 h-7 m-x-a"></div>
      <p class="font-size-1 bg-alpha-0 m-t-4">--shadow-5</p>
  </div>
    <div class="text-center p-t-3">
    <div class="radius-3 bg-white shadow-6 w-7 h-7 m-x-a"></div>
      <p class="font-size-1 bg-alpha-0 m-t-4">--shadow-6</p>
  </div>

</div>

## Animation tokens 
### Animation duration

<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--animation-duration-1: 0.1s;
--animation-duration-2: 0.2s;
--animation-duration-3: 0.3s;
--animation-duration-4: 0.4s;
--animation-duration-5: 0.5s;
--animation-duration-6: 0.6s;
--animation-duration-7: 0.7s;
--animation-duration-8: 0.8s;
--animation-duration-9: 0.9s;
--animation-duration-10: 1s;
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.btn-primary-outline {
    transition: all var(--animation-duration-3);
  }
</span></code></pre>
</div>
</div>

Hover over the buttons to see the effect
<div class="d-flex gap-3 m-b-3">
<a href="#" class="btn-primary-outline btn-hover-right"><span class="btn-text transition-1">--animation-duration-1</span><span class="ca-gov-icon-arrow-next transition-1" aria-hidden="true"></span></a>
<a href="#" class="btn-primary-outline btn-hover-right"><span class="btn-text transition-2">--animation-duration-2</span><span class="ca-gov-icon-arrow-next transition-2" aria-hidden="true"></span></a>
<a href="#" class="btn-primary-outline btn-hover-right"><span class="btn-text transition-3">--animation-duration-3</span><span class="ca-gov-icon-arrow-next transition-3" aria-hidden="true"></span></a>
</div>

<div class="d-flex gap-3 m-b-3">
<a href="#" class="btn-primary-outline btn-hover-right"><span class="btn-text transition-4">--animation-duration-4</span><span class="ca-gov-icon-arrow-next transition-4" aria-hidden="true"></span></a>
<a href="#" class="btn-primary-outline btn-hover-right"><span class="btn-text transition-5">--animation-duration-5</span><span class="ca-gov-icon-arrow-next transition-5" aria-hidden="true"></span></a>
<a href="#" class="btn-primary-outline btn-hover-right"><span class="btn-text transition-6">--animation-duration-6</span><span class="ca-gov-icon-arrow-next transition-6" aria-hidden="true"></span></a>
</div>

<div class="d-flex gap-3 m-b-3">
<a href="#" class="btn-primary-outline btn-hover-right"><span class="btn-text transition-7">--animation-duration-7</span><span class="ca-gov-icon-arrow-next transition-7" aria-hidden="true"></span></a>
<a href="#" class="btn-primary-outline btn-hover-right"><span class="btn-text transition-8">--animation-duration-8</span><span class="ca-gov-icon-arrow-next transition-8" aria-hidden="true"></span></a>
<a href="#" class="btn-primary-outline btn-hover-right"><span class="btn-text transition-9">--animation-duration-9</span><span class="ca-gov-icon-arrow-next transition-9" aria-hidden="true"></span></a>
</div>

### Easing animation

<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--ease-1: cubic-bezier(0.25, 0, 0.5, 1);
--ease-2: cubic-bezier(0.25, 0, 0.4, 1);
--ease-3: cubic-bezier(0.25, 0, 0.3, 1);
--ease-4: cubic-bezier(0.25, 0, 0.2, 1);
--ease-5: cubic-bezier(0.25, 0, 0.1, 1);
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">div {
    transition: all var(--animation-duration-5) var(--ease-1);
  }
  div:hover {
    width:100%;
  }
</span></code></pre>
</div>
</div>

Hover over the objects to see the effect
<div class="grid-container">
<div class="h-6 w-8 w-100-hover transition-8 ease-1 p-x-3 p-t-2 radius-3 bg-gray-400">--ease-1</div>
<div class="h-6 w-8 w-100-hover transition-8 ease-5 p-x-3 p-t-2 radius-3 bg-gray-400">--ease-5</div>
</div>


### Scale transform variables
<div class="grid-container">
<div class="code-block"><p class="code-block-language">Variables</p><pre><code class="hljs"><span class="hljs-code">--transform-scale-1: scale3d(1.01, 1.01, 1.01);
--transform-scale-2: scale3d(1.02, 1.02, 1.02);
--transform-scale-3: scale3d(1.03, 1.03, 1.03);
--transform-scale-4: scale3d(1.04, 1.04, 1.04);
--transform-scale-5: scale3d(1.05, 1.05, 1.05);
--transform-scale-6: scale3d(1.06, 1.06, 1.06);
--transform-scale-7: scale3d(1.07, 1.07, 1.07);
--transform-scale-8: scale3d(1.08, 1.08, 1.08);
--transform-scale-9: scale3d(1.09, 1.09, 1.09);
--transform-scale-10: scale3d(1.1, 1.1, 1.1);
</span></code></pre>
</div>

<div class="code-block"><p class="code-block-language">Example</p><pre><code class="hljs"><span class="hljs-code">.btn-primary {
    transition: all var(--animation-duration-5);
  }
  btn-primary:hover {
    transform: var(--transform-scale-6);
  }
</span></code></pre>
</div>
</div>


Hover over the buttons to see the effect
<div class="d-flex gap-3 m-b-3">
<a href="#" class="btn-primary-outline transform-scale-1-hover">--transform-scale-1</a>
<a href="#" class="btn-primary-outline transform-scale-2-hover">--transform-scale-2</a>
<a href="#" class="btn-primary-outline transform-scale-3-hover">--transform-scale-3</a>
</div>

<div class="d-flex gap-3 m-b-3">
<a href="#" class="btn-primary-outline transform-scale-4-hover">--transform-scale-4</a>
<a href="#" class="btn-primary-outline transform-scale-5-hover">--transform-scale-5</a>
<a href="#" class="btn-primary-outline transform-scale-6-hover">--transform-scale-6</a>
</div>

<div class="d-flex gap-3 m-b-3">
<a href="#" class="btn-primary-outline transform-scale-7-hover">--transform-scale-7</a>
<a href="#" class="btn-primary-outline transform-scale-8-hover">--transform-scale-8</a>
<a href="#" class="btn-primary-outline transform-scale-9-hover">--transform-scale-9</a>
</div>
