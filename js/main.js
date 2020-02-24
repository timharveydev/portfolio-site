//Global variables
const nav = document.getElementById('nav');
const links = document.getElementById('nav-links');
let toggleState = false;

//Toggles the burger menu on mobile devices
function toggleMenu() {
  if (toggleState == false) {
    links.style.display = 'block';
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    toggleState = true;
  }
  else {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    links.style.display = 'none';
    toggleState = false;
  }
}

//Solves issue where nav dissappears after clicking burger menu and resizing window
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    nav.removeAttribute('style');
    links.removeAttribute('style');
    toggleState = false;
  }
})