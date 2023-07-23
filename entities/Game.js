import Tube from "./Tube.js"

export default class Game {
  static #listComponentsColors =  []
  clickedComponent = false
  play = {
    from: null,
    to: null
  }

  constructor(listComponentsColors) {
    this.endGame = false
    this.tubes = []
    this.tubesCorrects = []
    this.startGame(listComponentsColors)
  }

  static set listComponentsColors(colors) {
    colors.forEach(color => {
      Game.#listComponentsColors.push({color, qty: 0})
    })
  }

  static get listComponentsColors() {
    return Game.#listComponentsColors
  }

  startGame(listComponentsColors) {
    Game.listComponentsColors = listComponentsColors
    this.createTubes()
    this.addEventToTubes()
    this.createComponents()
  }

  gameIsOver() {
    const tubesCorrects = this.tubes.filter(tube => tube.isCorrect)
    if (tubesCorrects.length >= 6) {
      this.endGame = true
      console.log('Game Over')
      return true
    }
  }

  createTubes() {
    for (let i = 0; i < 8; i++) {
      const tube = new Tube(i)
      this.tubes.push(tube)
    }
  }

  createComponents() {
    this.tubes.forEach(tube => {
      const randomListColors = []

      if (tube.identifier === 7 || tube.identifier === 6) return

      while (!tube.isFull){
        const randomColor = this.#randomRange(0, Game.listComponentsColors.length - 1)
        randomListColors.push(randomColor)
        tube.addComponent(Game.listComponentsColors[randomColor].color)
      }
    })
  }

  #randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  addEventToTubes(){
    document.querySelectorAll('.tube').forEach(tube => {
      const makePlay = () => {
        if (!this.clickedComponent) {
          this.clickedComponent = true
          this.play.from = this.tubes[tube.id.slice(-1)]
        } else if (this.clickedComponent) {
          this.clickedComponent = false
          this.play.to = this.tubes[tube.id.slice(-1)]
          if (!this.play.to.isFull) {
            let countSameColors = 0
            let SameColors = true
            const componentToBeMoved = this.play.from.listComponents
            const arrAux =[...componentToBeMoved].reverse()
            arrAux.forEach((component, index) => {
              if (SameColors && component.color === arrAux[index-1]?.color || index === 0) {
                countSameColors++
              } else {
                SameColors = false
                return
              }
            })
            
            if (this.play.to.capacityMax >= this.play.to.listComponents.length + countSameColors){
              for (let i = 0; i < countSameColors; i++) {
                this.play.to.addComponent(this.play.from.removeComponent().color)
              }
            }

            if (this.play.to.checkIsCorrect()) this.play.to.tubeElement.removeEventListener('click', makePlay)
            this.gameIsOver()
          }
        }
      }
      tube.addEventListener('click', makePlay)
    })
  }
}