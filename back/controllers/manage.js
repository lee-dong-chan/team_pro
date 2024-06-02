import { Router } from "express";

import editcategory from "../services/manage/editcategory.js";
import getproduct from "../services/manage/getproduct.js";
import getstore from "../services/manage/getstore.js";
import getreport from "../services/manage/getreport.js";
import delreport from "../services/manage/delreport.js";
import delproduct from "../services/manage/delproduct.js";
import deluser from "../services/manage/deluser.js";
import delcategory from "../services/manage/delcategory.js";
import searchproduct from "../services/manage/searchproduct.js";
import searchstore from "../services/manage/searchstore.js";
import makecategory from "../services/manage/makecategory.js";
const router = Router();

router.use("/makecategory", makecategory);
router.use("/editcategory", editcategory);
router.get("/getproduct", getproduct);
router.get("/getstore", getstore);
router.get("/getreport", getreport);
router.use("/delreport", delreport);
router.use("/delproduct", delproduct);
router.use("/deluser", deluser);
router.use("/delcategory", delcategory);
router.use("/searchproduct", searchproduct);
router.use("/searchstore", searchstore);

export default router;
