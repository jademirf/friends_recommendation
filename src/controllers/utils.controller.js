import { Friendship } from '../models/friendship'
import { Person } from '../models/person'

const cleanAll = (req, res) => {
  global.personList = []
  global.friendshipRelationships = []
  res.send(`All data erased`)
}

const persons = [{
  "name": "Nataline Scutts",
  "cpf": 87494021321
}, {
  "name": "Broddy Cuddihy",
  "cpf": 92970999543
}, {
  "name": "Leela Searl",
  "cpf": 75583499716
}, {
  "name": "Kennie Orht",
  "cpf": 97605218052
}, {
  "name": "Cornela Imlock",
  "cpf": 87625789073
}, {
  "name": "Karlan Conlon",
  "cpf": 91933695535
}, {
  "name": "Darn Carillo",
  "cpf": 62522196458
}, {
  "name": "Dietrich Brute",
  "cpf": 75340189211
}, {
  "name": "Sylvia Deport",
  "cpf": 74637192772
}, {
  "name": "Petronella Bernardino",
  "cpf": 38709585239
}]

const relationships = [
  {
    "cpf1": 87494021321,
    "cpf2": 92970999543
  },
  {
    "cpf1": 87494021321,
    "cpf2": 75583499716
  },
  {
    "cpf1": 87494021321,
    "cpf2": 97605218052
  },
  {
    "cpf1": 92970999543,
    "cpf2": 87625789073
  },
  {
    "cpf1": 92970999543,
    "cpf2": 91933695535
  },
  {
    "cpf1": 75583499716,
    "cpf2": 87625789073
  },
  {
    "cpf1": 97605218052,
    "cpf2": 62522196458
  },
  {
    "cpf1": 87625789073,
    "cpf2": 62522196458
  },
  {
    "cpf1": 91933695535,
    "cpf2": 62522196458
  },
  {
    "cpf1": 62522196458,
    "cpf2": 75340189211
  },
]

const seedAll = (req, res) => {
  persons.map(p => {
    const data = {}
    data.name = p.name
    data.cpf = p.cpf
    global.personList.push(new Person(data))
  })

  relationships.map(p => {
    const data = {}
    data.cpf1 = p.cpf1
    data.cpf2 = p.cpf2
    global.friendshipRelationships.push(new Friendship(data))
  })

  res.send("People and friendships successifully created")
}

export {
  cleanAll,
  seedAll
}
