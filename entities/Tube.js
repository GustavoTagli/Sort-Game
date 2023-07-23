import Component from "./Component.js"

export default class Tube {
  static #capacityMax = 5
  #tubeElement = null

  constructor(identifier) {
    this.identifier = identifier
    this.listComponents = []
    this.isFull = false
    this.isCorrect = false
    this.renderTube()
  }

  get capacityMax() {
    return Tube.#capacityMax
  }

  get tubeElement() {
    return this.#tubeElement
  }

  checkIsCorrect() {
    const countSameColors = this.listComponents.reduce((accum, {color}) => {
      if (color === this.listComponents[0].color) accum++
      return accum
    }, 0)
    countSameColors === this.listComponents.length && this.listComponents.length === Tube.#capacityMax ? this.isCorrect = true : this.isCorrect = false
    return this.isCorrect
  }

  verifyIsFull() {
    if (this.listComponents.length === Tube.#capacityMax) this.isFull = true
    return this.isFull
  }

  addComponent(color) {
    if (!this.verifyIsFull()) {
      const component = new Component(color)
      component.render(this)
    }
  }

  removeComponent() {
    const componentOnTop = this.listComponents.pop()
    componentOnTop.unrender(this)
    this.isFull = false
    return componentOnTop
  }


  createTube() {
    this.#tubeElement = document.createElement('div')
    const options = {
      id: 'tube-' + this.identifier,
      className: 'tube'
    }
    Object.assign(this.#tubeElement, options)
    return this.#tubeElement
  }

  renderTube() {
    const parent = document.querySelector('#gameArea')
    parent.appendChild(this.createTube())
  }
}