'use strict'

let menu = document.querySelector('.nav')

document.onclick = (e) => {
  if (e.target.nodeName === 'A' && (window.pageXOffset || document.documentElement.scrollWidth) < '768' && !e.target.classList.contains('gotop')) {
    menu.setAttribute('style', 'display:none')
    document.querySelector('.menu-button-checkbox').checked = false
  } else if (e.target.nodeName === 'INPUT') {
    menu.removeAttribute('style')
  } else if (e.target.classList.contains('gotop') || e.target.classList.contains('fa')) {
    e.preventDefault()
    goTop()
  }
}

window.onresize = () => {
  if (event.target.innerWidth >= '768') {
    document.querySelector('.menu-button-checkbox').checked = false
    menu.removeAttribute('style')
  }
};

window.onscroll = (e) => {
  let scroll = (window.pageYOffset || document.documentElement.scrollTop)
  if (scroll > 120) {
    document.querySelector('#header').classList.add('shrink')
    document.querySelector('.gotop').classList.add('gotop_show')
  } else if (scroll < 20) {
    document.querySelector('#header').classList.remove('shrink')
    document.querySelector('.gotop').classList.remove('gotop_show')
  }
}

function goTop() {
  let currentLocation = parseFloat(window.pageYOffset || document.documentElement.scrollTop)
  // let upUnit = parseFloat(currentLocation / 30)
  let upUnit=150
  window.scrollTo(0, currentLocation - upUnit)
  if (currentLocation > 0) {
    setTimeout(goTop, 8)
  }
}