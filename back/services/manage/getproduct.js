import {
  Product,
  ProductSell,
  Productinfo,
  Sequelize,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    const product = await Product.findAll({
      where: { deletedAt: null },
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
