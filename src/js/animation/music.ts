import AbsSection from './absSection'

class Music extends AbsSection {
  constructor() {
    super('.music')

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
    const melody = this.scene.querySelector('#music__melody')
    const firstBg = this.scene.querySelector('#music__bg1')
    const secondBg = this.scene.querySelector('#music__bg2')

    const defaultValues = {
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    }

    this.tl
      .to(melody, { y: '+=5', skewX: '5deg', ...defaultValues }, 'start')
      .to(firstBg, { y: '+=5', ...defaultValues }, 'start')
      .to(secondBg, { x: '+=5', ...defaultValues }, 'start')
  }

  init() {
    super.init()
    this.loopAnimation()
  }
}

export default Music
