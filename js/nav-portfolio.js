//Adds bg image to navbar when scrolling past the banner section on non-mobile devices
//Const 'nav' declared in 'burger.js'
window.onscroll = () => {
  if (window.innerWidth >= 1024) {
    const scrollHeight = document.getElementById('banner').clientHeight - nav.clientHeight;
    if (document.body.scrollTop >= scrollHeight || document.documentElement.scrollTop >= scrollHeight)
      nav.classList.add('scroll');
    else
      nav.classList.remove('scroll');
  }
};

//Remove navbar specific attributes for smaller screens
window.addEventListener('resize', () => {
  if (window.innerWidth < 1024)
    nav.classList.remove('scroll');
})