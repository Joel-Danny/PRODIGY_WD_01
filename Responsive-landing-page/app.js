// Get references to DOM elements
const navId = document.getElementById("nav_menu");
const ToggleBtnId = document.getElementById("toggle_btn");
const CloseBtnId = document.getElementById("close_btn");

// Function to show the navigation menu
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// Function to hide the navigation menu
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// Initialize AOS library for animations
AOS.init();

// GSAP animations

// Animate logo with opacity and y-position
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// Animate navigation menu items with opacity, y-position, and stagger
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});

// Animate toggle button with opacity and y-position
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});

// Animate main heading with opacity and y-position
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 1,
});

// Animate info text with opacity and y-position
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

// Animate CTA buttons with opacity and y-position
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

// Animate team image with opacity and y-position
gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});
