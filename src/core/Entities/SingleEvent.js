import Event from './Event.js'

class SingleEvent extends Event {
  constructor(props) {
    super(props)
    this.date = props.date
    this.time = props.time
  }

  getDate = () => this.date

  getTime = () => this.time

  setTime(t) {
    this.time = t || this.time
    return this.time
  }

  setDate(d) {
    this.date = d || this.date
    return this.date
  }
}

export default SingleEvent
