//Global variables
const nav = document.getElementById('nav');
const menu = document.getElementById('nav-menu');
let toggleState = false;

//Toggles the burger menu on mobile devices
function toggleMenu() {
  if (toggleState == false) {
    menu.style.display = 'block';
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    toggleState = true;
  }
  else {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    menu.style.display = 'none';
    toggleState = false;
  }
}

//Solves issue where nav dissappears after clicking burger menu and resizing window
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    nav.removeAttribute('style');
    menu.removeAttribute('style');
    toggleState = false;
  }
})