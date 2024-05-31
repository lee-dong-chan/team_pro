import { Router } from "express";
import page from "./page.js";
import user from "./user.js";
import maneger from "../services/maneger.js";
import manegepage from "./manege.js";
const router = Router();

router.use(maneger);
router.use("/", page);
router.use("/user", user);
router.use("/manege", manegepage);
export default router;
