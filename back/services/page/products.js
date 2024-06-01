import {
  Prdimg,
  Product,
  ProductSell,
  Productinfo,
  ProductTag,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    console.log(param);
    const product = await Product.findAll({
      include: [
        {
          model: Product,
          attributes: [name, userstore_id],
          where: {
            id: param,
          },
        },
        {
          model: ProductTag,
          attributes: [tag1, tag2, tag3, tag4, tag5],
          where: {
            product_id: param,
          },
        },
        {
          model: Productinfo,
          attributes: [
            product_status,
            firstcategory_id,
            secondcategory_id,
            thirdcategory_id,
            product_explanation,
          ],
          where: {
            product_id: param,
          },
        },
        {
          model: ProductSell,
          attributes: [
            price,
            product_count,
            direct_trade,
            price_nego,
            sell_status,
          ],
          where: {
            product_id: param,
          },
        },
        {
          model: Prdimg,
          attributes: [],
          where: {
            product_id: param,
          },
        },
      ],
    });
    // req.session.product = product.id;
    res.json();
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
