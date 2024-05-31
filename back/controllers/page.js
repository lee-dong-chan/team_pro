import { Router } from "express";

import main from "../services/page/main.js";
import product_list from "../services/page/product_list.js";
import talk from "../services/page/talk.js";
import products from "../services/page/products.js";
import mystore from "../services/page/mystore.js";
import seller from "../services/page/seller.js";
import search from "../services/page/search.js";
<<<<<<< HEAD
import storegeRouter from "../lib/multer.js";
import imgtest from "../services/page/imgtest.js";
// import logCheck from "../services/page/logCheck.js";
=======
import search_new from "../services/page/search_new.js";
import search_low from "../services/page/search_low.js";
import search_high from "../services/page/search_high.js";

>>>>>>> 3bf4352 (feat:service)
const router = Router();

router.use("/main", main);
router.use("/product_list", product_list);
router.use("/talk", talk);
router.use("/product_page", products);
router.use("/mystore", mystore);
router.post("/seller", storegeRouter("imgs"), seller);
// router.post("/imgtest", storegeRouter, imgtest);
router.use("/search", search);
router.use("/search_new", search_new);
router.use("/search_new", search_low);
router.use("/search_new", search_high);

export default router;
