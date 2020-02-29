//Global variables
const nav = document.getElementById('nav');
const links = document.getElementById('nav-links');
let toggleState = false;

//Toggles the burger menu on mobile devices with slide and fade effect
function toggleMenu() {
  if (toggleState == false) {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    links.style.transition = '500ms ease';
    links.style.height = '100px';
    toggleState = true;
  }
  else {
    links.style.height = '0';
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    toggleState = false;
  }
}

//Solves issue where nav dissappears after clicking burger menu and resizing window (affects iPad)
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    nav.removeAttribute('style');
    links.removeAttribute('style');
    toggleState = false;
  }
})