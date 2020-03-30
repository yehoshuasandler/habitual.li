import HabbitCollection from "../../../../core/Collections/HabbitCollection.js"

class AddHabbitFormController {
  constructor () {
    this.habbitCollection = new HabbitCollection()
    this.addHabitEvent = new Event('addHabit')
    this.habbitInputValue = ''
  }

  changeNameInput = (e) => {
    this.habbitInputValue = e.target.value
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.habbitCollection.addHabbit({
      id: 'ABC',
      name: this.habbitInputValue
    })
    const updatedHabbits = this.habbitCollection.getHabbits()
    document.dispatchEvent(this.addHabitEvent)
    return updatedHabbits
  }
}

export default AddHabbitFormController
