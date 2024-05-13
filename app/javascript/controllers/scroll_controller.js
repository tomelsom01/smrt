import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  disconnect() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    var image2 = this.element.querySelector(".homepageimagecard2");
    var scrollPosition = window.scrollY;

    // Define the point where you want the image to appear
    var triggerPoint = window.innerHeight;

    // If scroll position is past the trigger point, show the image
    if (scrollPosition > triggerPoint) {
      image2.style.top = "0";
    } else {
      image2.style.top = "100vh"; // Hide the image again
    }
  }
}

console.log("scroll_controller.js loaded");
