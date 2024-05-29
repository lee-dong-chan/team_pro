import {
  sequelize,
  Product,
  Productinfo,
  ProductSell,
  ProductTag,
  Prd_img,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    res.json();
    const prd = await Product.create(req.body);
    // await Productinfo.create({ ...req.body, productId: prd.id });
    // await ProductSell.create({ ...req.body, product_id: prd.id });
    // await ProductTag.create({ ...req.body, product_id: prd.id });
    await prd.setProductinfo(await Productinfo.create(req.body));
    await prd.setProductSell(await ProductSell.create(req.body));
    await prd.setProductTag(await ProductTag.create(req.body));
    img(req.body);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
