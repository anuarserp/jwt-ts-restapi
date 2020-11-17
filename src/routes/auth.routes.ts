import { Router } from "express";
import * as userCtrl from "../controllers/user.controllers";

const router = Router();

router.post("/singup", userCtrl.singup);
router.post("/singin", userCtrl.singin);

export default router;
