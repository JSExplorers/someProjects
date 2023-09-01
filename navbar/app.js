const navToggler = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggler.addEventListener('click', function () {
  links.classList.contains('show-links')
    ? links.classList.remove('show-links')
    : links.classList.add('show-links');
});

// navToggler.addEventListener('click', function(){
//     links.classList.toggle('show-links')
// })
//
