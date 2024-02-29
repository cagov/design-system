# Regulatory outline

The regulatory outline replicates the ordering of California government code. It is a list that automatically uses the following pattern:

(a)(b)(c)

&nbsp;&nbsp; (1)(2)(3)

&nbsp;&nbsp;&nbsp;&nbsp; (A)(B)(C)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (i)(ii)(iii)

## When and how to use it

If possible, rewrite information from regulations or government code using plain language.

If you must put regulations or government code on your webpage, use the regulatory outline. It allows you to publish properly formatted regulations without using PDFs, which may not meet accessibility standards.

To use the regulatory outline, apply the `cagov-regulatory-outline` class to the `<ol>` tag. All child `<li>` and `<ol>` tags will inherit the appropriate list styles up to 4 levels deep.

### How not to use it

Do not use the regulatory outline for content that is not regulations or government code. Use bullet points or numbered lists for that. This allows people to more easily recognize when they’re not looking at government code.

## Demo and sample markup

<html-preview>

```html preview
<ol class="cagov-regulatory-outline">
  <li>
    A law enforcement agency may only use a person under 21 years of
    age to attempt to purchase alcoholic beverages for delivery to apprehend
    licensees, ...
  </li>
  <li>
    For purposes of this section, “delivery” shall mean any transfer of
    alcoholic beverages by a licensee, or an employee or agent of a licensee, to
    a person under 21 years of age, ...
  </li>
  
  <li>
    The following minimum standards shall apply to actions filed pursuant to
    Business and Professions Code Section 25658 in which it is alleged a minor
    decoy has been furnished an alcoholic beverage by delivery:

    <ol>
      <li>
        A law enforcement agency may only use a person under 21 years
        of age to attempt to purchase alcoholic beverages for delivery to
        apprehend licensees...
      </li>
      <li>
        The following minimum standards shall apply to actions filed pursuant to
        Business and Professions Code Section 25658 in which it is alleged a
        minor decoy has been furnished an alcoholic beverage by delivery:

        <ol>
          <li>
            LEVEL THREE A law enforcement agency may only use a person under 21
            years of age to attempt to purchase alcoholic beverages for delivery
            to apprehend licensees, or employees or agents of licensees, who
            deliver alcoholic beverages to minors (persons under 21 years of
            age), and to reduce deliveries of alcoholic beverages to minors, in
            a fashion that promotes fairness. For purposes of this section,
            fairness is defined as compliance with all the conditions set forth
            in subdivision (e).
          </li>
          <li>
            The following minimum standards shall apply to actions filed
            pursuant to Business and Professions Code Section 25658 in which it
            is alleged a minor decoy has been furnished an alcoholic beverage by
            delivery:
            <ol>
              <li>
                A law enforcement agency may only use a person under
                21 years of age to attempt ...
              </li>
              <li>
                For purposes of this section, ...
              </li>
              <li>
                For purposes of this section, “agent” ...
              </li>
              <li>
                For purposes of this section, “minor decoy” shall mean a person
                used by law enforcement pursuant to Business and Professions
                Code section 25658(f).
              </li>

              <li>
                A law enforcement agency may only ...
              </li>
              <li>
                For purposes of this section, “delivery” shall mean any transfer
                of alcoholic beverages by a licensee, or an employee or agent of
                a licensee, to a person under 21 years of age, pursuant to an
                order made by internet, telephone, other electronic means, or
                any method of ordering other than in person at the licensed
                premises.
              </li>
              <li>
                For purposes of this section, “agent” shall mean any entity or
                person the licensee uses to deliver alcoholic beverages to
                persons who place orders by internet ...
              </li>
              <li>
                For purposes of this section, “minor decoy” shall mean a person
                used by law enforcement pursuant to Business and Professions
                Code section 25658(f).
              </li>
              <li>
                The following minimum standards shall apply to actions filed
                pursuant to Business and Professions Code Section 25658 in which
                it is alleged a minor decoy has been furnished an alcoholic
                beverage by delivery.
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

</html-preview>

## Specs

| Property     | Value                 |
| ------------ | --------------------- |
| Machine name | ds-regulatory-outline |
| JavaScript   | no                    |
| SCSS         | ./src/index.scss      |

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool and [Sass](https://sass-lang.com/).

1. Include **SCSS** in your compiler.
2. Add the **sample markup** from the component to your HTML.
3. You may need to adjust `$cagov-regulatory-outline-margin` depending on your default font size.

### CDN installation

We recommend using a build system and bundling your CSS for faster performance. If you do not use a build system, you can include the code from our CDN with a link tag.

```html
<link rel="stylesheet" href="https://cdn.designsystem.webstandards.ca.gov/components/ds-regulatory-outline/v1.0.5/dist/index.css">
```

## Progressive enhancement

This is an HTML- and CSS-only component. JavaScript is not required. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

## Content model

This component requires `ol.cagov-regulatory-outline`. It will not work with `ul`.

## Contributor/developer documentation

- [Component information](https://github.com/cagov/design-system/blob/main/components/README.md)

- [Unit tests](https://github.com/cagov/design-system/blob/main/components/UNIT-TESTS.md)
