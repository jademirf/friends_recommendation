import { Person } from '../models/person';

const create = async (req, res) => {
  try {
    const newPerson = new Person(req.body)
    if (!newPerson.alreadyExists()) {
      newPerson.save()
      res.send(`Person successfully created`)
    } else {
      throw new Error(`CPF ${newPerson.cpf} is already in use`)
    }
  } catch (err) {
    res.status(400).send(err.message)
  }
}

const list = (req, res) => {
  personList.map(p => console.log(p.name, p.cpf))
  res.json(personList)
}

const show = (req, res) => {
  const { cpf } = req.params
  const person = personList.find(p => p.cpf == cpf)
  if(person) {
    res.json(person)
  } else {
    res.status(404).send(`No user found with given CPF number`)
  }
}

export {
  create,
  list,
  show
}