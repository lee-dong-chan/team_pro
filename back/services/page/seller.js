import {
  sequelize,
  Product,
  Productinfo,
  Productsell,
  Product_tag,
  Prd_img,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    res.json();

    await Product.create(req.body);
    const prd = await Product.findOne({
      include: [
        {
          model: Product,
        },
      ],
    });
    console.dir("prd : ", prd.id);
    const prdSell = await Productinfo.create(req.body);
    await prdSell.addComment(prd.id);

    // await Productsell.create(req.body);
    // await Product_tag.create(req.body);
    // Prd_img.create(req.body);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
