import { FriendshipRoutes } from "./friendship.routes"
import { PersonRoutes } from "./person.routes"
import { UtilsRoutes } from "./utils.routes"

// create seed and clean routes

export default (app) => {
  FriendshipRoutes(app)
  PersonRoutes(app)
  UtilsRoutes(app)
}