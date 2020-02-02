import frequencyTypes from '../DataStructures/EventFrequencyTypes.js'

const editRecurringEventProperties = (e, newProps) => {
  const { habbitId, name, frequency, time } = newProps
  e.setHabbitId(habbitId)
  e.setName(name)
  e.setTime(time)

  if (validFrequency(frequency)){
    e.setFrequency(frequency)
  }
}

const validFrequency = frequency => {
  const frequencies = Object.values(frequencyTypes)
  if (frequencies.includes(frequency)) return true
  else return false
}

export default editRecurringEventProperties
