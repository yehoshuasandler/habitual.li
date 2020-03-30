import RecurringEvent from '../Entities/RecurringEvent.js'
import frequencyTypes from '../DataStructures/EventFrequencyTypes.js'

const createRecurringEvent = props => {
  const propsValidityStatus = propsValidity(props).status
  if (propsValidityStatus === 'OK') {
    const recurringEvent = new RecurringEvent(props)
    return recurringEvent
  } else {
    throw propsValidityStatus.error
  }
}

const propsValidity = props => {
  const err = {
    status: 'ERR',
    error: {
      label: 'Error Creating Recurring Event',
      messages: []
    }
  }
  if (!props.id) err.error.messages.push('No Id on creation of RecurringEvent')
  if (!props.name) err.error.messages.push('No Name on creation of RecurringEvent')

  if(props.frequency) {
    const frequencies = Object.values(frequencyTypes)
    if (!frequencies.includes(props.frequency))
      err.error.messages.push(`Frequency Type provided is not valid. Use from types: ${frequencies}`)
  }

  if (err.error.messages.length <= 0){
    return { status: 'OK' }
  } else{
    throw err
  }
}

export default createRecurringEvent
