import gsap from 'gsap'

class Hero {
  tl: GSAPTimeline
  hero: HTMLElement
  header: HTMLElement
  scene: HTMLElement

  constructor() {
    this.tl = gsap.timeline()
    this.hero = document.querySelector('.hero')
    this.header = this.hero.querySelector('.hero__header')
    this.scene = this.hero.querySelector('.hero__img')

    this.init()
  }

  show() {
    this.tl.set([this.header, this.scene], { opacity: 0 })
    this.tl
      .from(this.header, { x: '-=200', opacity: 1, duration: 2 })
      .fromTo(this.scene, { x: '-=100' }, { x: 0, opacity: 1, duration: 1.5 })
  }

  loop() {
    const girl = this.scene.querySelector('#girl')
    const bgElements = this.scene.querySelectorAll('#bg path')
    const orbits: Element[] = []
    const circles: Element[] = []

    bgElements.forEach((item: Element) => {
      const id = item.getAttribute('id')
      if (id.includes('circle')) {
        orbits.push(item)
      } else if (id.includes('Vector')) {
        circles.push(item)
      }
    })

    this.tl
      // .defaults({
      // ease: 'power1.inOut',
      // yoyo: true,
      // repeat: -1,
      // })
      .addLabel('start')
      .to(
        girl,
        {
          y: '+=5',
          duration: 2,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
        },
        'start'
      )
      .to(
        circles,
        {
          y: '+=10',
          duration: 1,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
        },
        'start'
      )
      .to(
        orbits,
        {
          y: '-=15',
          duration: 2,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
        },
        'start'
      )
  }

  init() {
    this.show()
    this.loop()
  }
}

export default Hero
