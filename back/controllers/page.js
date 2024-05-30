import { Router } from "express";
// import session from "express-session";
// import fileStore from "session-file-store";

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
const router = Router();
// const FileStore = fileStore(session);

// router.use(
//   "/product_page",
//   session({
//     resave: true, //true 시간연장 false 세션을 다시생성
//     saveUninitialized: true, //
//     secret: "project",
//     name: "product-session", //connect.sid
//     // store: new session.MemoryStore(), //기본값
//     store: new FileStore({
//       reapInterval: 100000,
//       path: "./product_sessions",
//     }), //기본값
//     cookie: {
//       maxAge: 100000,
//     },
//   })
// );

// router.use(logCheck);
router.use("/main", main);
router.use("/product_list", product_list);
router.use("/talk", talk);
router.use("/product_page", products);
router.use("/mystore", mystore);
router.post("/seller", storegeRouter("imgs"), seller);
// router.post("/imgtest", storegeRouter, imgtest);
router.use("/search", search);

export default router;
