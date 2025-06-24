import { Router } from "express";
import * as controller from "../controller/order.controller";

const router: Router = Router();

router.post("/saveOrder", controller.postOrder);
router.get("/getorder/:id", controller.getorder);
router.get("/getallorder", controller.getAllOrder);
router.delete("/delorder/:id", controller.delOrder);

export const orderRouter: Router = router;