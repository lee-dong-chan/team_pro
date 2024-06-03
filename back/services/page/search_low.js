import {
  Prdimg,
  Product,
  Productinfo,
  ProductSell,
  Userstore,
  Sequelize,
  User,
} from "../../models/index.js";
import { Op } from "sequelize";

export default async (req, res) => {
  try {
    const key = req.body.keyword;
    console.log(key);
    const serchlist = await Product.findAll({
      where: {
        deletedAt: null,
        name: { [Op.like]: `%${key}%` },
      },
      include: [
        {
          model: Prdimg,
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
        [Sequelize.col("Productinfo.firstcategory_id"), "cate1"],
        [Sequelize.col("Productinfo.secondcategory_id"), "cate2"],
        [Sequelize.col("Productinfo.thirdcategory_id"), "cate3"],
      ],
      order: [["price", "asc"]],
    });
    res.json(serchlist);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
