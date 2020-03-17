import IndexView from './IndexView.js'
import AddHabbitForm from './components/AddHabbit/AddHabbitForm.js'
import HabitList from './components/HabbitList/HabbitList.js'
import HabitLineItem from './components/HabbitList/HabbitLineItem.js'

import './index.css'

const main = () => {
  customElements.define('index-view', IndexView)
  customElements.define('add-habbit-form', AddHabbitForm)
  customElements.define('habbit-list', HabitList)
  customElements.define('habbit-line-item', HabitLineItem)

  const indexView = document.createElement('index-view')
  document.getElementById('app').appendChild(indexView)
}

main()