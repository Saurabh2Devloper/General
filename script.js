// JS code for the website

// Get the navigation links
const homeLink = document.getElementById("home");
const aboutLink = document.getElementById("about");
const contactLink = document.getElementById("contact");

// Add click event listeners to the navigation links
homeLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior
  console.log("Home link clicked");
});

aboutLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior
  console.log("About link clicked");
});

contactLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior
  console.log("Contact link clicked");
});
