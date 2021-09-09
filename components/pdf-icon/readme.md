# Site branding header layer

THis component adds pdf icon to all links that go to pdf files. Once this component is loaded all the links that have .pdf extension will be affected. If you don't want pdf icon to be in your pdf links you will need to add your own css exceptions.

## HTML

```
<a href="link.pdf">this is pdf link</a>

```

### Expected variables

There are some colors that should be defined by the containing page. Here are the CSS variable names and their fallback values used when not defined:


- var(--primary-color, #e1e0e3)

