const componentMenuButton = document.querySelector(
  '.component-sidebar-menu-button',
);

if (componentMenuButton) {
  componentMenuButton.onclick = () => {
    document
      .querySelector('.component-sidebar-menu-content')
      .classList.toggle('component-sidebar-menu-content-reveal');
    document
      .querySelector('.component-sidebar-menu-arrow')
      .classList.toggle('component-sidebar-menu-arrow-transform');
  };
}
