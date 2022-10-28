
import * as FriendshipController from '../controllers/friendship.controller'

export const FriendshipRoutes = (app) => {
  app.route('/friendship')
    .post(FriendshipController.create)
  
  app.route('/friendship/:cpf')
    .get(FriendshipController.getFriendship)
  

}