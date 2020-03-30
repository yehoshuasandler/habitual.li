const editHabbitProperties = (h, newProps) => {
  const { name } = newProps
  h.setName(name)
}

export default editHabbitProperties
