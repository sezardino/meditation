import AbsSection from './absSection'

class Transformation extends AbsSection {
  constructor() {
    super('.transformation')

    this.withItems()
    this.withHeader()
    this.init()
  }

  showAnimation() {
    this.tl
      .addLabel('start')
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

  loopAnimation() {
    const words = [
      this.section.querySelector('#word'),
      this.section.querySelector('#word2'),
    ]

    const defaultValues = {
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    }

    this.tl.to(words, { y: '+=5', skewX: '5deg', ...defaultValues }, 'start')
  }

  init() {
    super.init()
    this.loopAnimation()
  }
}

export default Transformation
