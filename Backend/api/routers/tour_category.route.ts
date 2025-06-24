import { Router } from "express";
import * as controller from "../controller/tours.controller";

const router: Router = Router();

router.get("/cateID", controller.getIDCategory);

export const tourCateRouter: Router = router;