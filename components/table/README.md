# Table

This CSS-only module contains styles for basic tables. `index.css` is for headless/agnostic implementations. `index.wordpress.css` is for Wordpress.

## Sample HTML

<html-preview>

```html preview
<link rel="stylesheet" href="../../base-css/dist/themes/cagov.css" />
<link rel="stylesheet" href="../dist/index.css" />

<figure class="cagov-table">
  <table>
    <thead>
      <tr>
        <th>No aligment</th>
        <th>two</th>
        <th>three</th>
        <th>four</th>
        <th>five</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>six</td>
        <td>seven</td>
        <td>eight</td>
        <td>nine</td>
        <td>ten</td>
      </tr>
      <tr>
        <td>eleven</td>
        <td>twelve</td>
        <td>thirteen</td>
        <td>fourteen</td>
        <td>fifteen</td>
      </tr>
      <tr>
        <td>sixteen</td>
        <td>seventeen</td>
        <td>eighteen</td>
        <td>nineteen</td>
        <td>twenty</td>
      </tr>
      <tr>
        <td>twenty-one</td>
        <td>twenty-two</td>
        <td>twenty-three</td>
        <td>twenty-four</td>
        <td>twenty-five</td>
      </tr>
      <tr>
        <td>twenty-six</td>
        <td>twenty-seven</td>
        <td>twenty-eight</td>
        <td>twenty-nine</td>
        <td>thirty</td>
      </tr>
    </tbody>
  </table>
  <figcaption>and a caption</figcaption>
</figure>

<figure class="cagov-table aligncenter">
  <table>
    <thead>
      <tr>
        <th>Align Center</th>
        <th>two</th>
        <th>three</th>
        <th>four</th>
        <th>five</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>six</td>
        <td>seven</td>
        <td>eight</td>
        <td>nine</td>
        <td>ten</td>
      </tr>
      <tr>
        <td>eleven</td>
        <td>twelve</td>
        <td>thirteen</td>
        <td>fourteen</td>
        <td>fifteen</td>
      </tr>
      <tr>
        <td>sixteen</td>
        <td>seventeen</td>
        <td>eighteen</td>
        <td>nineteen</td>
        <td>twenty</td>
      </tr>
      <tr>
        <td>twenty-one</td>
        <td>twenty-two</td>
        <td>twenty-three</td>
        <td>twenty-four</td>
        <td>twenty-five</td>
      </tr>
      <tr>
        <td>twenty-six</td>
        <td>twenty-seven</td>
        <td>twenty-eight</td>
        <td>twenty-nine</td>
        <td>thirty</td>
      </tr>
    </tbody>
  </table>
  <figcaption>and a caption</figcaption>
</figure>

<figure class="cagov-table alignleft">
  <table>
    <thead>
      <tr>
        <th>Align Left</th>
        <th>two</th>
        <th>three</th>
        <th>four</th>
        <th>five</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>six</td>
        <td>seven</td>
        <td>eight</td>
        <td>nine</td>
        <td>ten</td>
      </tr>
      <tr>
        <td>eleven</td>
        <td>twelve</td>
        <td>thirteen</td>
        <td>fourteen</td>
        <td>fifteen</td>
      </tr>
      <tr>
        <td>sixteen</td>
        <td>seventeen</td>
        <td>eighteen</td>
        <td>nineteen</td>
        <td>twenty</td>
      </tr>
      <tr>
        <td>twenty-one</td>
        <td>twenty-two</td>
        <td>twenty-three</td>
        <td>twenty-four</td>
        <td>twenty-five</td>
      </tr>
      <tr>
        <td>twenty-six</td>
        <td>twenty-seven</td>
        <td>twenty-eight</td>
        <td>twenty-nine</td>
        <td>thirty</td>
      </tr>
    </tbody>
  </table>
  <figcaption>and a caption</figcaption>
</figure>

<figure class="cagov-table alignright">
  <table>
    <thead>
      <tr>
        <th>Align Right</th>
        <th>two</th>
        <th>three</th>
        <th>four</th>
        <th>five</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>six</td>
        <td>seven</td>
        <td>eight</td>
        <td>nine</td>
        <td>ten</td>
      </tr>
      <tr>
        <td>eleven</td>
        <td>twelve</td>
        <td>thirteen</td>
        <td>fourteen</td>
        <td>fifteen</td>
      </tr>
      <tr>
        <td>sixteen</td>
        <td>seventeen</td>
        <td>eighteen</td>
        <td>nineteen</td>
        <td>twenty</td>
      </tr>
      <tr>
        <td>twenty-one</td>
        <td>twenty-two</td>
        <td>twenty-three</td>
        <td>twenty-four</td>
        <td>twenty-five</td>
      </tr>
      <tr>
        <td>twenty-six</td>
        <td>twenty-seven</td>
        <td>twenty-eight</td>
        <td>twenty-nine</td>
        <td>thirty</td>
      </tr>
    </tbody>
  </table>
  <figcaption>and a caption</figcaption>
</figure>

```

</html-preview>

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **sample markup** from the component to your HTML.
3. Adjust text as needed.

### CDN installation

We recommend using a build system and bundling your CSS for faster performance. If you do not use a build system, you can include the code from our CDN with a link tag.

```html
<link rel="stylesheet" href="https://cdn.designsystem.webstandards.ca.gov/components/ds-table/v1.0.1/dist/index.css">
```


## Expected variables

none.

## Contributor/developer documentation

- [Component information](https://github.com/cagov/design-system/blob/main/components/README.md)

- [Unit tests](https://github.com/cagov/design-system/blob/main/components/UNIT-TESTS.md)
