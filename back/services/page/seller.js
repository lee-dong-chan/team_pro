import {
  sequelize,
  Product,
  Productinfo,
  ProductSell,
  ProductTag,
  Prd_img,
} from "../../models/index.js";

import fs from "fs/promises";
import multer from "multer";
import storegeRouter from "../../lib/multer.js";

export default async (req, res) => {
  console.log("file :", req.file);
  console.log("files :", req.files);
  try {
    const prd = await Product.create(req.body);

    const files = req.files;
    console.log("왜 파일경로를 못 받아와!", files);
    const fileUrls = [];
    files.forEach((item) => {
      fileUrls.push(`./productimg/${item.filename}`);
    });
    console.log("파일경로 : ", fileUrls);
    // await Productinfo.create({ ...req.body, productId: prd.id });
    // await ProductSell.create({ ...req.body, product_id: prd.id });
    // await ProductTag.create({ ...req.body, product_id: prd.id });
    await prd.setProductinfo(await Productinfo.create(req.body));
    await prd.setProductSell(await ProductSell.create(req.body));
    await prd.setProductTag(await ProductTag.create(req.body));

    let prd_id = prd.id;
    console.log("상품 생성 ID : ", prd_id);
    for (let i = 0; i < fileUrls.length; ++i) {
      await Prd_img.create({ product_id: prd_id, img_path: fileUrls[i] });
    }
    res.json({
      uploaded: true,
      urls: fileUrls,
    });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
