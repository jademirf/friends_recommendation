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
      // take friends list from informed user
      const friends = person.getFriendsList()
      // returns all the friends of the friends of the current user that are not friend of current user
      const friendsOfFriends = getSecondLevelFriends(friends, cpf)
      // returns the score of every cpf
      const friendsOccurrences = getOccurrenceByCpf(friendsOfFriends)
      // creates an sorted array based on the scores
      const sortedArray = Object.keys(friendsOccurrences).sort((a, b) => {
        return friendsOccurrences[b] - friendsOccurrences[a]
      })
      res.json(sortedArray)
    } else {
      res.status(404).send(`No user found for given cpf`)
    }
  }
}

const getSecondLevelFriends = (friendsList, userCpf) => {
  let secondLevelFriends = []
  friendsList.map(f => {
    let person = personList.find(p => p.cpf === f)
    secondLevelFriends = [ ...secondLevelFriends, ...person.getFriendsList()]
  })
  let friendsToExclude = [...friendsList, userCpf]
  secondLevelFriends = secondLevelFriends.filter(v => !friendsToExclude.includes(v))
  return secondLevelFriends
}

// calc how many times a cpf is found
const getOccurrenceByCpf = (cpfsList) => {
  const count = {}
  for (let cpf of cpfsList) {
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
