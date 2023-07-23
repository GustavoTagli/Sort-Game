import Game from "./Game.js"

export default class Component {
  #element = null
  static #capacityMax = 5

  constructor(color) {
    this.color = color
    this.build()
  }

  findColor(color) {
    return Game.listComponentsColors.find(item => item.color === color)
  }

  build() {
    this.#element = document.createElement('span')
    this.#element.style.backgroundColor = this.color
    return this
  }

  render(tube) {
    if (this.findColor(this.color).qty === Component.#capacityMax) return
    tube.listComponents.push(this)
    const parent = document.getElementById('tube-' + tube.identifier)
    parent.appendChild(this.#element)
    this.findColor(this.color).qty++
  }

  unrender(tube) {
    const parent = document.getElementById('tube-' + tube.identifier)
    parent.removeChild(this.#element)
    this.findColor(this.color).qty--
  }
}