document.addEventListener("DOMContentLoaded", function() {
  const animation_elements = document.querySelectorAll(".animate_on_scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      } else {
        entry.target.classList.remove("animated");
      }
    });
  }, {
    threshold: 0.5 // Adjust threshold as needed
  });

  animation_elements.forEach((element) => {
    observer.observe(element);
  });
});
