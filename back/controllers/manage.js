import { Router } from "express";

import editcategory from "../services/manage/editcategory.js";
import getproduct from "../services/manage/getproduct.js";
import getstore from "../services/manage/getstore.js";
const router = Router();

router.get("/editcategory", editcategory);
router.get("/getproduct", getproduct);
router.get("/getstore", getstore);

export default router;
