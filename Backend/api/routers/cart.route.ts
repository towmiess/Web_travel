import { Router } from "express";
import * as controller from "../controller/cart.controller";

const router: Router = Router();

router.post("/addcart", controller.addcart);
router.get("/getcart/:id", controller.getcart);
router.delete("/delcart/:id", controller.delCart);
router.delete("/delOnecart/:tourID", controller.delOneCart);

export const cartRouter: Router = router;