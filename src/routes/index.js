import { PersonRoutes } from "./person.routes"
import { FriendshipRoutes } from "./friendship.routes"

// create seed and clean routes

export default (app) => {
  PersonRoutes(app)
  FriendshipRoutes(app)
}