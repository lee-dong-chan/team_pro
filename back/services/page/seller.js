import {
  sequelize,
  Product,
  Productinfo,
  ProductSell,
  ProductTag,
  Prdimg,
  Productetc,
} from "../../models/index.js";

import fs from "fs/promises";
import multer from "multer";
import storegeRouter from "../../lib/multer.js";

export default async (req, res) => {
  console.log("file :", req.file);
  console.log("files :", req.files);
  try {
    console.log(req.body);
    const prd = await Product.create(req.body);

    const files = req.files;
    const location = req.body.direct_trade_location;
    console.log("주소를 못찾아!!! : ", location);
    const fileUrls = [];
    files.forEach((item) => {
      fileUrls.push(`${item.filename}`);
    });
    console.log("파일경로 : ", fileUrls);
    // await Productinfo.create({ ...req.body, productId: prd.id });
    // await ProductSell.create({ ...req.body, product_id: prd.id });
    // await ProductTag.create({ ...req.body, product_id: prd.id });
    await prd.setProductinfo(await Productinfo.create(req.body));
    await prd.setProductSell(await ProductSell.create(req.body));
    await prd.setProductTag(await ProductTag.create(req.body));
    let prd_id = prd.id;
    await Productetc.create({
      product_id: prd_id,
      direct_trade_location: location,
      view: prd.view,
      favorite_production: prd.favorite_product,
    });

    console.log("상품 생성 ID : ", prd_id);
    for (let i = 0; i < fileUrls.length; ++i) {
      await Prdimg.create({ product_id: prd_id, img_path: fileUrls[i] });
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
