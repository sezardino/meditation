import AbsSection from './absSection'

class Practice extends AbsSection {
  constructor() {
    super('.practice')

    this.withHeader()
    this.init()
  }

  showAnimation() {
    const elements = this.section.querySelectorAll('li')

    this.tl
      .fromTo(
        this.headerElements,
        { opacity: 0, x: '-=100' },
        { opacity: 1, x: 0, stagger: 0.4 }
      )
      .fromTo(
        elements,
        { opacity: 0, x: '+=200' },
        { opacity: 1, duration: 2, x: 0, stagger: 0.5 }
      )
  }
}

export default Practice
