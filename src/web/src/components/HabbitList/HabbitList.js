import HabbitCollection from '../../../../core/Collections/HabbitCollection.js'
import HabbitLineItem from './HabbitLineItem.js'
import habbitListTemplate from './HabbitListTemplate.html'

class HabbitList extends HTMLElement {
  constructor () {
    super ()
    this.habbitCollection = new HabbitCollection()
    document.addEventListener('addHabit', () => { this.update() })
    
    this.shadow = this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = habbitListTemplate
    this.shadow.appendChild(template.content.cloneNode(true))

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
