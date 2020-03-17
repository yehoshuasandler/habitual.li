import Habbit from '../Entities/Habbit.js'

const createHabbit = props => {
  const propsValidityStatus = propsValidity(props).status
  if (propsValidityStatus === 'OK') {
    const habbit = new Habbit(props)
    return habbit
  } else {
    throw propsValidityStatus.error
  }
}

const propsValidity = props => {
  const err = {
    status: 'ERR',
    error: {
      label: 'Error Creating Habbit',
      messages: []
    }
  }
  if (!props.id) err.error.messages.push('No Id on creation of Habbit')

  if (err.error.messages.length <= 0){
    return { status: 'OK' }
  } else{
    throw err
  }
}

export default createHabbit