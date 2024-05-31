import { sequelize, Prd_img } from "../../models/index.js";
import fs from "fs/promises";
import multer from "multer";
import storegeRouter from "../../lib/multer.js";

export default async (req, res) => {
  try {
    const files = req.files;
    const fileUrls = [];
    files.forEach((item) => {
      fileUrls.push(`../../productimg/${item.filename}`);
    });
    res.json({ uploaded: true, urls: fileUrls });
  } catch (err) {
    res.send("error");
  }
};
