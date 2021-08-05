import Site from './site'
import Hero from './hero'
import Explore from './explore'
import Menu from './menu'
import Practice from './practice'
import Music from './music'
import Best from './best'
import Transformation from './transformation'

class Animation {
  constructor() {
    this.init()
  }

  init() {
    new Site()
    new Menu()
    new Hero()
    new Explore()
    new Practice()
    new Music()
    new Best()
    new Transformation()
  }
}

export default Animation
