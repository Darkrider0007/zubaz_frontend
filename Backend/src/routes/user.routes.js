import { Router } from "express";
import {
  login,
  registerUser,
  selectTemplate,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/selectTemplate").post(verifyJWT, selectTemplate);

export default router;
