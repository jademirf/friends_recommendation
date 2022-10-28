
import * as Utils from '../controllers/utils.controller'

export const UtilsRoutes = (app) => {
  app.route('/clean')
    .get(Utils.cleanAll)

  app.route('/seed')
    .get(Utils.seedAll)
}