 // Get the elements by their IDs
const menuIcon = document.getElementById('menuIcon');
const popupMenu = document.getElementById('popupMenu');

// Add an event listener to the icon
menuIcon.addEventListener('click', function() {
  // Toggle the 'visible' class on the popup menu
  popupMenu.classList.toggle('visible');
});

// Optional: Add functionality to close the menu if the user clicks outside of it
document.addEventListener('click', function(event) {
  const isClickInside = menuIcon.contains(event.target) || popupMenu.contains(event.target);

  if (!isClickInside) {
    // If the click happened outside the menu or icon, hide the menu
    popupMenu.classList.remove('visible');
  }
});
