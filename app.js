var menuToggle = document.getElementById('menu-toggle');
var navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', function() {
  navList.style.display = (navList.style.display === 'none') ? 'block' : 'none';
});
