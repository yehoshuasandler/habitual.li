const editSingleEventProperties = (e, newProps) => {
  const { habbitId, name, date, time } = newProps
  e.setHabbitId(habbitId)
  e.setName(name)
  e.setTime(time)
  e.setDate(date)
}

export default editSingleEventProperties
