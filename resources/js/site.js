// This is all you.
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

window.addEventListener('scroll', function() {
  if (window.scrollY > document.querySelector(".site-page-banner").offsetHeight) {
    document.querySelector('header').classList.add('sticky');
  } else {
    document.querySelector('header').classList.remove('sticky');
  }
});