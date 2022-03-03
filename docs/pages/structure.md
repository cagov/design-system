---
title: Basic web page structure
description: The basic structure of the Caliofornia Design System web page.
---

<p class="text-lead">California Design System web page structure consists of various components and building blocks. Several common components such as statewide header, site header, site navigation, site footer, statewide foter, navigation are usually part of the essential CA Desing System web page stuctural shell.</p>

## Web page code template
Code below shows basic CA Design System web page structure:

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

### Landing page layout (full width)
Landing layout is using full width content container. It usually works for home pages or landing pages. To use this layout make sure to add class `landing` to `#main-content` div.

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
Single column layout is single column content container that has maximum width of 876px and is centered horizontally. It usually works for regular content pages.

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
Left sidebar layout is two column layout with left sidebar column and the main content column. This layout works for long pages that potentially can use page navigation.

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


