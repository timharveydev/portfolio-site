//GLOBAL VARIABLES
const nav = document.getElementById('nav');
const links = document.getElementById('nav-links');
const landingPage = document.getElementById('landing-page');
const banner = document.getElementById('banner');
let toggleState = false;



//BURGER MENU

//Toggles the burger menu on mobile devices with slide and fade effect
function toggleMenu() {
  if (toggleState == false) {
    nav.style.transition = '500ms ease';
    links.style.transition = '500ms ease';
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
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



//NAVBAR

//Adds a background to the navbar when scrolling past the landing page
window.onscroll = () => {
  if (window.innerWidth >= 1024) {
    const heightToScroll = landingPage.clientHeight - nav.clientHeight;
    if (document.body.scrollTop >= heightToScroll || document.documentElement.scrollTop >= heightToScroll)
      nav.classList.add('scroll');
    else
      nav.classList.remove('scroll');
  }
};

//Remove navbar specific attributes for smaller screens
window.addEventListener('resize', () => {
  if (window.innerWidth < 1024) {
    nav.classList.remove('scroll');
  }
})