
import * as PersonController from '../controllers/person.controller'

export const PersonRoutes = (app) => {
  /**  
  * @swagger
  * /person:
  *   
  *   get:
  *     tags:
  *       - Person
  *     description: Returns a list with everyone on the system
  *     responses:
  *       '200':
  *         description: Success
  *   post:
  *     tags:
  *       - Person
  *     description: Creates a new person
  *     responses:
  *       '400':
  *         description: Bad Request
  *       '200':
  *         description: Success
  */
  app.route('/person')
    .get(PersonController.list)
    .post(PersonController.create)

  /**  
  * @swagger
  * /person/{cpf}:
  *   
  *   get:
  *     tags:
  *       - Person
  *     description: Returns person's data from a given cpf
  *     parameters:
  *       - in: path
  *         name: cpf
  *         schema: 
  *           type: number
  *         required: true
  *     responses:
  *       '200':
  *         description: Success
  */
  app.route('/person/:cpf')
    .get(PersonController.show)
}