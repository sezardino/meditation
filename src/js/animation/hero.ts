import gsap from 'gsap'
import AbsSection from './absSection'

class Hero extends AbsSection {
  tl: GSAPTimeline

  constructor() {
    super('.hero')
    this.tl = gsap.timeline()

    this.withHeader()
    this.init()
  }

  showAnimation() {
    const elements = Array.from(this.headerElements)
    this.tl.set([this.headerElements, this.scene], { opacity: 0 })
    this.tl.from(
      [elements, this.scene],
      { x: '-=100', opacity: 1, duration: 2, stagger: 0.8 },
      2
    )
  }

  loop() {
    const front = this.scene.querySelector('#hero__front')
    const bgElements = this.scene.querySelectorAll('#hero__bg path')
    const circles: Element[] = []
    bgElements.forEach((item: Element) => {
      const id = item.getAttribute('id')
      if (!id?.includes('orbit_')) {
        circles.push(item)
      }
    })
    const defaultValues = {
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      duration: 2,
    }
    this.tl
      .addLabel('startLoop')
      .to(front, { y: '+=10', ...defaultValues }, 'startLoop')
      .to(circles, { y: '+=5', ...defaultValues }, 'startLoop')
  }

  init() {
    this.showAnimation()
    this.loop()
  }
}

export default Hero
