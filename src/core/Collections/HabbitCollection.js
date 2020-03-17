import createHabbit from '../UseCases/createHabbit.js'
import editHabbit from '../UseCases/editHabbitProperties.js'
import getHabbitProperties from '../UseCases/getHabbitProperties.js'

let instance = null

class HabbitCollection {
  constructor() {
    if (!instance) { instance = this }

    this.habbits = []
    return instance
  }

  destructor() {
    instance = null
  }

  addHabbit = props => {
    try {
      const habbit = createHabbit(props)
      this.habbits.push(habbit)
    } catch (err) {
      console.log(err)
    }
  }

  addHabbits = propsArray => {
    propsArray.forEach(p => {
      try {
        const habbit = createHabbit(p)
        this.habbits.push(habbit)
      } catch (err) {
        console.log(err)
      }
    })
  }

  findHabbits = props => {
    const found = this.habbits.filter(h => {
      return h.id === props.id || h.name === props.name
    }).map(h => {
      return getHabbitProperties(h)
    })
    return found
  }

  findOneHabbit = props => {
    const found = this.habbits.find(h => {
      return h.id === props.id || h.name === props.name
    })
    return getHabbitProperties(found)
  }
  
  findOneHabbitAndUpdate = (oldProps, newProps) => {
    const habbitIndex = this.findOneHabbitIndex(oldProps)
    editHabbit(this.habbits[habbitIndex], newProps)
    return this.habbits[habbitIndex]
  }

  findOneHabbitIndex = props => {
    const index = this.habbits.findIndex(h => {
      return h.id === props.id || h.name === props.name
    })
    return index
  }

  getHabbits = () => {
    const habbits = this.habbits.map(h => {
      return getHabbitProperties(h)
    })
    return habbits
  }
}

export default HabbitCollection
