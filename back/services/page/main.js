import {
  Firstcategory,
  Secondcategory,
  Thirdcategory,
  Product,
  ProductSell,
  Prd_img,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    const category = await Firstcategory.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: Secondcategory,
          attributes: ["id", "name", "firstcategory_id"],
          include: [
            {
              model: Thirdcategory,
              attributes: ["id", "name", "secondcategory_id"],
            },
          ],
        },
      ],
    });
    const product = await Product.findAll({
      attributes: ["name", "created_at"],
      include: [
        {
          model: ProductSell,
          attributes: ["price"],
        },
        {
          model: Prd_img,
          attributes: ["img_path"],
        },
      ],
    });
    res.json([category]);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
