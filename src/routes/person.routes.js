
import * as PersonController from '../controllers/person.controller'

export const PersonRoutes = (app) => {
  app.route('/person')
    .get(PersonController.list)
    .post(PersonController.create)

  app.route('/person/:cpf')
    .get(PersonController.show)
}