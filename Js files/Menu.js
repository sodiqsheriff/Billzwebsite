// Toggle menu state when clicking on menu or exit button
document.getElementById('menu-btn').addEventListener('click', toggleMenu);
document.getElementById('exit-btn').addEventListener('click', toggleMenu);

// Close the menu when clicking outside of it
document.addEventListener('mouseup', function (e) {
  var menu = document.getElementById('menu');
  var menuBtn = document.getElementById('menu-btn');
  var exitBtn = document.getElementById('exit-btn');
  var toggleMenu = document.getElementById('toggle-menu');

  if (!menu.contains(e.target) && !menuBtn.contains(e.target) && !exitBtn.contains(e.target)) {
    toggleMenu.checked = false;
  }
});

function toggleMenu() {
  var toggleMenu = document.getElementById('toggle-menu');
  toggleMenu.checked = !toggleMenu.checked;
}