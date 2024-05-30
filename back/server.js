import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./controllers/index.js";
import category from "./lib/createcategory.js";
import "./models/index.js";
import bodyParser from "body-parser";
// import { storegeRouter } from "./lib/multer.js";
import session from "express-session";
import fileStore from "session-file-store";
import fs from "fs";
import storegeRouter from "./lib/multer.js";
const FileStore = fileStore(session);
dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors({ origin: "http://localhost:8080", credentials: true }));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extendd: true }));

// app.post("*/store", storegeRouter("img"));
// app.post("*/talk", storegeRouter("img"));
//req.url 확인;
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "project",
    name: "user",
    store: new FileStore({
      reapInterval: 100000,
      path: "./user_session",
    }),
    cookie: {
      maxAge: 100000,
    },
  })
);

// app.use();
app.use(router);

category();

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
