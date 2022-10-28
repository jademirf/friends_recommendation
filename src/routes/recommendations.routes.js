
import * as RecommendationsController from '../controllers/recommendations.controller'

export const RecommendationsRoutes = (app) => {
  app.route('/recommendations/:cpf')
    .get(RecommendationsController.list)
}