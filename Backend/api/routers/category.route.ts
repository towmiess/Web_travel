import { Router } from "express";
import * as controller from "../controller/category.controller";

const router: Router = Router();

router.get("/", controller.index);
router.get("/getallcate", controller.getAllCate);
router.get("/:oneCate", controller.cateSlug);
router.post("/addcate", controller.addcate);
router.post("/editcate", controller.editcategory);
router.delete("/delcate/:id", controller.delcategory);

export const categoryRouter: Router = router;