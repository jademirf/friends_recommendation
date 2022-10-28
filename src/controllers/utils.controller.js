const cleanAll = (req, res) => {
  global.personList = []
  global.friendshipRelationships = []
  res.send(`All data erased`)
}

const seedAll = (req, res) => {
  const { cpf } = req.params
  const person = personList.find(p => p.cpf == cpf)
  person.friends = person.getFriendsList()
  res.send(person)
}

export {
  cleanAll,
  seedAll
}