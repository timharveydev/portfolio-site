//GLOBAL VARIABLES
const nav = document.getElementById('nav');
const links = document.getElementById('nav-links');
let toggleState = false;

//Toggles the burger menu on mobile devices with slide and fade effect
const toggleMenu = () => {
  if (toggleState == false) {
    nav.style.transition = '500ms ease';
    links.style.transition = '500ms ease';
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    links.style.height = '100px';
    toggleState = true;
  }
  else {
    links.style.height = '0';
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    toggleState = false;
  }
}

//Removes burger menu specific attributes for larger screens
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    nav.removeAttribute('style');
    links.removeAttribute('style');
    toggleState = false;
  }
})