# Base CSS Preview


<link id="theme-stylesheet" rel="stylesheet" href="/css/cagov.css">

<p>Toggle between themes</p>

<input type="radio" id="cagov" name="color-scheme" value="cagov" checked="checked" />
<label for="drought">CA gov Theme</label>
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

<div class="drought-tokens">
<h2>Drought Themes token values</h2>

```css
:root {
  /* Theme colors */
  --primary-color: #691808;
  --primary-dark-color: #4A1106;
  --primary-light-color: #965D52;
  --primary-lightest-color: #D2BAB5;
  --primary-hover-color: #4A1106;

  --secondary-color: #313131;
  --secondary-dark-color: #222222;
  --secondary-light-color: #6F6F6F;
  --secondary-lightest-color: #C1C1C1;
  --secondary-hover-color: #222222;

  --highlight-color: #FBAD23;
  --highlight-dark-color: #B07919;
  --highlight-light-color: #FCC665;
  --highlight-lightest-color: #FEE6BD;
  --secondary-hover-color: #B07919;
}
```
</div>

<div class="cannabis-tokens">
<h2>Cannabis Themes token values</h2>

```css

/* Colorscheme root variables */
:root {
  /* Theme colors */
  --primary-color: #064E66;
  --primary-dark-color: #043747;
  --primary-light-color: #518394;
  --primary-lightest-color: #B4CAD1;
  --primary-hover-color: #043747;

  --secondary-color: #2F4C2C;
  --secondary-dark-color: #21351F;
  --secondary-light-color: #6D826B;
  --secondary-lightest-color: #C1C9C0;
  --secondary-hover-color: #21351F;

  --highlight-color: #C0633B;
  --highlight-dark-color: #864529;
  --highlight-light-color: #D39276;
  --highlight-lightest-color: #ECD0C4;
  --secondary-hover-color: #864529;
}
```
</div>

<div class="cagov-tokens">
<h2>CA Gov Themes token values</h2>

```css
/* Cagov color scheme root variables */
:root {
  /* Theme colors */
  --primary-color: #004ABC;
  --primary-dark-color: #003484;
  --primary-light-color: #4D80D0;
  --primary-lightest-color: #B3C9EB;
  --primary-hover-color: #003484;

  --secondary-color: #FF8000;
  --secondary-dark-color: #B35A00;
  --secondary-light-color: #FFA64D;
  --secondary-lightest-color: #FFD9B3;
  --secondary-hover-color: #B35A00;

  --highlight-color: #FEC02F;
  --highlight-dark-color: #B28621;
  --highlight-light-color: #FED36D;
  --highlight-lightest-color: #FFECC1;
  --secondary-hover-color: #B28621;
}
```
</div>


<script type="text/javascript">
// write the values of those design token sections dynamically too
const themes = ['cagov','drought','cannabis'];
themes.forEach(t => document.querySelector(`.${t}-tokens`).style.display = 'none');
const onThemeChanged = (e) => {
  const style = document.querySelector('#theme-stylesheet');
  style.setAttribute('href', `/css/${e.target.id}.css`);
  themes.forEach(t => document.querySelector(`.${t}-tokens`).style.display = 'none');
  document.querySelector(`.${e.target.id}-tokens`).style.display = 'block';
};

setTimeout(() => {
  document
    .querySelector('#cannabis')
    .addEventListener('change', onThemeChanged);
  document
    .querySelector('#drought')
    .addEventListener('change', onThemeChanged);
}, 400);

fetch('/css/button-grid.html')
  .then(response => response.text())
  .then((string) => { document.getElementById('button-grid-html-content').innerHTML = string; });
fetch('/css/accordion.html')
  .then(response => response.text())
  .then((string) => { document.getElementById('accordion-html-content').innerHTML = string; });
fetch('/css/step-list.html')
  .then(response => response.text())
  .then((string) => { document.getElementById('step-list-html-content').innerHTML = string; });
</script>