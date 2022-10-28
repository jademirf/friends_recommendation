
import * as RelationshipController from '../controllers/friendship.controller'

export const RelationshipRoutes = (app) => {
  app.route('/relationship')
    .post(RelationshipController.create)
  
  app.route('/relationship/:cpf')
    .get(RelationshipController.getFriendship)
  

}