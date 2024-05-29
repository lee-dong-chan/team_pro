import { Router } from "express";

import login from "../services/user/login.js";
import logout from "../services/user/logout.js";
import regist from "../services/user/regist.js";

import nickCheck from "../services/user/nickCheck.js";
import info from "../services/user/info.js";
import logcheck from "../services/user/logCheck.js";
const router = Router();

router.use(logcheck);
router.use("/info", info);
router.post("/regist", regist);

router.use("/nick", nickCheck);

router.post("/login", login);

router.post("/logout", logout);

export default router;
