
import * as Utils from '../controllers/utils.controller'

export const UtilsRoutes = (app) => {
  /**  
  * @swagger
  * /clean:
  *   delete:
  *     tags:
  *       - Utils
  *     description: Erases all system's data (People and Relationships)
  *     responses:
  *       '200':
  *         description: Ok
  */
  app.route('/clean')
    .delete(Utils.cleanAll)

  /**  
  * @swagger
  * /seed:
  *   get:
  *     tags:
  *       - Utils
  *     description: Fills the memory with fake data to test features
  *     responses:
  *       '200':
  *         description: Ok
  */
  app.route('/seed')
    .get(Utils.seedAll)
}