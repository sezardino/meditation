import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { breakpoints } from '../utils/const'

abstract class AbsSection {
  tl: GSAPTimeline
  section: HTMLElement
  header: HTMLElement
  headerElements: HTMLCollection
  scene: HTMLElement
  items: NodeListOf<HTMLLIElement>

  constructor(sectionSelector: string) {
    this.section = document.querySelector(sectionSelector)
    this.scene = this.section.querySelector(sectionSelector + '__img')
  }

  abstract showAnimation(isMobile?: Boolean): void

  withHeader() {
    this.header = this.section.querySelector('header')
    this.headerElements = this.header.children
  }

  withItems() {
    this.items = this.section.querySelectorAll('li')
  }

  init() {
    gsap.registerPlugin(ScrollTrigger)
    this.tl = gsap.timeline({
      scrollTrigger: { trigger: this.section, start: 'top 50%' },
    })
    if (window.innerWidth >= breakpoints.lg) {
      this.showAnimation()
    } else {
      this.showAnimation(true)
    }
  }
}

export default AbsSection
