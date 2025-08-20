// // slick-theme-init.js
// document.addEventListener("DOMContentLoaded", () => {
//   if (window.jQuery && jQuery.fn.slick) {
//     document.querySelectorAll(".thm-slick__carousel").forEach((el) => {
//       const $el = jQuery(el);
//       let options = {};

//       // Read options from data-slick-options attribute if present
//       const dataOptions = el.getAttribute("data-slick-options");
//       if (dataOptions) {
//         try {
//           options = JSON.parse(dataOptions);
//         } catch (e) {
//           console.error("Invalid JSON in data-slick-options:", e);
//         }
//       }

//       // Initialize Slick
//       if (!$el.hasClass("slick-initialized")) {
//         $el.slick(options);
//       }
//     });
//   } else {
//     console.warn("jQuery or Slick not loaded");
//   }
// });

// slick-theme-init.js
document.addEventListener("DOMContentLoaded", () => {
  if (window.jQuery && jQuery.fn.slick) {
    document.querySelectorAll(".thm-slick__carousel").forEach((el) => {
      const $el = jQuery(el);
      let options = {};

      const dataOptions = el.getAttribute("data-slick-options");
      if (dataOptions) {
        try {
          // Replace escaped quotes for HTML attributes
          const cleaned = dataOptions
            .replace(/(\r\n|\n|\r)/gm, "") // strip newlines
            .replace(/&quot;/g, '"'); // in case HTML encodes them
          options = JSON.parse(cleaned);
        } catch (e) {
          console.error("Invalid JSON in data-slick-options:", e, dataOptions);
        }
      }

      if (!$el.hasClass("slick-initialized")) {
        $el.slick(options);
      }
    });
  } else {
    console.warn("jQuery or Slick not loaded");
  }
});
