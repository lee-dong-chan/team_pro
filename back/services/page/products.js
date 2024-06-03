import {
  Prdimg,
  Product,
  ProductSell,
  Productinfo,
  ProductTag,
  Productetc,
  Firstcategory,
  Secondcategory,
  Thirdcategory,
  Userstore,
  User,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    console.log(req.body.paramValue);

    res.cookie("product", req.body.paramValue, {
      maxAge: 240000,
      httpOnly: true,
      secure: true,
      signed: false,
    });

    const product_info = await Product.findAll({
      attributes: ["name", "userstore_id", "created_at"],
      where: {
        id: req.body.paramValue,
      },
      include: [
        {
          model: Userstore,
          attributes: ["store_introduce", "name"],
        },
        {
          model: ProductTag,
          attributes: ["tag1", "tag2", "tag3", "tag4", "tag5"],
          where: {
            product_id: req.body.paramValue,
          },
        },
        {
          model: Productinfo,
          attributes: [
            "product_status",
            "firstcategory_id",
            "secondcategory_id",
            "thirdcategory_id",
            "product_explanation",
          ],
          where: {
            product_id: req.body.paramValue,
          },
          include: [
            {
              model: Firstcategory,
              attributes: ["id", "name"],
            },
            {
              model: Secondcategory,
              attributes: ["id", "name"],
            },
            {
              model: Thirdcategory,
              attributes: ["id", "name"],
            },
          ],
        },
        {
          model: ProductSell,
          attributes: [
            "price",
            "product_count",
            "direct_trade",
            "price_nego",
            "sell_status",
          ],
          where: {
            id: req.body.paramValue,
          },
        },
        {
          model: Prdimg,
          attributes: ["img_path"],
          where: {
            product_id: req.body.paramValue,
          },
        },
        {
          model: Productetc,
          attributes: ["view", "favorite_product", "direct_trade_location"],
          where: {
            product_id: req.body.paramValue,
          },
        },
      ],
    });
    // const cateElem1 = await Firstcategory.findAll({
    //   attributes: ["name"],
    //   where: {
    //     id: product_info[0].Productinfo.firstcategory_id,
    //   },
    // });

    // const cateElem = await Productinfo.findAll({
    //   where: {
    //     product_id: req.body.paramValue,
    //   },
    //   include: [
    //     {
    //       model: Firstcategory,
    //       attributes: ["name"],
    //       where: { id: product_info[0].Productinfo.firstcategory_id },
    //     },
    //     {
    //       model: Secondcategory,
    //       attributes: ["name"],
    //       where: { id: product_info[0].Productinfo.secondcategory_id },
    //     },
    //     {
    //       model: Thirdcategory,
    //       attributes: ["name"],
    //       where: { id: product_info[0].Productinfo.thirdcategory_id },
    //     },
    //   ],
    // });

    res.json(product_info);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
