import { Router } from "express";
import page from "./page.js";
import user from "./user.js";

const router = Router();

router.use("/", page);
router.use("/user", user);

export default router;
