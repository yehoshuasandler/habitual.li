import AddHabbitForm from './addHabbitForm.html'
import AddHabbitFormController from './AddHabbitFormController.js'

class AddHabbitFormView extends HTMLElement {
  constructor () {
    super()
    this.controller = new AddHabbitFormController()
    
    const shadow = this.attachShadow({mode: 'open'})
    const element = document.createElement('template')
    element.innerHTML = AddHabbitForm
    shadow.appendChild(element.content.cloneNode(true))

    this.connectInputControl(shadow)
  }

  connectInputControl = shadow => {
    shadow.querySelector('#addHabbitForm').addEventListener('submit', this.controller.onSubmit)
    const habitNameInput = shadow.querySelector('#habbitNameInput')
    habitNameInput.addEventListener('change', this.controller.changeNameInput)
    habitNameInput.addEventListener('change', () => habitNameInput.value = '')
  }
}

export default AddHabbitFormView
