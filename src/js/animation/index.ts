import Site from './site'
import Hero from './hero'

class Animation {
  constructor() {
    this.init()
  }

  init() {
    new Site()
    new Hero()
  }
}

export default Animation
