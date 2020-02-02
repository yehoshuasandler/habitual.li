import SingleEvent from '../Entities/SingleEvent.js'

const createSingleEvent = props => {
  const propsValidityStatus = propsValidity(props).status
  if (propsValidityStatus === 'OK') {
    const singleEvent = new SingleEvent(props)
    return singleEvent
  } else {
    throw propsValidityStatus.error
  }
}

const propsValidity = props => {
  const err = {
    status: 'ERR',
    error: {
      label: 'Error Creating Single Event',
      messages: []
    }
  }
  if (!props.id) err.error.messages.push('No Id on creation of SingleEvent')
  if (!props.name) err.error.messages.push('No Name on creation of SingleEvent')

  if (err.error.messages.length <= 0){
    return { status: 'OK' }
  } else{
    throw err
  }
}

export default createSingleEvent
