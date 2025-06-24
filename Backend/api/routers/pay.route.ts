import { Router } from "express";
import { callbackpay, payment } from '../controller/pay.controller';

const router: Router = Router();

router.post("/payment", payment);
router.post("/callback", callbackpay);

export const payRouter: Router = router;