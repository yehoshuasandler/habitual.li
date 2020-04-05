import createHabbit from '../src/core/UseCases/createHabbit.js' 
import getHabbitProperties from '../src/core/UseCases/getHabbitProperties.js' 
import editHabbitProperties from '../src/core/UseCases/editHabbitProperties.js'
import DB from '../src/server/db/DB.js'
import HabitModel from '../src/server/db/models/Habits.js'

const db = new DB()

const createValidHabbitTest = () => {
  try{
    const habbit = createHabbit({ id: 'XYZ', name: 'New Test' })
    if (typeof habbit === 'object') return true
    else return false
  } catch (err) {
    return false
  }
}

const createInvalidHabbitTest = () => {
  try {
    const habbit = createHabbit({})
    if (typeof habbit === 'object') return false
    else return false
  } catch (err) {
    return true
  }
}

const getHabbitPropertiesTest = () => {
  const expectedOutput = {
    id: 'XYZ',
    name: 'New Test'
  }
  try {
    const habbit = createHabbit({ id: 'XYZ', name: 'New Test' })
    const habbitProps = getHabbitProperties(habbit)

    if (JSON.stringify(expectedOutput) === JSON.stringify(habbitProps)) {
      return true
    } else return false
  } catch (err) {
    return false
  }
}

const editHabbitPropertiesTest = () => {
  const expectedOutput = {
    id: 'XYZ',
    name: 'Changed Test'
  }
  try {
    const habbit = createHabbit({ id: 'XYZ', name: 'New Test' })
    editHabbitProperties(habbit, { id: 'XYX', name: 'Changed Test' })
    const habbitProps = getHabbitProperties(habbit)

    if (JSON.stringify(expectedOutput) === JSON.stringify(habbitProps)) {
      return true
    } else return false
  } catch (err) {
    return false
  }
}

const saveHabitToDbTest = async () => {
  const input = { name: `TEST${Math.random() * 100}` }
  const saveResponse = await db.insertOne({
    model: HabitModel,
    document: input
  })
  if (saveResponse.name === input.name) return true
  else return false

}

const tests = [
  {
    name: 'Create Invalid Habbit',
    test: createInvalidHabbitTest
  },
  {
    name: 'Create Valid Habbit',
    test: createValidHabbitTest
  },
  {
    name: 'Get Habbit Properties',
    test: getHabbitPropertiesTest
  },
  {
    name: 'Edit Habbit Properties',
    test: editHabbitPropertiesTest
  },
  {
    name: 'Save Habit to DB',
    test: saveHabitToDbTest
  }
]

export default tests
