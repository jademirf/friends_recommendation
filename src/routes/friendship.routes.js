
import * as RelationshipController from '../controllers/friendship.controller'

export const RelationshipRoutes = (app) => {
  /**  
  * @swagger
  * /relationship:
  *   
  *   post:
  *     tags:
  *       - Relationships
  *     description: Creates a new friendship between two informed persons.
  *     responses:
  *       '200':
  *         description: Success
  *       '400':
  *         description: Bad Request
  *       '404':
  *         description: Not found
  */
  app.route('/relationship')
    .post(RelationshipController.create)
  
  /**  
  * @swagger
  * /relationship/{cpf}:
  *   
  *   get:
  *     tags:
  *       - Relationships
  *     description: Returns the friends list from a given cpf
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
  app.route('/relationship/:cpf')
    .get(RelationshipController.getFriendship)
  

}