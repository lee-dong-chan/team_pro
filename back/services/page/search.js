import Prd_img from "../../models/img/prd_img.js";
import Product from "../../models/page/product/product.js";
import ProductSell from "../../models/page/product/product_sell.js";
import Productinfo from "../../models/page/product/product_info.js";
import Userstore from "../../models/page/store/userstore.js";
import { Op } from "sequelize";

export default async (req, res) => {
  try {
    const key = req.body.keyword;
    console.log(key);
    const serchlist = await Product.findAll({
      attributes: ["name", "created_at"],
      where: {
        name: { [Op.like]: `%${key}%` },
        location: { [Op.like]: `%${key}%` },
      },
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
        {
          model: Productinfo,
          attributes: ["thirdcategory_id"],
        },
      ],
    });
    res.json(serchlist);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
