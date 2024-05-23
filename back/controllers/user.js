import { Router } from "express";
import login from "../services/user/login.js";
import logout from "../services/user/regist.js";
import regist from "../services/user/logout.js";
import logCheck from "../services/user/logcheck.js";

const router = Router();

router.use(logCheck);
router.use("/login", login);
router.use("/regist", regist);
router.use("/logout", logout);

export default router;
