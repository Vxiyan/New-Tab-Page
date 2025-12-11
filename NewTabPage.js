// NewTabPage.js

// Target the button using its class name 'menu-toggle'
const menuToggleButton = document.querySelector('.menu-toggle');

// Target the popup menu using its ID 'popupMenu'
const popupMenu = document.getElementById('popupMenu');

// Add the event listener to the button
if (menuToggleButton && popupMenu) {
    menuToggleButton.addEventListener('click', function(event) {
        // Stop the button from potentially submitting a form or navigating
        event.preventDefault();
        
        // Toggle the 'visible' class on the popup menu
        popupMenu.classList.toggle('visible');
    });
} else {
    console.error("Error: Could not find .menu-toggle or #popupMenu elements.");
}
