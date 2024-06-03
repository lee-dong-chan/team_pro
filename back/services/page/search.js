import {
  Prdimg,
  Product,
  Productinfo,
  ProductSell,
  Userstore,
  Sequelize,
  User,
  Thirdcategory,
  Firstcategory,
  Secondcategory,
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
          include: [
            {
              model: Firstcategory,

              attributes: [],
            },
            {
              model: Secondcategory,

              attributes: [],
            },
            {
              model: Thirdcategory,
              attributes: [],
            },
          ],
        },
      ],
      attributes: [
        "id",
        "name",
        "created_at",

        [Sequelize.col("Userstore.User.location"), "location"],
        [Sequelize.col("ProductSell.price"), "price"],
        [Sequelize.col("Productinfo.Firstcategory.name"), "cate1"],
        [Sequelize.col("Productinfo.Secondcategory.name"), "cate2"],
        [Sequelize.col("Productinfo.Thirdcategory.name"), "cate3"],
        [Sequelize.col("Productinfo.Firstcategory.id"), "cate1id"],
        [Sequelize.col("Productinfo.Secondcategory.id"), "cate2id"],
        [Sequelize.col("Productinfo.Thirdcategory.id"), "cate3id"],
      ],
    });
    res.json(serchlist);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
