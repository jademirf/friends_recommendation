
import * as FriendshipController from '../controllers/friendship.controller'

export const FriendshipRoutes = (app) => {
  app.route('/friendship')
    // .get(FriendshipController.list)
    .post(FriendshipController.create)

}