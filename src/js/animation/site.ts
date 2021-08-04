import gsap from 'gsap'

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

  init() {
    this.tl.set([this.header, this.main, this.footer], { opacity: 0 })
    this.tl
      .fromTo([this.header], { y: '-=100' }, { y: 0, opacity: 1 })
      .fromTo([this.footer], { y: '+=100' }, { y: 0, opacity: 1 })
      .to(this.main, { opacity: 1 })
  }
}

export default Site
