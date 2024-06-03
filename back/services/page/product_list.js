import {
  Prdimg,
  Product,
  Productinfo,
  ProductSell,
  Userstore,
  User,
  Sequelize,
  Secondcategory,
  Thirdcategory,
  Firstcategory,
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

      res.json(cate1items);
    } else if (req.body.cate2ID) {
      const cate1 = await Secondcategory.findOne({
        where: { id: req.body.cate2ID },
      });

      const cate2items = await Productinfo.findAll({
        where: {
          firstcategory_id: cate1.Firstcategory_id,
          secondcategory_id: req.body.cate2ID,
        },
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

      res.json(cate2items);
    } else if (req.body.cate3ID) {
      console.log(req.body.cate3ID);

      const cate3 = await Thirdcategory.findOne({
        where: { id: req.body.cate3ID },
      });

      const cate2 = await Secondcategory.findOne({
        where: { id: cate3.Secondcategory_id },
      });

      console.log(cate2.Firstcategory_id);

      const cate3items = await Productinfo.findAll({
        where: {
          firstcategory_id: cate2.Firstcategory_id,
          secondcategory_id: cate3.Secondcategory_id,
          thirdcategory_id: req.body.cate3ID,
        },
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
