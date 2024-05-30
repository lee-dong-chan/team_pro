import {
  Prd_img,
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
          // attributes: ["visitor"],
          attributes: [],
          include: [
            {
              model: User,
              // attributes: ["location"],
              attributes: [],
            },
          ],
        },
        {
          model: Productinfo,
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
