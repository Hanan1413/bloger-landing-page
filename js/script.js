const hamburgerIcon = document.getElementById("toggle-btn");
const mobileHeader = document.querySelector(".mobile-header"); // Selecting the single element
const navLinks = document.querySelectorAll(".nested-mobile");
const mobileNav = document.querySelector(".mobile-nav");
const links = document.querySelectorAll(".link");
// cost toggleBtn = document.querySelector('')

const header = document.getElementById("header");
// console.log(topLevelLinks)
console.log(hamburgerIcon);
console.log(navLinks);
console.log(mobileHeader);
console.log(mobileNav);

hamburgerIcon.addEventListener("click", () => {
  header.classList.toggle("active");
  mobileNav.classList.toggle("menu");
 
});


// Selecting the first three elements from the NodeList
const selectedLinks = [links[0], links[1], links[2]];
console.log(selectedLinks)

// addEventListener of click for each nav link

selectedLinks.forEach((link) => {
  link.addEventListener("click", function(e) {
      // Prevent the default behavior of the anchor tag
      e.preventDefault();
    const isOpen = this.classList.contains("open");
    
    selectedLinks.forEach((item) => {
      item.classList.remove("open");
    });

    if (!isOpen) {
      this.classList.add("open");
    }
  });
});




