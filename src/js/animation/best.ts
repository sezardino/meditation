import AbsSection from './absSection'

class Best extends AbsSection {
  constructor() {
    super('.best')

    this.withItems()
    this.withHeader()
    this.init()
  }

  showAnimation() {
    this.tl
      .fromTo(
        this.headerElements,
        { opacity: 0, x: '-=100' },
        { opacity: 1, x: 0, stagger: 0.4 }
      )
      .fromTo(
        this.items,
        { opacity: 0, x: '+=200' },
        { opacity: 1, duration: 2, x: 0, stagger: 0.5 }
      )
  }
}

export default Best
