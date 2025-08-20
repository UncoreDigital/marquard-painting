// // slick-init.js
// document.addEventListener("DOMContentLoaded", () => {
//   if (window.jQuery && jQuery.fn.slick) {
//     const sliders = document.querySelectorAll(".slick-slider, .slick-carousel");
//     if (sliders.length > 0) {
//       jQuery(sliders).slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         dots: true,
//         autoplay: true,
//         autoplaySpeed: 3000,
//       });
//     }
//   } else {
//     console.warn("jQuery or Slick not loaded");
//   }
// });

// slick-init.js
document.addEventListener("DOMContentLoaded", () => {
  if (window.jQuery && jQuery.fn.slick) {
    document.querySelectorAll(".thm-slick__carousel").forEach((el) => {
      const $el = jQuery(el);

      // Base defaults (safe fallback)
      let options = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        nextArrow:
          '<button class="next"><i class="fa fa-angle-right"></i></button>',
        prevArrow:
          '<button class="prev"><i class="fa fa-angle-left"></i></button>',
      };

      // Merge with data-slick-options if present
      const dataOptions = el.getAttribute("data-slick-options");
      if (dataOptions) {
        try {
          const parsed = JSON.parse(dataOptions);
          options = { ...options, ...parsed };
        } catch (e) {
          console.error("Invalid JSON in data-slick-options:", e);
        }
      }

      // Prevent double-init
      if (!$el.hasClass("slick-initialized")) {
        $el.slick(options);
      }
    });
  } else {
    console.warn("jQuery or Slick not loaded");
  }
});
