import { Router } from "express";
import * as controller from "../controller/favorite.controller";

const router: Router = Router();

router.post("/addfavorite", controller.addfavorite);
router.get("/getfavorite/:userID", controller.getfavorite)

export const favoriteRouter: Router = router;