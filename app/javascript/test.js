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
    threshold: 0.2 // Adjust threshold as needed
  });

  animation_elements.forEach((element) => {
    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const animation_elements = document.querySelectorAll(".animate_on_scroll_left");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      } else {
        entry.target.classList.remove("animated");
      }
    });
  }, {
    threshold: 0.2 // Adjust threshold as needed
  });

  animation_elements.forEach((element) => {
    observer.observe(element);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const mainnav = document.getElementById("mainnav");

  let hasScrolled = false;

  window.addEventListener("scroll", function() {
    if (!hasScrolled) {
      mainnav.classList.add("blacktime");
      hasScrolled = true;
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        mainnav.classList.remove("blacktime");
      }
    });
  }, {
    threshold: 0.2 // Adjust threshold as needed
  });

  observer.observe(mainnav);
});

