const getSingleEventProperties = e => {
  return {
    id: e.getId(),
    habbitId: e.getHabbitId(),
    name: e.getName(),
    date: e.getDate(),
    time: e.getTime()
  }
}

export default getSingleEventProperties