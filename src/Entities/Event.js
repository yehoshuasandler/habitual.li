class Event {
  constructor(props) {
    this.id = props.id
    this.habbitId = props.habbitId
    this.name = props.name
  }

  getId = () => this.id

  getHabbitId = () => this.habbitId

  getName = () => this.name

  setHabbitId = id => {
    this.habbitId = id
    return this.habbitId
  }

  setName = name => {
    this.name = name || this.name
    return this.name
  }
}

export default Event
