import { Router } from "express";
import * as controller from "../controller/tours.controller";

const router: Router = Router();

router.get("/", controller.index);
router.get("/allTour", controller.getalltour);
router.get("/detail/:slugTour", controller.tourDetail);
router.post("/addtour", controller.addtour);
router.get("/getIDCate", controller.getIDCategory);
router.post("/edit", controller.edittour);
router.delete("/deltour/:id", controller.deltour);
router.get("/search-by-category", controller.searchByCategory);

export const toursRouter: Router = router;