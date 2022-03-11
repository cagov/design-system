---
title: Basic webpage structure
description: The basic structure of the Caliofornia Design System webpage.
---

<p class="text-lead">The California Design System webpage structure consists of various components and building blocks.</p>

The webpage structural shell usually includes common components like the:

- Statewide header
- Site header
- Site navigation
- Site footer
- Statewide footer
- Navigation

## Webpage code template
This code shows the basic CA Design System webpage structure:

<html-preview>

```html
<!doctype html>
<html lang="en">
   <head>
		<meta charset="utf-8">
		<title>Page title</title>
		<meta name="Author" content="Office of Digital Innovation" />
		<meta name="Description" content="California Design Sistem" />
		<meta name="Keywords" content="California Design System" />
		<!-- other meta tags-->
		<link title="fav icon" rel="icon" href="/img/favicon.ico">
  		<link rel="shortcut icon" href="/img/favicon.ico" />
  		<!--Google Analytics-->
		<!--CA Design System's styles go here-->
		<!--CA Design System's JavaScript goes here-->
	</head>
	<body>
		<!--Skip-to-content component goes here-->
		<header class="header-container">
			<!--Statewide-header goes here (CA.gov branding, utility links)-->
			<!--Site-header goes here (Site logotype, search, mobile buttons)-->
			<!--Site-navigation goes here-->
		</header>
		<div id="page-container" class="page-container-ds">
			<div id="main-content" class="single-column">
				<main id="body-content">
					<!--Site main content goes here-->
				</main>
			</div>
		</div>
		<div class="footer-container">
			<!--Site-footer component (site logo, site footer links, social links)-->
			<footer>
				<!--Back-to-top component -->
				<!--Statewide-footer component (CA.gov logo, statewide footer links)-->
			</footer>
		</div>
	</body>
</html>
```

</html-preview>


## Main content layout options

### Landing page layout (full-width)
The landing layout uses the full-width content container. It usually works for homepages or landing pages. To use this layout, add the `landing` class to the `#main-content` div.

<div class="cagov-article with-sidebar gap-3 p-x-0">
<div class="m-t-3">
<img class="img-fluid" src="/img/layout-landing.png" alt="Landing page layout option">
</div>

<div class="code-block overflow-auto">
<html-preview>

```html
<div id="page-container" class="page-container-ds">
	<div id="main-content" class="single-column landing">
		<main id="body-content">
			<!--Site main content goes here-->
		</main>
	</div>
</div>
```
</html-preview>
</div>
</div>


### Single column layout
The single column layout is a single column content container that has a maximum width of 876px and is centered horizontally. It usually works for regular content pages.

<div class="cagov-article with-sidebar gap-3 p-x-0">
	<div class="m-t-3">
		<img class="img-fluid" src="/img/layout-single.png" alt="Single column layout option">
	</div>

<div class="code-block overflow-auto">
<html-preview>

```html
<div id="page-container" class="page-container-ds">
	<div id="main-content" class="single-column">
		<main id="body-content">
			<!--Site main content goes here-->
		</main>
	</div>
</div>
```
</html-preview>
</div>
</div>


### Left sidebar layout
The left sidebar layout is a two column layout with a left sidebar column and the main content column. This layout works for long pages that can potentially use page navigation.

<div class="cagov-article with-sidebar gap-3 p-x-0">
	<div class="m-t-3">
		<img class="img-fluid" src="/img/layout-sidebar.png" alt="Sidebarlayout option">
	</div>

<div class="code-block overflow-auto">
<html-preview>

```html
<div id="page-container" class="page-container-ds">
	<div id="main-content" class="cagov-main">
		<main id="body-content">
			<article class="cagov-article with-sidebar with-page-nav">
					<!--page h1 goes here-->
				<div class="sidebar-container sidebar-cell">
					<!--page navigation goes here-->
				</div>
				<div class="cagov-content content-cell">
					<!--page content goes here-->
				</div>
			</article>
		</main>
	</div>
</div>
```
</html-preview>
</div>
</div>
