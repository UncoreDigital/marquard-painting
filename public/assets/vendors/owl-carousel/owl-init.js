// document.addEventListener("DOMContentLoaded", () => {
//   const carousels = document.querySelectorAll(".owl-carousel");
//   if (carousels.length > 0 && window.jQuery) {
//     jQuery(".owl-carousel").owlCarousel({
//       loop: true,
//       margin: 10,
//       nav: true,
//       items: 1,
//     });
//   }
// });

// // owl-init.js
// document.addEventListener("DOMContentLoaded", () => {
//   if (window.jQuery && jQuery.fn.owlCarousel) {
//     document.querySelectorAll(".owl-carousel").forEach((el) => {
//       const $el = jQuery(el);

//       // Base defaults (works for Hero)
//       let options = {
//         loop: true,
//         margin: 10,
//         nav: true,
//         items: 1,
//       };

//       // If element has data-owl-options, merge it
//       const dataOptions = el.getAttribute("data-owl-options");
//       if (dataOptions) {
//         try {
//           const parsed = JSON.parse(dataOptions);
//           options = { ...options, ...parsed }; // merge
//         } catch (e) {
//           console.error("Invalid JSON in data-owl-options:", e);
//         }
//       }

//       // Initialize if not already
//       if (!$el.hasClass("owl-loaded")) {
//         $el.owlCarousel(options);
//       }
//     });
//   } else {
//     console.warn("jQuery or OwlCarousel not loaded");
//   }
// });

// owl-init.js
document.addEventListener("DOMContentLoaded", () => {
  if (window.jQuery && jQuery.fn.owlCarousel) {
    document.querySelectorAll(".owl-carousel").forEach((el) => {
      const $el = jQuery(el);

      // Base defaults (keeps Hero working)
      let options = {
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
      };

      // If element has data-owl-options, merge it
      const dataOptions = el.getAttribute("data-owl-options");
      if (dataOptions) {
        try {
          const parsed = JSON.parse(dataOptions);

          // ✅ Fix invalid numeric values (like "items": 2.25545 → 2)
          if (parsed.responsive) {
            Object.keys(parsed.responsive).forEach((bp) => {
              if (parsed.responsive[bp].items) {
                parsed.responsive[bp].items = Math.round(
                  parsed.responsive[bp].items
                );
              }
            });
          }

          options = { ...options, ...parsed }; // merge parsed options
        } catch (e) {
          console.error("Invalid JSON in data-owl-options:", e);
        }
      }

      // Initialize only if not already
      if (!$el.hasClass("owl-loaded")) {
        $el.owlCarousel(options);
      }
    });
  } else {
    console.warn("jQuery or OwlCarousel not loaded");
  }
});
