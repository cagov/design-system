# Google translate widget load on click

This custom element renders a link that when clicked places the google site translate widget into the element. This is setup this way because the google translate javascript is used rarely and slows down all page loads when loaded by default. This module uses a sessionStorage parameter to remember if the translate widget was activated and to load it automatically if it was previously.

This is used in the header of state sites like <a href="https://headless.cannabis.ca.gov">https://headless.cannabis.ca.gov</a>