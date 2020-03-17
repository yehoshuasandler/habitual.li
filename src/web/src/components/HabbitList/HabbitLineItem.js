class HabitLineItem extends HTMLElement {
  constructor (props) {
    super (props)

    this.shadow = this.attachShadow({ mode: 'open' })
    const element = document.createElement('li')
    element.innerText = props.innerText
    element.setAttribute('class', 'habitLineItem')
    element.setAttribute('habbit-id', props.habbitId)
    this.shadow.appendChild(element)
  }
}

export default HabitLineItem
