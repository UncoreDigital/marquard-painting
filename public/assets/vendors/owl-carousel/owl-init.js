document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".owl-carousel");
  if (carousels.length > 0 && window.jQuery) {
    jQuery(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
    });
  }
});