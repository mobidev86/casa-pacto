// This is all you.
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const banner = document.querySelector(".site-page-banner");
  const scrollY = window.scrollY;
  const bannerHalf = banner.offsetHeight / 2;
  const bannerHeight = banner.offsetHeight;
  const banner80 = bannerHeight * 0.8;

  header.classList.remove(
    "-translate-y-full",
    "opacity-0",
    "navScroll",
    "sticky",
    "navSticky"
  );

  if (scrollY > 200 && scrollY < bannerHalf) {
    header.classList.add("-translate-y-full", "opacity-0");
  }
  else if (scrollY >= bannerHalf && scrollY < banner80) {
    header.classList.add("navScroll");
  }
  else if (scrollY >= banner80 && scrollY < bannerHeight) {
    header.classList.add("sticky");
  }
  else if (scrollY >= bannerHeight) {
    header.classList.add("sticky", "navSticky");
  }

});