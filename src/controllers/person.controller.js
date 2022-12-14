import { Person } from '../models/person'

const create = (req, res) => {
  const { name, cpf } = req.body
  try {
    const newPerson = new Person({ name, cpf })
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