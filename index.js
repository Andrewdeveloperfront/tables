// Get the navbar
var navbar = document.getElementById("navbar");

// Get the initial scroll position
var prevScrollpos = window.pageYOffset;

// Event listener for scrolling
window.onscroll = function() {
    // Get the current scroll position
    var currentScrollPos = window.pageYOffset;
    // If the previous scroll position is greater than the current one, show the navbar
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        // Otherwise, hide the navbar
        navbar.style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}
