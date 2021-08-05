import gsap from 'gsap'
import { breakpoints } from '../utils/const'

class Site {
  tl: GSAPTimeline
  header: HTMLElement
  main: HTMLElement
  footer: HTMLElement

  constructor() {
    this.tl = gsap.timeline()
    this.header = document.querySelector('.header')
    this.main = document.querySelector('main')
    this.footer = document.querySelector('.footer')

    this.init()
  }

  desktopAnimation() {
    const sections = Array.from(this.main.children)

    const fromToValue = { y: 0, opacity: 1 }
    this.tl.set([this.header, ...sections, this.footer], { opacity: 0 })
    this.tl
      .fromTo(this.header, { y: '-=100' }, fromToValue)
      .to(sections, { y: '+=50', stagger: 0.4, opacity: 1 })
      .fromTo(this.footer, { y: '+=100' }, fromToValue)
  }

  mobileAnimation() {
    const toggler = this.header.querySelector('.menu-toggler')
    const sections = this.main.children
    this.tl.set([toggler, sections], { opacity: 0, duration: 2 })
    this.tl.from(toggler, { x: '-=100', rotate: '-180deg', opacity: 1 })
    this.tl.from(sections, { x: '-=100', opacity: 1 })
  }

  init() {
    if (window.innerWidth >= breakpoints.lg) {
      this.desktopAnimation()
    } else {
      this.mobileAnimation()
    }
  }
}

export default Site
