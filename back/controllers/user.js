import { Router } from "express";
import login from "../services/user/login.js";
import logout from "../services/user/logout.js";
import regist from "../services/user/regist.js";
import logCheck from "../services/user/logcheck.js";

const router = Router();

router.use(logCheck);
router.post("/login", login);
router.post("/regist", regist);
router.post("/logout", logout);

export default router;
