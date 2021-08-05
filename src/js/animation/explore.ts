import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { breakpoints } from '../utils/const'

import AbsSection from './absSection'

class Explore extends AbsSection {
  tl: GSAPTimeline

  constructor() {
    super('.explore')

    this.withItems()
    this.init()
  }

  showAnimation(isMobile: Boolean = false) {
    const defaultValues = { duration: 1, opacity: 0 }

    this.tl
      .addLabel('start')
      .from(this.items[0], { x: '-=400', ...defaultValues }, 'start')
      .from(
        this.items[1],
        {
          y: !isMobile ? '+=400' : '0',
          x: isMobile ? '+=400' : '0',
          ...defaultValues,
        },
        'start+0.5'
      )
      .from(
        this.items[2],
        { x: isMobile ? '-=400' : '+=400', ...defaultValues },
        'start+1'
      )
  }
}

export default Explore
