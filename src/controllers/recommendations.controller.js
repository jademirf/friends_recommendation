import { Friendship } from '../models/friendship'
import { Person } from '../models/person'


const list = (req, res) => {
  let { cpf } = req.params
  cpf = parseInt(cpf)
  if (typeof cpf != 'number' || cpf.toString().length != 11 ) {
    res.status(400).send(`CPF must be a number with 11 digits`)
  } else {
    const person = personList.find(p => p.cpf === cpf)
    if (person) {
      const friends = person.getFriendsList()

      const friendsOfFriends = getSecondLevelFriends(friends)

      const friendsOccurrences = getOccurrenceByCpf(friendsOfFriends)


      res.json(friendsOccurrences)
    } else {
      res.status(404).send(`No user found for given cpf`)
    }
  }
}

const getSecondLevelFriends = (friendsList) => {
  let secondLevelFriends = []
  friendsList.map(f => {
    let person = personList.find(p => p.cpf === f)
    secondLevelFriends = [ ...secondLevelFriends, ...person.getFriendsList()]
  })
  console.log('Second level friends', secondLevelFriends)
  return secondLevelFriends
}

const getOccurrenceByCpf = (cpfsList) => {
  const count = {}
  for (const cpf of cpfsList) {
    if (count[cpf]) {
      count[cpf] += 1;
    } else {
      count[cpf] = 1;
    }
  }
  return count
}

export {
  list
}
