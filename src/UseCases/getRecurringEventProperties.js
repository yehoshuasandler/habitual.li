const getRecurringEventProperties = e => {
  return {
    id: e.getId(),
    habbitId: e.getHabbitId(),
    name: e.getName(),
    time: e.getTime(),
    frequency: e.getFrequency()
  }
}

export default getRecurringEventProperties
