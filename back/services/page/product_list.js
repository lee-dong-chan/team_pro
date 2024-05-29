import Prd_img from "../../models/img/prd_img.js";
import Product from "../../models/page/product/product.js";
import Productinfo from "../../models/page/product/product_info.js";
import ProductSell from "../../models/page/product/product_sell.js";
import Userstore from "../../models/page/store/userstore.js";

export default async (req, res) => {
  try {
    console.log(req.body);
    if (req.body.cate1ID) {
      const cate1items = await Productinfo.findAll({
        attributes: ["product_id"],
        where: { firstcategory_id: req.body.cate1ID },
        include: [
          {
            model: Product,
            attributes: ["name", "created_at"],
            include: [
              {
                model: Prd_img,
                attributes: ["img_path"],
              },
              {
                model: ProductSell,
                attributes: ["price"],
              },
              {
                model: Userstore,
                attributes: ["location"],
              },
            ],
          },
        ],
      });
      res.json(cate1items);
    } else if (req.body.cate2Id) {
      const cate2items = await Productinfo.findAll({
        attributes: ["product_id"],
        where: { secondcategory_id: req.body.cate2ID },
        include: [
          {
            model: Product,
            attributes: ["name", "created_at"],
            include: [
              {
                model: Prd_img,
                attributes: ["img_path"],
              },
              {
                model: ProductSell,
                attributes: ["price"],
              },
              {
                model: Userstore,
                attributes: ["location"],
              },
            ],
          },
        ],
      });
      res.json(cate2items);
    } else if (req.body.cate3ID) {
      const cate3items = await Productinfo.findAll({
        attributes: ["product_id"],
        where: { thirdcategory_id: req.body.cate3ID },
        include: [
          {
            model: Product,
            attributes: ["name", "created_at"],
            include: [
              {
                model: Prd_img,
                attributes: ["img_path"],
              },
              {
                model: ProductSell,
                attributes: ["price"],
              },
              {
                model: Userstore,
                attributes: ["location"],
              },
            ],
          },
        ],
      });
      res.json(cate3items);
    }
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
