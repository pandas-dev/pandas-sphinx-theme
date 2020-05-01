require('jquery/dist/jquery');
require('popper.js/dist/umd/popper');
require("bootstrap/dist/js/bootstrap.bundle");


/**
 * This file should be edited in ./src/js/index.js. After bundling the resulting file in ./pydata_sphinx_theme/static/js/index.js should never be manually changed.
 * Edit ./src/js/index.js and run yarn build:dev or yarn build:production.
 */

// TOC sidebar - add "active" class to parent list
//
// Bootstrap's scrollspy adds the active class to the <a> link,
// but for the automatic collapsing we need this on the parent list item.
//
// The event is triggered on "window" (and not the nav item as documented),
// see https://github.com/twbs/bootstrap/issues/20086
$(window).on('activate.bs.scrollspy', function() {
  const navLinks = document.querySelectorAll('#bd-toc-nav a');

  navLinks.forEach(navLink => {
    navLink.parentElement.classList.remove('active');
  })

  const activeNavLinks = document.querySelectorAll('#bd-toc-nav a.active');
  activeNavLinks.forEach(navLink => {
    navLink.parentElement.classList.add('active');
  })
});

/**
 * Use left and right arrow keys to navigate forward and backwards.
 */
const LEFT_ARROW_KEYCODE = 37;
const RIGHT_ARROW_KEYCODE = 39;

const getPrevUrl = () => document.getElementById('prev-link').href;
const getNextUrl = () => document.getElementById('next-link').href;
const initPageNav = event => {
  const keycode = event.which;

  if (keycode === LEFT_ARROW_KEYCODE) {
    window.location.href = getPrevUrl();
  } else if (keycode === RIGHT_ARROW_KEYCODE) {
    window.location.href = getNextUrl();
  }
};

let keyboardListener = false;
$(document).ready(() => {
  if (keyboardListener === false) {
    document.addEventListener('keydown', initPageNav);
    keyboardListener = true;
  }
});
