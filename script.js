document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal mobile sticky call bar after scrolling past the hero
  var callBar = document.getElementById('mobileCallBar');
  var hero = document.querySelector('.hero');

  if (callBar && hero && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        callBar.classList.toggle('visible', !entry.isIntersecting);
      });
    }, { rootMargin: '-10% 0px 0px 0px' });

    observer.observe(hero);
  } else if (callBar) {
    callBar.classList.add('visible');
  }

});
