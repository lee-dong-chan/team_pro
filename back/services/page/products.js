import { Prdimg, Product, ProductSell } from "../../models/index.js";

export default async (req, res) => {
  try {
    const product = await Product.findAll({
      include: [
        {
          model: ProductSell,
        },
        {
          model: Prdimg,
        },
      ],
    });
    // req.session.product = product.id;
    res.json(product);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
