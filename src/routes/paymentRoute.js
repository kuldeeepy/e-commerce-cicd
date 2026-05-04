import { Router } from "express";
import { getPaymentInfo } from "../controllers/paymentController.js";

const router = Router();

router.get("/payments", getPaymentInfo);

export default router;
