import HabbitLineItem from './HabbitLineItem.js'
import HabbitCollection from '../../../../core/Collections/HabbitCollection.js'

class HabbitList extends HTMLElement {
  constructor () {
    super ()
    this.habbitCollection = new HabbitCollection()
    document.addEventListener('addHabit', () => { this.update() })
    
    this.shadow = this.attachShadow({ mode: 'open' })
    const element = document.createElement('ul')
    element.setAttribute('id', 'habbitList')
    this.shadow.appendChild(element)

  }

  addHabbitElementsToView = elements => {
    const unorderedList = this.shadow.querySelector('#habbitList')
    elements.forEach(e => {
      unorderedList.appendChild(e)
    })
  }

  createHabbitElements = () => {
    const habbits = this.habbitCollection.getHabbits()
    const habbitElements = habbits.map(h => {
      return new HabbitLineItem({
        innerText: h.name,
        habbitId: h.id
      })
    })
    return habbitElements
  }

  removeCurrentHabbitElements = () => {
    const unorderedList = this.shadow.querySelector('#habbitList')
    unorderedList.innerHTML = ''
  }

  update = () => {
    this.removeCurrentHabbitElements()
    const habbitElements = this.createHabbitElements()
    this.addHabbitElementsToView(habbitElements)
  }
}

export default HabbitList
