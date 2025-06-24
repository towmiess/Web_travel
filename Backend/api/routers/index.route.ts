import { Express } from "express"
import { toursRouter } from "./tours.route";
import { categoryRouter } from "./category.route";
import { userRouter } from "./user.route";
import { cartRouter } from "./cart.route";
import { orderRouter } from "./order.route";
import { favoriteRouter } from "./favorite.route";
import { tourCateRouter } from "./tour_category.route";
import { payRouter } from "./pay.route";

const mainRoutes = (app: Express): void => {
  const version = "/api";

  app.use(version + "/tours", toursRouter)
  app.use(version + "/category", categoryRouter)
  app.use(version +"/user", userRouter)
  app.use(version +"/cart", cartRouter)
  app.use(version +"/order", orderRouter)
  app.use(version + "/favorite", favoriteRouter)
  app.use(version + "/tourcate", tourCateRouter)
  app.use(version + "/pays", payRouter)
}

export default mainRoutes;