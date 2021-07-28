class CAGOVOverlayNav extends window.HTMLElement {
  connectedCallback () {
    this.menuContentFile = this.dataset.json;
    this.querySelector('.open-menu').addEventListener('click', this.toggleMainMenu.bind(this));
    this.querySelector('.mobile-search .search-btn').addEventListener('click', this.toggleMobileSearch.bind(this));
    this.expansionListeners();
    document.addEventListener('keydown', this.escapeMainMenu.bind(this));
    document.body.addEventListener('click',this.bodyClick.bind(this))
    this.highlightCurrentPage();
  }

  toggleMainMenu () {
    if (this.querySelector('.hamburger').classList.contains('is-active')) {
      this.closeMainMenu();
    } else {
      this.openMainMenu();
    }
  }

  toggleMobileSearch () {
    document.querySelector('.search-container--small').classList.toggle('hidden-search');
    document.querySelector('.search-container--small .site-search input').focus();
  }

  highlightCurrentPage() {
    document.querySelectorAll('a.expanded-menu-dropdown-link').forEach(link => {
      if(link.href === window.location.href) {
        link.classList.add('current-page-highlight')
      }
    })
  }

  openMainMenu () {
    this.classList.add('display-menu');
    this.querySelector('.hamburger').classList.add('is-active');
    this.querySelector('.menu-trigger').classList.add('is-fixed');
    var menLabel = this.querySelector('.menu-trigger-label');
    menLabel.innerHTML = menLabel.getAttribute('data-closelabel');
  }

  closeMainMenu () {
    this.classList.remove('display-menu');
    this.querySelector('.hamburger').classList.remove('is-active');
    this.querySelector('.menu-trigger').classList.remove('is-fixed');
    var menLabel = this.querySelector('.menu-trigger-label');
    menLabel.innerHTML =  menLabel.getAttribute('data-openlabel');
  }

  escapeMainMenu (event) {
    // Close menus if user presses escape key.
    if (event.keyCode === 27) { this.closeAllMenus(); }
  }

  bodyClick (event) {
    if(!event.target.closest('cagov-navoverlay')) {
      this.closeAllMenus();
    }
  }

  closeAllMenus() {
    const allMenus = this.querySelectorAll('.js-cagov-navoverlay-expandable');
    allMenus.forEach(menu => {
      let expandedEl = menu.querySelector('.expanded-menu-section');
      expandedEl.classList.remove('expanded');
      menu.setAttribute('aria-expanded', 'false');
      let closestDropDown = menu.querySelector('.expanded-menu-dropdown');
      if (closestDropDown) {
        closestDropDown.setAttribute('aria-hidden', 'true');
        let allLinks = closestDropDown.querySelectorAll("a");
        for (var i = 0; i < allLinks.length; i++) {
          allLinks[i].setAttribute('tabindex', '-1'); // set tabindex to -1 so you cannot tab through these hidden links
        }
      }
    });
  }

  expansionListeners () {
    const allMenus = this.querySelectorAll('.js-cagov-navoverlay-expandable');
    allMenus.forEach(menu => {
      const nearestMenu = menu.querySelector('.expanded-menu-section');
      if (nearestMenu) {
        const nearestMenuDropDown = nearestMenu.querySelector('.expanded-menu-dropdown');
        if (nearestMenuDropDown) {
          nearestMenuDropDown.setAttribute('aria-hidden', 'true');
          menu.setAttribute('aria-expanded', 'false');
        }
      }
      let menuComponent = this;
      menu.addEventListener('click', function (event) {
        if(event.target.nodeName !== 'A') {
          event.preventDefault();
        }
        let expandedEl = this.querySelector('.expanded-menu-section');
        if(expandedEl) {
          if(expandedEl.classList.contains('expanded')) {
            // closing an open menu
            menuComponent.closeAllMenus();
          } else {
            menuComponent.closeAllMenus();
            expandedEl.classList.add('expanded');
            this.setAttribute('aria-expanded', 'true');
            let closestDropDown = this.querySelector('.expanded-menu-dropdown');
            if (closestDropDown) {
              closestDropDown.setAttribute('aria-hidden', 'false');
              let allLinks = closestDropDown.querySelectorAll("a");
              for (var i = 0; i < allLinks.length; i++) {
                allLinks[i].removeAttribute("tabindex"); // remove tabindex from all the links
              }
            }
          }
        }
      });
    });
  }
}
window.customElements.define('cagov-navoverlay', CAGOVOverlayNav);
