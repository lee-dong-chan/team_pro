import { Router } from "express";
import session from "express-session";
import fileStore from "session-file-store";

import main from "../services/page/main.js";
import product_list from "../services/page/product_list.js";
import talk from "../services/page/talk.js";
import products from "../services/page/products.js";
import mystore from "../services/page/mystore.js";
import seller from "../services/page/seller.js";
import search from "../services/page/search.js";

const router = Router();
const FileStore = fileStore(session);

router.use(
  "/products",
  session({
    resave: true, //true 시간연장 false 세션을 다시생성
    saveUninitialized: true, //
    secret: "project",
    name: "product-session", //connect.sid
    // store: new session.MemoryStore(), //기본값
    store: new FileStore({
      reapInterval: 10,
      path: "./product_sessions",
    }), //기본값
    cookie: {
      maxAge: 10000,
    },
  })
);

router.use("/", main);
router.use("/product_list", product_list);
router.use("/talk", talk);
router.use("/products", products);
router.use("/mystore", mystore);
router.use("/seller", seller);
router.use("/search", search);

export default router;
