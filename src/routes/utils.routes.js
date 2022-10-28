
import * as Utils from '../controllers/utils.controller'

export const UtilsRoutes = (app) => {
  app.route('/clean')
    .delete(Utils.cleanAll)

  app.route('/seed')
    .get(Utils.seedAll)
}