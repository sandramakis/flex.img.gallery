"use script";
const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);

  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

// Listen for a click event on each panel
panels.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
});

// Listen for a transition end
panels.forEach((panel) => {
  panel.addEventListener("transitionend", toggleActive);
});
