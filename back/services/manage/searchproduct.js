import {
  Product,
  ProductSell,
  Productinfo,
  Sequelize,
} from "../../models/index.js";
import { Op } from "sequelize";

export default async (req, res) => {
  try {
    const key = req.body.keyword;
    console.log(key);
    const product = await Product.findAll({
      where: { deletedAt: null, name: { [Op.like]: `%${key}%` } },
      include: [
        {
          model: ProductSell,
          where: { deletedAt: null },
          attributes: [],
        },
      ],
      attributes: [
        "name",
        "id",
        "userstore_id",
        [Sequelize.col("ProductSell.price"), "price"],
      ],
    });
    res.json(product);
  } catch (err) {
    console.error(err);
  }
};
