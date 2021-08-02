# Dropdown menu

This component adds dropdown menu functionality when provided with expected HTML structure inside its custom element  


<img src="https://raw.githubusercontent.com/cagov/design-system/main/components/menu/dropdown-menu-screenshot.png" alt="dropdown menu component screenshot" />

## Sample markup

This sample markup taken from headless.cannabis.ca.gov uses njk code for looping through menu values. The {% syntax should be replaced with hardcoded menu values or your own code to write the menu links.

```
<cagov-navoverlay>
  <div class="container">
    <div class="mobile-icons">
      <button class="menu-trigger open-menu" aria-label="Navigation menu" aria-haspopup="true" aria-expanded="false"
        aria-owns="mainMenu" aria-controls="mainMenu">
        <div class="hamburger">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
        <div class="menu-trigger-label menu-label" data-openlabel="Open" data-closelabel="Close">Menu</div>
      </button>
    </div>
    <nav class="expanded-menu" role="navigation" aria-label="Site Navigation" aria-hidden="false" id="main-menu">
      <div class="expanded-menu-grid">
        <div class="expanded-menu-section mobile-only">
          <strong class="expanded-menu-section-header">
            <a class="expanded-menu-section-header-link js-event-hm-menu" href="/">Home</a>
          </strong>
        </div>
        {%-set headerLinks = menus['header-menu'].items -%}
        {% for menu in headerLinks %}
        <div class="expanded-menu-col js-cagov-navoverlay-expandable">
          <div class="expanded-menu-section">
            <strong class="expanded-menu-section-header">
              {% if menu['child_items'] %}
                <button class="expanded-menu-section-header-link js-event-hm-menu">{{
                  menu.title | safe }}</button>
              {% else %}
                <a class="expanded-menu-section-header-link js-event-hm-menu" href="{{ menu.url | safe }}">{{
                  menu.title | safe }}</a>
              {% endif %}
              <span class="expanded-menu-section-header-arrow"><svg width="11" height="7"
                  class="expanded-menu-section-header-arrow-svg" viewBox="0 0 11 7" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.15596 0.204797L5.49336 5.06317L9.8545 0.204797C10.4293 -0.452129 11.4124 0.625368 10.813 1.28143L5.90083 6.82273C5.68519 7.05909 5.32606 7.05909 5.1342 6.82273L0.174341 1.28143C-0.400433 0.6245 0.581838 -0.452151 1.15661 0.204797H1.15596Z"
                    fill="#064E66" />
                </svg></span>
            </strong>
            <div class="expanded-menu-dropdown">
              {% for sublink in menu['child_items'] %}
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/{{ sublink.url.replace('https://cannabis.ca.gov/','') | safe }}" tabindex="-1">{{ sublink.title | safe }}</a>
              {% endfor %}
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </nav>
  </div>
</cagov-navoverlay>
```

### Expected variables

There are some colors that should be defined by the containing page. Here are the CSS variable names and their fallback values used when not defined:

- var(--gray-300, #e1e0e3)
- var(--primary-dark-color, #064e66)
- var(--secondary-color, #fec02f)
- var(--w-lg, '1176px')

## Docs

Run: ```npm run start``` at the repository root to preview elements. This will launch local server with links to component demo pages.

The documentation is generated using the <a href="https://github.com/webcomponents/custom-elements-manifest">custom elements manifest schema</a> draft standard <a href="https://github.com/runem/web-component-analyzer">analyzer</a> command. Here is an example run outside the accordion directory:

```
wca analyze src --format json --outFile custom-elements.json
```