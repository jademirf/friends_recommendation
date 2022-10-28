
import * as RecommendationsController from '../controllers/recommendations.controller'

/**  
  * @swagger
  * /recommendations/{cpf}:
  *   
  *   get:
  *     tags:
  *       - Relationships
  *     description: Returns friends suggestion ordered by score
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
export const RecommendationsRoutes = (app) => {
  app.route('/recommendations/:cpf')
    .get(RecommendationsController.list)
}