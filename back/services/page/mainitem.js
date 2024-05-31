import {
  Prdimg,
  Product,
  Productinfo,
  ProductSell,
  Userstore,
  Sequelize,
  User,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    const serchlist = await Product.findAll({
      where: { deletedAt: null },
      include: [
        {
          model: Prdimg,
          where: { deletedAt: null },
          attributes: ["img_path"],
        },
        {
          model: ProductSell,
          where: { deletedAt: null },
          attributes: ["price"],
        },
        {
          model: Userstore,
          where: { deletedAt: null },
          attributes: [],
          include: [
            {
              model: User,
              attributes: [],
            },
          ],
        },
        {
          model: Productinfo,
          where: { deletedAt: null },
          attributes: [],
        },
      ],
      attributes: [
        "id",
        "name",
        "created_at",
        [Sequelize.col("Userstore.User.location"), "location"],
        [Sequelize.col("ProductSell.price"), "price"],
      ],
    });
    res.json(serchlist);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
