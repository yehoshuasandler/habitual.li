class Habbit {
  constructor(props) {
    this.id = props.id
    this.name = props.name
  }

  getId = () => this.id

  getName = () => this.name

  setName = newName => {
    this.name = newName || this.name
  } 
}

export default Habbit
