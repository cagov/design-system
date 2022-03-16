# Base CSS Preview


<link id="theme-stylesheet" rel="stylesheet" href="/css/cagov.css">

<p>Toggle between themes</p>

<input type="radio" id="cagov" name="color-scheme" value="cagov" checked="checked" />
<label for="cagov">CA gov Theme</label>
<input type="radio" id="drought" name="color-scheme" value="drought" />
<label for="drought">Drought Theme</label>
<input type="radio" id="cannabis" name="color-scheme" value="cannabis" />
<label for="cannabis">Cannabis Theme</label>

## Links

<a href="#">default link</a>
<br><br>
<a class="wp-block-button__link">call to action link</a>

## Featured cards

<div id="button-grid-html-content"></div>

## Accordion

<div id="accordion-html-content"></div>

## Step list

<div id="step-list-html-content"></div>

## Pagination

<cagov-pagination data-current-page="5" data-total-pages="99"></cagov-pagination>


<script type="text/javascript">
// write the values of those design token sections dynamically too
const themes = ['cagov','drought','cannabis'];
const onThemeChanged = (e) => {
  const style = document.querySelector('#theme-stylesheet');
  style.setAttribute('href', `/css/${e.target.id}.css`);
};

setTimeout(() => {
  document
    .querySelector('#cannabis')
    .addEventListener('change', onThemeChanged);
  document
    .querySelector('#drought')
    .addEventListener('change', onThemeChanged);
}, 400);

fetch('/css/link-grid.html')
  .then(response => response.text())
  .then((string) => { document.getElementById('button-grid-html-content').innerHTML = string; });
fetch('/css/accordion.html')
  .then(response => response.text())
  .then((string) => { document.getElementById('accordion-html-content').innerHTML = string; });
fetch('/css/step-list.html')
  .then(response => response.text())
  .then((string) => { document.getElementById('step-list-html-content').innerHTML = string; });
</script>