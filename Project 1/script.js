const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "70px";
    navLinks.style.right = "20px";
    navLinks.style.background = "white";
    navLinks.style.padding = "1rem";
    navLinks.style.borderRadius = "10px";
    navLinks.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  }
});
