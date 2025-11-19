(function() {
  "use strict"; // Start of use strict

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    // Collapse Navbar
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }

  // Close navbar when a nav link is clicked on mobile
  var navCollapseEl = document.querySelector('#navcol-1');
  var navToggler = document.querySelector('.navbar-toggler');

  if (navCollapseEl && navToggler && typeof bootstrap !== 'undefined') {
    var navCollapse = new bootstrap.Collapse(navCollapseEl, { toggle: false });
    var navLinks = navCollapseEl.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        var togglerVisible = window.getComputedStyle(navToggler).display !== 'none';
        if (togglerVisible && navCollapseEl.classList.contains('show')) {
          navCollapse.hide();
        }
      });
    });
  }

})(); // End of use strict

