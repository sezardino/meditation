import Site from './site'
import Hero from './hero'
import Explore from './explore'

class Animation {
  constructor() {
    this.init()
  }

  init() {
    new Site()
    new Hero()
    new Explore()
  }
}

export default Animation
