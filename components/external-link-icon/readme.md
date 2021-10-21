# External link icon

External link Icon will give user an identifiable icon to know there is an external link. JavaScript of this component will loop through all links that go outside of current domain. Then it will append external link svg icon to the right side of the link.

## HTML

```
<a href="google.html">External link</a>

```

### Expected variables

There are some colors that should be defined by the containing page. Here are the CSS variable names and their fallback values used when not defined:


- var(--primary-color, #e1e0e3)
- var(--primary-dark-color, #003484)