import {
  Prdimg,
  Product,
  Productinfo,
  ProductSell,
  Userstore,
  User,
  Sequelize,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    if (req.body.cate1ID) {
      const cate1items = await Productinfo.findAll({
        where: { firstcategory_id: req.body.cate1ID },
        include: [
          {
            model: Product,
            attributes: ["name", "created_at"],
            include: [
              {
                model: Prdimg,
                attributes: ["img_path"],
              },
              {
                model: ProductSell,
                attributes: [],
              },
              {
                model: Userstore,
                attributes: [],
                include: [
                  {
                    model: User,
                    attributes: [],
                  },
                ],
              },
            ],
          },
        ],
        attributes: [
          "product_id",
          [Sequelize.col("Product.Userstore.User.location"), "location"],
          [Sequelize.col("Product.name"), "name"],
          // [Sequelize.col("Product.Prdimg.img_path"), "path"],
          [Sequelize.col("Product.name"), "name"],
          [Sequelize.col("Product.created_at"), "created_at"],
          [Sequelize.col("Product.ProductSell.price"), "price"],
        ],
      });
      console.log(cate1items);
      res.json(cate1items);
    } else if (req.body.cate2ID) {
      const cate2items = await Productinfo.findAll({
        where: { secondcategory_id: req.body.cate2ID },
        include: [
          {
            model: Product,
            attributes: ["name", "created_at"],
            include: [
              {
                model: Prdimg,
                attributes: ["img_path"],
              },
              {
                model: ProductSell,
                attributes: [],
              },
              {
                model: Userstore,
                attributes: [],
                include: [
                  {
                    model: User,
                    attributes: [],
                  },
                ],
              },
            ],
          },
        ],
        attributes: [
          "product_id",
          [Sequelize.col("Product.Userstore.User.location"), "location"],
          [Sequelize.col("Product.name"), "name"],
          [Sequelize.col("Product.created_at"), "created_at"],
          // [Sequelize.col("Product.Prd_img.img_path"), "Prd"],
          [Sequelize.col("Product.ProductSell.price"), "price"],
        ],
      });

      console.log(cate2items);
      res.json(cate2items);
    } else if (req.body.cate3ID) {
      const cate3items = await Productinfo.findAll({
        where: { thirdcategory_id: req.body.cate3ID },
        include: [
          {
            model: Product,
            attributes: ["name", "created_at"],
            include: [
              {
                model: Prdimg,
                attributes: ["img_path"],
              },
              {
                model: ProductSell,
                attributes: [],
              },
              {
                model: Userstore,
                attributes: [],
                include: [
                  {
                    model: User,
                    attributes: [],
                  },
                ],
              },
            ],
          },
        ],
        attributes: [
          "product_id",
          [Sequelize.col("Product.Userstore.User.location"), "location"],
          [Sequelize.col("Product.name"), "name"],
          [Sequelize.col("Product.created_at"), "created_at"],
          // [Sequelize.col("Product.Prd_img.img_path"), "Prd"],
          [Sequelize.col("Product.ProductSell.price"), "price"],
        ],
      });

      res.json(cate3items);
    }
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
