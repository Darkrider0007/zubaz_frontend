import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  addTemplate,
  getTemplateBySubDomain,
} from "../controllers/template.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/addTemplate").post(
  verifyJWT,
  upload.fields([
    { name: "homePageImage", maxCount: 1 },
    { name: "featureCardsIcon0", maxCount: 1 },
    { name: "featureCardsIcon1", maxCount: 1 },
    { name: "featureCardsIcon2", maxCount: 1 },
    { name: "featureCardsIcon3", maxCount: 1 },
    { name: "featureCardsIcon4", maxCount: 1 },
    { name: "featureCardsIcon5", maxCount: 1 },
    { name: "projectCardsImage0", maxCount: 1 },
    { name: "projectCardsImage1", maxCount: 1 },
    { name: "projectCardsImage2", maxCount: 1 },
    { name: "projectCardsImage3", maxCount: 1 },
    { name: "projectCardsImage4", maxCount: 1 },
    { name: "projectCardsImage5", maxCount: 1 },
    { name: "companiesIcon0", maxCount: 1 },
    { name: "companiesIcon1", maxCount: 1 },
    { name: "companiesIcon2", maxCount: 1 },
    { name: "companiesIcon3", maxCount: 1 },
    { name: "companiesIcon4", maxCount: 1 },
    { name: "companiesIcon5", maxCount: 1 },
    { name: "newsCardsImage0", maxCount: 1 },
    { name: "newsCardsImage1", maxCount: 1 },
    { name: "newsCardsImage2", maxCount: 1 },
    { name: "newsCardsImage3", maxCount: 1 },
    { name: "newsCardsImage4", maxCount: 1 },
    { name: "newsCardsImage5", maxCount: 1 },
  ]),
  addTemplate
);

router.route("/:subdomain").get(getTemplateBySubDomain);

export default router;
