# Site navigation

The site navigation appears at the top of every page on your site. It gives links to pages in the site, sometimes ordered by topic, task, or user type. This makes it easier for people to navigate the website.

There are 2 options for each site navigation item:

- A link to a page
- Text with a dropdown menu of links

The site navigation component is made to switch between desktop and mobile presentations. On desktop, the top level links or text are arranged across the top of the page. On mobile, they are in a hamburger menu that people select to expand. The links in the hamburger menu are stacked.

## When and how to use it

Use site navigation to help people find pages on your website. It should list or lead to most of the content on your website.

Links can be organized into sections or can stand alone. Sections can be organized by:

- Top tasks
- Major topic areas
- Audience or user groups

You can use a [card sorting activity](https://www.usability.gov/how-to-and-tools/methods/card-sorting.html) to determine what should go in and how to organize your site navigation.

### How not to use it

Do not overload the site navigation with too many pages. This makes it difficult for people to find what they’re looking for. Make sure any pages not in the site navigation can be reached through a page in the site navigation or the site footer.

Do not link to PDFs in the site navigation.

## Demo and sample markup

<html-preview>

```html preview
<!--the site-header html has to be present for menu testing because cannabis puts the menu triggers outside of the module -->
    <!--site-header-->
    <div>
    <div class="site-header">
      <div class="container">
        <div class="cagov-nav mobile-icons">
          <button class="menu-trigger cagov-nav open-menu" aria-label="Navigation menu" aria-haspopup="true" aria-expanded="false"
            aria-owns="mainMenu" aria-controls="mainMenu">
            <div class="cagov-nav hamburger">
              <div class="hamburger-box">
                <div class="hamburger-inner"></div>
              </div>
            </div>
            <div class="cagov-nav menu-trigger-label menu-label" data-openlabel="Open" data-closelabel="Close">Menu</div>
          </button>
        </div>
      </div>
    </div>
    <!--end site-header-->
    
  <cagov-site-navigation>
  <div class="container">
    <div class="search-container search-container--small hidden-search">
      <form class="site-search" action="/serp/">
        <span class="sr-only" id="SearchInput2">Custom Google Search</span>
        <input type="text" name="q" aria-labelledby="SearchInput2" placeholder="Search this website"
          class="search-textfield">
        <button type="submit" class="search-submit">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="17px" height="17px" viewBox="0 0 17 17" style="enable-background:new 0 0 17 17;"
            xml:space="preserve">
            <path class="blue" d="M16.4,15.2l-4-4c2-2.6,1.8-6.5-0.6-8.9c-1.3-1.3-3-2-4.8-2S3.5,1,2.2,2.3c-2.6,2.6-2.6,6.9,0,9.6
        c1.3,1.3,3,2,4.8,2c1.4,0,2.9-0.5,4.1-1.4l4.1,4c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C16.7,16.2,16.7,15.6,16.4,15.2
        L16.4,15.2z M7,12c-1.3,0-2.6-0.5-3.5-1.4c-1.9-1.9-1.9-5.1,0-7C4.4,2.7,5.6,2.1,7,2.1s2.6,0.5,3.5,1.4c0.9,0.9,1.4,2.2,1.4,3.5
        c0,1.3-0.5,2.6-1.4,3.5C9.5,11.5,8.3,12,7,12z" />
          </svg>
          <span class="sr-only">Submit</span>
        </button>
      </form>
    </div>
    <nav class="expanded-menu" role="navigation" aria-label="Site Navigation" aria-hidden="false" id="main-menu">
      <div class="expanded-menu-grid">
        <div class="expanded-menu-section mobile-only">
          <strong class="expanded-menu-section-header">
            <a class="expanded-menu-section-header-link js-event-hm-menu" href="/">Home</a>
          </strong>
        </div>
        <div class="expanded-menu-col js-cagov-navoverlay-expandable">
          <div class="expanded-menu-section">
            <strong class="expanded-menu-section-header">
              <button class="expanded-menu-section-header-link js-event-hm-menu" aria-controls="menu1-links">
                <span>
                  Applicants
                </span>
                <span class="expanded-menu-section-header-arrow">
                  <svg aria-hidden=true width="11" height="7"
                    class="expanded-menu-section-header-arrow-svg" viewBox="0 0 11 7" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1.15596 0.204797L5.49336 5.06317L9.8545 0.204797C10.4293 -0.452129 11.4124 0.625368 10.813 1.28143L5.90083 6.82273C5.68519 7.05909 5.32606 7.05909 5.1342 6.82273L0.174341 1.28143C-0.400433 0.6245 0.581838 -0.452151 1.15661 0.204797H1.15596Z"
                        />
                  </svg>
                </span>
              </button>
            </strong>
            <div class="expanded-menu-dropdown" id="menu1-links">
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/applicants/how-to-apply-renew/" tabindex="-1">How to apply for or renew a license</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/applicants/license-types/" tabindex="-1">License types</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/applicants/application-license-fees/" tabindex="-1">Application and license fees</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/applicants/application-resources/" tabindex="-1">Application resources</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/applicants/access-license-portals/" tabindex="-1">Access the license portals</a>
              
            </div>
          </div>
        </div>
        
        <div class="expanded-menu-col js-cagov-navoverlay-expandable">
          <div class="expanded-menu-section">
            <strong class="expanded-menu-section-header">
              <button class="expanded-menu-section-header-link js-event-hm-menu" aria-controls="menu2-links">
                <span>
                  Licensees
                </span>
                <span class="expanded-menu-section-header-arrow">
                  <svg width="11" height="7"
                    class="expanded-menu-section-header-arrow-svg" viewBox="0 0 11 7" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1.15596 0.204797L5.49336 5.06317L9.8545 0.204797C10.4293 -0.452129 11.4124 0.625368 10.813 1.28143L5.90083 6.82273C5.68519 7.05909 5.32606 7.05909 5.1342 6.82273L0.174341 1.28143C-0.400433 0.6245 0.581838 -0.452151 1.15661 0.204797H1.15596Z"
                        />
                  </svg>
                </span>
              </button>
            </strong>
            <div class="expanded-menu-dropdown" id="menu2-links">
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/licensees/cultivation/" tabindex="-1">Cultivation</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/licensees/manufacturing/" tabindex="-1">Manufacturing</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/licensees/distribution/" tabindex="-1">Distribution</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/licensees/testing-laboratories/" tabindex="-1">Testing laboratories</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/licensees/retail/" tabindex="-1">Retail</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/licensees/events/" tabindex="-1">Events</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/licensees/track-and-trace/" tabindex="-1">Track and Trace</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/licensees/requirements-cannabis-goods/" tabindex="-1">Requirements for cannabis goods</a>
              
            </div>
          </div>
        </div>
        
        <div class="expanded-menu-col js-cagov-navoverlay-expandable">
          <div class="expanded-menu-section">
            <strong class="expanded-menu-section-header">
              <button class="expanded-menu-section-header-link js-event-hm-menu" aria-controls="menu3-links">
                <span>
                  Consumers
                </span>
                <span class="expanded-menu-section-header-arrow">
                  <svg width="11" height="7"
                    class="expanded-menu-section-header-arrow-svg" viewBox="0 0 11 7" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1.15596 0.204797L5.49336 5.06317L9.8545 0.204797C10.4293 -0.452129 11.4124 0.625368 10.813 1.28143L5.90083 6.82273C5.68519 7.05909 5.32606 7.05909 5.1342 6.82273L0.174341 1.28143C-0.400433 0.6245 0.581838 -0.452151 1.15661 0.204797H1.15596Z"
                        />
                  </svg>
                </span>
              </button>
            </strong>
            <div class="expanded-menu-dropdown" id="menu3-links">
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/consumers/whats-legal/" tabindex="-1">What’s legal</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/consumers/medicinal-cannabis/" tabindex="-1">Medicinal cannabis</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/consumers/responsible-cannabis-use/" tabindex="-1">Responsible cannabis use</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/consumers/talking-young-people-about-cannabis/" tabindex="-1">Talking to young people about cannabis</a>
              
            </div>
          </div>
        </div>
        
        <div class="expanded-menu-col js-cagov-navoverlay-expandable">
          <div class="expanded-menu-section">
            <strong class="expanded-menu-section-header">
              <button class="expanded-menu-section-header-link js-event-hm-menu" aria-controls="menu4-links">
                <span>
                  Resources
                </span>
                <span class="expanded-menu-section-header-arrow">
                  <svg width="11" height="7"
                    class="expanded-menu-section-header-arrow-svg" viewBox="0 0 11 7" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1.15596 0.204797L5.49336 5.06317L9.8545 0.204797C10.4293 -0.452129 11.4124 0.625368 10.813 1.28143L5.90083 6.82273C5.68519 7.05909 5.32606 7.05909 5.1342 6.82273L0.174341 1.28143C-0.400433 0.6245 0.581838 -0.452151 1.15661 0.204797H1.15596Z"
                        />
                  </svg>
                </span>
              </button>
            </strong>
            <div class="expanded-menu-dropdown" id="menu4-links">
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/resources/laws-and-regulations/" tabindex="-1">Laws and regulations</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/resources/running-business/" tabindex="-1">Running a business in California</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/resources/file-complaint/" tabindex="-1">File a complaint</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/resources/disaster-relief-programs/" tabindex="-1">Disaster relief programs</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/resources/search-for-licensed-business/" tabindex="-1">Search for a licensed business</a>
              
            </div>
          </div>
        </div>
        
        <div class="expanded-menu-col js-cagov-navoverlay-expandable">
          <div class="expanded-menu-section">
            <strong class="expanded-menu-section-header">
              <button class="expanded-menu-section-header-link js-event-hm-menu" aria-controls="menu5-links">
                <span>
                  About us
                </span>
                <span class="expanded-menu-section-header-arrow">
                  <svg width="11" height="7"
                    class="expanded-menu-section-header-arrow-svg" viewBox="0 0 11 7" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1.15596 0.204797L5.49336 5.06317L9.8545 0.204797C10.4293 -0.452129 11.4124 0.625368 10.813 1.28143L5.90083 6.82273C5.68519 7.05909 5.32606 7.05909 5.1342 6.82273L0.174341 1.28143C-0.400433 0.6245 0.581838 -0.452151 1.15661 0.204797H1.15596Z"
                        />
                  </svg>
                </span>
              </button>
            </strong>
            <div class="expanded-menu-dropdown" id="menu5-links">
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/about-us/about-dcc/" tabindex="-1">About DCC</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/about-us/announcements/" tabindex="-1">Announcements</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/about-us/dcc-events/" tabindex="-1">DCC events</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/about-us/public-awareness-campaigns/" tabindex="-1">Public awareness campaigns</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/about-us/scientific-research/" tabindex="-1">Scientific research</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/about-us/grant-funding/" tabindex="-1">Grant funding</a>
              
                <a class="expanded-menu-dropdown-link js-event-hm-menu" href="/about-us/contact-us/" tabindex="-1">Contact us</a>
              
            </div>
          </div>
        </div>
        
      </div>
    </nav>
  </div>
</cagov-site-navigation>

</div>
```

</html-preview>

## Specs

| Property     | Value              |
| ------------ | ------------------ |
| Machine name | ds-site-navigation |
| JavaScript   | yes                |
| SCSS         | ./src/index.scss   | 

## Project installation

The instructions assume familiarity with [npm](https://npmjs.com) package management tool, modern JavaScript techniques, and [Sass](https://sass-lang.com/).

1. `npm i @cagov/ds-site-navigation`
2. Use `import`[¹](/footnotes/#footnote1) or `require` to include the component’s **JavaScript** in your page or compiler.
3. Include **SCSS** in your Sass compiler.
4. Add the **sample markup** to your HTML.
5. Refer to the [Content model section](#content-model) for notes on mapping your data to the **sample markup**.
6. Repeat the div.expanded-menu-col element to add additional menu items.
7. Replace links as necessary.

### CDN installation

We recommend using a build system and bundling your JavaScript and CSS for faster performance. If you do not use a build system, you can include the code from our CDN with link and script tags.

```html
<link rel="stylesheet" href="https://cdn.designsystem.webstandards.ca.gov/components/ds-site-navigation/v3.0.0/dist/index.css">
<script type="module" src="https://cdn.designsystem.webstandards.ca.gov/components/ds-site-navigation/v3.0.0/dist/index.js"></script>
```


## CSS variables

The following [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are used in this component:

- `--white`
- `--gray-200`
- `--primary-700`
- `--primary-900`
- `--accent2-500`
- `--w-lg`
- `--s-sm`
- `--s-1`
- `--s-2`
- `--font-size-2`
- `--font-weight-4`
- `--font-weight-7`
- `--font-lineheight-6`


All CSS variables define their own fallback value so you do not have to use additional CSS unless you want to change them. You may define your own value for the variable by adding your own style rules. Here is an example defining the global hex value for a CSS variable named “--primary-700”:

```css
:root {
  --primary-700: #165ac2;
}
```

## Accessibility

### Component-specific accessibility review

- Make sure that site navigation is contained within the `nav` tag that has `aria-label=”Site Navigation”` and `role=”navigation”` attributes in it.
- If the navigation uses dropdowns, make sure that first level nav item has `aria-expanded=”true”` attribute when dropdown is expanded and `aria-expanded=”false”` when dropdown is collapsed. Make sure that dropdown toggle trigger is a button. Dropdown container also needs to have `aria-hidden` attribute, which should change its value between `true` and `false` depending on its visibility. Also, make sure that dropdown links are out of focus when it’s in collapsed state, which means each link needs to have `tabindex=”-1”` attribute. And vice versa, when dropdown is expanded each link inside of the dropdown should not have any `tabindex` attribute.
- Arrow svg icon inside of the dropdown trigger button needs to have `aria-hidden=”true”` attribute.
- Make sure that site navigation links have solid, 2px outline that uses `--accent2-500` variable on focused state.

### Standard accessibility review

As a component in Alpha status, this component must pass the following accessibility reviews every time a new version is published:

- Tested with the [axe](https://www.deque.com/axe/) accessibility tool and passes all automated [WCAG](https://www.w3.org/TR/WCAG21/) Level AA checks
- Reviewed with the [VoiceOver](https://www.apple.com/voiceover/info/guide/_1121.html) screen reader on desktop
- Verified keyboard navigation and that all actionable elements of the component are reachable via keyboard commands only
- Reviewed component layout on a variety of screen sizes

## Progressive enhancement

This component uses a custom element defined in JavaScript in addition to HTML and CSS. Edge, Firefox, Safari, and Chrome support [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements). If the JavaScript for this component is not delivered or supported, the component will not display. This component does not currently perform the desired progressive enhancement because it is critical to site interaction. It uses [CSS variables](<https://developer.mozilla.org/en-US/docs/Web/CSS/var()#syntax>) to inherit design token values. Token definitions are not required because these style rules provide fallback values.

<a name="content-model"></a>

## Content model

The site navigation component renders parent and child link lists.

### CMS integration

Here is an abbreviated example of the data necessary to render this component with a publishing system.

| Name                                | URL                                                            | Parent ID | Menu item parent | Menu order | Level     |
| ----------------------------------- | -------------------------------------------------------------- | --------- | ---------------- | ---------- | --------- |
| Home                                | Top level links on menu item with dropdowns will not be active | 1         | 0                | 0          | Top level |
| How to apply for or renew a license | /applicants/how-to-apply-renew/                                | 10        | 1                | 0          | Drop down |
| License types                       | /applicants/license-types/                                     | 10        | 1                | 1          | Drop down |
| Licensees                           | Top level links on menu item with dropdowns will not be active | 2         | 0                | 1          | Top level |
| Cultivation                         | /licensees/cultivation/                                        | 20        | 2                | 0          | Drop down |
| Manufacturing                       | /licensees/manufacturing/                                      | 20        | 2                | 1          | Drop down |

For example, in the WordPress CMS integration, content editors can manage menu links through the normal menu system, and then [data](https://github.com/cagov/cannabis.ca.gov/blob/main/src/templates/wordpress/menu/headerMenu.json) is pulled from the WordPress menu system using an [API plugin](https://github.com/cagov/pantheon-mirror-cannabis-ca-gov/tree/main/wp-content/plugins/wp-rest-api-v2-menus) into a static site building website. This happens by way of GitHub, which acts as a local flat file JSON database for a static site generator (11ty). In the build process of the static site, we then use a [templating system](https://github.com/cagov/cannabis.ca.gov/blob/main/src/templates/_includes/nav-component.njk) to map the JSON data for the menu to the first two levels of the menu to the site navigation. Similar patterns can work for other publishing systems. If you are interested in helping, [reach out through our Contact us page](/contact-us).

## Contributor/developer documentation

- [Component information](https://github.com/cagov/design-system/blob/main/components/README.md)

- [Component README template](https://www.notion.so/odi-engineering/Component-documentation-template-2da3975cc0954174ace43004d151451c)

- [Unit tests](https://github.com/cagov/design-system/blob/main/components/UNIT-TESTS.md)

¹ To use `import`, files must be served from a [webserver](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server) such as Apache, Nginx, or [http-server](https://www.npmjs.com/package/http-server). The `file://` protocol will cause CORS errors in some browsers.
