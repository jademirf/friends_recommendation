import { Friendship } from '../models/friendship'

const create = (req, res) => {
  const { cpf1, cpf2 } = req.body
  try {
    const newFriendship = new Friendship({cpf1, cpf2})
    if (newFriendship.alreadExists()) {
      res.status(400).send(`The informed relationship has been already created`)
    } else {
      newFriendship.save()
      res.send(`Friendship created.`)
    }
  } catch (err) {
    res.status(404).send(err.message)
  }
}

export {
  create
}