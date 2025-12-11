// NewTabPage.js

// Target all elements with the class 'menuIcon'
const menuIcons = document.querySelectorAll('.menuIcon');

// Target the popup menu using its ID 'popupMenu'
const popupMenu = document.getElementById('popupMenu');

// If elements exist, add the click listener to each one found
if (menuIcons.length > 0 && popupMenu) {
    menuIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.preventDefault();
            popupMenu.classList.toggle('visible');
        });
    });
} else {
    console.error("Error: Could not find .menuIcon or #popupMenu elements.");
}
