import { RecommendationsRoutes } from "./recommendations.routes"
import { RelationshipRoutes } from "./friendship.routes"
import { PersonRoutes } from "./person.routes"
import { UtilsRoutes } from "./utils.routes"

// create seed and clean routes

export default (app) => {
  RecommendationsRoutes(app)
  RelationshipRoutes(app)
  PersonRoutes(app)
  UtilsRoutes(app)
}