import { Router } from "express";

import main from "../services/page/main.js";
import product_list from "../services/page/product_list.js";
import talk from "../services/page/talk.js";
import products from "../services/page/products.js";
import mystore from "../services/page/mystore.js";
import seller from "../services/page/seller.js";
import search from "../services/page/search.js";

import storegeRouter from "../lib/multer.js";
import imgtest from "../services/page/imgtest.js";
// import logCheck from "../services/page/logCheck.js";

import search_new from "../services/page/search_new.js";
import search_low from "../services/page/search_low.js";
import search_high from "../services/page/search_high.js";

import mainitem from "../services/page/mainitem.js";

const router = Router();

router.use("/main", main);
router.use("/mainitem", mainitem);
router.use("/product_list", product_list);
router.use("/talk", talk);
router.use("/product_page", products);
router.use("/mystore", mystore);
router.post("/seller", storegeRouter("imgs"), seller);
// router.post("/imgtest", storegeRouter, imgtest);
router.use("/search", search);
router.use("/search_new", search_new);
router.use("/search_low", search_low);
router.use("/search_high", search_high);

export default router;
