import indexTemplate from './indexTemplate.html'
import AddHabbitForm from './components/AddHabbit/AddHabbitForm.js'
import HabbitList from './components//HabbitList/HabbitList.js'

class IndexView extends HTMLElement {
  constructor(props) {
    super(props)

    const shadow = this.attachShadow({mode: 'open'})
    const template = document.createElement('template')
    template.innerHTML = indexTemplate
    shadow.appendChild(template.content.cloneNode(true))

    const element = shadow.querySelector('#index')
    const addHabbitForm = new AddHabbitForm()
    const habbitList = new HabbitList()
    element.appendChild(addHabbitForm)
    element.appendChild(habbitList)
  }
}

export default IndexView