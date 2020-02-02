import createSingleEvent from '../src/UseCases/createSingleEvent.js' 
import editSingleEventProperties from '../src/UseCases/editSingleEventProperties.js'
import getSingleEventProperties from '../src/UseCases/getSingleEventProperties.js' 
import createRecurringEvent from '../src/UseCases/createRecurringEvent.js'
import editRecurringEventProperties from '../src/UseCases/editRecurringEventProperties.js'
import getRecurringEventProperties from '../src/UseCases/getRecurringEventProperties.js'
import convertToSingleEvent from '../src/UseCases/convertToSingleEvent.js'

import frequencyTypes from '../src/DataStructures/EventFrequencyTypes.js'

const createInvalidSingleEventTest = () => {
  try {
    const event = createSingleEvent({})
    if (typeof event === 'object') return false
    else return false
  } catch (err) {
    return true
  }
}

const createValidSingleEventTest = () => {
  try{
    const event = createSingleEvent({
      id: 'XYZ',
      habbitId: 'ABC',
      name: 'Event Name',
      date: '02/20/2020',
      time: '13:30'
    })
    if (typeof event === 'object') return true
    else return false
  } catch (err) {
    return false
  }
}

const getSingleEventPropertiesTest = () => {
  const expectedOutput = {
    id: 'XYZ',
    habbitId: 'ABC',
    name: 'Event Name',
    date: '02/20/2020',
    time: '13:30'
  }

  try {
    const event = createSingleEvent({
      id: 'XYZ',
      habbitId: 'ABC',
      name: 'Event Name',
      date: '02/20/2020',
      time: '13:30'
    })
    const eventProps = getSingleEventProperties(event)

    if (JSON.stringify(eventProps) === JSON.stringify(expectedOutput)) {
      return true
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

const editSingleEventPropertiesTest = () => {
  const expectedOutput = {
    id: 'XYZ',
    habbitId: 'QWE',
    name: 'Changed Name',
    date: '03/30/2020',
    time: '14:00'
  }
  const createEventInput = {
    id: 'XYZ',
    habbitId: 'ABC',
    name: 'Event Name',
    date: '02/20/2020',
    time: '13:30'
  }
  const editEventInput = {
    habbitId: 'QWE',
    name: 'Changed Name',
    date: '03/30/2020',
    time: '14:00'
  }
  try {
    const event = createSingleEvent(createEventInput)
    editSingleEventProperties(event, editEventInput)
    const eventProps = getSingleEventProperties(event)

    if (JSON.stringify(expectedOutput) === JSON.stringify(eventProps)) {
      return true
    } else return false
  } catch (err) {
    return false
  }
}

const createInvalidRecurringEventTest = () => {
  try {
    const event = createRecurringEvent({})
    if (typeof event === 'object') return false
    else return false
  } catch (err) {
    return true
  }
}

const createValidRecurringEventTest = () => {
  const createEventInput = {
    id: 'XYZ',
    habbitId: 'ABC',
    name: 'Event Name',
    date: '02/20/2020',
    frequency: frequencyTypes.WEEKLY
  }
  try{
    const event = createRecurringEvent(createEventInput)
    if (typeof event === 'object') return true
    else return false
  } catch (err) {
    return false
  }
}

const getRecurringEventPropertiesTest = () => {
  const createEventInput = {
    id: 'XYZ',
    habbitId: 'ABC',
    name: 'Event Name',
    time: '13:25',
    frequency: frequencyTypes.WEEKLY
  }

  const expectedOutput = {
    id: 'XYZ',
    habbitId: 'ABC',
    name: 'Event Name',
    time: '13:25',
    frequency: 'weekly'
  }
  try{
    const event = createRecurringEvent(createEventInput)
    const eventProps = getRecurringEventProperties(event)

    if (JSON.stringify(eventProps) === JSON.stringify(expectedOutput)) {
      return true
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

const editRecurringEventPropertiesTest = () => {
  const createEventInput = {
    id: 'XYZ',
    habbitId: 'ABC',
    name: 'Event Name',
    time: '13:00',
    frequency: frequencyTypes.WEEKLY
  }
  const editEventInput = {
    habbitId: 'QWE',
    name: 'Changed Event Name',
    time: '21:30',
    frequency: frequencyTypes.DAILY
  }
  const expectedOutput = {
    id: 'XYZ',
    habbitId: 'QWE',
    name: 'Changed Event Name',
    time: '21:30',
    frequency: 'daily'
  }
  try{
    const event = createRecurringEvent(createEventInput)
    editRecurringEventProperties(event, editEventInput)
    const eventProps = getRecurringEventProperties(event)

    if (JSON.stringify(eventProps) === JSON.stringify(expectedOutput)) {
      return true
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

const convertRecurringToSingleEventTest = () => {
  const recurringEventInput = {
    id: 'XYZ',
    habbitId: 'ABC',
    name: 'Event Name',
    time: '13:30',
    frequency: frequencyTypes.WEEKLY
  }

  const expectedOutput = {
    id: 'XYZ',
    habbitId: 'ABC',
    name: 'Event Name',
    date: undefined,
    time: '13:30'
  }

  try {
    const recurringEvent = createRecurringEvent(recurringEventInput)
    const singleEvent = convertToSingleEvent(recurringEvent)
    const singleEventProps = getSingleEventProperties(singleEvent)

    if (JSON.stringify(singleEventProps) === JSON.stringify(expectedOutput)) {
      return true
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

const tests = [
  {
    name: 'Create Invalid SingleEvent',
    test: createInvalidSingleEventTest
  },
  {
    name: 'Create Valid SingleEvent',
    test: createValidSingleEventTest
  },
  {
    name: 'Get SingleEvent Properties',
    test: getSingleEventPropertiesTest
  },
  {
    name: 'Edit SingleEvent Properties',
    test: editSingleEventPropertiesTest
  },
  {
    name: 'Create Invalid RecurringeEvent',
    test: createInvalidRecurringEventTest
  },
  {
    name: 'Create Valid RecurringeEvent',
    test: createValidRecurringEventTest
  },
  {
    name: 'Get RecurringEvent Properties',
    test: getRecurringEventPropertiesTest
  },
  {
    name: 'Edit RecurringEvent Properties',
    test: editRecurringEventPropertiesTest
  },
  {
    name: 'Convert RecurringEvent To SingleEvent',
    test: convertRecurringToSingleEventTest
  }
]

export default tests
