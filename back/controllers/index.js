import { Router } from "express";
import page from "./page.js";
import user from "./user.js";
import manager from "../services/manage/manager.js";
import managepage from "./manage.js";
const router = Router();

router.use(manager);
router.use("/", page);
router.use("/user", user);
router.use("/manage", managepage);

export default router;
