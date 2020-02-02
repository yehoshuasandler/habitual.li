import createHabbit from '../UseCases/createHabbit.js'
import editHabbit from '../UseCases/editHabbitProperties.js'
import getHabbitProperties from '../UseCases/getHabbitProperties.js'

class HabbitController {
  constructor() {
    this.habbits = []
  }

  addNewHabbit = props => {
    try {
      const habbit = createHabbit(props)
      this.habbit.push(habbit)
    } catch (err) {
      console.log(err)
    }
  }

  editHabbit = (h, newProps) => {
    editHabbit(h, newProps)
    return h
  }

  findHabbits = props => {
    const found = this.habbits.filter(h => {
      return h.id === props.id || h.name === props.name
    })
    return found
  }

  findOneHabbit = props => {
    const found = this.habbits.find(h => {
      return h.id === props.id || h.name === props.name
    })
    return found
  }

  getHabbits = () => {
    this.habbits.map(h => {
      return getHabbitProperties(h)
    })
  }
}

export default HabbitController
