// jarallax-init.js
document.addEventListener("DOMContentLoaded", () => {
  if (window.jarallax) {
    document.querySelectorAll(".jarallax").forEach((el) => {
      let options = {};

      // Collect options from attributes
      if (el.hasAttribute("data-speed")) {
        options.speed = parseFloat(el.getAttribute("data-speed"));
      }
      if (el.hasAttribute("data-imgPosition")) {
        options.imgPosition = el.getAttribute("data-imgPosition");
      }

      // Initialize jarallax on element
      jarallax(el, options);
      alert("Jarallax initialized on " + el.className);
    });
  } else {
    console.warn("Jarallax not loaded");
  }
});
