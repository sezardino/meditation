import gsap from 'gsap'
import { breakpoints } from '../utils/const'

class Menu {
  header: HTMLElement
  menuToggler: HTMLElement
  nav: HTMLElement

  constructor() {
    this.header = document.querySelector('.header')
    this.menuToggler = this.header.querySelector('.menu-toggler')
    this.nav = this.header.querySelector('.header__container')

    this.init()
  }

  menuAnimation() {
    const lines = this.menuToggler.children
    const tl = gsap.timeline({ paused: true })

    tl.addLabel('start')
      .to(lines[0], { rotate: '45deg', y: '+=15' }, 'start')
      .to(lines[1], { rotate: '-45deg' }, 'start')
      .to(lines[2], { y: '-=50', opacity: 0 }, 'start')
      .to(this.nav, { x: '+=150%' })

    return tl
  }

  addListeners() {
    const menuAnimation = this.menuAnimation()
    this.menuToggler.addEventListener('click', (evt) => {
      evt.preventDefault()

      if (!this.menuToggler.classList.contains('active')) {
        menuAnimation.play()
        this.menuToggler.classList.add('active')
      } else {
        menuAnimation.reverse()
        this.menuToggler.classList.remove('active')
      }
    })
  }

  init() {
    if (window.innerWidth <= breakpoints.lg) {
      this.addListeners()
    }
  }
}

export default Menu
