var navLinks = document.querySelectorAll('.nav-links>.features, .company') 
var mobileButton = document.querySelector('.menu')
var nav = document.querySelector('.nav-links')
var width = window.screen.width


if (width<1200) {
  nav.classList.add('mobile-hidden')
}

navLinks.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.children[0].classList.remove('hidden') 
    item.children[1].children[1].classList.add('rotate-image') 
  })
  item.addEventListener('mouseout', () => {
    item.children[0].classList.add('hidden')  
    item.children[1].children[1].classList.remove('rotate-image')  
  })
})

mobileButton.addEventListener('touchstart', () => {
  nav.classList.toggle('mobile-hidden')
  navLinks.forEach(i => {
    i.addEventListener('click', () => {
      i.children[0].classList.toggle('hidden')  
      i.children[1].children[1].classList.toggle('rotate-image')  
    })
  })
})

 