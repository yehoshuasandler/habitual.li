import Event from './Event.js'

class RecurringEvent extends Event {
  constructor(props) {
    super(props)

    this.frequency = props.frequency
    this.time = props.time
  }

  getFrequency = () => this.frequency
  
  getTime = () => this.time

  setTime = t => {
    this.time = t || this.time
    return this.time
  }

  setFrequency = f => {
    this.frequency = f || this.frequency
    return this.frequency
  }
}

export default RecurringEvent
