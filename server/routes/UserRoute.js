import { Router } from "express";
import authJWT from "../helpers/authJWT";
import IndexController from "../controller/IndexController";

const router = Router();

router.post("/signin", authJWT.authenticate, authJWT.login);

export default router;
