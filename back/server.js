import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./controllers/index.js";
import category from "./lib/createcategory.js";
import "./models/index.js";
// import { storegeRouter } from "./lib/multer.js";
dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// app.post("*/seller", storegeRouter("img"));
// app.post("*/store", storegeRouter("img"));
// app.post("*/talk", storegeRouter("img"));
//req.url 확인;
app.use(router);

category();

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
