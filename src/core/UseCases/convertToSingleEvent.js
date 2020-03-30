import createSingleEvent from '../UseCases/createSingleEvent.js'

const convertToSingleEvent = e => {
  const propertiesNeeded = {
    id: e.getId(),
    habbitId: e.getHabbitId(),
    name: e.getName(),
    time: e.getTime()
  }
  try {
    const singleEvent = createSingleEvent(propertiesNeeded)
    return singleEvent
  } catch (err) {
    return err
  }
}

export default convertToSingleEvent
