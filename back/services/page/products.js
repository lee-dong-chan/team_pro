import { Prd_img, Product, Productsell } from "../../models/index.js";

export default async (req, res) => {
  try {
    const product = await Product.findAll({
      include: [
        {
          model: Productsell,
        },
        {
          model: Prd_img,
        },
      ],
    });
    res.json(product);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
