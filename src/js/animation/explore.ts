import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

class Explore {
  tl: GSAPTimeline
  section: HTMLElement
  items: NodeList

  constructor() {
    this.section = document.querySelector('.explore')
    this.items = this.section.querySelectorAll('li')
    this.init()
  }

  start() {
    this.tl
      .addLabel('start')
      .from(
        this.items[0],
        {
          x: '-=400',
          duration: 1,
          opacity: 0,
        },
        'start'
      )
      .from(this.items[2], { x: '+=400', opacity: 0, duration: 1 }, 'start')
      .from(this.items[1], { y: '+=200', opacity: 0, duration: 1 }, 'start')
  }

  init() {
    gsap.registerPlugin(ScrollTrigger)
    this.tl = gsap.timeline({
      scrollTrigger: {
        markers: true,
        trigger: this.section,
        start: 'top 50%',
      },
    })

    this.start()
  }
}

export default Explore
